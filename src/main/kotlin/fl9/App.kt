package fl9

import fl9.token.*

fun getStandardCompiler(): Any = { node: Node ->
    val context = Context()
    context.operators.apply {

        void {
            arrayInit { CodeArrayInit { } }
            objectInit { CodeObjectInit { } }
        }

        number { get { CodeGet("", "($value)") } }
        string { get { CodeGet("", JSON.stringify(value)) } }
        join {
            get {
                var codes = value.map { it.mustGet(context) }
                val id = context.nextId()
                CodeGet(code {
                    codes.forEach {
                        !it.head
                    }
                    !"const v$id = `${codes.joinToString("") { "\${${it.body}}" }}`;\n"
                }, "v$id")
            }
        }
        identifier {
            get { context.aliases[value]?.get?.invoke(AliasCompilerArgument(context)) ?: throw Exception("Unknown Identifier: $value") }
            set { context.aliases[value]?.set?.invoke(AliasCompilerArgument(context)) ?: throw Exception("Unknown Identifier: $value") }
        }

        empty_round { get { CodeGet("", "(runtime.empty)") } }
        round { get { context.aliases.stack { value.main.mustGet(context) } } }
        empty_square {
            get {
                val id = context.nextId()
                CodeGet(code {
                    !"const v$id = [];\n"
                }, "v$id")
            }
        }
        square {
            get {
                val codeMain = value.main.mustArrayInit(context)
                val id = context.nextId()
                CodeGet(code {
                    !"const v$id = [];\n"
                    codeMain.generator { code ->
                        !code.head
                        !"v$id[v$id.length] = ${code.body};\n"
                    }
                }, "v$id")
            }
        }
        empty_curly {
            get {
                val id = context.nextId()
                CodeGet(code {
                    !"const v$id = {};\n"
                }, "v$id")
            }
        }
        curly {
            get {
                val codeMain = value.main.mustObjectInit(context)
                val id = context.nextId()
                CodeGet(code {
                    !"const v$id = {};\n"
                    codeMain.generator { key, code ->
                        !code.head
                        !"v$id[${JSON.stringify(key)}] = ${code.body};\n"
                    }
                }, "v$id")
            }
        }
        empty_dollar_round { get { CodeGet("", "(runtime.empty)") } }
        dollar_round { get { context.aliases.stack { value.main.mustGet(context) } } }

        period {
            get {
                if (value.right.type == "identifier") {
                    val codeLeft = value.left.mustGet(context)
                    val id = context.nextId()
                    CodeGet(code {
                        !codeLeft.head
                        !"const v$id = ${codeLeft.body}[${JSON.stringify(value.right.value.unsafeCast<String>())}];\n"
                    }, "v$id")
                } else {
                    throw Exception("Illegal Operator Argument: ${value.left.type} : ${value.right.type}")
                }
            }
        }

        right_empty_square {
            get {
                val codeLeft = value.left.mustGet(context)
                val id = context.nextId()
                CodeGet(code {
                    !codeLeft.head
                    !"const v$id = runtime.apply(${codeLeft.body}, []);\n"
                }, "v$id")
            }
        }
        right_square {
            get {

                // 関数
                val codeLeft = value.left.mustGet(context)

                // 引数列セミコロン解体
                val nodesMain: List<Node>
                if (value.main.type == "semicolon") {
                    nodesMain = value.main.value.unsafeCast<Array<Node>>().toList()
                } else {
                    nodesMain = listOf(value.main)
                }

                // 引数列void解体
                val codesMain = mutableListOf<CodeGet>()
                val codesMainNamed = mutableListOf<Pair<String, CodeGet>>()
                var namedMode = false
                nodesMain.forEach {
                    if (it.type == "void") {
                        if (!namedMode) {
                            codesMain += CodeGet("", "undefined")
                        } else {
                            // Ignore
                        }
                    } else if (it.type == "colon") {
                        namedMode = true
                        val nodeKey = it.value.unsafeCast<BinaryOperatorArgument>().left
                        val nodeValue = it.value.unsafeCast<BinaryOperatorArgument>().right
                        if (nodeKey.type == "identifier") {
                            codesMainNamed += Pair(
                                    nodeKey.value.unsafeCast<String>(),
                                    context.aliases.stack { nodeValue.mustGet(context) }
                            )
                        } else {
                            throw Exception("Illegal Argument Name: ${nodeKey.type}")
                        }
                    } else {
                        codesMain += context.aliases.stack { it.mustGet(context) }
                    }
                }

                if (codesMainNamed.isEmpty()) {
                    val id = context.nextId()
                    CodeGet(code {
                        !codeLeft.head
                        codesMain.forEach {
                            !it.head
                        }
                        !"const v$id = runtime.apply(${codeLeft.body}, [${codesMain.map { it.body }.joinToString(", ")}]);\n"
                    }, "v$id")
                } else {
                    val id = context.nextId()
                    val idObject = context.nextId()
                    CodeGet(code {
                        !codeLeft.head
                        codesMain.forEach {
                            !it.head
                        }
                        !"const v$idObject = {};\n"
                        codesMainNamed.forEach {
                            !it.second.head
                            !"v$idObject[${JSON.stringify(it.first)}] = ${it.second.body};\n"
                        }
                        !"const v$id = runtime.apply(${codeLeft.body}, [${codesMain.map { it.body }.plus("v$idObject").joinToString(", ")}]);\n"
                    }, "v$id")
                }
            }
        }
        right_round {
            get {
                val codeLeft = value.left.mustGet(context)
                val idArgument = context.nextId()
                val codeRight = context.aliases.stack {
                    context.aliases["_"] = Alias {
                        get { CodeGet("", "v$idArgument") }
                        set {
                            CodeSet { code ->
                                CodeRun(code {
                                    !code.head
                                    !"v$idArgument = ${code.body};\n"
                                })
                            }
                        }
                    }
                    value.main.mustGet(context)
                }
                val id = context.nextId()
                CodeGet(code {
                    !codeLeft.head
                    !"const v$id = runtime.apply(${codeLeft.body}, [function(v$idArgument) {\n"
                    indent {
                        !codeRight.head
                        !"return ${codeRight.body};\n"
                    }
                    !"}]);\n"
                }, "v$id")
            }
        }

        fun leftUnaryOperatorGetter(function: (String) -> String): OperatorCompilerArgument<LeftUnaryOperatorArgument>.() -> CodeGet = {
            val codeRight = value.right.mustGet(context)
            val id = context.nextId()
            CodeGet(code {
                !codeRight.head
                !"const v$id = ${function(codeRight.body)};\n"
            }, "v$id")
        }
        left_plus { get(leftUnaryOperatorGetter { "runtime.toNumber($it)" }) }
        left_minus { get(leftUnaryOperatorGetter { "-runtime.toNumber($it)" }) }
        left_ampersand { get(leftUnaryOperatorGetter { "runtime.toString($it)" }) }
        left_question { get(leftUnaryOperatorGetter { "runtime.toBoolean($it)" }) }
        left_exclamation { get(leftUnaryOperatorGetter { "!runtime.toBoolean($it)" }) }
        left_dollar_number { get(leftUnaryOperatorGetter { "runtime.getLength($it)" }) }

        plus {
            get {
                val codeLeft = value.left.mustGet(context)
                val codeRight = value.right.mustGet(context)
                val id = context.nextId()
                CodeGet(code {
                    !codeLeft.head
                    !codeRight.head
                    !"const v$id = ${codeLeft.body} + ${codeRight.body};\n"
                }, "v$id")
            }
        }
        minus {
            get {
                val codeLeft = value.left.mustGet(context)
                val codeRight = value.right.mustGet(context)
                val id = context.nextId()
                CodeGet(code {
                    !codeLeft.head
                    !codeRight.head
                    !"const v$id = ${codeLeft.body} - ${codeRight.body};\n"
                }, "v$id")
            }
        }
        asterisk {
            get {
                val codeLeft = value.left.mustGet(context)
                val codeRight = value.right.mustGet(context)
                val id = context.nextId()
                CodeGet(code {
                    !codeLeft.head
                    !codeRight.head
                    !"const v$id = ${codeLeft.body} * ${codeRight.body};\n"
                }, "v$id")
            }
        }
        slash {
            get {
                val codeLeft = value.left.mustGet(context)
                val codeRight = value.right.mustGet(context)
                val id = context.nextId()
                CodeGet(code {
                    !codeLeft.head
                    !codeRight.head
                    !"const v$id = ${codeLeft.body} / ${codeRight.body};\n"
                }, "v$id")
            }
        }

        minus_greater {
            get {
                if (value.left.type == "identifier") {
                    val name = value.left.value.unsafeCast<String>()
                    val internalName = name.replace("""[^a-zA-Z0-9_]""".toRegex(), "")
                    val idArgument = context.nextId()
                    val codeRight = context.aliases.stack {
                        context.aliases[name] = Alias {
                            get { CodeGet("", "v$idArgument\$$internalName") }
                            set {
                                CodeSet { code ->
                                    CodeRun(code {
                                        !code.head
                                        !"v$idArgument\$$internalName = ${code.body};\n"
                                    })
                                }
                            }
                        }
                        value.right.mustGet(context)
                    }
                    val id = context.nextId()
                    CodeGet(code {
                        !"const v$id = function(v$idArgument\$$internalName) {\n"
                        indent {
                            !codeRight.head
                            !"return ${codeRight.body};\n"
                        }
                        !"};\n"
                    }, "v$id")
                } else {
                    throw Exception("Illegal Operator Argument: ${value.left.type} -> ${value.right.type}")
                }
            }
        }

        colon {
            run {
                if (value.left.type == "identifier") {
                    val name = value.left.value.unsafeCast<String>()
                    val internalName = name.replace("""[^a-zA-Z0-9_]""".toRegex(), "")
                    val id = context.nextId()
                    context.aliases[name] = Alias {
                        get { CodeGet("", "v$id\$$internalName") }
                        set {
                            CodeSet { code ->
                                CodeRun(code {
                                    !code.head
                                    !"v$id\$$internalName = ${code.body};\n"
                                })
                            }
                        }
                    }
                    val codeRight = value.right.mustGet(context)
                    CodeRun(code {
                        !"let v$id\$$internalName;\n"
                        !codeRight.head
                        !"v$id\$$internalName = ${codeRight.body};\n"
                    })
                } else {
                    throw Exception("Illegal Operator Argument: ${value.left.type} : ${value.right.type}")
                }
            }
        }

        equal {
            get {
                val id = context.nextId()
                val codeRight = value.right.mustGet(context)
                val codeLeft = value.left.mustSet(context).consumer(CodeGet("", "v$id"))
                CodeGet(code {
                    !codeRight.head
                    !"const v$id = ${codeRight.body};\n"
                    !codeLeft.head
                }, "v$id")
            }
            run { value.left.mustSet(context).consumer(value.right.mustGet(context)) }
            objectInit {
                if (value.left.type == "identifier") {
                    val codeRight = value.right.mustGet(context)
                    CodeObjectInit { consumer ->
                        consumer(value.left.value.unsafeCast<String>(), codeRight)
                    }
                } else {
                    throw Exception("Illegal Operator Argument: ${value.left.type} = ${value.right.type}")
                }
            }
        }

        semicolon {
            get {
                val codesLeft = value.slice(0..value.size - 2).map { it.mustRun(context) }
                val codeRight = value[value.size - 1].mustGet(context)
                CodeGet(code {
                    codesLeft.forEach {
                        !it.head
                    }
                    !codeRight.head
                }, codeRight.body)
            }
            run {
                val codes = value.map { it.mustRun(context) }
                CodeRun(code {
                    codes.forEach {
                        !it.head
                    }
                })
            }
            arrayInit {
                val codes = value.map { it.mustArrayInit(context) }
                CodeArrayInit { consumer ->
                    codes.forEach { code ->
                        code.generator { code2 ->
                            consumer(code2)
                        }
                    }
                }
            }
            objectInit {
                val codes = value.map { it.mustObjectInit(context) }
                CodeObjectInit { consumer ->
                    codes.forEach { code ->
                        code.generator { key2, code2 ->
                            consumer(key2, code2)
                        }
                    }
                }
            }
        }
    }
    context.aliases.apply {
        "A" { get { CodeGet("", "([1, 2, 3])") } }
        "F" { get { CodeGet("", "(a => a * 20)") } }
        "O" { get { CodeGet("", "({m: a => a * 20})") } }
        "PI" { get { CodeGet("", "(Math.PI)") } }
        "MAP" { get { CodeGet("", "(array => code => array.map(item => code(item)))") } }
        "TRUE" { get { CodeGet("", "true") } }
        "FALSE" { get { CodeGet("", "false") } }
        "NULL" { get { CodeGet("", "null") } }
        "NAN" { get { CodeGet("", "NaN") } }
        "INFINITY" { get { CodeGet("", "Infinity") } }
        "UNDEFINED" { get { CodeGet("", "undefined") } }
    }

    val code = node.mustGet(context)
    code {
        !"(function(runtime) {\n"
        indent {
            !code.head
            !"return ${code.body};\n"
        }
        !"})"
    }
}

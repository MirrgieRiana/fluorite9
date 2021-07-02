package fl9

import fl9.token.*

fun getStandardCompiler(): Any = { node: Node ->
    val context = Context()
    context.operators.apply {

        void {
            get { CodeGet("", "(runtime.void)") }
            run { CodeRun("") }
            arrayInit { CodeArrayInit { } }
            objectInit { CodeObjectInit { } }
        }

        number { get { CodeGet("", "($value)") } }
        string { get { CodeGet("", JSON.stringify(value)) } }
        join {
            get {
                if (value.isEmpty()) {
                    CodeGet("", "\"\"")
                } else if (value.size == 1 && value[0].isType(string)) {
                    value[0].mustGet(context)
                } else {
                    val codes = value.map { it.mustGet(context) }
                    val id = context.nextId()
                    CodeGet(code {
                        codes.forEach {
                            !it.head
                        }
                        !"const v$id = `${codes.joinToString("") { "\${runtime.toString(${it.body})}" }}`;\n"
                    }, "v$id")
                }
            }
        }
        identifier {
            get { context.aliases[value]?.get?.invoke(AliasCompilerArgument(context)) ?: throw Exception("Unknown Identifier: $value") }
            set { context.aliases[value]?.set?.invoke(AliasCompilerArgument(context)) ?: throw Exception("Unknown Identifier: $value") }
        }

        empty_round { get { CodeGet("", "(runtime.empty)") } }
        round {
            get { context.aliases.stack { value.main.mustGet(context) } }
            run { context.aliases.stack { value.main.mustRun(context) } }
        }
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
                        !key.head
                        !code.head
                        !"v$id[${key.body}] = ${code.body};\n"
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
                val nodesMain = let {
                    value.main.maybe(semicolon) {
                        return@let it.toList()
                    }
                    return@let listOf(value.main)
                }

                // 引数列void解体
                val codesMain = mutableListOf<CodeGet>()
                val codesMainNamed = mutableListOf<Pair<String, CodeGet>>()
                var namedMode = false
                nodesMain.forEach {
                    if (it.type == "void") {
                        if (!namedMode) {
                            codesMain += CodeGet("", "undefined")
                        }
                        // 名前付き引数モードになった場合はvoidは単に無視する
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
                        !"const v$id = runtime.apply(${codeLeft.body}, [${codesMain.joinToString(", ") { it.body }}]);\n"
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

        fun binaryOperatorGetter(function: (String, String) -> String): OperatorCompilerArgument<BinaryOperatorArgument>.() -> CodeGet = {
            val codeLeft = value.left.mustGet(context)
            val codeRight = value.right.mustGet(context)
            val id = context.nextId()
            CodeGet(code {
                !codeLeft.head
                !codeRight.head
                !"const v$id = ${function(codeLeft.body, codeRight.body)};\n"
            }, "v$id")
        }
        asterisk { get(binaryOperatorGetter { left, right -> "runtime.multiply($left, $right)" }) }
        slash { get(binaryOperatorGetter { left, right -> "runtime.divide($left, $right)" }) }
        plus { get(binaryOperatorGetter { left, right -> "runtime.add($left, $right)" }) }
        minus { get(binaryOperatorGetter { left, right -> "runtime.subtract($left, $right)" }) }
        period_period { get(binaryOperatorGetter { left, right -> "runtime.rangeClosed($left, $right)" }) }
        tilde { get(binaryOperatorGetter { left, right -> "runtime.rangeOpened($left, $right)" }) }

        comparison {
            get {
                val idVars = value.nodes.indices.map { "v${context.nextId()}\$$it" }
                val idVarResult = "v${context.nextId()}\$result"
                val idLabel = "l" + context.nextId()
                val codesOperator = value.types.indices.map { Node(value.types[it], Unit).mustCompare(context) }
                val codesTerm = value.nodes.map { it.mustGet(context) }
                CodeGet(code {
                    !"let $idVarResult;\n"
                    !"$idLabel:\n"
                    !"{\n"
                    indent {
                        !codesTerm[0].head
                        !"const ${idVars[0]} = ${codesTerm[0].body};\n"
                        value.types.indices.forEach { i ->
                            !codesTerm[i + 1].head
                            !"const ${idVars[i + 1]} = ${codesTerm[i + 1].body};\n"
                            !"if (!(${codesOperator[i].comparator(idVars[i], idVars[i + 1])})) {\n"
                            indent {
                                !"$idVarResult = false;\n"
                                !"break $idLabel;\n"
                            }
                            !"}\n"
                        }
                        !"$idVarResult = true;\n"
                    }
                    !"}\n"
                }, idVarResult)
            }
        }
        equal_equal { compare { CodeCompare { left, right -> "$left == $right" } } }
        exclamation_equal { compare { CodeCompare { left, right -> "$left != $right" } } }
        equal_equal_equal { compare { CodeCompare { left, right -> "$left === $right" } } }
        exclamation_equal_equal { compare { CodeCompare { left, right -> "$left !== $right" } } }
        greater { compare { CodeCompare { left, right -> "$left > $right" } } }
        less { compare { CodeCompare { left, right -> "$left < $right" } } }
        greater_equal { compare { CodeCompare { left, right -> "$left >= $right" } } }
        less_equal { compare { CodeCompare { left, right -> "$left <= $right" } } }

        fun binaryConditionOperatorGetter(function: (String) -> String): OperatorCompilerArgument<BinaryOperatorArgument>.() -> CodeGet = {
            val codeLeft = value.left.mustGet(context)
            val codeRight = context.aliases.stack { value.right.mustGet(context) }
            val id = context.nextId()
            CodeGet(code {
                !codeLeft.head
                !"let v$id;\n"
                !"if (${function(codeLeft.body)}) {\n"
                indent {
                    !codeRight.head
                    !"v$id = ${codeRight.body};\n"
                }
                !"} else {\n"
                indent {
                    !"v$id = ${codeLeft.body};\n"
                }
                !"}\n"
            }, "v$id")
        }

        fun binaryConditionOperatorRunner(function: (String) -> String): OperatorCompilerArgument<BinaryOperatorArgument>.() -> CodeRun = {
            val codeLeft = value.left.mustGet(context)
            val codeRight = context.aliases.stack { value.right.mustRun(context) }
            CodeRun(code {
                !codeLeft.head
                !"if (${function(codeLeft.body)}) {\n"
                indent {
                    !codeRight.head
                }
                !"}\n"
            })
        }
        ampersand_ampersand {
            get(binaryConditionOperatorGetter { "runtime.toBoolean($it)" })
            run(binaryConditionOperatorRunner { "runtime.toBoolean($it)" })
        }
        pipe_pipe {
            get(binaryConditionOperatorGetter { "!runtime.toBoolean($it)" })
            run(binaryConditionOperatorRunner { "!runtime.toBoolean($it)" })
        }
        question_colon {
            get(binaryConditionOperatorGetter { "$it === undefined" })
            run(binaryConditionOperatorRunner { "$it === undefined" })
        }
        exclamation_colon {
            get(binaryConditionOperatorGetter { "$it !== undefined" })
            run(binaryConditionOperatorRunner { "$it !== undefined" })
        }

        ternary_question_colon {
            get {
                val codeLeft = value.left.mustGet(context)
                val codeCenter = context.aliases.stack { value.center.mustGet(context) }
                val codeRight = context.aliases.stack { value.right.mustGet(context) }
                val id = context.nextId()
                CodeGet(code {
                    !codeLeft.head
                    !"let v$id;\n"
                    !"if (runtime.toBoolean(${codeLeft.body})) {\n"
                    indent {
                        !codeCenter.head
                        !"v$id = ${codeCenter.body};\n"
                    }
                    !"} else {\n"
                    indent {
                        !codeRight.head
                        !"v$id = ${codeRight.body};\n"
                    }
                    !"}\n"
                }, "v$id")
            }
            run {
                val codeLeft = value.left.mustGet(context)
                val codeCenter = context.aliases.stack { value.center.mustRun(context) }
                val codeRight = context.aliases.stack { value.right.mustRun(context) }
                CodeRun(code {
                    !codeLeft.head
                    !"if (runtime.toBoolean(${codeLeft.body})) {\n"
                    indent {
                        !codeCenter.head
                    }
                    !"} else {\n"
                    indent {
                        !codeRight.head
                    }
                    !"}\n"
                })
            }
        }
        exclamation_question {
            get {
                val codeLeft = value.left.mustGet(context)
                val codeRight = context.aliases.stack { value.right.mustGet(context) }
                val id = context.nextId()
                CodeGet(code {
                    !"let v$id;\n"
                    !"try {\n"
                    indent {
                        !codeLeft.head
                        !"v$id = ${codeLeft.body};\n"
                    }
                    !"} catch (e) {\n"
                    indent {
                        !codeRight.head
                        !"v$id = ${codeRight.body};\n"
                    }
                    !"}\n"
                }, "v$id")
            }
            run {
                val codeLeft = value.left.mustRun(context)
                val codeRight = context.aliases.stack { value.right.mustRun(context) }
                CodeRun(code {
                    !"try {\n"
                    indent {
                        !codeLeft.head
                    }
                    !"} catch (e) {\n"
                    indent {
                        !codeRight.head
                    }
                    !"}\n"
                })
            }
        }

        minus_greater {
            get {

                class Argument(val name: String, val code: String)

                val arguments = value.left.let { node ->
                    node.maybe(empty_round) { return@let null }
                    node.maybe(round) { value -> return@let value.main }
                    node.maybe(empty_square) { return@let null }
                    node.maybe(square) { value -> return@let value.main }
                    return@let node
                }.let { node ->
                    if (node == null) return@let arrayOf()
                    node.maybe(comma) { value -> return@let value }
                    node.maybe(semicolon) { value -> return@let value }
                    return@let arrayOf(node)
                }.mapNotNull { node ->
                    if (node.isType(void)) return@mapNotNull null
                    node.maybe(identifier) { value -> return@mapNotNull value }
                    throw Exception("Illegal Operator Argument: ${node.type}")
                }.map { Argument(it, "v${context.nextId()}\$${it.replace("""[^a-zA-Z0-9_]""".toRegex(), "")}") }

                val codeRight = context.aliases.stack {
                    arguments.forEach { argument ->
                        context.aliases[argument.name] = Alias {
                            get { CodeGet("", argument.code) }
                            set {
                                CodeSet { code ->
                                    CodeRun(code {
                                        !code.head
                                        !"${argument.code} = ${code.body};\n"
                                    })
                                }
                            }
                        }
                    }
                    value.right.mustGet(context)
                }
                val id = context.nextId()
                CodeGet(code {
                    !"const v$id = function(${arguments.joinToString(", ") { argument -> argument.code }}) {\n"
                    indent {
                        !codeRight.head
                        !"return ${codeRight.body};\n"
                    }
                    !"};\n"
                }, "v$id")
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
                value.left.maybe(identifier) { key ->
                    val codeRight = value.right.mustGet(context)
                    return@objectInit CodeObjectInit { consumer ->
                        consumer(CodeGet("", JSON.stringify(key)), codeRight)
                    }
                }
                if (value.left.isType(round)) {
                    val codeLeft = context.aliases.stack { value.left.mustGet(context) }
                    val codeRight = value.right.mustGet(context)
                    return@objectInit CodeObjectInit { consumer ->
                        consumer(codeLeft, codeRight)
                    }
                }
                throw Exception("Illegal Operator Argument: ${value.left.type} = ${value.right.type}")
            }
        }

        pipe {
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
                    value.right.mustGet(context)
                }
                val id = context.nextId()
                CodeGet(code {
                    !codeLeft.head
                    !"const v$id = runtime.map(${codeLeft.body}, function(v$idArgument) {\n"
                    indent {
                        !codeRight.head
                        !"return ${codeRight.body};\n"
                    }
                    !"});\n"
                }, "v$id")
            }
            run {
                val codeLeft = value.left.mustGet(context)
                val idArgument = context.nextId()
                val idArgument2 = context.nextId()
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
                    value.right.mustRun(context)
                }
                CodeRun(code {
                    !codeLeft.head
                    !"for (let v$idArgument2 of runtime.toStream(${codeLeft.body})[runtime.symbolStream]()) {\n"
                    indent {
                        !"let v$idArgument = v$idArgument2;\n"
                        !codeRight.head
                    }
                    !"}\n"
                })
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
                        code.generator(consumer)
                    }
                }
            }
            objectInit {
                val codes = value.map { it.mustObjectInit(context) }
                CodeObjectInit { consumer ->
                    codes.forEach { code ->
                        code.generator(consumer)
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
        "SIN" { get { CodeGet("", "(Math.sin)") } }
        "LOG" { get { CodeGet("", "((a, b) => Math.log(a) / Math.log(b))") } }
        "MAP" { get { CodeGet("", "(array => code => array.map(item => code(item)))") } }
        "TRUE" { get { CodeGet("", "true") } }
        "FALSE" { get { CodeGet("", "false") } }
        "NULL" { get { CodeGet("", "null") } }
        "NAN" { get { CodeGet("", "NaN") } }
        "INFINITY" { get { CodeGet("", "Infinity") } }
        "UNDEFINED" { get { CodeGet("", "undefined") } }
        "ERROR" { get { CodeGet("", "(message => { throw new Error(runtime.toString(message)); })") } }
        "OPERATOR_TO_STRING" { get { CodeGet("", "(runtime.symbolToString)") } }
        "OPERATOR_ADD" { get { CodeGet("", "(runtime.symbolAdd)") } }
        "OPERATOR_SUBTRACT" { get { CodeGet("", "(runtime.symbolSubtract)") } }
        "OPERATOR_MULTIPLY" { get { CodeGet("", "(runtime.symbolMultiply)") } }
        "OPERATOR_DIVIDE" { get { CodeGet("", "(runtime.symbolDivide)") } }
        "OPERATOR_STREAM" { get { CodeGet("", "(runtime.symbolStream)") } }
    }

    val code = node.mustGet(context)
    code {
        !"(function(runtime) {\n"
        indent {
            !"\"use strict\";\n"
            !code.head
            !"return ${code.body};\n"
        }
        !"})"
    }
}

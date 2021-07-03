package fl9

import fl9.token.*

fun getStandardCompiler(): Any = { nodeRoot: Node ->
    val context = Context()
    context.operators.apply {

        void {
            get { CodeGet(!"(runtime.void)") }
            run { CodeRun() }
            arrayInit { CodeArrayInit { } }
            objectInit { CodeObjectInit { } }
        }

        number { get { CodeGet(!"($value)") } }
        string { get { CodeGet(!JSON.stringify(value)) } }
        join {
            get {
                if (value.isEmpty()) {
                    CodeGet(!"\"\"")
                } else if (value.size == 1 && value[0].isType(string)) {
                    value[0].mustGet(context)
                } else {
                    val codes = value.map { it.mustGet(context) }
                    val id = context.nextId()
                    CodeGet(code {
                        codes.forEach {
                            line(it.head)
                        }
                        line(!"const v$id = `" + codes
                                .map { !"\${runtime.toString(" + it.body + !")}" }
                                .reduceOrZero { left, right -> left + right } + !"`;")
                    }, !"v$id")
                }
            }
        }
        identifier {
            get { context.aliases[value]?.get?.invoke(AliasCompilerArgument(context, location)) ?: throw Exception("Unknown Identifier: $value") }
            set { context.aliases[value]?.set?.invoke(AliasCompilerArgument(context, location)) ?: throw Exception("Unknown Identifier: $value") }
        }

        empty_round { get { CodeGet(!"(runtime.empty)") } }
        round {
            get { context.aliases.stack { value.main.mustGet(context) } }
            run { context.aliases.stack { value.main.mustRun(context) } }
        }
        empty_square {
            get {
                val id = context.nextId()
                CodeGet(code {
                    line(!"const v$id = [];")
                }, !"v$id")
            }
        }
        square {
            get {
                val codeMain = value.main.mustArrayInit(context)
                val id = context.nextId()
                CodeGet(code {
                    line(!"const v$id = [];")
                    codeMain.generator { code ->
                        line(code.head)
                        line(!"v$id[v$id.length] = " + code.body + !";")
                    }
                }, !"v$id")
            }
        }
        empty_curly {
            get {
                val id = context.nextId()
                CodeGet(code {
                    line(!"const v$id = {};")
                }, !"v$id")
            }
        }
        curly {
            get {
                val codeMain = value.main.mustObjectInit(context)
                val id = context.nextId()
                CodeGet(code {
                    line(!"const v$id = {};")
                    codeMain.generator { key, code ->
                        line(key.head)
                        line(code.head)
                        line(!"v$id[" + key.body + !"] = " + code.body + !";")
                    }
                }, !"v$id")
            }
        }
        empty_dollar_round { get { CodeGet(!"(runtime.empty)") } }
        dollar_round { get { context.aliases.stack { value.main.mustGet(context) } } }

        period {
            get {
                let {
                    value.right.maybe(identifier) { name ->
                        val codeLeft = value.left.mustGet(context)
                        val id = context.nextId()
                        return@let CodeGet(code {
                            line(codeLeft.head)
                            line(!"const v$id = " + codeLeft.body + !"[" + JSON.stringify(name) * value.right.location + !"];")
                        }, !"v$id")
                    }
                    throw Exception("Illegal Operator Argument: ${value.left.type} : ${value.right.type}")
                }
            }
        }

        right_empty_square {
            get {
                val codeLeft = value.left.mustGet(context)
                val id = context.nextId()
                CodeGet(code {
                    line(codeLeft.head)
                    line(!"const v$id = runtime.apply(" + codeLeft.body + !", []);")
                }, !"v$id")
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
                val codesMainNamed = mutableListOf<Triple<String, CodeGet, Location>>()
                var namedMode = false
                nodesMain.forEach {
                    if (it.type == "void") {
                        if (!namedMode) {
                            codesMain += CodeGet("undefined" * location)
                        }
                        // 名前付き引数モードになった場合はvoidは単に無視する
                    } else if (it.type == "colon") {
                        namedMode = true
                        val nodeKey = it.value.unsafeCast<BinaryOperatorArgument>().left
                        val nodeValue = it.value.unsafeCast<BinaryOperatorArgument>().right
                        if (nodeKey.type == "identifier") {
                            codesMainNamed += Triple(
                                    nodeKey.value.unsafeCast<String>(),
                                    context.aliases.stack { nodeValue.mustGet(context) },
                                    nodeKey.location
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
                        line(codeLeft.head)
                        codesMain.forEach {
                            line(it.head)
                        }
                        line(!"const v$id = runtime.apply(" + codeLeft.body + !", [" + codesMain
                                .map { it.body }
                                .reduceOrZero { left, right -> left + !", " + right } + !"]);")
                    }, !"v$id")
                } else {
                    val id = context.nextId()
                    val idObject = context.nextId()
                    CodeGet(code {
                        line(codeLeft.head)
                        codesMain.forEach {
                            line(it.head)
                        }
                        line(!"const v$idObject = {};")
                        codesMainNamed.forEach {
                            line(it.second.head)
                            line(!"v$idObject[" + JSON.stringify(it.first) * it.third + !"] = " + it.second.body + !";")
                        }
                        line(!"const v$id = runtime.apply(" + codeLeft.body + !", [" + codesMain
                                .map { it.body }
                                .plus(!"v$idObject")
                                .reduceOrZero { left, right -> left + !", " + right } + !"]);")
                    }, !"v$id")
                }
            }
        }
        right_round {
            get {
                val codeLeft = value.left.mustGet(context)
                val idArgument = context.nextId()
                val codeRight = context.aliases.stack {
                    context.aliases["_"] = Alias {
                        get { CodeGet(!"v$idArgument") }
                        set {
                            CodeSet { code ->
                                CodeRun(code {
                                    line(code.head)
                                    line(!"v$idArgument = " + code.body + !";")
                                })
                            }
                        }
                    }
                    value.main.mustGet(context)
                }
                val id = context.nextId()
                CodeGet(code {
                    line(codeLeft.head)
                    line(!"const v$id = runtime.apply(" + codeLeft.body + !", [function(v$idArgument) {")
                    indent {
                        line(codeRight.head)
                        line(!"return " + codeRight.body + !";")
                    }
                    line(!"}]);")
                }, !"v$id")
            }
        }

        fun leftUnaryOperatorGetter(function: OperatorCompilerArgument<LeftUnaryOperatorArgument>.(SourcedLine) -> SourcedLine): OperatorCompilerArgument<LeftUnaryOperatorArgument>.() -> CodeGet = {
            val codeRight = value.right.mustGet(context)
            val id = context.nextId()
            CodeGet(code {
                line(codeRight.head)
                line(!"const v$id = " + function(codeRight.body) + !";")
            }, !"v$id")
        }
        left_plus { get(leftUnaryOperatorGetter { !"runtime.toNumber(" + it + !")" }) }
        left_minus { get(leftUnaryOperatorGetter { !"-runtime.toNumber(" + it + !")" }) }
        left_ampersand { get(leftUnaryOperatorGetter { !"runtime.toString(" + it + !")" }) }
        left_question { get(leftUnaryOperatorGetter { !"runtime.toBoolean(" + it + !")" }) }
        left_exclamation { get(leftUnaryOperatorGetter { !"!runtime.toBoolean(" + it + !")" }) }
        left_dollar_number { get(leftUnaryOperatorGetter { !"runtime.getLength(" + it + !")" }) }

        fun binaryOperatorGetter(function: OperatorCompilerArgument<BinaryOperatorArgument>.(SourcedLine, SourcedLine) -> SourcedLine): OperatorCompilerArgument<BinaryOperatorArgument>.() -> CodeGet = {
            val codeLeft = value.left.mustGet(context)
            val codeRight = value.right.mustGet(context)
            val id = context.nextId()
            CodeGet(code {
                line(codeLeft.head)
                line(codeRight.head)
                line(!"const v$id = " + function(codeLeft.body, codeRight.body) + !";")
            }, !"v$id")
        }
        asterisk { get(binaryOperatorGetter { left, right -> !"runtime.multiply(" + left + !", " + right + !")" }) }
        slash { get(binaryOperatorGetter { left, right -> !"runtime.divide(" + left + !", " + right + !")" }) }
        plus { get(binaryOperatorGetter { left, right -> !"runtime.add(" + left + !", " + right + !")" }) }
        minus { get(binaryOperatorGetter { left, right -> !"runtime.subtract(" + left + !", " + right + !")" }) }
        period_period { get(binaryOperatorGetter { left, right -> !"runtime.rangeClosed(" + left + !", " + right + !")" }) }
        tilde { get(binaryOperatorGetter { left, right -> !"runtime.rangeOpened(" + left + !", " + right + !")" }) }

        comparison {
            get {
                val idVars = value.nodes.indices.map { "v${context.nextId()}\$$it" }
                val idVarResult = "v${context.nextId()}\$result"
                val idLabel = "l" + context.nextId()
                val codesOperator = value.types.indices.map { Node(value.types[it], Unit, value.locations[it]).mustCompare(context) }
                val codesTerm = value.nodes.map { it.mustGet(context) }
                CodeGet(code {
                    line(!"let $idVarResult;")
                    line(!"$idLabel:")
                    line(!"{")
                    indent {
                        line(codesTerm[0].head)
                        line(!"const ${idVars[0]} = " + codesTerm[0].body + !";")
                        value.types.indices.forEach { i ->
                            line(codesTerm[i + 1].head)
                            line(!"const ${idVars[i + 1]} = " + codesTerm[i + 1].body + !";")
                            line(!"if (!(" + codesOperator[i].comparator(!idVars[i], !idVars[i + 1]) + !")) {")
                            indent {
                                line(!"$idVarResult = false;")
                                line(!"break $idLabel;")
                            }
                            line(!"}")
                        }
                        line(!"$idVarResult = true;")
                    }
                    line(!"}")
                }, !idVarResult)
            }
        }
        equal_equal { compare { CodeCompare { left, right -> left + !" == " + right } } }
        exclamation_equal { compare { CodeCompare { left, right -> left + !" != " + right } } }
        equal_equal_equal { compare { CodeCompare { left, right -> left + !" === " + right } } }
        exclamation_equal_equal { compare { CodeCompare { left, right -> left + !" !== " + right } } }
        greater { compare { CodeCompare { left, right -> left + !" > " + right } } }
        less { compare { CodeCompare { left, right -> left + !" < " + right } } }
        greater_equal { compare { CodeCompare { left, right -> left + !" >= " + right } } }
        less_equal { compare { CodeCompare { left, right -> left + !" <= " + right } } }

        fun binaryConditionOperatorGetter(function: OperatorCompilerArgument<BinaryOperatorArgument>.(SourcedLine) -> SourcedLine): OperatorCompilerArgument<BinaryOperatorArgument>.() -> CodeGet = {
            val codeLeft = value.left.mustGet(context)
            val codeRight = context.aliases.stack { value.right.mustGet(context) }
            val id = context.nextId()
            CodeGet(code {
                line(codeLeft.head)
                line(!"let v$id;")
                line(!"if (" + function(codeLeft.body) + !") {")
                indent {
                    line(codeRight.head)
                    line(!"v$id = " + codeRight.body + !";")
                }
                line(!"} else {")
                indent {
                    line(!"v$id = " + codeLeft.body + !";")
                }
                line(!"}")
            }, !"v$id")
        }

        fun binaryConditionOperatorRunner(function: OperatorCompilerArgument<BinaryOperatorArgument>.(SourcedLine) -> SourcedLine): OperatorCompilerArgument<BinaryOperatorArgument>.() -> CodeRun = {
            val codeLeft = value.left.mustGet(context)
            val codeRight = context.aliases.stack { value.right.mustRun(context) }
            CodeRun(code {
                line(codeLeft.head)
                line(!"if (" + function(codeLeft.body) + !") {")
                indent {
                    line(codeRight.head)
                }
                line(!"}")
            })
        }
        ampersand_ampersand {
            get(binaryConditionOperatorGetter { !"runtime.toBoolean(" + it + !")" })
            run(binaryConditionOperatorRunner { !"runtime.toBoolean(" + it + !")" })
        }
        pipe_pipe {
            get(binaryConditionOperatorGetter { !"!runtime.toBoolean(" + it + !")" })
            run(binaryConditionOperatorRunner { !"!runtime.toBoolean(" + it + !")" })
        }
        question_colon {
            get(binaryConditionOperatorGetter { it + !"=== undefined" })
            run(binaryConditionOperatorRunner { it + !"=== undefined" })
        }
        exclamation_colon {
            get(binaryConditionOperatorGetter { it + !"!== undefined" })
            run(binaryConditionOperatorRunner { it + !"!== undefined" })
        }

        ternary_question_colon {
            get {
                val codeLeft = value.left.mustGet(context)
                val codeCenter = context.aliases.stack { value.center.mustGet(context) }
                val codeRight = context.aliases.stack { value.right.mustGet(context) }
                val id = context.nextId()
                CodeGet(code {
                    line(codeLeft.head)
                    line(!"let v$id;")
                    line(!"if (runtime.toBoolean(" + codeLeft.body + !")) {")
                    indent {
                        line(codeCenter.head)
                        line(!"v$id = " + codeCenter.body + !";")
                    }
                    line(!"} else {")
                    indent {
                        line(codeRight.head)
                        line(!"v$id = " + codeRight.body + !";")
                    }
                    line(!"}")
                }, !"v$id")
            }
            run {
                val codeLeft = value.left.mustGet(context)
                val codeCenter = context.aliases.stack { value.center.mustRun(context) }
                val codeRight = context.aliases.stack { value.right.mustRun(context) }
                CodeRun(code {
                    line(codeLeft.head)
                    line(!"if (runtime.toBoolean(" + codeLeft.body + !")) {")
                    indent {
                        line(codeCenter.head)
                    }
                    line(!"} else {")
                    indent {
                        line(codeRight.head)
                    }
                    line(!"}")
                })
            }
        }
        exclamation_question {
            get {
                val codeLeft = value.left.mustGet(context)
                val codeRight = context.aliases.stack { value.right.mustGet(context) }
                val id = context.nextId()
                CodeGet(code {
                    line(!"let v$id;")
                    line(!"try {")
                    indent {
                        line(codeLeft.head)
                        line(!"v$id = " + codeLeft.body + !";")
                    }
                    line(!"} catch (e) {")
                    indent {
                        line(codeRight.head)
                        line(!"v$id = " + codeRight.body + !";")
                    }
                    line(!"}")
                }, !"v$id")
            }
            run {
                val codeLeft = value.left.mustRun(context)
                val codeRight = context.aliases.stack { value.right.mustRun(context) }
                CodeRun(code {
                    line(!"try {")
                    indent {
                        line(codeLeft.head)
                    }
                    line(!"} catch (e) {")
                    indent {
                        line(codeRight.head)
                    }
                    line(!"}")
                })
            }
        }

        minus_greater {
            get {

                class Argument(val name: String, val code: String, val location: Location)

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
                    node.maybe(identifier) { value -> return@mapNotNull Pair(value, node.location) }
                    throw Exception("Illegal Operator Argument: ${node.type}")
                }.map { Argument(it.first, "v${context.nextId()}\$${it.first.replace("""[^a-zA-Z0-9_]""".toRegex(), "")}", it.second) }

                val codeRight = context.aliases.stack {
                    arguments.forEach { argument ->
                        context.aliases[argument.name] = Alias {
                            get { CodeGet(!argument.code) }
                            set {
                                CodeSet { code ->
                                    CodeRun(code {
                                        line(code.head)
                                        line(!"${argument.code} = " + code.body + !";")
                                    })
                                }
                            }
                        }
                    }
                    value.right.mustGet(context)
                }
                val id = context.nextId()
                val idSymbol = context.nextId()
                val label = "ANONYMOUS (EVAL.fl9:${location.row},${location.column})"
                CodeGet(code {
                    line(!"const v$idSymbol = Symbol(${JSON.stringify(label)});")
                    line(!"const v$id = {[v$idSymbol]: function(" + arguments
                            .map { argument -> argument.code * argument.location }
                            .reduceOrZero { left, right -> left + !", " + right } + !") {")
                    indent {
                        line(codeRight.head)
                        line(!"return " + codeRight.body + !";")
                    }
                    line(!"}}[v$idSymbol];")
                }, !"v$id")
            }
        }

        colon {
            run {
                if (value.left.type == "identifier") {
                    val name = value.left.value.unsafeCast<String>()
                    val internalName = name.replace("""[^a-zA-Z0-9_]""".toRegex(), "")
                    val id = context.nextId()
                    context.aliases[name] = Alias {
                        get { CodeGet(!"v$id\$$internalName") }
                        set {
                            CodeSet { code ->
                                CodeRun(code {
                                    line(code.head)
                                    line(!"v$id\$$internalName = " + code.body + !";")
                                })
                            }
                        }
                    }
                    val codeRight = value.right.mustGet(context)
                    CodeRun(code {
                        line(!"let v$id\$$internalName;")
                        line(codeRight.head)
                        line(!"v$id\$$internalName = " + codeRight.body + !";")
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
                val codeLeft = value.left.mustSet(context).consumer(CodeGet(!"v$id"))
                CodeGet(code {
                    line(codeRight.head)
                    line(!"const v$id = " + codeRight.body + !";")
                    line(codeLeft.head)
                }, !"v$id")
            }
            run { value.left.mustSet(context).consumer(value.right.mustGet(context)) }
            objectInit {
                value.left.maybe(identifier) { key ->
                    val codeRight = value.right.mustGet(context)
                    return@objectInit CodeObjectInit { consumer ->
                        consumer(CodeGet(JSON.stringify(key) * value.left.location), codeRight)
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
                        get { CodeGet(!"v$idArgument") }
                        set {
                            CodeSet { code ->
                                CodeRun(code {
                                    line(code.head)
                                    line(!"v$idArgument = " + code.body + !";")
                                })
                            }
                        }
                    }
                    value.right.mustGet(context)
                }
                val id = context.nextId()
                CodeGet(code {
                    line(codeLeft.head)
                    line(!"const v$id = runtime.map(" + codeLeft.body + !", function(v$idArgument) {")
                    indent {
                        line(codeRight.head)
                        line(!"return " + codeRight.body + !";")
                    }
                    line(!"});")
                }, !"v$id")
            }
            run {
                val codeLeft = value.left.mustGet(context)
                val idArgument = context.nextId()
                val idArgument2 = context.nextId()
                val codeRight = context.aliases.stack {
                    context.aliases["_"] = Alias {
                        get { CodeGet(!"v$idArgument") }
                        set {
                            CodeSet { code ->
                                CodeRun(code {
                                    line(code.head)
                                    line(!"v$idArgument = " + code.body + !";")
                                })
                            }
                        }
                    }
                    value.right.mustRun(context)
                }
                CodeRun(code {
                    line(codeLeft.head)
                    line(!"for (let v$idArgument2 of runtime.toStream(" + codeLeft.body + !")[runtime.symbolStream]()) {")
                    indent {
                        line(!"let v$idArgument = v$idArgument2;")
                        line(codeRight.head)
                    }
                    line(!"}")
                })
            }
        }

        semicolon {
            get {
                val codesLeft = value.slice(0..value.size - 2).map { it.mustRun(context) }
                val codeRight = value[value.size - 1].mustGet(context)
                CodeGet(code {
                    codesLeft.forEach {
                        line(it.head)
                    }
                    line(codeRight.head)
                }, codeRight.body)
            }
            run {
                val codes = value.map { it.mustRun(context) }
                CodeRun(code {
                    codes.forEach {
                        line(it.head)
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
        "A" { get { CodeGet(!"([1, 2, 3])") } }
        "F" { get { CodeGet(!"(a => a * 20)") } }
        "O" { get { CodeGet(!"({m: a => a * 20})") } }
        "PI" { get { CodeGet(!"(Math.PI)") } }
        "SIN" { get { CodeGet(!"(Math.sin)") } }
        "LOG" { get { CodeGet(!"((a, b) => Math.log(a) / Math.log(b))") } }
        "MAP" { get { CodeGet(!"(array => code => array.map(item => code(item)))") } }
        "TRUE" { get { CodeGet(!"true") } }
        "FALSE" { get { CodeGet(!"false") } }
        "NULL" { get { CodeGet(!"null") } }
        "NAN" { get { CodeGet(!"NaN") } }
        "INFINITY" { get { CodeGet(!"Infinity") } }
        "UNDEFINED" { get { CodeGet(!"undefined") } }
        "ERROR" { get { CodeGet(!"(message => { throw new Error(runtime.toString(message)); })") } }
        "OPERATOR_TO_STRING" { get { CodeGet(!"(runtime.symbolToString)") } }
        "OPERATOR_ADD" { get { CodeGet(!"(runtime.symbolAdd)") } }
        "OPERATOR_SUBTRACT" { get { CodeGet(!"(runtime.symbolSubtract)") } }
        "OPERATOR_MULTIPLY" { get { CodeGet(!"(runtime.symbolMultiply)") } }
        "OPERATOR_DIVIDE" { get { CodeGet(!"(runtime.symbolDivide)") } }
        "OPERATOR_STREAM" { get { CodeGet(!"(runtime.symbolStream)") } }
    }

    val code = nodeRoot.mustGet(context)
    val sourcedFile = code {
        line("(function(runtime) {" * nullLocation)
        indent {
            line("\"use strict\";" * nullLocation)
            line(code.head)
            line("return " * nullLocation + code.body + ";" * nullLocation)
        }
        line("})" * nullLocation)
    }
    sourcedFile.sourcedLines.joinToString("") { sourcedLine ->
        sourcedLine.sourcesStrings.joinToString("") { sourcedString ->
            //if (sourcedString.location != nullLocation) {
            //    "/* R:${sourcedString.location.row} C:${sourcedString.location.column} */${sourcedString.string}"
            //} else {
            sourcedString.string
            //}
        } + "\n"
    }
}

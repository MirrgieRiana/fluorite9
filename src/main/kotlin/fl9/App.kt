package fl9

import fl9.token.*

fun getStandardCompiler(): Any = { nodeRoot: Node ->
    val compiler = Compiler()
    compiler.operators.apply {

        void {
            get { CodeGet(!"(runtime.getVoid())") }
            run { CodeRun() }
            arrayInit { CodeArrayInit { } }
            objectInit { CodeObjectInit { } }
        }

        number { get { CodeGet(!"(${channel.value})") } }
        string {
            get {
                if (channel.value.isEmpty()) {
                    CodeGet(!"\"\"")
                } else {
                    val id = "v" + compiler.nextId()
                    CodeGet(code {
                        line(!"const $id = ${JSON.stringify(channel.value)};")
                    }, !id)
                }
            }
        }
        join {
            get {
                if (channel.value.isEmpty()) {
                    CodeGet(!"\"\"")
                } else {
                    class CodeStringInit(val head: SourcedFile, val body: SourcedLine)

                    val codes = channel.value.map { node ->
                        node.maybe(string) { string ->
                            return@map CodeStringInit(zeroFile, JSON.stringify(string).let { it.substring(1, it.length - 1) } * node.location)
                        }
                        val code = node.mustGet(compiler)
                        return@map CodeStringInit(code.head, "\${runtime.toString(" * node.location + code.body + ")}" * node.location)
                    }
                    val id = "v" + compiler.nextId()
                    CodeGet(code {
                        codes.forEach {
                            line(it.head)
                        }
                        line(!"const $id = `" + codes
                            .map { it.body }
                            .reduceOrZero { left, right -> left + right } + !"`;")
                    }, !id)
                }
            }
        }
        identifier {
            get {
                compiler.aliases[channel.value]?.get?.invoke(Context(compiler, location, AliasContext(), GetterContext(domain.givenName))) ?: run {
                    val id = "v" + compiler.nextId()
                    CodeGet(code {
                        line(!"const $id = runtime.get(${JSON.stringify(channel.value)});")
                    }, !id)
                }
            }
            set {
                compiler.aliases[channel.value]?.set?.invoke(Context(compiler, location, AliasContext(), Unit)) ?: run {
                    CodeSet { code ->
                        CodeRun(code {
                            line(code.head)
                            line(!"runtime.set(${JSON.stringify(channel.value)}, " + code.body + !");")
                        })
                    }
                }
            }
        }

        empty_round { get { CodeGet(!"(runtime.getEmpty())") } }
        round {
            get { compiler.aliases.stack { channel.value.main.mustGet(compiler) } }
            run { compiler.aliases.stack { channel.value.main.mustRun(compiler) } }
        }
        empty_square {
            get {
                val id = compiler.nextId()
                CodeGet(code {
                    line(!"const v$id = [];")
                }, !"v$id")
            }
        }
        square {
            get {
                val codeMain = channel.value.main.mustArrayInit(compiler)
                val id = compiler.nextId()
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
                val id = compiler.nextId()
                CodeGet(code {
                    line(!"const v$id = {};")
                }, !"v$id")
            }
        }
        curly {
            get {
                val codeMain = channel.value.main.mustObjectInit(compiler)
                val id = compiler.nextId()
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
        dollar_round { get { compiler.aliases.stack { channel.value.main.mustGet(compiler) } } }

        period {
            get {
                let {
                    channel.value.right.maybe(identifier) { name ->
                        val codeLeft = channel.value.left.mustGet(compiler)
                        val id = compiler.nextId()
                        return@let CodeGet(code {
                            line(codeLeft.head)
                            line(!"const v$id = " + codeLeft.body + !"[" + JSON.stringify(name) * channel.value.right.location + !"];")
                        }, !"v$id")
                    }
                    throw Exception("Illegal Operator Argument: ${channel.value.left.type}.${channel.value.right.type}")
                }
            }
        }
        colon_colon {
            get {
                let {
                    channel.value.right.maybe(identifier) { name ->
                        val codeLeft = channel.value.left.mustGet(compiler)
                        val id = "v" + compiler.nextId()
                        return@let CodeGet(code {
                            line(codeLeft.head)
                            line(!"const $id = runtime.createDelegate(" + codeLeft.body + !", " + JSON.stringify(name) * channel.value.right.location + !");")
                        }, !id)
                    }
                    throw Exception("Illegal Operator Argument: ${channel.value.left.type}::${channel.value.right.type}")
                }
            }
        }

        right_empty_square {
            get {
                val codeLeft = channel.value.left.mustGet(compiler)
                val id = compiler.nextId()
                CodeGet(code {
                    line(codeLeft.head)
                    line(!"const v$id = runtime.apply(" + codeLeft.body + !", []);")
                }, !"v$id")
            }
        }
        right_square {
            get {

                // 関数
                val codeLeft = channel.value.left.mustGet(compiler)

                // 引数列セミコロン解体
                val nodesMain = let {
                    channel.value.main.maybe(semicolon) {
                        return@let it.toList()
                    }
                    return@let listOf(channel.value.main)
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
                                compiler.aliases.stack { nodeValue.mustGet(compiler) },
                                nodeKey.location
                            )
                        } else {
                            throw Exception("Illegal Argument Name: ${nodeKey.type}")
                        }
                    } else {
                        codesMain += compiler.aliases.stack { it.mustGet(compiler) }
                    }
                }

                if (codesMainNamed.isEmpty()) {
                    val id = compiler.nextId()
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
                    val id = compiler.nextId()
                    val idObject = compiler.nextId()
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
                val codeLeft = channel.value.left.mustGet(compiler)
                val idArgument = compiler.nextId()
                val codeRight = compiler.aliases.stack {
                    compiler.aliases["_"] = Alias {
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
                    channel.value.main.mustGet(compiler)
                }
                val id = compiler.nextId()
                val idSymbol = compiler.nextId()
                val label = "<CLOSURE> (<EVAL>:${location.row},${location.column})"
                CodeGet(code {
                    line(codeLeft.head)
                    line(!"const v$idSymbol = Symbol(${JSON.stringify(label)});")
                    line(!"const v$id = runtime.apply(" + codeLeft.body + !", [{[v$idSymbol]: function(v$idArgument) {")
                    indent {
                        line(codeRight.head)
                        line(!"return " + codeRight.body + !";")
                    }
                    line(!"}}[v$idSymbol]]);")
                }, !"v$id")
            }
        }

        fun leftUnaryOperatorGetter(function: Context<OperatorContext<LeftUnaryOperatorArgument>, GetterContext>.(SourcedLine) -> SourcedLine): Context<OperatorContext<LeftUnaryOperatorArgument>, GetterContext>.() -> CodeGet = {
            val codeRight = channel.value.right.mustGet(compiler)
            val id = compiler.nextId()
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

        fun binaryOperatorGetter(function: Context<OperatorContext<BinaryOperatorArgument>, GetterContext>.(SourcedLine, SourcedLine) -> SourcedLine): Context<OperatorContext<BinaryOperatorArgument>, GetterContext>.() -> CodeGet = {
            val codeLeft = channel.value.left.mustGet(compiler)
            val codeRight = channel.value.right.mustGet(compiler)
            val id = compiler.nextId()
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
                val idVars = channel.value.nodes.indices.map { "v${compiler.nextId()}\$$it" }
                val idVarResult = "v${compiler.nextId()}\$result"
                val idLabel = "l" + compiler.nextId()
                val codesOperator = channel.value.types.indices.map { Node(channel.value.types[it], Unit, channel.value.locations[it]).mustCompare(compiler) }
                val codesTerm = channel.value.nodes.map { it.mustGet(compiler) }
                CodeGet(code {
                    line(!"let $idVarResult;")
                    line(!"$idLabel:")
                    line(!"{")
                    indent {
                        line(codesTerm[0].head)
                        line(!"const ${idVars[0]} = " + codesTerm[0].body + !";")
                        channel.value.types.indices.forEach { i ->
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

        fun binaryConditionOperatorGetter(function: Context<OperatorContext<BinaryOperatorArgument>, GetterContext>.(SourcedLine) -> SourcedLine): Context<OperatorContext<BinaryOperatorArgument>, GetterContext>.() -> CodeGet = {
            val codeLeft = channel.value.left.mustGet(compiler)
            val codeRight = compiler.aliases.stack { channel.value.right.mustGet(compiler) }
            val id = compiler.nextId()
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

        fun binaryConditionOperatorRunner(function: Context<OperatorContext<BinaryOperatorArgument>, Unit>.(SourcedLine) -> SourcedLine): Context<OperatorContext<BinaryOperatorArgument>, Unit>.() -> CodeRun = {
            val codeLeft = channel.value.left.mustGet(compiler)
            val codeRight = compiler.aliases.stack { channel.value.right.mustRun(compiler) }
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
            get(binaryConditionOperatorGetter { it + !" === undefined" })
            run(binaryConditionOperatorRunner { it + !" === undefined" })
        }
        exclamation_colon {
            get(binaryConditionOperatorGetter { it + !" !== undefined" })
            run(binaryConditionOperatorRunner { it + !" !== undefined" })
        }

        ternary_question_colon {
            get {
                val codeLeft = channel.value.left.mustGet(compiler)
                val codeCenter = compiler.aliases.stack { channel.value.center.mustGet(compiler) }
                val codeRight = compiler.aliases.stack { channel.value.right.mustGet(compiler) }
                val id = compiler.nextId()
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
                val codeLeft = channel.value.left.mustGet(compiler)
                val codeCenter = compiler.aliases.stack { channel.value.center.mustRun(compiler) }
                val codeRight = compiler.aliases.stack { channel.value.right.mustRun(compiler) }
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
                val codeLeft = channel.value.left.mustGet(compiler)
                val codeRight = compiler.aliases.stack { channel.value.right.mustGet(compiler) }
                val id = compiler.nextId()
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
                val codeLeft = channel.value.left.mustRun(compiler)
                val codeRight = compiler.aliases.stack { channel.value.right.mustRun(compiler) }
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

                val arguments = channel.value.left.let { node ->
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
                }.map { Argument(it.first, "v${compiler.nextId()}\$${it.first.replace("""[^a-zA-Z0-9_]""".toRegex(), "")}", it.second) }

                val codeRight = compiler.aliases.stack {
                    arguments.forEach { argument ->
                        compiler.aliases[argument.name] = Alias {
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
                    channel.value.right.mustGet(compiler)
                }
                val id = compiler.nextId()
                val idSymbol = compiler.nextId()
                val label = (domain.givenName ?: "<LAMBDA>") + " (<EVAL>:${location.row},${location.column})"
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
                if (channel.value.left.type == "identifier") {
                    val name = channel.value.left.value.unsafeCast<String>()
                    val internalName = name.replace("""[^a-zA-Z0-9_]""".toRegex(), "")
                    val id = compiler.nextId()
                    compiler.aliases[name] = Alias {
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
                    val codeRight = channel.value.right.mustGet(compiler, givenName = name)
                    CodeRun(code {
                        line(!"let v$id\$$internalName;")
                        line(codeRight.head)
                        line(!"v$id\$$internalName = " + codeRight.body + !";")
                    })
                } else {
                    throw Exception("Illegal Operator Argument: ${channel.value.left.type} : ${channel.value.right.type}")
                }
            }
        }

        equal {
            get {
                val id = compiler.nextId()
                val codeRight = channel.value.right.mustGet(compiler)
                val codeLeft = channel.value.left.mustSet(compiler).consumer(CodeGet(!"v$id"))
                CodeGet(code {
                    line(codeRight.head)
                    line(!"const v$id = " + codeRight.body + !";")
                    line(codeLeft.head)
                }, !"v$id")
            }
            run { channel.value.left.mustSet(compiler).consumer(channel.value.right.mustGet(compiler)) }
            objectInit {
                channel.value.left.maybe(identifier) { key ->
                    val codeRight = channel.value.right.mustGet(compiler)
                    return@objectInit CodeObjectInit { consumer ->
                        consumer(CodeGet(JSON.stringify(key) * channel.value.left.location), codeRight)
                    }
                }
                if (channel.value.left.isType(round)) {
                    val codeLeft = compiler.aliases.stack { channel.value.left.mustGet(compiler) }
                    val codeRight = channel.value.right.mustGet(compiler)
                    return@objectInit CodeObjectInit { consumer ->
                        consumer(codeLeft, codeRight)
                    }
                }
                throw Exception("Illegal Operator Argument: ${channel.value.left.type} = ${channel.value.right.type}")
            }
        }

        pipe {
            get {
                val codeLeft = channel.value.left.mustGet(compiler)
                val idArgument = compiler.nextId()
                val codeRight = compiler.aliases.stack {
                    compiler.aliases["_"] = Alias {
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
                    channel.value.right.mustGet(compiler)
                }
                val id = compiler.nextId()
                val idSymbol = compiler.nextId()
                val label = "<PIPE> (<EVAL>:${location.row},${location.column})"
                CodeGet(code {
                    line(codeLeft.head)
                    line(!"const v$idSymbol = Symbol(${JSON.stringify(label)});")
                    line(!"const v$id = runtime.map(" + codeLeft.body + !", {[v$idSymbol]: function(v$idArgument) {")
                    indent {
                        line(codeRight.head)
                        line(!"return " + codeRight.body + !";")
                    }
                    line(!"}}[v$idSymbol]);")
                }, !"v$id")
            }
            run {
                val codeLeft = channel.value.left.mustGet(compiler)
                val idArgument = compiler.nextId()
                val idArgument2 = compiler.nextId()
                val codeRight = compiler.aliases.stack {
                    compiler.aliases["_"] = Alias {
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
                    channel.value.right.mustRun(compiler)
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
                val codesLeft = channel.value.slice(0..channel.value.size - 2).map { it.mustRun(compiler) }
                val codeRight = channel.value[channel.value.size - 1].mustGet(compiler)
                CodeGet(code {
                    codesLeft.forEach {
                        line(it.head)
                    }
                    line(codeRight.head)
                }, codeRight.body)
            }
            run {
                val codes = channel.value.map { it.mustRun(compiler) }
                CodeRun(code {
                    codes.forEach {
                        line(it.head)
                    }
                })
            }
            arrayInit {
                val codes = channel.value.map { it.mustArrayInit(compiler) }
                CodeArrayInit { consumer ->
                    codes.forEach { code ->
                        code.generator(consumer)
                    }
                }
            }
            objectInit {
                val codes = channel.value.map { it.mustObjectInit(compiler) }
                CodeObjectInit { consumer ->
                    codes.forEach { code ->
                        code.generator(consumer)
                    }
                }
            }
        }
    }
    compiler.aliases.apply {
        "TRUE" { get { CodeGet(!"true") } }
        "FALSE" { get { CodeGet(!"false") } }
        "NULL" { get { CodeGet(!"null") } }
        "NAN" { get { CodeGet(!"NaN") } }
        "INFINITY" { get { CodeGet(!"Infinity") } }
        "UNDEFINED" { get { CodeGet(!"undefined") } }
        "THROW" { get { CodeGet(!"(message => { throw new Error(runtime.toString(message)); })") } }
        "OPERATOR_TO_STRING" { get { CodeGet(!"(runtime.symbolToString)") } }
        "OPERATOR_ADD" { get { CodeGet(!"(runtime.symbolAdd)") } }
        "OPERATOR_SUBTRACT" { get { CodeGet(!"(runtime.symbolSubtract)") } }
        "OPERATOR_MULTIPLY" { get { CodeGet(!"(runtime.symbolMultiply)") } }
        "OPERATOR_DIVIDE" { get { CodeGet(!"(runtime.symbolDivide)") } }
        "OPERATOR_STREAM" { get { CodeGet(!"(runtime.symbolStream)") } }
    }

    val code = nodeRoot.mustGet(compiler)
    val idSymbol = compiler.nextId()
    val label = "<ROOT> (<EVAL>)"
    val sourcedFile = code {
        line("(function(root, factory) {" * nullLocation)
        indent {
            line("if (typeof define === \"function\" && define.amd) {" * nullLocation)
            indent {
                line("define([\"exports\"], factory);" * nullLocation)
            }
            line("} else if (typeof exports === \"object\") {" * nullLocation)
            indent {
                line("factory(module.exports);" * nullLocation)
            }
            line("} else {" * nullLocation)
            indent {
                line("root.fl9_result = factory(typeof fl9_result === \"undefined\" ? {} : fl9_result);" * nullLocation)
            }
            line("}" * nullLocation)
        }
        line("}(this, function(_) {" * nullLocation)
        indent {
            line("\"use strict\";" * nullLocation)
            line("_.main = (v$idSymbol => ({[v$idSymbol]: function(runtime) {" * nullLocation)
            indent {
                line(code.head)
                line("return " * nullLocation + code.body + ";" * nullLocation)
            }
            line("}})[v$idSymbol])(Symbol(${JSON.stringify(label)}));" * nullLocation)
            line("return _;" * nullLocation)
        }
        line("}));" * nullLocation)
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

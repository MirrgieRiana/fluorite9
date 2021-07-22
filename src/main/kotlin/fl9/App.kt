package fl9

import fl9.channel.*
import fl9.domain.*
import fl9.operator.*

var createCompiler = { Compiler() }

var compile = { compiler: Compiler, node: Node ->
    val code = node.compile(compiler, getter)
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

var applyStandardOperatorPlugin = { compiler: Compiler ->
    compiler {
        operators {

            void {
                getter { GetterCode(!"(runtime.getVoid())") }
                runner { RunnerCode() }
                arrayInitializer { ArrayInitializerCode { } }
                objectInitializer { ObjectInitializerCode { } }
            }

            number { getter { GetterCode(!"(${channelContext.value})") } }
            string {
                getter {
                    if (channelContext.value.isEmpty()) {
                        GetterCode(!"\"\"")
                    } else {
                        val id = "v" + compiler.nextId()
                        GetterCode(code {
                            line(!"const $id = ${JSON.stringify(channelContext.value)};")
                        }, !id)
                    }
                }
            }
            join {
                getter {
                    if (channelContext.value.isEmpty()) {
                        GetterCode(!"\"\"")
                    } else {
                        class CodeStringInit(val head: SourcedFile, val body: SourcedLine)

                        val codes = channelContext.value.map { node ->
                            node.maybe(string) { string ->
                                return@map CodeStringInit(zeroFile, JSON.stringify(string).let { it.substring(1, it.length - 1) } * node.location)
                            }
                            val code = node.compile(compiler, getter)
                            return@map CodeStringInit(code.head, "\${runtime.toString(" * node.location + code.body + ")}" * node.location)
                        }
                        val id = "v" + compiler.nextId()
                        GetterCode(code {
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
                getter {
                    compiler[aliases][channelContext.value]?.get(getter)?.invoke(Context(compiler, location, Unit, domainContext)) ?: run {
                        val id = "v" + compiler.nextId()
                        GetterCode(code {
                            line(!"const $id = runtime.get(${JSON.stringify(channelContext.value)});")
                        }, !id)
                    }
                }
                setter {
                    compiler[aliases][channelContext.value]?.get(setter)?.invoke(Context(compiler, location, Unit, domainContext)) ?: run {
                        SetterCode { code ->
                            RunnerCode(code {
                                line(code.head)
                                line(!"runtime.set(${JSON.stringify(channelContext.value)}, " + code.body + !");")
                            })
                        }
                    }
                }
            }

            empty_round { getter { GetterCode(!"(runtime.getEmpty())") } }
            round {
                getter { compiler[aliases].stack { channelContext.value.main.compile(compiler, getter) } }
                runner { compiler[aliases].stack { channelContext.value.main.compile(compiler, runner) } }
            }
            empty_square {
                getter {
                    val id = compiler.nextId()
                    GetterCode(code {
                        line(!"const v$id = [];")
                    }, !"v$id")
                }
            }
            square {
                getter {
                    val codeMain = channelContext.value.main.compile(compiler, arrayInitializer)
                    val id = compiler.nextId()
                    val idItem = "v" + compiler.nextId()
                    GetterCode(code {
                        line(!"const v$id = [];")
                        codeMain.generator { code ->
                            line(code.head)
                            line(!"if (" + code.body + !" instanceof runtime.Fl9Stream) {")
                            indent {
                                line(!"for (let $idItem of " + code.body + !") {")
                                indent {
                                    line(!"v$id[v$id.length] = $idItem;")
                                }
                                line(!"}")
                            }
                            line(!"} else {")
                            indent {
                                line(!"v$id[v$id.length] = " + code.body + !";")
                            }
                            line(!"}")
                        }
                    }, !"v$id")
                }
            }
            empty_curly {
                getter {
                    val id = compiler.nextId()
                    GetterCode(code {
                        line(!"const v$id = {};")
                    }, !"v$id")
                }
            }
            curly {
                getter {
                    val codeMain = channelContext.value.main.compile(compiler, objectInitializer)
                    val id = compiler.nextId()
                    GetterCode(code {
                        line(!"const v$id = {};")
                        codeMain.generator { key, code ->
                            line(key.head)
                            line(code.head)
                            line(!"v$id[" + key.body + !"] = " + code.body + !";")
                        }
                    }, !"v$id")
                }
            }
            empty_dollar_round { getter { GetterCode(!"(runtime.getEmpty())") } }
            dollar_round { getter { compiler[aliases].stack { channelContext.value.main.compile(compiler, getter) } } }
            formatted_dollar_round {
                getter {
                    val formatter = channelContext.value.formatter
                    val code = compiler[aliases].stack { channelContext.value.main.compile(compiler, getter) }
                    val idString = "v" + compiler.nextId()
                    val id = "v" + compiler.nextId()
                    GetterCode(code {
                        line(code.head)
                        line(!"const $idString = runtime.toString(" + code.body + !");")
                        if (formatter.width != null) {
                            line(!"const $id = ${if (formatter.zero) "\"0\"" else "\" \""}.repeat(Math.max(${formatter.width} - $idString.length, 0)) + $idString;")
                        } else {
                            line(!"const $id = $idString;")
                        }
                    }, !id)
                }
            }

            period {
                getter {
                    let {
                        channelContext.value.right.maybe(identifier) { name ->
                            val codeLeft = channelContext.value.left.compile(compiler, getter)
                            val id = compiler.nextId()
                            return@let GetterCode(code {
                                line(codeLeft.head)
                                line(!"const v$id = " + codeLeft.body + !"[" + JSON.stringify(name) * channelContext.value.right.location + !"];")
                            }, !"v$id")
                        }
                        throw Exception("Illegal Operator Argument: ${channelContext.value.left.type}.${channelContext.value.right.type}")
                    }
                }
            }
            colon_colon {
                getter {
                    let {
                        channelContext.value.right.maybe(identifier) { name ->
                            val codeLeft = channelContext.value.left.compile(compiler, getter)
                            val id = "v" + compiler.nextId()
                            return@let GetterCode(code {
                                line(codeLeft.head)
                                line(!"const $id = runtime.createDelegate(" + codeLeft.body + !", " + JSON.stringify(name) * channelContext.value.right.location + !");")
                            }, !id)
                        }
                        throw Exception("Illegal Operator Argument: ${channelContext.value.left.type}::${channelContext.value.right.type}")
                    }
                }
            }

            data class ParseArgumentsResult(
                val codesMain: MutableList<GetterCode>,
                val codesMainNamed: MutableList<Triple<String, GetterCode, Location>>
            )

            fun <C, DI> Context<C, DI>.parseArguments(node: Node): ArgumentsGetterCode {

                // 引数列セミコロン解体
                val nodesMain = let {
                    node.maybe(semicolon) {
                        return@let it.toList()
                    }
                    return@let listOf(node)
                }

                // 引数列void解体
                val codesMain = mutableListOf<GetterCode>()
                val codesMainNamed = mutableListOf<Triple<String, GetterCode, Location>>()
                var namedMode = false
                nodesMain.forEach {
                    if (it.type == "void") {
                        if (!namedMode) {
                            codesMain += GetterCode(!"undefined")
                        }
                        // 名前付き引数モードになった場合はvoidは単に無視する
                    } else if (it.type == "colon") {
                        namedMode = true
                        val nodeKey = it.value.unsafeCast<BinaryOperatorArgument>().left
                        val nodeValue = it.value.unsafeCast<BinaryOperatorArgument>().right
                        if (nodeKey.type == "identifier") {
                            codesMainNamed += Triple(
                                nodeKey.value.unsafeCast<String>(),
                                compiler[aliases].stack { nodeValue.compile(compiler, getter) },
                                nodeKey.location
                            )
                        } else {
                            throw Exception("Illegal Argument Name: ${nodeKey.type}")
                        }
                    } else {
                        codesMain += compiler[aliases].stack { it.compile(compiler, getter) }
                    }
                }

                val codes = mutableListOf<ArgumentsGetterCode>()

                codesMain.forEach {
                    codes += it.toArgumentsGetter()
                }

                if (codesMainNamed.isNotEmpty()) {
                    val idObject = compiler.nextId()
                    codes += ArgumentsGetterCode(code {
                        line(!"const v$idObject = {};")
                        codesMainNamed.forEach {
                            line(it.second.head)
                            line(!"v$idObject[" + JSON.stringify(it.first) * it.third + !"] = " + it.second.body + !";")
                        }
                    }, listOf(!"v$idObject"))
                }

                return codes.concat()
            }
            right_empty_square {
                getter {
                    val codeFunction = channelContext.value.left.compile(compiler, getter)
                    val codeArguments = ArgumentsGetterCode()

                    val id = compiler.nextId()
                    GetterCode(code {
                        line(codeFunction.head)
                        line(codeArguments.head)
                        line(!"const v$id = runtime.apply(" + codeFunction.body + !", [" + codeArguments.bodies.reduceOrZero { left, right -> left + !", " + right } + !"]);")
                    }, !"v$id")
                }
            }
            right_square {
                getter {
                    val codeFunction = channelContext.value.left.compile(compiler, getter)
                    val codeArguments = parseArguments(channelContext.value.main)

                    val id = compiler.nextId()
                    GetterCode(code {
                        line(codeFunction.head)
                        line(codeArguments.head)
                        line(!"const v$id = runtime.apply(" + codeFunction.body + !", [" + codeArguments.bodies.reduceOrZero { left, right -> left + !", " + right } + !"]);")
                    }, !"v$id")
                }
            }
            right_empty_round {
                getter {
                    lateinit var codeFunction: GetterCode
                    lateinit var codeArguments: ArgumentsGetterCode
                    channelContext.value.left.let { node ->
                        node.maybe(right_empty_square) { value ->
                            codeFunction = value.left.compile(compiler, getter)
                            codeArguments = ArgumentsGetterCode()
                            return@let
                        }
                        node.maybe(right_square) { value ->
                            codeFunction = value.left.compile(compiler, getter)
                            codeArguments = parseArguments(value.main)
                            return@let
                        }
                        codeFunction = node.compile(compiler, getter)
                        codeArguments = ArgumentsGetterCode()
                    }

                    codeArguments += run {
                        val idArgument = "v" + compiler.nextId()
                        val codeMainContent = GetterCode(!"(runtime.getEmpty())")

                        val idFuntion = "v" + compiler.nextId()
                        val idSymbol = "v" + compiler.nextId()
                        val label = "<CLOSURE> (<EVAL>:${location.row},${location.column})"
                        ArgumentsGetterCode(code {
                            line(!"const $idSymbol = Symbol(${JSON.stringify(label)});")
                            line(!"const $idFuntion = {[$idSymbol]: function($idArgument) {")
                            indent {
                                line(codeMainContent.head)
                                line(!"return " + codeMainContent.body + !";")
                            }
                            line(!"}}[$idSymbol];")
                        }, listOf(!idFuntion))
                    }

                    val id = compiler.nextId()
                    GetterCode(code {
                        line(codeFunction.head)
                        line(codeArguments.head)
                        line(!"const v$id = runtime.apply(" + codeFunction.body + !", [" + codeArguments.bodies.reduceOrZero { left, right -> left + !", " + right } + !"]);")
                    }, !"v$id")
                }
            }
            right_round {
                getter {
                    lateinit var codeFunction: GetterCode
                    lateinit var codeArguments: ArgumentsGetterCode
                    channelContext.value.left.let { node ->
                        node.maybe(right_empty_square) { value ->
                            codeFunction = value.left.compile(compiler, getter)
                            codeArguments = ArgumentsGetterCode()
                            return@let
                        }
                        node.maybe(right_square) { value ->
                            codeFunction = value.left.compile(compiler, getter)
                            codeArguments = parseArguments(value.main)
                            return@let
                        }
                        codeFunction = node.compile(compiler, getter)
                        codeArguments = ArgumentsGetterCode()
                    }

                    codeArguments += run {
                        val idArgument = "v" + compiler.nextId()
                        val codeMainContent = compiler[aliases].stack {
                            compiler[aliases].apply {
                                "_" {
                                    getter { GetterCode(!idArgument) }
                                    setter {
                                        SetterCode { code ->
                                            RunnerCode(code {
                                                line(code.head)
                                                line(!"$idArgument = " + code.body + !";")
                                            })
                                        }
                                    }
                                }
                            }
                            channelContext.value.main.compile(compiler, getter)
                        }

                        val idFuntion = "v" + compiler.nextId()
                        val idSymbol = "v" + compiler.nextId()
                        val label = "<CLOSURE> (<EVAL>:${location.row},${location.column})"
                        ArgumentsGetterCode(code {
                            line(!"const $idSymbol = Symbol(${JSON.stringify(label)});")
                            line(!"const $idFuntion = {[$idSymbol]: function($idArgument) {")
                            indent {
                                line(codeMainContent.head)
                                line(!"return " + codeMainContent.body + !";")
                            }
                            line(!"}}[$idSymbol];")
                        }, listOf(!idFuntion))
                    }

                    val id = compiler.nextId()
                    GetterCode(code {
                        line(codeFunction.head)
                        line(codeArguments.head)
                        line(!"const v$id = runtime.apply(" + codeFunction.body + !", [" + codeArguments.bodies.reduceOrZero { left, right -> left + !", " + right } + !"]);")
                    }, !"v$id")
                }
            }

            fun leftUnaryOperatorGetter(function: Context<OperatorContext<LeftUnaryOperatorArgument>, GetterContext>.(SourcedLine) -> SourcedLine): Context<OperatorContext<LeftUnaryOperatorArgument>, GetterContext>.() -> GetterCode = {
                val codeRight = channelContext.value.right.compile(compiler, getter)
                val id = compiler.nextId()
                GetterCode(code {
                    line(codeRight.head)
                    line(!"const v$id = " + function(codeRight.body) + !";")
                }, !"v$id")
            }
            left_plus { getter(leftUnaryOperatorGetter { !"runtime.toNumber(" + it + !")" }) }
            left_minus { getter(leftUnaryOperatorGetter { !"-runtime.toNumber(" + it + !")" }) }
            left_ampersand { getter(leftUnaryOperatorGetter { !"runtime.toString(" + it + !")" }) }
            left_question { getter(leftUnaryOperatorGetter { !"runtime.toBoolean(" + it + !")" }) }
            left_exclamation { getter(leftUnaryOperatorGetter { !"!runtime.toBoolean(" + it + !")" }) }
            left_dollar_number { getter(leftUnaryOperatorGetter { !"runtime.getLength(" + it + !")" }) }
            left_dollar_ampersand { getter(leftUnaryOperatorGetter { !"runtime.toJson(" + it + !")" }) }
            left_dollar_asterisk { getter(leftUnaryOperatorGetter { !"runtime.fromJson(" + it + !")" }) }

            fun binaryOperatorGetter(function: Context<OperatorContext<BinaryOperatorArgument>, GetterContext>.(SourcedLine, SourcedLine) -> SourcedLine): Context<OperatorContext<BinaryOperatorArgument>, GetterContext>.() -> GetterCode = {
                val codeLeft = channelContext.value.left.compile(compiler, getter)
                val codeRight = channelContext.value.right.compile(compiler, getter)
                val id = compiler.nextId()
                GetterCode(code {
                    line(codeLeft.head)
                    line(codeRight.head)
                    line(!"const v$id = " + function(codeLeft.body, codeRight.body) + !";")
                }, !"v$id")
            }
            asterisk { getter(binaryOperatorGetter { left, right -> !"runtime.multiply(" + left + !", " + right + !")" }) }
            slash { getter(binaryOperatorGetter { left, right -> !"runtime.divide(" + left + !", " + right + !")" }) }
            plus { getter(binaryOperatorGetter { left, right -> !"runtime.add(" + left + !", " + right + !")" }) }
            minus { getter(binaryOperatorGetter { left, right -> !"runtime.subtract(" + left + !", " + right + !")" }) }
            period_period { getter(binaryOperatorGetter { left, right -> !"runtime.rangeClosed(" + left + !", " + right + !")" }) }
            tilde { getter(binaryOperatorGetter { left, right -> !"runtime.rangeOpened(" + left + !", " + right + !")" }) }

            comparison {
                getter {
                    val idVars = channelContext.value.nodes.indices.map { "v${compiler.nextId()}\$$it" }
                    val idVarResult = "v${compiler.nextId()}\$result"
                    val idLabel = "l" + compiler.nextId()
                    val codesOperator = channelContext.value.types.indices.map { Node(channelContext.value.types[it], Unit, channelContext.value.locations[it]).compile(compiler, comparator) }
                    val codesTerm = channelContext.value.nodes.map { it.compile(compiler, getter) }
                    GetterCode(code {
                        line(!"let $idVarResult;")
                        line(!"$idLabel:")
                        line(!"{")
                        indent {
                            line(codesTerm[0].head)
                            line(!"const ${idVars[0]} = " + codesTerm[0].body + !";")
                            channelContext.value.types.indices.forEach { i ->
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
            equal_equal { comparator { ComparatorCode { left, right -> left + !" == " + right } } }
            exclamation_equal { comparator { ComparatorCode { left, right -> left + !" != " + right } } }
            equal_equal_equal { comparator { ComparatorCode { left, right -> left + !" === " + right } } }
            exclamation_equal_equal { comparator { ComparatorCode { left, right -> left + !" !== " + right } } }
            greater { comparator { ComparatorCode { left, right -> left + !" > " + right } } }
            less { comparator { ComparatorCode { left, right -> left + !" < " + right } } }
            greater_equal { comparator { ComparatorCode { left, right -> left + !" >= " + right } } }
            less_equal { comparator { ComparatorCode { left, right -> left + !" <= " + right } } }

            fun binaryConditionOperatorGetter(function: Context<OperatorContext<BinaryOperatorArgument>, GetterContext>.(SourcedLine) -> SourcedLine): Context<OperatorContext<BinaryOperatorArgument>, GetterContext>.() -> GetterCode = {
                val codeLeft = channelContext.value.left.compile(compiler, getter)
                val codeRight = compiler[aliases].stack { channelContext.value.right.compile(compiler, getter) }
                val id = compiler.nextId()
                GetterCode(code {
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

            fun binaryConditionOperatorRunner(function: Context<OperatorContext<BinaryOperatorArgument>, Unit>.(SourcedLine) -> SourcedLine): Context<OperatorContext<BinaryOperatorArgument>, Unit>.() -> RunnerCode = {
                val codeLeft = channelContext.value.left.compile(compiler, getter)
                val codeRight = compiler[aliases].stack { channelContext.value.right.compile(compiler, runner) }
                RunnerCode(code {
                    line(codeLeft.head)
                    line(!"if (" + function(codeLeft.body) + !") {")
                    indent {
                        line(codeRight.head)
                    }
                    line(!"}")
                })
            }
            ampersand_ampersand {
                getter(binaryConditionOperatorGetter { !"runtime.toBoolean(" + it + !")" })
                runner(binaryConditionOperatorRunner { !"runtime.toBoolean(" + it + !")" })
            }
            pipe_pipe {
                getter(binaryConditionOperatorGetter { !"!runtime.toBoolean(" + it + !")" })
                runner(binaryConditionOperatorRunner { !"!runtime.toBoolean(" + it + !")" })
            }
            question_colon {
                getter(binaryConditionOperatorGetter { it + !" === undefined" })
                runner(binaryConditionOperatorRunner { it + !" === undefined" })
            }
            exclamation_colon {
                getter(binaryConditionOperatorGetter { it + !" !== undefined" })
                runner(binaryConditionOperatorRunner { it + !" !== undefined" })
            }

            ternary_question_colon {
                getter {
                    val codeLeft = channelContext.value.left.compile(compiler, getter)
                    val codeCenter = compiler[aliases].stack { channelContext.value.center.compile(compiler, getter) }
                    val codeRight = compiler[aliases].stack { channelContext.value.right.compile(compiler, getter) }
                    val id = compiler.nextId()
                    GetterCode(code {
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
                runner {
                    val codeLeft = channelContext.value.left.compile(compiler, getter)
                    val codeCenter = compiler[aliases].stack { channelContext.value.center.compile(compiler, runner) }
                    val codeRight = compiler[aliases].stack { channelContext.value.right.compile(compiler, runner) }
                    RunnerCode(code {
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
                getter {
                    val codeLeft = channelContext.value.left.compile(compiler, getter)
                    val codeRight = compiler[aliases].stack { channelContext.value.right.compile(compiler, getter) }
                    val id = compiler.nextId()
                    GetterCode(code {
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
                runner {
                    val codeLeft = channelContext.value.left.compile(compiler, runner)
                    val codeRight = compiler[aliases].stack { channelContext.value.right.compile(compiler, runner) }
                    RunnerCode(code {
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

            comma {
                getter {
                    val codes = channelContext.value.mapNotNull {
                        it.maybe(void) {
                            return@mapNotNull null
                        }
                        return@mapNotNull it.compile(compiler, getter)
                    }
                    val id = "v" + compiler.nextId()
                    GetterCode(code {
                        codes.forEach {
                            line(it.head)
                        }
                        line(!"const $id = runtime.createStream([" + codes
                            .map { it.body }
                            .reduceOrZero { a, b -> a + !", " + b } + !"]);")
                    }, !id)
                }
            }


            minus_greater {
                getter {

                    class Argument(val name: String, val code: String, val location: Location)

                    val arguments = channelContext.value.left.let { node ->
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

                    val codeRight = compiler[aliases].stack {
                        arguments.forEach { argument ->
                            compiler[aliases].apply {
                                argument.name {
                                    getter { GetterCode(!argument.code) }
                                    setter {
                                        SetterCode { code ->
                                            RunnerCode(code {
                                                line(code.head)
                                                line(!"${argument.code} = " + code.body + !";")
                                            })
                                        }
                                    }
                                }
                            }
                        }
                        channelContext.value.right.compile(compiler, getter)
                    }
                    val id = compiler.nextId()
                    val idSymbol = compiler.nextId()
                    val label = (domainContext.givenName ?: "<LAMBDA>") + " (<EVAL>:${location.row},${location.column})"
                    GetterCode(code {
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
                runner {
                    if (channelContext.value.left.type == "identifier") {
                        val name = channelContext.value.left.value.unsafeCast<String>()
                        val internalName = name.replace("""[^a-zA-Z0-9_]""".toRegex(), "")
                        val id = compiler.nextId()
                        compiler[aliases].apply {
                            name {
                                getter { GetterCode(!"v$id\$$internalName") }
                                setter {
                                    SetterCode { code ->
                                        RunnerCode(code {
                                            line(code.head)
                                            line(!"v$id\$$internalName = " + code.body + !";")
                                        })
                                    }
                                }
                            }
                        }
                        val codeRight = channelContext.value.right.compile(compiler, getter) { givenName = name }
                        RunnerCode(code {
                            line(!"let v$id\$$internalName;")
                            line(codeRight.head)
                            line(!"v$id\$$internalName = " + codeRight.body + !";")
                        })
                    } else {
                        throw Exception("Illegal Operator Argument: ${channelContext.value.left.type} : ${channelContext.value.right.type}")
                    }
                }
            }

            equal {
                getter {
                    val id = compiler.nextId()
                    val codeRight = channelContext.value.right.compile(compiler, getter)
                    val codeLeft = channelContext.value.left.compile(compiler, setter).consumer(GetterCode(!"v$id"))
                    GetterCode(code {
                        line(codeRight.head)
                        line(!"const v$id = " + codeRight.body + !";")
                        line(codeLeft.head)
                    }, !"v$id")
                }
                runner { channelContext.value.left.compile(compiler, setter).consumer(channelContext.value.right.compile(compiler, getter)) }
                objectInitializer {
                    channelContext.value.left.maybe(identifier) { key ->
                        val codeRight = channelContext.value.right.compile(compiler, getter)
                        return@objectInitializer ObjectInitializerCode { consumer ->
                            consumer(GetterCode(JSON.stringify(key) * channelContext.value.left.location), codeRight)
                        }
                    }
                    if (channelContext.value.left.isType(round)) {
                        val codeLeft = compiler[aliases].stack { channelContext.value.left.compile(compiler, getter) }
                        val codeRight = channelContext.value.right.compile(compiler, getter)
                        return@objectInitializer ObjectInitializerCode { consumer ->
                            consumer(codeLeft, codeRight)
                        }
                    }
                    throw Exception("Illegal Operator Argument: ${channelContext.value.left.type} = ${channelContext.value.right.type}")
                }
            }

            pipe {
                getter {
                    val codeLeft = channelContext.value.left.compile(compiler, getter)

                    data class Receiver(val name: String, val node: Node)
                    val (name, nodeBody) = run {
                        channelContext.value.right.maybe(equal_greater) { value2 ->
                            value2.left.maybe(identifier) { name ->
                                return@run Receiver(name, value2.right)
                            }
                            throw Exception("Illegal Operator Argument: ${value2.left.type} => ${value2.right.type}")
                        }
                        return@run Receiver("_", channelContext.value.right)
                    }

                    val idArgument = "v" + compiler.nextId()

                    val codeRight = compiler[aliases].stack {
                        compiler[aliases].apply {
                            name {
                                getter { GetterCode(!idArgument) }
                                setter {
                                    SetterCode { code ->
                                        RunnerCode(code {
                                            line(code.head)
                                            line(!"$idArgument = " + code.body + !";")
                                        })
                                    }
                                }
                            }
                        }
                        nodeBody.compile(compiler, getter)
                    }

                    val id = "v" + compiler.nextId()
                    val idSymbol = "v" + compiler.nextId()
                    val label = "<PIPE> (<EVAL>:${location.row},${location.column})"
                    GetterCode(code {
                        line(codeLeft.head)
                        line(!"const $idSymbol = Symbol(${JSON.stringify(label)});")
                        line(!"const $id = runtime.map(" + codeLeft.body + !", {[$idSymbol]: function($idArgument) {")
                        indent {
                            line(codeRight.head)
                            line(!"return " + codeRight.body + !";")
                        }
                        line(!"}}[$idSymbol]);")
                    }, !id)
                }
                runner {
                    val codeLeft = channelContext.value.left.compile(compiler, getter)

                    data class Receiver(val name: String, val node: Node)
                    val (name, nodeBody) = run {
                        channelContext.value.right.maybe(equal_greater) { value2 ->
                            value2.left.maybe(identifier) { name ->
                                return@run Receiver(name, value2.right)
                            }
                            throw Exception("Illegal Operator Argument: ${value2.left.type} => ${value2.right.type}")
                        }
                        return@run Receiver("_", channelContext.value.right)
                    }

                    val idArgument = "v" + compiler.nextId()

                    val codeRight = compiler[aliases].stack {
                        compiler[aliases].apply {
                            name {
                                getter { GetterCode(!idArgument) }
                                setter {
                                    SetterCode { code ->
                                        RunnerCode(code {
                                            line(code.head)
                                            line(!"$idArgument = " + code.body + !";")
                                        })
                                    }
                                }
                            }
                        }
                        nodeBody.compile(compiler, runner)
                    }

                    val idArgument2 = "v" + compiler.nextId()
                    RunnerCode(code {
                        line(codeLeft.head)
                        line(!"for (let $idArgument2 of runtime.toStream(" + codeLeft.body + !")) {")
                        indent {
                            line(!"let $idArgument = $idArgument2;")
                            line(codeRight.head)
                        }
                        line(!"}")
                    })
                }
            }

            semicolon {
                getter {
                    val codesLeft = channelContext.value.slice(0..channelContext.value.size - 2).map { it.compile(compiler, runner) }
                    val codeRight = channelContext.value[channelContext.value.size - 1].compile(compiler, getter)
                    GetterCode(code {
                        codesLeft.forEach {
                            line(it.head)
                        }
                        line(codeRight.head)
                    }, codeRight.body)
                }
                runner {
                    val codes = channelContext.value.map { it.compile(compiler, runner) }
                    RunnerCode(code {
                        codes.forEach {
                            line(it.head)
                        }
                    })
                }
                arrayInitializer {
                    val codes = channelContext.value.map { it.compile(compiler, arrayInitializer) }
                    ArrayInitializerCode { consumer ->
                        codes.forEach { code ->
                            code.generator(consumer)
                        }
                    }
                }
                objectInitializer {
                    val codes = channelContext.value.map { it.compile(compiler, objectInitializer) }
                    ObjectInitializerCode { consumer ->
                        codes.forEach { code ->
                            code.generator(consumer)
                        }
                    }
                }
            }

        }
    }
}

var applyEnglishKeywordPlugin = { compiler: Compiler ->
    compiler {
        aliases {
            "TRUE" { getter { GetterCode(!"true") } }
            "FALSE" { getter { GetterCode(!"false") } }
            "NULL" { getter { GetterCode(!"null") } }
            "NAN" { getter { GetterCode(!"NaN") } }
            "INFINITY" { getter { GetterCode(!"Infinity") } }
            "UNDEFINED" { getter { GetterCode(!"undefined") } }
            "THROW" { getter { GetterCode(!"(message => { throw new Error(runtime.toString(message)); })") } }
            "OPERATOR_TO_NUMBER" { getter { GetterCode(!"(runtime.symbolToNumber)") } }
            "OPERATOR_TO_STRING" { getter { GetterCode(!"(runtime.symbolToString)") } }
            "OPERATOR_TO_BOOLEAN" { getter { GetterCode(!"(runtime.symbolToBoolean)") } }
            "OPERATOR_ADD" { getter { GetterCode(!"(runtime.symbolAdd)") } }
            "OPERATOR_SUBTRACT" { getter { GetterCode(!"(runtime.symbolSubtract)") } }
            "OPERATOR_MULTIPLY" { getter { GetterCode(!"(runtime.symbolMultiply)") } }
            "OPERATOR_DIVIDE" { getter { GetterCode(!"(runtime.symbolDivide)") } }
        }
    }
}

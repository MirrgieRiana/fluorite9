package fl9

import fl9.token.Token


class CodeGet(val head: String, val body: String)
class CodeRun(val head: String)
class CodeSet(val consumer: (CodeGet) -> CodeRun)
class CodeArrayInit(val generator: ((CodeGet) -> Unit) -> Unit)
class CodeObjectInit(val generator: ((CodeGet, CodeGet) -> Unit) -> Unit)
class CodeCompare(val comparator: (String, String) -> String)


class DomainSlot<A, C> {
    private var value: (A.() -> C)? = null
    operator fun invoke(value: A.() -> C) {
        this.value = value
    }

    operator fun invoke(argument: A) = value?.let { argument.it() }
}


class OperatorCompilerArgument<V>(val context: Context, val value: V)

class Operator<V> {
    val get = DomainSlot<OperatorCompilerArgument<V>, CodeGet>()
    val run = DomainSlot<OperatorCompilerArgument<V>, CodeRun>()
    val set = DomainSlot<OperatorCompilerArgument<V>, CodeSet>()
    val arrayInit = DomainSlot<OperatorCompilerArgument<V>, CodeArrayInit>()
    val objectInit = DomainSlot<OperatorCompilerArgument<V>, CodeObjectInit>()
    val compare = DomainSlot<OperatorCompilerArgument<V>, CodeCompare>()

    constructor() {

    }

    constructor(block: Operator<V>.() -> Unit) {
        block()
    }
}

class OperatorRegistry : Registry<Operator<out Any>>() {
    operator fun <V> Token<V>.invoke(block: Operator<V>.() -> Unit) {
        val operator = Operator<V>()
        this@OperatorRegistry[type] = operator.unsafeCast<Operator<out Any>>() // TODO 型安全
        operator.block()
    }
}


class AliasCompilerArgument(val context: Context)

class Alias {
    val get = DomainSlot<AliasCompilerArgument, CodeGet>()
    val run = DomainSlot<AliasCompilerArgument, CodeRun>()
    val set = DomainSlot<AliasCompilerArgument, CodeSet>()
    val arrayInit = DomainSlot<AliasCompilerArgument, CodeArrayInit>()
    val objectInit = DomainSlot<AliasCompilerArgument, CodeObjectInit>()
    val compare = DomainSlot<AliasCompilerArgument, CodeCompare>()

    constructor() {

    }

    constructor(block: Alias.() -> Unit) {
        block()
    }
}

class AliasRegistry : FramedRegistry<Alias>() {
    operator fun String.invoke(block: Alias.() -> Unit) {
        val alias = Alias()
        this@AliasRegistry[this] = alias
        alias.block()
    }
}


class Context {

    val operators = OperatorRegistry()
    val aliases = AliasRegistry()

    private var nextId: Int = 0
    fun nextId(): Int {
        val nextId2 = nextId
        nextId++
        return nextId2
    }

}

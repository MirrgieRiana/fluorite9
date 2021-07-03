package fl9

import fl9.token.Token


class CodeGet(val head: SourcedFile, val body: SourcedLine) {
    constructor(body: SourcedLine) : this(SourcedFile(listOf()), body)
}

class CodeRun(val head: SourcedFile) {
    constructor() : this(SourcedFile(listOf()))
}

class CodeSet(val consumer: (CodeGet) -> CodeRun)
class CodeArrayInit(val generator: ((CodeGet) -> Unit) -> Unit)
class CodeObjectInit(val generator: ((CodeGet, CodeGet) -> Unit) -> Unit)
class CodeCompare(val comparator: (SourcedLine, SourcedLine) -> SourcedLine)


class DomainSlot<A, C> {
    private var value: (A.() -> C)? = null
    operator fun invoke(value: A.() -> C) {
        this.value = value
    }

    operator fun invoke(argument: A) = value?.let { argument.it() }
}


class Context<C>(val compiler: Compiler, val location: Location, val channel: C) {
    operator fun String.not(): SourcedLine {
        if (contains("\n")) throw Exception("SourcedString cannot have line breaks")
        return SourcedLine(listOf(SourcedString(this, location)))
    }
}


class OperatorCompilerArgument<V>(val value: V)

class Operator<V> {
    val get = DomainSlot<Context<OperatorCompilerArgument<V>>, CodeGet>()
    val run = DomainSlot<Context<OperatorCompilerArgument<V>>, CodeRun>()
    val set = DomainSlot<Context<OperatorCompilerArgument<V>>, CodeSet>()
    val arrayInit = DomainSlot<Context<OperatorCompilerArgument<V>>, CodeArrayInit>()
    val objectInit = DomainSlot<Context<OperatorCompilerArgument<V>>, CodeObjectInit>()
    val compare = DomainSlot<Context<OperatorCompilerArgument<V>>, CodeCompare>()

    constructor()

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


class AliasCompilerArgument

class Alias {
    val get = DomainSlot<Context<AliasCompilerArgument>, CodeGet>()
    val run = DomainSlot<Context<AliasCompilerArgument>, CodeRun>()
    val set = DomainSlot<Context<AliasCompilerArgument>, CodeSet>()
    val arrayInit = DomainSlot<Context<AliasCompilerArgument>, CodeArrayInit>()
    val objectInit = DomainSlot<Context<AliasCompilerArgument>, CodeObjectInit>()
    val compare = DomainSlot<Context<AliasCompilerArgument>, CodeCompare>()

    constructor()

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


class Compiler {

    val operators = OperatorRegistry()
    val aliases = AliasRegistry()

    private var nextId: Int = 0
    fun nextId(): Int {
        val nextId2 = nextId
        nextId++
        return nextId2
    }

}

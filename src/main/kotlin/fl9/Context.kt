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


class OperatorCompilerArgument<V>(val compiler: Compiler, val value: V, val location: Location) {
    operator fun String.not(): SourcedLine {
        if (contains("\n")) throw Exception("SourcedString cannot have line breaks")
        return SourcedLine(listOf(SourcedString(this, location)))
    }
}

class Operator<V> {
    val get = DomainSlot<OperatorCompilerArgument<V>, CodeGet>()
    val run = DomainSlot<OperatorCompilerArgument<V>, CodeRun>()
    val set = DomainSlot<OperatorCompilerArgument<V>, CodeSet>()
    val arrayInit = DomainSlot<OperatorCompilerArgument<V>, CodeArrayInit>()
    val objectInit = DomainSlot<OperatorCompilerArgument<V>, CodeObjectInit>()
    val compare = DomainSlot<OperatorCompilerArgument<V>, CodeCompare>()

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


class AliasCompilerArgument(val compiler: Compiler, val location: Location) {
    operator fun String.not(): SourcedLine {
        if (contains("\n")) throw Exception("SourcedString cannot have line breaks")
        return SourcedLine(listOf(SourcedString(this, location)))
    }
}

class Alias {
    val get = DomainSlot<AliasCompilerArgument, CodeGet>()
    val run = DomainSlot<AliasCompilerArgument, CodeRun>()
    val set = DomainSlot<AliasCompilerArgument, CodeSet>()
    val arrayInit = DomainSlot<AliasCompilerArgument, CodeArrayInit>()
    val objectInit = DomainSlot<AliasCompilerArgument, CodeObjectInit>()
    val compare = DomainSlot<AliasCompilerArgument, CodeCompare>()

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

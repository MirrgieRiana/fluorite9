package fl9

import fl9.token.Token


class GetterCode(val head: SourcedFile, val body: SourcedLine) {
    constructor(body: SourcedLine) : this(zeroFile, body)
}

class RunnerCode(val head: SourcedFile) {
    constructor() : this(zeroFile)
}

class SetterCode(val consumer: (GetterCode) -> RunnerCode)
class ArrayInitializerCode(val generator: ((GetterCode) -> Unit) -> Unit)
class ObjectInitializerCode(val generator: ((GetterCode, GetterCode) -> Unit) -> Unit)
class ComparatorCode(val comparator: (SourcedLine, SourcedLine) -> SourcedLine)

class GetterContext(val givenName: String? = null)


class DomainSlot<A, C> {
    private var value: (A.() -> C)? = null
    operator fun invoke(value: A.() -> C) {
        this.value = value
    }

    operator fun invoke(argument: A) = value?.let { argument.it() }
}


class Context<C, D>(val compiler: Compiler, val location: Location, val channel: C, val domain: D) {
    operator fun String.not(): SourcedLine {
        if (contains("\n")) throw Exception("SourcedString cannot have line breaks")
        return SourcedLine(listOf(SourcedString(this, location)))
    }
}


class OperatorContext<V>(val value: V)

class Operator<V> {
    val getter = DomainSlot<Context<OperatorContext<V>, GetterContext>, GetterCode>()
    val runner = DomainSlot<Context<OperatorContext<V>, Unit>, RunnerCode>()
    val setter = DomainSlot<Context<OperatorContext<V>, Unit>, SetterCode>()
    val arrayInitializer = DomainSlot<Context<OperatorContext<V>, Unit>, ArrayInitializerCode>()
    val objectInitializer = DomainSlot<Context<OperatorContext<V>, Unit>, ObjectInitializerCode>()
    val comparator = DomainSlot<Context<OperatorContext<V>, Unit>, ComparatorCode>()

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


class AliasContext

class Alias {
    val getter = DomainSlot<Context<AliasContext, GetterContext>, GetterCode>()
    val runner = DomainSlot<Context<AliasContext, Unit>, RunnerCode>()
    val setter = DomainSlot<Context<AliasContext, Unit>, SetterCode>()
    val arrayInitializer = DomainSlot<Context<AliasContext, Unit>, ArrayInitializerCode>()
    val objectInitializer = DomainSlot<Context<AliasContext, Unit>, ObjectInitializerCode>()
    val comparator = DomainSlot<Context<AliasContext, Unit>, ComparatorCode>()

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

package fl9

import fl9.domain.DomainType
import fl9.token.Token


class Context<C, DI>(val compiler: Compiler, val location: Location, val channel: C, val domainContext: DI) {
    operator fun String.not(): SourcedLine {
        if (contains("\n")) throw Exception("SourcedString cannot have line breaks")
        return SourcedLine(listOf(SourcedString(this, location)))
    }
}


class OperatorContext<V>(val value: V)

class Operator<V> {
    constructor()
    constructor(block: Operator<V>.() -> Unit) {
        block()
    }

    private val registry = mutableMapOf<DomainType<*, *>, Any>()
    operator fun <I, O> DomainType<I, O>.invoke(handler: Context<OperatorContext<V>, I>.() -> O) {
        registry[this] = handler
    }

    operator fun <I, O> get(domainType: DomainType<I, O>) = registry[domainType]?.unsafeCast<Context<OperatorContext<V>, I>.() -> O>() // TODO 型安全
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
    constructor()
    constructor(block: Alias.() -> Unit) {
        block()
    }

    private val registry = mutableMapOf<DomainType<*, *>, Any>()
    operator fun <I, O> DomainType<I, O>.invoke(handler: Context<AliasContext, I>.() -> O) {
        registry[this] = handler
    }

    operator fun <I, O> get(domainType: DomainType<I, O>) = registry[domainType]?.unsafeCast<Context<AliasContext, I>.() -> O>() // TODO 型安全
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

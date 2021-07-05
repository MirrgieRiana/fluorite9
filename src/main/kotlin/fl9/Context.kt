package fl9

import fl9.domain.DomainType
import fl9.domain.Domain


class Context<C, DI>(val compiler: Compiler, val location: Location, val channel: C, val domainContext: DI) {
    operator fun String.not(): SourcedLine {
        if (contains("\n")) throw Exception("SourcedString cannot have line breaks")
        return SourcedLine(listOf(SourcedString(this, location)))
    }
}

class DomainBundle<I> {
    constructor()
    constructor(block: DomainBundle<I>.() -> Unit) {
        block()
    }

    operator fun <DI, O> DomainType<DI, O>.invoke(handler: Context<I, DI>.() -> O) {
        registry[this] = handler
    }

    operator fun <DI, O> get(domainType: DomainType<DI, O>) = registry[domainType]?.unsafeCast<Context<I, DI>.() -> O>() // TODO 型安全
}


class OperatorContext<V>(val value: V)

class OperatorRegistry : Registry<DomainBundle<OperatorContext<out Any>>>() {
    operator fun <V> Token<V>.invoke(block: DomainBundle<OperatorContext<V>>.() -> Unit) {
        val operator = DomainBundle<OperatorContext<V>>()
        this@OperatorRegistry[type] = operator.unsafeCast<DomainBundle<OperatorContext<out Any>>>() // TODO 型安全
        operator.block()
    }
}


class AliasContext

class AliasRegistry : FramedRegistry<DomainBundle<AliasContext>>() {
    operator fun String.invoke(block: DomainBundle<AliasContext>.() -> Unit) {
        val alias = DomainBundle<AliasContext>()
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

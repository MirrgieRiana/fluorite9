package fl9

import fl9.channel.Channel
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


    private val map = mutableMapOf<Domain<*, *>, Any>()
    operator fun <DI, O> Domain<DI, O>.invoke(handler: Context<I, DI>.() -> O) {
        map[this] = handler
    }

    operator fun <DI, O> get(domain: Domain<DI, O>) = map[domain]?.unsafeCast<Context<I, DI>.() -> O>() // TODO 型安全

}

class Compiler {

    private val map = mutableMapOf<Channel<*>, Any>()
    operator fun invoke(block: Compiler.() -> Unit) = block()
    operator fun <S> Channel<S>.invoke(block: S.() -> Unit) {
        this@Compiler[this].block()
    }

    operator fun <S> get(channel: Channel<S>) = map.getOrPut(channel) { channel.createChannel().unsafeCast<Any>() }.unsafeCast<S>() // TODO 型安全()


    private var nextId: Int = 0
    fun nextId(): Int {
        val nextId2 = nextId
        nextId++
        return nextId2
    }

}

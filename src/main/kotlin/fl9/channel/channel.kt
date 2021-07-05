package fl9.channel

import fl9.DomainBundle
import fl9.FramedRegistry
import fl9.Registry
import fl9.operator.Operator

abstract class Channel<S> {
    abstract fun createChannel(): S
}


// TODO rename
val operators = object : Channel<OperatorChannel>() {
    override fun createChannel() = OperatorChannel()
}

class OperatorChannel : Registry<DomainBundle<OperatorContext<out Any>>>() {
    operator fun <V> Operator<V>.invoke(block: DomainBundle<OperatorContext<V>>.() -> Unit) {
        val operator = DomainBundle<OperatorContext<V>>()
        operator.block()
        this@OperatorChannel[type] = operator.unsafeCast<DomainBundle<OperatorContext<out Any>>>() // TODO 型安全
    }
}

class OperatorContext<V>(val value: V)


// TODO rename
val aliases = object : Channel<AliasChannel>() {
    override fun createChannel() = AliasChannel()
}

class AliasChannel : FramedRegistry<DomainBundle<AliasContext>>() {
    operator fun String.invoke(block: DomainBundle<AliasContext>.() -> Unit) {
        val alias = DomainBundle<AliasContext>()
        this@AliasChannel[this] = alias
        alias.block()
    }
}

class AliasContext

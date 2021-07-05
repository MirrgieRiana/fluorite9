package fl9.channel

import fl9.DomainBundle
import fl9.operator.Operator

abstract class Channel<R> {
    abstract fun createChannel(): R
}


val operators = object : Channel<OperatorChannel>() {
    override fun createChannel() = OperatorChannel()
}

class OperatorChannel {

    private val map = mutableMapOf<String, Any>()

    operator fun get(key: String) = map[key]?.unsafeCast<DomainBundle<OperatorContext<*>>>() // TODO 型安全

    operator fun <V> Operator<V>.invoke(block: DomainBundle<OperatorContext<V>>.() -> Unit) {
        val domainBundle = DomainBundle<OperatorContext<V>>()
        domainBundle.block()
        map[type] = domainBundle
    }

}

class OperatorContext<V>(val value: V)


val aliases = object : Channel<AliasChannel>() {
    override fun createChannel() = AliasChannel()
}

class AliasChannel {

    class Frame(val parent: Frame?) {

        private val map = mutableMapOf<String, DomainBundle<Unit>>()

        operator fun get(key: String): DomainBundle<Unit>? = map[key] ?: parent?.get(key)

        operator fun set(key: String, value: DomainBundle<Unit>) {
            map[key] = value
        }

    }

    private var frame = Frame(null)

    operator fun get(key: String) = frame[key]

    operator fun String.invoke(block: DomainBundle<Unit>.() -> Unit) {
        val domainBundle = DomainBundle<Unit>()
        domainBundle.block()
        frame[this] = domainBundle
    }

    fun push() {
        frame = Frame(frame)
    }

    fun pop() {
        frame = frame.parent ?: throw Error("Null parent access")
    }

    inline fun <T> stack(block: () -> T): T {
        push()
        val result = block()
        pop()
        return result
    }

}

package fl9.channel

import fl9.Channel
import fl9.DomainBundle


val operators = object : Channel<OperatorRegistry>() {
    override fun createChannel() = OperatorRegistry()
}

class OperatorRegistry {

    private val map = mutableMapOf<String, Any>()

    operator fun get(key: String) = map[key]?.unsafeCast<DomainBundle<OperatorContext<*>>>() // TODO 型安全

    operator fun <V> Operator<V>.invoke(block: DomainBundle<OperatorContext<V>>.() -> Unit) {
        val domainBundle = DomainBundle<OperatorContext<V>>()
        domainBundle.block()
        map[type] = domainBundle
    }

}

class Operator<I>(val type: String)

class OperatorContext<V>(val value: V)


val aliases = object : Channel<AliasRegistry>() {
    override fun createChannel() = AliasRegistry()
}

class AliasRegistry {

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

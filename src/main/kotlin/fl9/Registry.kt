package fl9

open class Registry<T> {
    private var map: MutableMap<String, T> = mutableMapOf()
    operator fun get(key: String) = map[key]
    operator fun set(key: String, value: T) {
        map[key] = value
    }
}

class Frame<K, V> {
    val parent: Frame<K, V>?
    private val map: MutableMap<K, V> = mutableMapOf()

    constructor() {
        this.parent = null
    }

    constructor(parent: Frame<K, V>) {
        this.parent = parent
    }

    operator fun get(key: K): V? = map[key] ?: parent?.get(key)

    operator fun set(key: K, value: V) {
        map[key] = value
    }
}

open class FramedRegistry<T> {
    private var frame: Frame<String, T> = Frame()
    operator fun get(key: String) = frame[key]
    operator fun set(key: String, value: T) {
        frame[key] = value
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

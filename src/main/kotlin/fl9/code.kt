package fl9

fun code(block: CodeScope.() -> Unit): String {
    val strings = mutableListOf<String>()
    object : CodeScope {
        override fun accept(string: String) {
            strings += string
        }
    }.block()
    return strings.joinToString("")
}

interface CodeScope {
    fun accept(string: String)
    operator fun String.not() = accept(this)
    operator fun Iterable<String>.not() = forEach { accept(it) }
    fun indent(block: CodeScope.() -> Unit) = accept("  " + code(block).replace("""\n(?!$)""".toRegex(), "\n  "))
}

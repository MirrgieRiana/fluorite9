package fl9


class Location(val row: Int, val column: Int)

val nullLocation = Location(-1, -1)


class SourcedString(val string: String, val location: Location) {
    @Deprecated("", ReplaceWith(""), DeprecationLevel.ERROR)
    override fun toString() = throw Error()
}


class SourcedLine(val sourcesStrings: List<SourcedString>) {
    @Deprecated("", ReplaceWith(""), DeprecationLevel.ERROR)
    override fun toString() = throw Error()
}

operator fun String.times(location: Location): SourcedLine {
    if (contains("\n")) throw Exception("SourcedString cannot have line breaks")
    return SourcedLine(listOf(SourcedString(this, location)))
}

operator fun SourcedLine.plus(right: SourcedLine) = SourcedLine(sourcesStrings + right.sourcesStrings)

val zeroLine = SourcedLine(listOf())

inline fun Iterable<SourcedLine>.reduceOrZero(operation: (SourcedLine, SourcedLine) -> SourcedLine) = reduceOrNull(operation) ?: zeroLine


class SourcedFile(val sourcedLines: List<SourcedLine>) {
    @Deprecated("", ReplaceWith(""), DeprecationLevel.ERROR)
    override fun toString() = throw Error()
}

val zeroFile = SourcedFile(listOf())


fun code(block: CodeScope.() -> Unit): SourcedFile {
    val sourcedLines = mutableListOf<SourcedLine>()
    object : CodeScope {
        override fun line(sourcedLine: SourcedLine) {
            sourcedLines += sourcedLine
        }
    }.block()
    return SourcedFile(sourcedLines)
}

interface CodeScope {
    fun line(sourcedLine: SourcedLine)
    fun line(sourcedFile: SourcedFile) = sourcedFile.sourcedLines.forEach { line(it) }
    fun indent(block: CodeScope.() -> Unit) = code(block).sourcedLines.forEach { line("  " * nullLocation + it) }
}

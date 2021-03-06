package fl9.domain

import fl9.*


val getter = object : Domain<GetterContext, GetterCode>("getter") {
    override fun createDomainContext() = GetterContext()
}

class GetterContext {
    var givenName: String? = null
}

class GetterCode(val head: SourcedFile, val body: SourcedLine) {
    constructor(body: SourcedLine) : this(zeroFile, body)
}


val runner = object : Domain<Unit, RunnerCode>("runner") {
    override fun createDomainContext() = Unit
    override fun getDefault(node: Node, compiler: Compiler): RunnerCode? {
        return node.tryCompile(compiler, getter)?.let {
            RunnerCode(code {
                line(it.head)
                // line(it.body + ";" * location)
            })
        }
    }
}

class RunnerCode(val head: SourcedFile) {
    constructor() : this(zeroFile)
}


val setter = object : Domain<Unit, SetterCode>("setter") {
    override fun createDomainContext() = Unit
}

class SetterCode(val consumer: (GetterCode) -> RunnerCode)


val arrayInitializer = object : Domain<Unit, ArrayInitializerCode>("arrayInitializer") {
    override fun createDomainContext() = Unit
    override fun getDefault(node: Node, compiler: Compiler): ArrayInitializerCode? {
        return node.tryCompile(compiler, getter)?.let {
            ArrayInitializerCode { consumer -> consumer(it) }
        }
    }
}

class ArrayInitializerCode(val generator: ((GetterCode) -> Unit) -> Unit)


val objectInitializer = object : Domain<Unit, ObjectInitializerCode>("objectInitializer") {
    override fun createDomainContext() = Unit
}

class ObjectInitializerCode(val generator: ((GetterCode, GetterCode) -> Unit) -> Unit)


val comparator = object : Domain<Unit, ComparatorCode>("comparator") {
    override fun createDomainContext() = Unit
}

class ComparatorCode(val comparator: (SourcedLine, SourcedLine) -> SourcedLine)


val argumentsGetter = object : Domain<Unit, ArgumentsGetterCode>("argumentsGetter") {
    override fun createDomainContext() = Unit
}

class ArgumentsGetterCode(val head: SourcedFile, val bodies: List<SourcedLine>) {
    constructor(bodies: List<SourcedLine>) : this(zeroFile, bodies)
    constructor() : this(zeroFile, emptyList())

    operator fun plus(other: ArgumentsGetterCode) = ArgumentsGetterCode(code {
        line(head)
        line(other.head)
    }, bodies + other.bodies)
}

fun GetterCode.toArgumentsGetter() = ArgumentsGetterCode(head, listOf(body))
fun Iterable<ArgumentsGetterCode>.concat() = reduce { a, b -> a + b }

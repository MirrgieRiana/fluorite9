package fl9.domain

import fl9.*


abstract class DomainType<I, O>(val name: String) {
    abstract fun createDomainContext(): I
    open fun getDefault(node: Node, compiler: Compiler): O? = null
}


val getter = object : DomainType<GetterContext, GetterCode>("getter") {
    override fun createDomainContext() = GetterContext()
}

class GetterContext {
    var givenName: String? = null
}

class GetterCode(val head: SourcedFile, val body: SourcedLine) {
    constructor(body: SourcedLine) : this(zeroFile, body)
}


val runner = object : DomainType<Unit, RunnerCode>("runner") {
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


val setter = object : DomainType<Unit, SetterCode>("setter") {
    override fun createDomainContext() = Unit
}

class SetterCode(val consumer: (GetterCode) -> RunnerCode)


val arrayInitializer = object : DomainType<Unit, ArrayInitializerCode>("arrayInitializer") {
    override fun createDomainContext() = Unit
    override fun getDefault(node: Node, compiler: Compiler): ArrayInitializerCode? {
        return node.tryCompile(compiler, getter)?.let {
            ArrayInitializerCode { consumer -> consumer(it) }
        }
    }
}

class ArrayInitializerCode(val generator: ((GetterCode) -> Unit) -> Unit)


val objectInitializer = object : DomainType<Unit, ObjectInitializerCode>("objectInitializer") {
    override fun createDomainContext() = Unit
}

class ObjectInitializerCode(val generator: ((GetterCode, GetterCode) -> Unit) -> Unit)


val comparator = object : DomainType<Unit, ComparatorCode>("comparator") {
    override fun createDomainContext() = Unit
}

class ComparatorCode(val comparator: (SourcedLine, SourcedLine) -> SourcedLine)

package fl9

import fl9.domain.*
import fl9.token.Token

// NodeクラスはJSが与えるのでメンバメソッドを持てない
data class Node(val type: String, val value: Any, val location: Location)

fun <T> Node.isType(token: Token<T>) = type == token.type
inline fun <T> Node.maybe(token: Token<T>, block: (T) -> Unit) {
    if (isType(token)) block(value.unsafeCast<T>()) // TODO 型安全
}

fun <I, O> Node.compile(compiler: Compiler, domainType: DomainType<I, O>, initializeDomainContext: I.() -> Unit = {}): O {
    return tryCompile(compiler, domainType, initializeDomainContext) ?: throw Exception("Unknown Operator: $type/${domainType.name}")
}

fun <I, O> Node.tryCompile(compiler: Compiler, domainType: DomainType<I, O>, initializeDomainContext: I.() -> Unit = {}): O? {
    val domainContext = domainType.createDomainContext()
    domainContext.initializeDomainContext()
    val operator = compiler.operators[type]?.unsafeCast<Operator<Any>>() ?: return null
    val handler = operator[domainType] ?: return null
    return Context(compiler, location, OperatorContext(value), domainContext).handler() ?: domainType.getDefault(this, compiler)
}

// TODO
@Deprecated("", ReplaceWith("compile(compiler, getter)"))
fun Node.mustGet(compiler: Compiler, initializeDomainContext: GetterContext.() -> Unit = {}) = compile(compiler, getter, initializeDomainContext)

@Deprecated("", ReplaceWith("compile(compiler, runner)"))
fun Node.mustRun(compiler: Compiler, initializeDomainContext: Unit.() -> Unit = {}) = compile(compiler, runner, initializeDomainContext)

@Deprecated("", ReplaceWith("compile(compiler, setter)"))
fun Node.mustSet(compiler: Compiler, initializeDomainContext: Unit.() -> Unit = {}) = compile(compiler, setter, initializeDomainContext)

@Deprecated("", ReplaceWith("compile(compiler, arrayInitializer)"))
fun Node.mustArrayInit(compiler: Compiler, initializeDomainContext: Unit.() -> Unit = {}) = compile(compiler, arrayInitializer, initializeDomainContext)

@Deprecated("", ReplaceWith("compile(compiler, objectInitializer)"))
fun Node.mustObjectInit(compiler: Compiler, initializeDomainContext: Unit.() -> Unit = {}) = compile(compiler, objectInitializer, initializeDomainContext)

@Deprecated("", ReplaceWith("compile(compiler, comparator)"))
fun Node.mustCompare(compiler: Compiler, initializeDomainContext: Unit.() -> Unit = {}) = compile(compiler, comparator, initializeDomainContext)

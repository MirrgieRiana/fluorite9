package fl9

import fl9.domain.*
import fl9.operator.Operator

// NodeクラスはJSが与えるのでメンバメソッドを持てない
data class Node(val type: String, val value: Any, val location: Location)

fun <T> Node.isType(operator: Operator<T>) = type == operator.type
inline fun <T> Node.maybe(operator: Operator<T>, block: (T) -> Unit) {
    if (isType(operator)) block(value.unsafeCast<T>()) // TODO 型安全
}

fun <I, O> Node.compile(compiler: Compiler, domain: Domain<I, O>, initializeDomainContext: I.() -> Unit = {}): O {
    return tryCompile(compiler, domain, initializeDomainContext) ?: throw Exception("Unknown Operator: $type/${domain.name}")
}

fun <I, O> Node.tryCompile(compiler: Compiler, domain: Domain<I, O>, initializeDomainContext: I.() -> Unit = {}): O? {
    return run {
        val domainContext = domain.createDomainContext()
        domainContext.initializeDomainContext()
        val operator = compiler.operators[type]?.unsafeCast<DomainBundle<OperatorContext<Any>>>() ?: return@run null
        val handler = operator[domain] ?: return@run null
        return@run Context(compiler, location, OperatorContext(value), domainContext).handler()
    } ?: domain.getDefault(this, compiler)
}

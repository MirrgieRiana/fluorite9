package fl9

import fl9.channel.OperatorContext
import fl9.channel.operators
import fl9.domain.*
import fl9.operator.Operator

// NodeクラスはJSが与えるのでメンバメソッドを持てない
data class Node(val type: String, val value: Any, val location: Location)

fun <I> Node.isType(operator: Operator<I>) = type == operator.type
inline fun <I> Node.maybe(operator: Operator<I>, block: (I) -> Unit) {
    if (isType(operator)) block(value.unsafeCast<I>()) // TODO 型安全
}

fun <I, O> Node.compile(compiler: Compiler, domain: Domain<I, O>, initializeDomainContext: I.() -> Unit = {}): O {
    return tryCompile(compiler, domain, initializeDomainContext) ?: throw Exception("Unknown Operator: $type/${domain.name}")
}

fun <I, O> Node.tryCompile(compiler: Compiler, domain: Domain<I, O>, initializeDomainContext: I.() -> Unit = {}): O? {
    return run {
        val domainContext = domain.createDomainContext()
        domainContext.initializeDomainContext()
        val operator = compiler[operators][type].unsafeCast<DomainBundle<OperatorContext<Any>>>() ?: return@run null
        val handler = operator[domain] ?: return@run null
        return@run Context(compiler, location, OperatorContext(value), domainContext).handler()
    } ?: domain.getDefault(this, compiler)
}

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
    return run {
        val domainContext = domainType.createDomainContext()
        domainContext.initializeDomainContext()
        val operator = compiler.operators[type]?.unsafeCast<DomainBundle<OperatorContext<Any>>>() ?: return@run null
        val handler = operator[domainType] ?: return@run null
        return@run Context(compiler, location, OperatorContext(value), domainContext).handler()
    } ?: domainType.getDefault(this, compiler)
}

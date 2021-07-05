package fl9

import fl9.token.Token

// NodeクラスはJSが与えるのでメンバメソッドを持てない
data class Node(val type: String, val value: Any, val location: Location)

fun <T> Node.isType(token: Token<T>) = type == token.type
inline fun <T> Node.maybe(token: Token<T>, block: (T) -> Unit) {
    if (isType(token)) block(value.unsafeCast<T>()) // TODO 型安全
}

fun Node.mustGet(compiler: Compiler, givenName: String? = null) = mayGet(compiler, givenName) ?: throw Exception("Unknown Operator: ${type}/get")
fun Node.mustRun(compiler: Compiler) = mayRun(compiler) ?: throw Exception("Unknown Operator: ${type}/run")
fun Node.mustSet(compiler: Compiler) = maySet(compiler) ?: throw Exception("Unknown Operator: ${type}/set")
fun Node.mustArrayInit(compiler: Compiler) = mayArrayInit(compiler) ?: throw Exception("Unknown Operator: ${type}/arrayInit")
fun Node.mustObjectInit(compiler: Compiler) = mayObjectInit(compiler) ?: throw Exception("Unknown Operator: ${type}/objectInit")
fun Node.mustCompare(compiler: Compiler) = mayCompare(compiler) ?: throw Exception("Unknown Operator: ${type}/compare")

fun Node.mayGet(compiler: Compiler, givenName: String? = null) = compiler.operators[type]?.let { it.unsafeCast<Operator<Any>>().getter(Context(compiler, location, OperatorContext(value), GetterContext(givenName))) }  // TODO 型安全

fun Node.mayRun(compiler: Compiler) = compiler.operators[type]?.let { it.unsafeCast<Operator<Any>>().runner(Context(compiler, location, OperatorContext(value), Unit)) } ?: mayGet(compiler)?.let {
    RunnerCode(code {
        line(it.head)
        // line(it.body + ";" * location)
    })
} // TODO 型安全

fun Node.maySet(compiler: Compiler) = compiler.operators[type]?.let { it.unsafeCast<Operator<Any>>().setter(Context(compiler, location, OperatorContext(value), Unit)) }  // TODO 型安全
fun Node.mayArrayInit(compiler: Compiler) = compiler.operators[type]?.let { it.unsafeCast<Operator<Any>>().arrayInitializer(Context(compiler, location, OperatorContext(value), Unit)) } ?: mayGet(compiler)?.let {
    ArrayInitializerCode { consumer -> consumer(it) }
} // TODO 型安全

fun Node.mayObjectInit(compiler: Compiler) = compiler.operators[type]?.let { it.unsafeCast<Operator<Any>>().objectInitializer(Context(compiler, location, OperatorContext(value), Unit)) }  // TODO 型安全
fun Node.mayCompare(compiler: Compiler) = compiler.operators[type]?.let { it.unsafeCast<Operator<Any>>().comparator(Context(compiler, location, OperatorContext(value), Unit)) }  // TODO 型安全

package fl9

// NodeクラスはJSが与えるのでメンバメソッドを持てない
data class Node(val type: String, val value: Any)

fun Node.mustGet(context: Context) = mayGet(context) ?: throw Exception("Unknown Operator: ${type}/get")
fun Node.mustRun(context: Context) = mayRun(context) ?: throw Exception("Unknown Operator: ${type}/run")
fun Node.mustSet(context: Context) = maySet(context) ?: throw Exception("Unknown Operator: ${type}/set")
fun Node.mustArrayInit(context: Context) = mayArrayInit(context) ?: throw Exception("Unknown Operator: ${type}/arrayInit")
fun Node.mustObjectInit(context: Context) = mayObjectInit(context) ?: throw Exception("Unknown Operator: ${type}/objectInit")

fun Node.mayGet(context: Context) = context.operators[type]?.let { it.unsafeCast<Operator<Any>>().get(OperatorCompilerArgument(context, value)) }  // TODO 型安全

fun Node.mayRun(context: Context) = context.operators[type]?.let { it.unsafeCast<Operator<Any>>().run(OperatorCompilerArgument(context, value)) } ?: mayGet(context)?.let {
    CodeRun(code {
        !it.head
        !"${it.body};\n"
    })
} // TODO 型安全

fun Node.maySet(context: Context) = context.operators[type]?.let { it.unsafeCast<Operator<Any>>().set(OperatorCompilerArgument(context, value)) }  // TODO 型安全
fun Node.mayArrayInit(context: Context) = context.operators[type]?.let { it.unsafeCast<Operator<Any>>().arrayInit(OperatorCompilerArgument(context, value)) } ?: mayGet(context)?.let {
    CodeArrayInit { consumer -> consumer(it) }
} // TODO 型安全

fun Node.mayObjectInit(context: Context) = context.operators[type]?.let { it.unsafeCast<Operator<Any>>().objectInit(OperatorCompilerArgument(context, value)) }  // TODO 型安全

package fl9.token

import fl9.Location
import fl9.Node

class Token<T>(val type: String)

class EmptyBracketsArgument
class BracketsArgument(val main: Node)
class RightEmptyBracketsArgument(val left: Node)
class RightBracketsArgument(val left: Node, val main: Node)
class LeftUnaryOperatorArgument(val right: Node)
class BinaryOperatorArgument(val left: Node, val right: Node)
class TernaryOperatorArgument(val left: Node, val center: Node, val right: Node)
class ComparisonArgument(val types: Array<String>, val locations: Array<Location>, val nodes: Array<Node>)

val void = Token<Unit>("void")

val number = Token<Int>("number")
val string = Token<String>("string")
val join = Token<Array<Node>>("join")
val identifier = Token<String>("identifier")

val empty_round = Token<EmptyBracketsArgument>("empty_round")
val round = Token<BracketsArgument>("round")
val empty_square = Token<EmptyBracketsArgument>("empty_square")
val square = Token<BracketsArgument>("square")
val empty_curly = Token<EmptyBracketsArgument>("empty_curly")
val curly = Token<BracketsArgument>("curly")

val empty_dollar_round = Token<EmptyBracketsArgument>("empty_dollar_round")
val dollar_round = Token<BracketsArgument>("dollar_round")
val empty_dollar_square = Token<EmptyBracketsArgument>("empty_dollar_square")
val dollar_square = Token<BracketsArgument>("dollar_square")
val empty_dollar_curly = Token<EmptyBracketsArgument>("empty_dollar_curly")
val dollar_curly = Token<BracketsArgument>("dollar_curly")

val period = Token<BinaryOperatorArgument>("period")
val colon_colon = Token<BinaryOperatorArgument>("colon_colon")

val right_empty_round = Token<RightEmptyBracketsArgument>("right_empty_round")
val right_round = Token<RightBracketsArgument>("right_round")
val right_empty_square = Token<RightEmptyBracketsArgument>("right_empty_square")
val right_square = Token<RightBracketsArgument>("right_square")
val right_empty_curly = Token<RightEmptyBracketsArgument>("right_empty_curly")
val right_curly = Token<RightBracketsArgument>("right_curly")

val left_plus = Token<LeftUnaryOperatorArgument>("left_plus")
val left_minus = Token<LeftUnaryOperatorArgument>("left_minus")
val left_ampersand = Token<LeftUnaryOperatorArgument>("left_ampersand")
val left_question = Token<LeftUnaryOperatorArgument>("left_question")
val left_exclamation = Token<LeftUnaryOperatorArgument>("left_exclamation")
val left_dollar_number = Token<LeftUnaryOperatorArgument>("left_dollar_number")

val asterisk = Token<BinaryOperatorArgument>("asterisk")
val slash = Token<BinaryOperatorArgument>("slash")
val plus = Token<BinaryOperatorArgument>("plus")
val minus = Token<BinaryOperatorArgument>("minus")

val period_period = Token<BinaryOperatorArgument>("period_period")
val tilde = Token<BinaryOperatorArgument>("tilde")

val comparison = Token<ComparisonArgument>("comparison")
val equal_equal_equal = Token<Unit>("equal_equal_equal")
val exclamation_equal_equal = Token<Unit>("exclamation_equal_equal")
val equal_equal = Token<Unit>("equal_equal")
val exclamation_equal = Token<Unit>("exclamation_equal")
val greater_equal = Token<Unit>("greater_equal")
val less_equal = Token<Unit>("less_equal")
val greater = Token<Unit>("greater")
val less = Token<Unit>("less")

val ampersand_ampersand = Token<BinaryOperatorArgument>("ampersand_ampersand")

val pipe_pipe = Token<BinaryOperatorArgument>("pipe_pipe")

val ternary_question_colon = Token<TernaryOperatorArgument>("ternary_question_colon")
val question_colon = Token<BinaryOperatorArgument>("question_colon")
val exclamation_colon = Token<BinaryOperatorArgument>("exclamation_colon")
val exclamation_question = Token<BinaryOperatorArgument>("exclamation_question")

val comma = Token<Array<Node>>("comma")

val minus_greater = Token<BinaryOperatorArgument>("minus_greater")
val equal_greater = Token<BinaryOperatorArgument>("equal_greater")
val colon = Token<BinaryOperatorArgument>("colon")
val equal = Token<BinaryOperatorArgument>("equal")

val pipe = Token<BinaryOperatorArgument>("pipe")

val semicolon = Token<Array<Node>>("semicolon")

package fl9.operator

import fl9.Location
import fl9.Node
import fl9.channel.Operator

class Formatter(val width: Int?, val zero: Boolean)

class EmptyFormattedBracketsArgument(val formatter: Formatter)
class FormattedBracketsArgument(val formatter: Formatter, val main: Node)
class EmptyBracketsArgument
class BracketsArgument(val main: Node)
class RightEmptyBracketsArgument(val left: Node)
class RightBracketsArgument(val left: Node, val main: Node)
class LeftUnaryOperatorArgument(val right: Node)
class BinaryOperatorArgument(val left: Node, val right: Node)
class TernaryOperatorArgument(val left: Node, val center: Node, val right: Node)
class ComparisonArgument(val types: Array<String>, val locations: Array<Location>, val nodes: Array<Node>)

val void = Operator<Unit>("void")

val number = Operator<Int>("number")
val string = Operator<String>("string")
val join = Operator<Array<Node>>("join")
val identifier = Operator<String>("identifier")

val empty_round = Operator<EmptyBracketsArgument>("empty_round")
val empty_square = Operator<EmptyBracketsArgument>("empty_square")
val empty_curly = Operator<EmptyBracketsArgument>("empty_curly")
val round = Operator<BracketsArgument>("round")
val square = Operator<BracketsArgument>("square")
val curly = Operator<BracketsArgument>("curly")

val empty_dollar_round = Operator<EmptyBracketsArgument>("empty_dollar_round")
val empty_dollar_square = Operator<EmptyBracketsArgument>("empty_dollar_square")
val empty_dollar_curly = Operator<EmptyBracketsArgument>("empty_dollar_curly")
val dollar_round = Operator<BracketsArgument>("dollar_round")
val dollar_square = Operator<BracketsArgument>("dollar_square")
val dollar_curly = Operator<BracketsArgument>("dollar_curly")

val empty_formatted_dollar_round = Operator<EmptyFormattedBracketsArgument>("empty_formatted_dollar_round")
val empty_formatted_dollar_square = Operator<EmptyFormattedBracketsArgument>("empty_formatted_dollar_square")
val empty_formatted_dollar_curly = Operator<EmptyFormattedBracketsArgument>("empty_formatted_dollar_curly")
val formatted_dollar_round = Operator<FormattedBracketsArgument>("formatted_dollar_round")
val formatted_dollar_square = Operator<FormattedBracketsArgument>("formatted_dollar_square")
val formatted_dollar_curly = Operator<FormattedBracketsArgument>("formatted_dollar_curly")

val period = Operator<BinaryOperatorArgument>("period")
val colon_colon = Operator<BinaryOperatorArgument>("colon_colon")

val right_empty_round = Operator<RightEmptyBracketsArgument>("right_empty_round")
val right_round = Operator<RightBracketsArgument>("right_round")
val right_empty_square = Operator<RightEmptyBracketsArgument>("right_empty_square")
val right_square = Operator<RightBracketsArgument>("right_square")
val right_empty_curly = Operator<RightEmptyBracketsArgument>("right_empty_curly")
val right_curly = Operator<RightBracketsArgument>("right_curly")

val left_plus = Operator<LeftUnaryOperatorArgument>("left_plus")
val left_minus = Operator<LeftUnaryOperatorArgument>("left_minus")
val left_ampersand = Operator<LeftUnaryOperatorArgument>("left_ampersand")
val left_question = Operator<LeftUnaryOperatorArgument>("left_question")
val left_exclamation = Operator<LeftUnaryOperatorArgument>("left_exclamation")
val left_dollar_number = Operator<LeftUnaryOperatorArgument>("left_dollar_number")
val left_dollar_ampersand = Operator<LeftUnaryOperatorArgument>("left_dollar_ampersand")
val left_dollar_asterisk = Operator<LeftUnaryOperatorArgument>("left_dollar_asterisk")

val asterisk = Operator<BinaryOperatorArgument>("asterisk")
val slash = Operator<BinaryOperatorArgument>("slash")
val percentage_percentage = Operator<BinaryOperatorArgument>("percentage_percentage")
val percentage = Operator<BinaryOperatorArgument>("percentage")
val plus = Operator<BinaryOperatorArgument>("plus")
val minus = Operator<BinaryOperatorArgument>("minus")

val period_period = Operator<BinaryOperatorArgument>("period_period")
val tilde = Operator<BinaryOperatorArgument>("tilde")

val atsign_atsign = Operator<BinaryOperatorArgument>("atsign_atsign")
val atsign = Operator<BinaryOperatorArgument>("atsign")

val comparison = Operator<ComparisonArgument>("comparison")
val equal_equal_equal = Operator<Unit>("equal_equal_equal")
val exclamation_equal_equal = Operator<Unit>("exclamation_equal_equal")
val equal_equal = Operator<Unit>("equal_equal")
val exclamation_equal = Operator<Unit>("exclamation_equal")
val greater_equal = Operator<Unit>("greater_equal")
val less_equal = Operator<Unit>("less_equal")
val greater = Operator<Unit>("greater")
val less = Operator<Unit>("less")

val ampersand_ampersand = Operator<BinaryOperatorArgument>("ampersand_ampersand")

val pipe_pipe = Operator<BinaryOperatorArgument>("pipe_pipe")

val ternary_question_colon = Operator<TernaryOperatorArgument>("ternary_question_colon")
val question_colon = Operator<BinaryOperatorArgument>("question_colon")
val exclamation_colon = Operator<BinaryOperatorArgument>("exclamation_colon")
val exclamation_question = Operator<BinaryOperatorArgument>("exclamation_question")

val comma = Operator<Array<Node>>("comma")

val minus_greater = Operator<BinaryOperatorArgument>("minus_greater")
val equal_greater = Operator<BinaryOperatorArgument>("equal_greater")
val colon = Operator<BinaryOperatorArgument>("colon")
val equal = Operator<BinaryOperatorArgument>("equal")

val pipe = Operator<BinaryOperatorArgument>("pipe")

val semicolon = Operator<Array<Node>>("semicolon")

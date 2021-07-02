
{
  function node(type, value) {
    return {type, value};
  }
}

_
  = [ \t\r\n]*

Void
  = "" { return node("void", undefined); }

Number
  = [0-9]+ { return node("number", parseInt(text(), 10)); }

String
  = "'" main:(
    [^\\']
  / "\\" main:. { return main; }
  )* "'" { return node("string", main.join("")); }

EmbedString
  = "\"" main:(
    main:(
      [^\\"$]
    / "\\r"  { return "\r"; }
    / "\\n"  { return "\n"; }
    / "\\t"  { return "\t"; }
    / "\\\\" { return "\\"; }
    / "\\\"" { return "\""; }
    / "\\$"  { return "$" ; }
    )+ { return node("string", main.join("")); }
  / DollarFactor
  )* "\"" { return node("join", main); }

Identifier
  = [a-zA-Z_][a-zA-Z_0-9]* { return node("identifier", text()); }

Brackets
  = "(" _                   ")" { return node("empty_round" , {    }); }
  / "(" _ main:Expression _ ")" { return node(      "round" , {main}); }
  / "[" _                   "]" { return node("empty_square", {    }); }
  / "[" _ main:Expression _ "]" { return node(      "square", {main}); }
  / "{" _                   "}" { return node("empty_curly" , {    }); }
  / "{" _ main:Expression _ "}" { return node(      "curly" , {main}); }

DollarBrackets
  = "$(" _                   ")" { return node("empty_dollar_round" , {    }); }
  / "$(" _ main:Expression _ ")" { return node(      "dollar_round" , {main}); }
  / "$[" _                   "]" { return node("empty_dollar_square", {    }); }
  / "$[" _ main:Expression _ "]" { return node(      "dollar_square", {main}); }
  / "${" _                   "}" { return node("empty_dollar_curly" , {    }); }
  / "${" _ main:Expression _ "}" { return node(      "dollar_curly" , {main}); }

Factor
  = Number
  / String
  / EmbedString
  / Identifier
  / Brackets

DollarFactor
  = "$" main:Number      { return main; }
  / "$" main:String      { return main; }
  / "$" main:EmbedString { return main; }
  / "$" main:Identifier  { return main; }
  / DollarBrackets

Right
  = head:Factor tail:(
    _ "(" _                   ")" { return left  => node("right_empty_round" , {left       }); }
  / _ "(" _ main:Expression _ ")" { return left  => node(      "right_round" , {left, main }); }
  / _ "[" _                   "]" { return left  => node("right_empty_square", {left       }); }
  / _ "[" _ main:Expression _ "]" { return left  => node(      "right_square", {left, main }); }
  / _ "{" _                   "}" { return left  => node("right_empty_curly" , {left       }); }
  / _ "{" _ main:Expression _ "}" { return left  => node(      "right_curly" , {left, main }); }
  / _ "."  _ right:Factor         { return left  => node("period"            , {left, right}); }
  / _ "::" _ right:Factor         { return left  => node("colon_colon"       , {left, right}); }
  / _ ".+"                        { return right => node("left_plus"         , {      right}); }
  / _ ".-"                        { return right => node("left_minus"        , {      right}); }
  / _ ".&"                        { return right => node("left_ampersand"    , {      right}); }
  / _ ".?"                        { return right => node("left_question"     , {      right}); }
  / _ ".!"                        { return right => node("left_exclamation"  , {      right}); }
  / _ ".*"                        { return right => node("left_asterisk"     , {      right}); }
  / _ ".\\"                       { return right => node("left_backslash"    , {      right}); }
  / _ ".$#"                       { return right => node("left_dollar_number", {      right}); }
  )* { return [head, ...tail].reduce((left, right) => right(left)); }

Left
  = head:((
    "+"  { return right => node("left_plus"         , {right}); }
  / "-"  { return right => node("left_minus"        , {right}); }
  / "&"  { return right => node("left_ampersand"    , {right}); }
  / "?"  { return right => node("left_question"     , {right}); }
  / "!"  { return right => node("left_exclamation"  , {right}); }
  / "*"  { return right => node("left_asterisk"     , {right}); }
  / "\\" { return right => node("left_backslash"    , {right}); }
  / "$#" { return right => node("left_dollar_number", {right}); }
  ) _)* tail:Right { return [tail, ...head.reverse()].reduce((right, left) => left[0](right)); }

Mul
  = head:Left tail:(_ (
    "*" { return (left, right) => node("asterisk", {left, right}); }
  / "/" { return (left, right) => node("slash"   , {left, right}); }
  ) _ Left)* { return [head, ...tail].reduce((left, right) => right[1](left, right[3])); }

Add
  = head:Mul tail:(_ (
    "+" { return (left, right) => node("plus" , {left, right}); }
  / "-" { return (left, right) => node("minus", {left, right}); }
  ) _ Mul)* { return [head, ...tail].reduce((left, right) => right[1](left, right[3])); }

Range
  = head:Add tail:(_ (
    ".." { return (left, right) => node("period_period", {left, right}); }
  / "~"  { return (left, right) => node("tilde"        , {left, right}); }
  ) _ Add)* { return [head, ...tail].reduce((left, right) => right[1](left, right[3])); }

Compare
  = head:Range tail:(_ (
    "===" { return "equal_equal_equal"; }
  / "!==" { return "exclamation_equal_equal"; }
  / "==" { return "equal_equal"; }
  / "!=" { return "exclamation_equal"; }
  / ">=" { return "greater_equal"; }
  / "<=" { return "less_equal"; }
  / ">" { return "greater"; }
  / "<" { return "less"; }
  ) _ Range)+ { return node("comparison", {
    types: [...tail.map(right => right[1])],
    nodes: [head, ...tail.map(right => right[3])],
  }); }
  / Range

And
  = head:Compare tail:(_ (
    "&&" { return (left, right) => node("ampersand_ampersand" , {left, right}); }
  ) _ Compare)* { return [head, ...tail].reduce((left, right) => right[1](left, right[3])); }

Or
  = head:And tail:(_ (
    "||" { return (left, right) => node("pipe_pipe" , {left, right}); }
  ) _ And)* { return [head, ...tail].reduce((left, right) => right[1](left, right[3])); }

If
  = left:Or _ "?" _ center:If _ ":" _ right:If { return node("ternary_question_colon", {left, center, right});
  }
  / left:Or _ "?:" _ right:If { return node("question_colon", {left, right});
  }
  / left:Or _ "!:" _ right:If { return node("exclamation_colon", {left, right});
  }
  / left:Or _ "!?" _ right:If { return node("exclamation_question", {left, right});
  }
  / Or

Comma
  = head:(If / Void) tail:(_ "," _ (If / Void))+ {
    return node("comma", [head, ...tail.map(item => item[3])]);
  }
  / If

Assignment
  = head:(Comma _ (
    "->" { return (left, right) => node("minus_greater", {left, right}); }
  / "=>" { return (left, right) => node("equal_greater", {left, right}); }
  / ":"  { return (left, right) => node("colon"        , {left, right}); }
  / "="  { return (left, right) => node("equal"        , {left, right}); }
  ) _)* tail:Comma { return [tail, ...head.reverse()].reduce((right, left) => left[2](left[0], right)); }

Pipe
  = head:(Assignment _ (
    "|" { return (left, right) => node("pipe", {left, right}); }
  ) _)* tail:Assignment { return [tail, ...head.reverse()].reduce((right, left) => left[2](left[0], right)); }

Semicolon
  = head:(Pipe / Void) tail:(_ ";" _ (Pipe / Void))+ {
    return node("semicolon", [head, ...tail.map(item => item[3])]);
  }
  / Pipe

Expression
  = Semicolon

Root
  = _ main:(Expression / Void) _ { return main; }

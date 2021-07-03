
{
  function node(type, value, location) {
    return {
      type,
      value,
      location: loc(location)
    };
  }
  function loc(location) {
    return {
      row: location.start.line,
      column: location.start.column
    };
  }
}

_
  = [ \t\r\n]*

Void
  = "" { return node("void", undefined, location()); }

Number
  = [0-9]+ { return node("number", parseInt(text(), 10), location()); }

String
  = "'" main:(
    [^\\']
  / "\\" main:. { return main; }
  )* "'" { return node("string", main.join(""), location()); }

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
    )+ { return node("string", main.join(""), location()); }
  / DollarFactor
  )* "\"" { return node("join", main, location()); }

Identifier
  = [a-zA-Z_][a-zA-Z_0-9]* { return node("identifier", text(), location()); }

Brackets
  = "(" _                   ")" { return node("empty_round" , {    }, location()); }
  / "(" _ main:Expression _ ")" { return node(      "round" , {main}, location()); }
  / "[" _                   "]" { return node("empty_square", {    }, location()); }
  / "[" _ main:Expression _ "]" { return node(      "square", {main}, location()); }
  / "{" _                   "}" { return node("empty_curly" , {    }, location()); }
  / "{" _ main:Expression _ "}" { return node(      "curly" , {main}, location()); }

DollarBrackets
  = "$(" _                   ")" { return node("empty_dollar_round" , {    }, location()); }
  / "$(" _ main:Expression _ ")" { return node(      "dollar_round" , {main}, location()); }
  / "$[" _                   "]" { return node("empty_dollar_square", {    }, location()); }
  / "$[" _ main:Expression _ "]" { return node(      "dollar_square", {main}, location()); }
  / "${" _                   "}" { return node("empty_dollar_curly" , {    }, location()); }
  / "${" _ main:Expression _ "}" { return node(      "dollar_curly" , {main}, location()); }

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
    _ op:("("   { return location(); }) _                   ")" { return left  => node("right_empty_round" , {left       }, op); }
  / _ op:("("   { return location(); }) _ main:Expression _ ")" { return left  => node(      "right_round" , {left, main }, op); }
  / _ op:("["   { return location(); }) _                   "]" { return left  => node("right_empty_square", {left       }, op); }
  / _ op:("["   { return location(); }) _ main:Expression _ "]" { return left  => node(      "right_square", {left, main }, op); }
  / _ op:("{"   { return location(); }) _                   "}" { return left  => node("right_empty_curly" , {left       }, op); }
  / _ op:("{"   { return location(); }) _ main:Expression _ "}" { return left  => node(      "right_curly" , {left, main }, op); }
  / _ op:("."   { return location(); }) _ right:Factor          { return left  => node("period"            , {left, right}, op); }
  / _ op:("::"  { return location(); }) _ right:Factor          { return left  => node("colon_colon"       , {left, right}, op); }
  / _ op:(".+"  { return location(); })                         { return right => node("left_plus"         , {      right}, op); }
  / _ op:(".-"  { return location(); })                         { return right => node("left_minus"        , {      right}, op); }
  / _ op:(".&"  { return location(); })                         { return right => node("left_ampersand"    , {      right}, op); }
  / _ op:(".?"  { return location(); })                         { return right => node("left_question"     , {      right}, op); }
  / _ op:(".!"  { return location(); })                         { return right => node("left_exclamation"  , {      right}, op); }
  / _ op:(".*"  { return location(); })                         { return right => node("left_asterisk"     , {      right}, op); }
  / _ op:(".\\" { return location(); })                         { return right => node("left_backslash"    , {      right}, op); }
  / _ op:(".$#" { return location(); })                         { return right => node("left_dollar_number", {      right}, op); }
  )* { return [head, ...tail].reduce((left, right) => right(left)); }

Left
  = head:((
    "+"  { return right => node("left_plus"         , {right}, location()); }
  / "-"  { return right => node("left_minus"        , {right}, location()); }
  / "&"  { return right => node("left_ampersand"    , {right}, location()); }
  / "?"  { return right => node("left_question"     , {right}, location()); }
  / "!"  { return right => node("left_exclamation"  , {right}, location()); }
  / "*"  { return right => node("left_asterisk"     , {right}, location()); }
  / "\\" { return right => node("left_backslash"    , {right}, location()); }
  / "$#" { return right => node("left_dollar_number", {right}, location()); }
  ) _)* tail:Right { return [tail, ...head.reverse()].reduce((right, left) => left[0](right)); }

Mul
  = head:Left tail:(_ (
    "*" { return (left, right) => node("asterisk", {left, right}, location()); }
  / "/" { return (left, right) => node("slash"   , {left, right}, location()); }
  ) _ Left)* { return [head, ...tail].reduce((left, right) => right[1](left, right[3])); }

Add
  = head:Mul tail:(_ (
    "+" { return (left, right) => node("plus" , {left, right}, location()); }
  / "-" { return (left, right) => node("minus", {left, right}, location()); }
  ) _ Mul)* { return [head, ...tail].reduce((left, right) => right[1](left, right[3])); }

Range
  = head:Add tail:(_ (
    ".." { return (left, right) => node("period_period", {left, right}, location()); }
  / "~"  { return (left, right) => node("tilde"        , {left, right}, location()); }
  ) _ Add)* { return [head, ...tail].reduce((left, right) => right[1](left, right[3])); }

Compare
  = head:Range tail:(_ (
    "===" { return ["equal_equal_equal"      , location()]; }
  / "!==" { return ["exclamation_equal_equal", location()]; }
  / "=="  { return ["equal_equal"            , location()]; }
  / "!="  { return ["exclamation_equal"      , location()]; }
  / ">="  { return ["greater_equal"          , location()]; }
  / "<="  { return ["less_equal"             , location()]; }
  / ">"   { return ["greater"                , location()]; }
  / "<"   { return ["less"                   , location()]; }
  ) _ Range)+ { return node("comparison", {
    types: [...tail.map(right => right[1][0])],
    locations: [...tail.map(right => loc(right[1][1]))],
    nodes: [head, ...tail.map(right => right[3])],
  }, tail[0][1][1]); }
  / Range

And
  = head:Compare tail:(_ (
    "&&" { return (left, right) => node("ampersand_ampersand" , {left, right}, location()); }
  ) _ Compare)* { return [head, ...tail].reduce((left, right) => right[1](left, right[3])); }

Or
  = head:And tail:(_ (
    "||" { return (left, right) => node("pipe_pipe" , {left, right}, location()); }
  ) _ And)* { return [head, ...tail].reduce((left, right) => right[1](left, right[3])); }

If
  = left:Or _ op:("?" { return location(); }) _ center:If _ ":" _ right:If { return node("ternary_question_colon", {left, center, right}, op);
  }
  / left:Or _ op:("?:" { return location(); }) _ right:If { return node("question_colon", {left, right}, op);
  }
  / left:Or _ op:("!:" { return location(); }) _ right:If { return node("exclamation_colon", {left, right}, op);
  }
  / left:Or _ op:("!?" { return location(); }) _ right:If { return node("exclamation_question", {left, right}, op);
  }
  / Or

Comma
  = head:(If / Void) tail:(_ ("," { return location(); }) _ (If / Void))+ {
    return node("comma", [head, ...tail.map(item => item[3])], tail[0][1]);
  }
  / If

Assignment
  = head:(Comma _ (
    "->" { return (left, right) => node("minus_greater", {left, right}, location()); }
  / "=>" { return (left, right) => node("equal_greater", {left, right}, location()); }
  / ":"  { return (left, right) => node("colon"        , {left, right}, location()); }
  / "="  { return (left, right) => node("equal"        , {left, right}, location()); }
  ) _)* tail:Comma { return [tail, ...head.reverse()].reduce((right, left) => left[2](left[0], right)); }

Pipe
  = head:(Assignment _ (
    "|" { return (left, right) => node("pipe", {left, right}, location()); }
  ) _)* tail:Assignment { return [tail, ...head.reverse()].reduce((right, left) => left[2](left[0], right)); }

Semicolon
  = head:(Pipe / Void) tail:(_ (";" { return location(); }) _ (Pipe / Void))+ {
    return node("semicolon", [head, ...tail.map(item => item[3])], tail[0][1]);
  }
  / Pipe

Expression
  = Semicolon

Root
  = _ main:(Expression / Void) _ { return main; }

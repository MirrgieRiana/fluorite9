
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

Space "Space"     = [ \t]
BrSpace "BrSpace" = [ \t\r\n]

BackslashSpaces      "BackslashSpaces"       = BrSpace* ("\\" BrSpace*)+
Spaces               "Spaces"                = Space+
BrSpaces             "BrSpaces"              = BrSpace+
NumberComment        "NumberComment"         = "#"  [^\r\n]*
SlashSlashComment    "SlashSlashComment"     = "//" [^\r\n]*
SlashAsteriskComment "SlashAsteriskComment"  = "/*" (!"*/" .)* "*/"

SlashPlusComment1 = "/+"     !"+" (SlashPlusComment1 / (!    "+/" .))*     "+/"
SlashPlusComment2 = "/++"    !"+" (SlashPlusComment2 / (!   "++/" .))*    "++/"
SlashPlusComment3 = "/+++"   !"+" (SlashPlusComment3 / (!  "+++/" .))*   "+++/"
SlashPlusComment4 = "/++++"  !"+" (SlashPlusComment4 / (! "++++/" .))*  "++++/"
SlashPlusComment5 = "/+++++" !"+" (SlashPlusComment5 / (!"+++++/" .))* "+++++/"

SlashPlusComment "SlashPlusComment"
  = SlashPlusComment1
  / SlashPlusComment2
  / SlashPlusComment3
  / SlashPlusComment4
  / SlashPlusComment5

_
  = ( BackslashSpaces
    / Spaces
    / NumberComment
    / SlashSlashComment
    / SlashAsteriskComment
    / SlashPlusComment
    )*

__
  = ( BackslashSpaces
    / BrSpaces
    / NumberComment
    / SlashSlashComment
    / SlashAsteriskComment
    / SlashPlusComment
    )*

__Regex
  = ( BackslashSpaces
    / BrSpaces
    / NumberComment
    / SlashAsteriskComment
    / SlashPlusComment
    )*

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

Delimiter
  = [a-zA-Z_0-9]+ { return text(); }

EmbeddedFluorite
  = "%>" main:(
      main:(
        !"<%" main:. { return main; }
      / "<%%" { return "<%"; }
      )+ { return node("string", main.join(""), location()); }
    / "<%=" __ main:Pipe __ "%>" { return main; }
    )* "<%" !("=" / "%") { return node("join", main, location()); }
  / "%" de:Delimiter ">" main:(
      main:(
        !("<" (de2:Delimiter & { return de === de2 }) "%") main:. { return main; }
      / "<" (de2:Delimiter & { return de === de2 }) "%%" { return "<" + de + "%"; }
      )+ { return node("string", main.join(""), location()); }
    / "<" (de2:Delimiter & { return de === de2 }) "%=" __ main:Pipe __ "%" (de2:Delimiter & { return de === de2 }) ">" { return main; }
    )* "<" (de2:Delimiter & { return de === de2 }) "%" !("=" / "%") { return node("join", main, location()); }

EmbeddedFluoriteRoot
  = ("#!" [^\r\n]* ("\r\n" / "\r" / "\n"))? main:(
      main:(
        !"<%" main:. { return main; }
      / "<%%" { return "<%"; }
      )+ { return node("string", main.join(""), location()); }
    / "<%=" __ main:Pipe __ "%>" { return main; }
    )* { return node("join", main, location()); }

Identifier
  = [a-zA-Z_][a-zA-Z_0-9]* { return node("identifier", text(), location()); }

Brackets
  = "(" __                    ")" { return node("empty_round" , {    }, location()); }
  / "[" __                    "]" { return node("empty_square", {    }, location()); }
  / "{" __                    "}" { return node("empty_curly" , {    }, location()); }
  / "(" __ main:Expression __ ")" { return node(      "round" , {main}, location()); }
  / "[" __ main:Expression __ "]" { return node(      "square", {main}, location()); }
  / "{" __ main:Expression __ "}" { return node(      "curly" , {main}, location()); }

Formatter
  = "%" zero:"0"? width:([1-9][0-9]* { return parseInt(text()); })? "s" { return {
      width,
      zero: zero !== null
    }; }

DollarBrackets
  = "$"                     "(" __                    ")" { return node(          "empty_dollar_round" , {               }, location()); }
  / "$"                     "[" __                    "]" { return node(          "empty_dollar_square", {               }, location()); }
  / "$"                     "{" __                    "}" { return node(          "empty_dollar_curly" , {               }, location()); }
  / "$"                     "(" __ main:Expression __ ")" { return node(                "dollar_round" , {           main}, location()); }
  / "$"                     "[" __ main:Expression __ "]" { return node(                "dollar_square", {           main}, location()); }
  / "$"                     "{" __ main:Expression __ "}" { return node(                "dollar_curly" , {           main}, location()); }
  / "$" formatter:Formatter "(" __                    ")" { return node("empty_formatted_dollar_round" , {formatter,     }, location()); }
  / "$" formatter:Formatter "[" __                    "]" { return node("empty_formatted_dollar_square", {formatter,     }, location()); }
  / "$" formatter:Formatter "{" __                    "}" { return node("empty_formatted_dollar_curly" , {formatter,     }, location()); }
  / "$" formatter:Formatter "(" __ main:Expression __ ")" { return node(      "formatted_dollar_round" , {formatter, main}, location()); }
  / "$" formatter:Formatter "[" __ main:Expression __ "]" { return node(      "formatted_dollar_square", {formatter, main}, location()); }
  / "$" formatter:Formatter "{" __ main:Expression __ "}" { return node(      "formatted_dollar_curly" , {formatter, main}, location()); }

Factor
  = Number
  / String
  / EmbedString
  / EmbeddedFluorite
  / Identifier
  / Brackets
  / DollarBrackets

DollarFactor
  = "$" main:Number           { return main; }
  / "$" main:String           { return main; }
  / "$" main:EmbedString      { return main; }
  / "$" main:EmbeddedFluorite { return main; }
  / "$" main:Identifier       { return main; }
  / DollarBrackets

Right
  = head:Factor tail:(
    _  op:("("   { return location(); }) __                    ")" { return left  => node("right_empty_round"    , {left       }, op); }
  / _  op:("("   { return location(); }) __ main:Expression __ ")" { return left  => node(      "right_round"    , {left, main }, op); }
  / _  op:("["   { return location(); }) __                    "]" { return left  => node("right_empty_square"   , {left       }, op); }
  / _  op:("["   { return location(); }) __ main:Expression __ "]" { return left  => node(      "right_square"   , {left, main }, op); }
  / _  op:("{"   { return location(); }) __                    "}" { return left  => node("right_empty_curly"    , {left       }, op); }
  / _  op:("{"   { return location(); }) __ main:Expression __ "}" { return left  => node(      "right_curly"    , {left, main }, op); }
  / __ op:("."   { return location(); }) __ right:Factor           { return left  => node("period"               , {left, right}, op); }
  / __ op:("::"  { return location(); }) __ right:Factor           { return left  => node("colon_colon"          , {left, right}, op); }
  / __ op:(".+"  { return location(); })                           { return right => node("left_plus"            , {      right}, op); }
  / __ op:(".-"  { return location(); })                           { return right => node("left_minus"           , {      right}, op); }
  / __ op:(".&"  { return location(); })                           { return right => node("left_ampersand"       , {      right}, op); }
  / __ op:(".?"  { return location(); })                           { return right => node("left_question"        , {      right}, op); }
  / __ op:(".!"  { return location(); })                           { return right => node("left_exclamation"     , {      right}, op); }
  / __ op:(".*"  { return location(); })                           { return right => node("left_asterisk"        , {      right}, op); }
  / __ op:(".$#" { return location(); })                           { return right => node("left_dollar_number"   , {      right}, op); }
  / __ op:(".$&" { return location(); })                           { return right => node("left_dollar_ampersand", {      right}, op); }
  / __ op:(".$*" { return location(); })                           { return right => node("left_dollar_asterisk" , {      right}, op); }
  )* { return [head, ...tail].reduce((left, right) => right(left)); }

Left
  = head:((
    "+"  { return (location => right => node("left_plus"            , {right}, location))(location()); }
  / "-"  { return (location => right => node("left_minus"           , {right}, location))(location()); }
  / "&"  { return (location => right => node("left_ampersand"       , {right}, location))(location()); }
  / "?"  { return (location => right => node("left_question"        , {right}, location))(location()); }
  / "!"  { return (location => right => node("left_exclamation"     , {right}, location))(location()); }
  / "*"  { return (location => right => node("left_asterisk"        , {right}, location))(location()); }
  / "$#" { return (location => right => node("left_dollar_number"   , {right}, location))(location()); }
  / "$&" { return (location => right => node("left_dollar_ampersand", {right}, location))(location()); }
  / "$*" { return (location => right => node("left_dollar_asterisk" , {right}, location))(location()); }
  ) _)* tail:Right { return [tail, ...head.reverse()].reduce((right, left) => left[0](right)); }

Mul
  = head:Left tail:(_ (
    "*"  { return (location => (left, right) => node("asterisk"              , {left, right}, location))(location()); }
  / "/"  { return (location => (left, right) => node("slash"                 , {left, right}, location))(location()); }
  / "%%" { return (location => (left, right) => node("percentage_percentage" , {left, right}, location))(location()); }
  / "%"  { return (location => (left, right) => node("percentage"            , {left, right}, location))(location()); }
  ) __ Left)* { return [head, ...tail].reduce((left, right) => right[1](left, right[3])); }

Add
  = head:Mul tail:(_ (
    "+" { return (location => (left, right) => node("plus" , {left, right}, location))(location()); }
  / "-" { return (location => (left, right) => node("minus", {left, right}, location))(location()); }
  ) __ Mul)* { return [head, ...tail].reduce((left, right) => right[1](left, right[3])); }

Range
  = head:Add tail:(_ (
    ".." { return (location => (left, right) => node("period_period", {left, right}, location))(location()); }
  / "~"  { return (location => (left, right) => node("tilde"        , {left, right}, location))(location()); }
  ) __ Add)* { return [head, ...tail].reduce((left, right) => right[1](left, right[3])); }

Contained
  = head:Range tail:(_ (
    "@@" { return (location => (left, right) => node("atsign_atsign" , {left, right}, location))(location()); }
  / "@"  { return (location => (left, right) => node("atsign"        , {left, right}, location))(location()); }
  ) __ Range)* { return [head, ...tail].reduce((left, right) => right[1](left, right[3])); }

Match
  = head:Contained tail:(_ (
    "=~" { return (location => (left, right) => node("equal_tilde" , {left, right}, location))(location()); }
  / "!~" { return (location => (left, right) => node("exclamation_tilde" , {left, right}, location))(location()); }
  ) __Regex Contained)* { return [head, ...tail].reduce((left, right) => right[1](left, right[3])); }

Compare
  = head:Match tail:(_ (
    "===" { return ["equal_equal_equal"      , location()]; }
  / "!==" { return ["exclamation_equal_equal", location()]; }
  / "=="  { return ["equal_equal"            , location()]; }
  / "!="  { return ["exclamation_equal"      , location()]; }
  / ">="  { return ["greater_equal"          , location()]; }
  / "<="  { return ["less_equal"             , location()]; }
  / ">"   { return ["greater"                , location()]; }
  / "<"   { return ["less"                   , location()]; }
  ) __ Match)+ { return node("comparison", {
    types: [...tail.map(right => right[1][0])],
    locations: [...tail.map(right => loc(right[1][1]))],
    nodes: [head, ...tail.map(right => right[3])],
  }, tail[0][1][1]); }
  / Match

And
  = head:Compare tail:(_ (
    "&&" { return (location => (left, right) => node("ampersand_ampersand" , {left, right}, location))(location()); }
  ) __ Compare)* { return [head, ...tail].reduce((left, right) => right[1](left, right[3])); }

Or
  = head:And tail:(_ (
    "||" { return (location => (left, right) => node("pipe_pipe" , {left, right}, location))(location()); }
  ) __ And)* { return [head, ...tail].reduce((left, right) => right[1](left, right[3])); }

If
  = left:Or _ op:("?" { return location(); }) __ center:If _ ":" __ right:If { return node("ternary_question_colon", {left, center, right}, op);
  }
  / left:Or _ op:("?:" { return location(); }) __ right:If { return node("question_colon", {left, right}, op);
  }
  / left:Or _ op:("!:" { return location(); }) __ right:If { return node("exclamation_colon", {left, right}, op);
  }
  / left:Or _ op:("!?" { return location(); }) __ right:If { return node("exclamation_question", {left, right}, op);
  }
  / Or

Comma
  = head:(If / Void) tail:(_ ("," { return location(); }) __ (If / Void))+ {
    return node("comma", [head, ...tail.map(item => item[3])], tail[0][1]);
  }
  / If

Assignment
  = head:(Comma _ (
    "->" { return (location => (left, right) => node("minus_greater", {left, right}, location))(location()); }
  / "=>" { return (location => (left, right) => node("equal_greater", {left, right}, location))(location()); }
  / ":"  { return (location => (left, right) => node("colon"        , {left, right}, location))(location()); }
  / "="  { return (location => (left, right) => node("equal"        , {left, right}, location))(location()); }
  ) __)* tail:Comma { return [tail, ...head.reverse()].reduce((right, left) => left[2](left[0], right)); }

Pipe
  = head:(Assignment _ (
    "|" { return (location => (left, right) => node("pipe", {left, right}, location))(location()); }
  ) __)* tail:Assignment { return [tail, ...head.reverse()].reduce((right, left) => left[2](left[0], right)); }

Semicolon
  = head:(Pipe / Void) tail:(
    _ ((";" / "\r\n" / "\r" / "\n") { return location(); }) __ (Pipe       )
  / _ ((";"                       ) { return location(); }) __ (Pipe / Void)
  )+ {
    return node("semicolon", [head, ...tail.map(item => item[3])], tail[0][1]);
  }
  / Pipe

Expression
  = Semicolon

Root
  = __ main:(Expression / Void) __ { return main; }

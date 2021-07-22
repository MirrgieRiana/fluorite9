(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'fl9_compiler'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'fl9_compiler'.");
    }root.fl9_compiler = factory(typeof fl9_compiler === 'undefined' ? {} : fl9_compiler, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var toString = Kotlin.toString;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var equals = Kotlin.equals;
  var Triple = Kotlin.kotlin.Triple;
  var throwUPAE = Kotlin.throwUPAE;
  var get_indices = Kotlin.kotlin.collections.get_indices_m7z4lg$;
  var Pair = Kotlin.kotlin.Pair;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var slice = Kotlin.kotlin.collections.slice_l0m14x$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Error_init = Kotlin.kotlin.Error_init_pdl1vj$;
  var Error_init_0 = Kotlin.kotlin.Error_init;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  operators$ObjectLiteral.prototype = Object.create(Channel.prototype);
  operators$ObjectLiteral.prototype.constructor = operators$ObjectLiteral;
  aliases$ObjectLiteral.prototype = Object.create(Channel.prototype);
  aliases$ObjectLiteral.prototype.constructor = aliases$ObjectLiteral;
  getter$ObjectLiteral.prototype = Object.create(Domain.prototype);
  getter$ObjectLiteral.prototype.constructor = getter$ObjectLiteral;
  runner$ObjectLiteral.prototype = Object.create(Domain.prototype);
  runner$ObjectLiteral.prototype.constructor = runner$ObjectLiteral;
  setter$ObjectLiteral.prototype = Object.create(Domain.prototype);
  setter$ObjectLiteral.prototype.constructor = setter$ObjectLiteral;
  arrayInitializer$ObjectLiteral.prototype = Object.create(Domain.prototype);
  arrayInitializer$ObjectLiteral.prototype.constructor = arrayInitializer$ObjectLiteral;
  objectInitializer$ObjectLiteral.prototype = Object.create(Domain.prototype);
  objectInitializer$ObjectLiteral.prototype.constructor = objectInitializer$ObjectLiteral;
  comparator$ObjectLiteral.prototype = Object.create(Domain.prototype);
  comparator$ObjectLiteral.prototype.constructor = comparator$ObjectLiteral;
  argumentsGetter$ObjectLiteral.prototype = Object.create(Domain.prototype);
  argumentsGetter$ObjectLiteral.prototype.constructor = argumentsGetter$ObjectLiteral;
  function createCompiler$lambda() {
    return new Compiler();
  }
  var createCompiler;
  function compile$lambda$lambda$lambda$lambda($receiver) {
    $receiver.line_3pad5q$(times('define(["exports"], factory);', nullLocation));
    return Unit;
  }
  function compile$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.line_3pad5q$(times('factory(module.exports);', nullLocation));
    return Unit;
  }
  function compile$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.line_3pad5q$(times('root.fl9_result = factory(typeof fl9_result === "undefined" ? {} : fl9_result);', nullLocation));
    return Unit;
  }
  function compile$lambda$lambda$lambda($receiver) {
    $receiver.line_3pad5q$(times('if (typeof define === "function" && define.amd) {', nullLocation));
    $receiver.indent_3vmjfp$(compile$lambda$lambda$lambda$lambda);
    $receiver.line_3pad5q$(times('} else if (typeof exports === "object") {', nullLocation));
    $receiver.indent_3vmjfp$(compile$lambda$lambda$lambda$lambda_0);
    $receiver.line_3pad5q$(times('} else {', nullLocation));
    $receiver.indent_3vmjfp$(compile$lambda$lambda$lambda$lambda_1);
    $receiver.line_3pad5q$(times('}', nullLocation));
    return Unit;
  }
  function compile$lambda$lambda$lambda$lambda_2(closure$code) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$code.head);
      $receiver.line_3pad5q$(plus_0(plus_0(times('return ', nullLocation), closure$code.body), times(';', nullLocation)));
      return Unit;
    };
  }
  function compile$lambda$lambda$lambda_0(closure$idSymbol, closure$code, closure$label) {
    return function ($receiver) {
      $receiver.line_3pad5q$(times('"use strict";', nullLocation));
      $receiver.line_3pad5q$(times('_.main = (v' + closure$idSymbol + ' => ({[v' + closure$idSymbol + ']: function(runtime) {', nullLocation));
      $receiver.indent_3vmjfp$(compile$lambda$lambda$lambda$lambda_2(closure$code));
      $receiver.line_3pad5q$(times('}})[v' + closure$idSymbol + '])(Symbol(' + JSON.stringify(closure$label) + '));', nullLocation));
      $receiver.line_3pad5q$(times('return _;', nullLocation));
      return Unit;
    };
  }
  function compile$lambda$lambda(closure$idSymbol, closure$code, closure$label) {
    return function ($receiver) {
      $receiver.line_3pad5q$(times('(function(root, factory) {', nullLocation));
      $receiver.indent_3vmjfp$(compile$lambda$lambda$lambda);
      $receiver.line_3pad5q$(times('}(this, function(_) {', nullLocation));
      $receiver.indent_3vmjfp$(compile$lambda$lambda$lambda_0(closure$idSymbol, closure$code, closure$label));
      $receiver.line_3pad5q$(times('}));', nullLocation));
      return Unit;
    };
  }
  function compile$lambda$lambda$lambda_1(sourcedString) {
    return sourcedString.string;
  }
  function compile$lambda$lambda_0(sourcedLine) {
    return joinToString(sourcedLine.sourcesStrings, '', void 0, void 0, void 0, void 0, compile$lambda$lambda$lambda_1) + '\n';
  }
  function compile$lambda(compiler, node) {
    var code_0 = compile_0(node, compiler, getter);
    var idSymbol = compiler.nextId();
    var label = '<ROOT> (<EVAL>)';
    var sourcedFile = code(compile$lambda$lambda(idSymbol, code_0, label));
    return joinToString(sourcedFile.sourcedLines, '', void 0, void 0, void 0, void 0, compile$lambda$lambda_0);
  }
  var compile;
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda($receiver) {
    return GetterCode_init($receiver.not_pdl1vz$('(runtime.getVoid())'));
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    return RunnerCode_init();
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda(it) {
    return Unit;
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    return new ArrayInitializerCode(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda);
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_0(it) {
    return Unit;
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    return new ObjectInitializerCode(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_0);
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda($receiver) {
    $receiver.invoke_wbj58y$(getter, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda);
    $receiver.invoke_wbj58y$(runner, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_0);
    $receiver.invoke_wbj58y$(arrayInitializer, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_1);
    $receiver.invoke_wbj58y$(objectInitializer, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_2);
    return Unit;
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_3($receiver) {
    return GetterCode_init($receiver.not_pdl1vz$('(' + $receiver.channelContext.value + ')'));
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.invoke_wbj58y$(getter, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_3);
    return Unit;
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$id, this$) {
    return function ($receiver) {
      $receiver.line_3pad5q$(this$.not_pdl1vz$('const ' + closure$id + ' = ' + JSON.stringify(this$.channelContext.value) + ';'));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_4(closure$compiler) {
    return function ($receiver) {
      if ($receiver.channelContext.value.length === 0) {
        return GetterCode_init($receiver.not_pdl1vz$('""'));
      } else {
        var id = 'v' + toString(closure$compiler.nextId());
        return new GetterCode(code(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_1(id, $receiver)), $receiver.not_pdl1vz$(id));
      }
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_1(closure$compiler) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_4(closure$compiler));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$CodeStringInit(head, body) {
    this.head = head;
    this.body = body;
  }
  applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$CodeStringInit.$metadata$ = {kind: Kind_CLASS, simpleName: 'CodeStringInit', interfaces: []};
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$codes, closure$id, this$) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$codes.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        $receiver.line_3pe74m$(element.head);
      }
      var tmp$_0 = this$.not_pdl1vz$('const ' + closure$id + ' = `');
      var $receiver_0 = closure$codes;
      var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_1;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var item = tmp$_1.next();
        destination.add_11rb$(item.body);
      }
      var tmp$_2;
      var reduceOrNull$result;
      reduceOrNull$break: do {
        var iterator = destination.iterator();
        if (!iterator.hasNext()) {
          reduceOrNull$result = null;
          break reduceOrNull$break;
        }var accumulator = iterator.next();
        while (iterator.hasNext()) {
          accumulator = plus_0(accumulator, iterator.next());
        }
        reduceOrNull$result = accumulator;
      }
       while (false);
      $receiver.line_3pad5q$(plus_0(plus_0(tmp$_0, (tmp$_2 = reduceOrNull$result) != null ? tmp$_2 : package$fl9.zeroLine), this$.not_pdl1vz$('`;')));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_5(closure$compiler) {
    return function ($receiver) {
      if ($receiver.channelContext.value.length === 0) {
        return GetterCode_init($receiver.not_pdl1vz$('""'));
      } else {
        var $receiver_0 = $receiver.channelContext.value;
        var destination = ArrayList_init($receiver_0.length);
        var tmp$;
        loop_label: for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
          var item = $receiver_0[tmp$];
          var tmp$_0 = destination.add_11rb$;
          var closure$compiler_0 = closure$compiler;
          var transform$result;
          transform$break: do {
            if (isType(item, string)) {
              var string_0 = item.value;
              var tmp$_1 = zeroFile;
              var it = JSON.stringify(string_0);
              var endIndex = it.length - 1 | 0;
              transform$result = new applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$CodeStringInit(tmp$_1, times(it.substring(1, endIndex), item.location));
              break transform$break;
            }var code_0 = compile_0(item, closure$compiler_0, getter);
            transform$result = new applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$CodeStringInit(code_0.head, plus_0(plus_0(times('${runtime.toString(', item.location), code_0.body), times(')}', item.location)));
          }
           while (false);
          tmp$_0.call(destination, transform$result);
        }
        var codes = destination;
        var id = 'v' + toString(closure$compiler.nextId());
        return new GetterCode(code(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_2(codes, id, $receiver)), $receiver.not_pdl1vz$(id));
      }
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_2(closure$compiler) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_5(closure$compiler));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$id, this$) {
    return function ($receiver) {
      $receiver.line_3pad5q$(this$.not_pdl1vz$('const ' + closure$id + ' = runtime.get(' + JSON.stringify(this$.channelContext.value) + ');'));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_6(closure$compiler) {
    return function ($receiver) {
      var tmp$, tmp$_0, tmp$_1;
      var tmp$_2;
      if ((tmp$_1 = (tmp$_0 = (tmp$ = closure$compiler.get_ttiokq$(aliases).get_61zpoe$($receiver.channelContext.value)) != null ? tmp$.get_loizr5$(getter) : null) != null ? tmp$_0(new Context(closure$compiler, $receiver.location, Unit, $receiver.domainContext)) : null) != null)
        tmp$_2 = tmp$_1;
      else {
        var id = 'v' + toString(closure$compiler.nextId());
        tmp$_2 = new GetterCode(code(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda(id, $receiver)), $receiver.not_pdl1vz$(id));
      }
      return tmp$_2;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$code, this$) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$code.head);
      $receiver.line_3pad5q$(plus_0(plus_0(this$.not_pdl1vz$('runtime.set(' + JSON.stringify(this$.channelContext.value) + ', '), closure$code.body), this$.not_pdl1vz$(');')));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$) {
    return function (code_0) {
      return new RunnerCode(code(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(code_0, this$)));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_7(closure$compiler) {
    return function ($receiver) {
      var tmp$, tmp$_0, tmp$_1;
      return (tmp$_1 = (tmp$_0 = (tmp$ = closure$compiler.get_ttiokq$(aliases).get_61zpoe$($receiver.channelContext.value)) != null ? tmp$.get_loizr5$(setter) : null) != null ? tmp$_0(new Context(closure$compiler, $receiver.location, Unit, Unit)) : null) != null ? tmp$_1 : new SetterCode(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_3(closure$compiler) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_6(closure$compiler));
      $receiver.invoke_wbj58y$(setter, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_7(closure$compiler));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_8($receiver) {
    return GetterCode_init($receiver.not_pdl1vz$('(runtime.getEmpty())'));
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_4($receiver) {
    $receiver.invoke_wbj58y$(getter, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_8);
    return Unit;
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_9(closure$compiler) {
    return function ($receiver) {
      var $this = closure$compiler.get_ttiokq$(aliases);
      $this.push();
      var result = compile_0($receiver.channelContext.value.main, closure$compiler, getter);
      $this.pop();
      return result;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_10(closure$compiler) {
    return function ($receiver) {
      var $this = closure$compiler.get_ttiokq$(aliases);
      $this.push();
      var result = compile_0($receiver.channelContext.value.main, closure$compiler, runner);
      $this.pop();
      return result;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_5(closure$compiler) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_9(closure$compiler));
      $receiver.invoke_wbj58y$(runner, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_10(closure$compiler));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$id, this$) {
    return function ($receiver) {
      $receiver.line_3pad5q$(this$.not_pdl1vz$('const v' + closure$id + ' = [];'));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_11(closure$compiler) {
    return function ($receiver) {
      var id = closure$compiler.nextId();
      return new GetterCode(code(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_3(id, $receiver)), $receiver.not_pdl1vz$('v' + id));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_6(closure$compiler) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_11(closure$compiler));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$id, closure$idItem, this$) {
    return function ($receiver) {
      $receiver.line_3pad5q$(this$.not_pdl1vz$('v' + closure$id + '[v' + closure$id + '.length] = ' + closure$idItem + ';'));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$idItem, this$, closure$code, closure$id) {
    return function ($receiver) {
      $receiver.line_3pad5q$(plus_0(plus_0(this$.not_pdl1vz$('for (let ' + closure$idItem + ' of '), closure$code.body), this$.not_pdl1vz$(') {')));
      $receiver.indent_3vmjfp$(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$id, closure$idItem, this$));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('}'));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$id, this$, closure$code) {
    return function ($receiver) {
      $receiver.line_3pad5q$(plus_0(plus_0(this$.not_pdl1vz$('v' + closure$id + '[v' + closure$id + '.length] = '), closure$code.body), this$.not_pdl1vz$(';')));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(this$, this$_0, closure$idItem, closure$id) {
    return function (code) {
      this$.line_3pe74m$(code.head);
      this$.line_3pad5q$(plus_0(plus_0(this$_0.not_pdl1vz$('if ('), code.body), this$_0.not_pdl1vz$(' instanceof runtime.Fl9Stream) {')));
      this$.indent_3vmjfp$(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$idItem, this$_0, code, closure$id));
      this$.line_3pad5q$(this$_0.not_pdl1vz$('} else {'));
      this$.indent_3vmjfp$(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$id, this$_0, code));
      this$.line_3pad5q$(this$_0.not_pdl1vz$('}'));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$id, this$, closure$codeMain, closure$idItem) {
    return function ($receiver) {
      $receiver.line_3pad5q$(this$.not_pdl1vz$('const v' + closure$id + ' = [];'));
      closure$codeMain.generator(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver, this$, closure$idItem, closure$id));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_12(closure$compiler) {
    return function ($receiver) {
      var codeMain = compile_0($receiver.channelContext.value.main, closure$compiler, arrayInitializer);
      var id = closure$compiler.nextId();
      var idItem = 'v' + toString(closure$compiler.nextId());
      return new GetterCode(code(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_4(id, $receiver, codeMain, idItem)), $receiver.not_pdl1vz$('v' + id));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_7(closure$compiler) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_12(closure$compiler));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$id, this$) {
    return function ($receiver) {
      $receiver.line_3pad5q$(this$.not_pdl1vz$('const v' + closure$id + ' = {};'));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_13(closure$compiler) {
    return function ($receiver) {
      var id = closure$compiler.nextId();
      return new GetterCode(code(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_5(id, $receiver)), $receiver.not_pdl1vz$('v' + id));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_8(closure$compiler) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_13(closure$compiler));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(this$, closure$id, this$_0) {
    return function (key, code) {
      this$.line_3pe74m$(key.head);
      this$.line_3pe74m$(code.head);
      this$.line_3pad5q$(plus_0(plus_0(plus_0(plus_0(this$_0.not_pdl1vz$('v' + closure$id + '['), key.body), this$_0.not_pdl1vz$('] = ')), code.body), this$_0.not_pdl1vz$(';')));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$id, this$, closure$codeMain) {
    return function ($receiver) {
      $receiver.line_3pad5q$(this$.not_pdl1vz$('const v' + closure$id + ' = {};'));
      closure$codeMain.generator(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2($receiver, closure$id, this$));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_14(closure$compiler) {
    return function ($receiver) {
      var codeMain = compile_0($receiver.channelContext.value.main, closure$compiler, objectInitializer);
      var id = closure$compiler.nextId();
      return new GetterCode(code(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_6(id, $receiver, codeMain)), $receiver.not_pdl1vz$('v' + id));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_9(closure$compiler) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_14(closure$compiler));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_15($receiver) {
    return GetterCode_init($receiver.not_pdl1vz$('(runtime.getEmpty())'));
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_10($receiver) {
    $receiver.invoke_wbj58y$(getter, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_15);
    return Unit;
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_16(closure$compiler) {
    return function ($receiver) {
      var $this = closure$compiler.get_ttiokq$(aliases);
      $this.push();
      var result = compile_0($receiver.channelContext.value.main, closure$compiler, getter);
      $this.pop();
      return result;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_11(closure$compiler) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_16(closure$compiler));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$code, closure$idString, this$, closure$formatter, closure$id) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$code.head);
      $receiver.line_3pad5q$(plus_0(plus_0(this$.not_pdl1vz$('const ' + closure$idString + ' = runtime.toString('), closure$code.body), this$.not_pdl1vz$(');')));
      if (closure$formatter.width != null) {
        $receiver.line_3pad5q$(this$.not_pdl1vz$('const ' + closure$id + ' = ' + (closure$formatter.zero ? '"0"' : '" "') + '.repeat(Math.max(' + toString(closure$formatter.width) + ' - ' + closure$idString + '.length, 0)) + ' + closure$idString + ';'));
      } else {
        $receiver.line_3pad5q$(this$.not_pdl1vz$('const ' + closure$id + ' = ' + closure$idString + ';'));
      }
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_17(closure$compiler) {
    return function ($receiver) {
      var formatter = $receiver.channelContext.value.formatter;
      var $this = closure$compiler.get_ttiokq$(aliases);
      $this.push();
      var result = compile_0($receiver.channelContext.value.main, closure$compiler, getter);
      $this.pop();
      var code_0 = result;
      var idString = 'v' + toString(closure$compiler.nextId());
      var id = 'v' + toString(closure$compiler.nextId());
      return new GetterCode(code(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_7(code_0, idString, $receiver, formatter, id)), $receiver.not_pdl1vz$(id));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_12(closure$compiler) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_17(closure$compiler));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$codeLeft, closure$id, this$, closure$name) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeLeft.head);
      $receiver.line_3pad5q$(plus_0(plus_0(plus_0(plus_0(this$.not_pdl1vz$('const v' + closure$id + ' = '), closure$codeLeft.body), this$.not_pdl1vz$('[')), times(JSON.stringify(closure$name), this$.channelContext.value.right.location)), this$.not_pdl1vz$('];')));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_18(closure$compiler) {
    return function ($receiver) {
      var closure$compiler_0 = closure$compiler;
      var block$result;
      block$break: do {
        var $receiver_0 = $receiver.channelContext.value.right;
        if (isType($receiver_0, identifier)) {
          var name = $receiver_0.value;
          var codeLeft = compile_0($receiver.channelContext.value.left, closure$compiler_0, getter);
          var id = closure$compiler_0.nextId();
          block$result = new GetterCode(code(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(codeLeft, id, $receiver, name)), $receiver.not_pdl1vz$('v' + id));
          break block$break;
        }throw Exception_init('Illegal Operator Argument: ' + $receiver.channelContext.value.left.type + '.' + $receiver.channelContext.value.right.type);
      }
       while (false);
      return block$result;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_13(closure$compiler) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_18(closure$compiler));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$codeLeft, closure$id, this$, closure$name) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeLeft.head);
      $receiver.line_3pad5q$(plus_0(plus_0(plus_0(plus_0(this$.not_pdl1vz$('const ' + closure$id + ' = runtime.createDelegate('), closure$codeLeft.body), this$.not_pdl1vz$(', ')), times(JSON.stringify(closure$name), this$.channelContext.value.right.location)), this$.not_pdl1vz$(');')));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_19(closure$compiler) {
    return function ($receiver) {
      var closure$compiler_0 = closure$compiler;
      var block$result;
      block$break: do {
        var $receiver_0 = $receiver.channelContext.value.right;
        if (isType($receiver_0, identifier)) {
          var name = $receiver_0.value;
          var codeLeft = compile_0($receiver.channelContext.value.left, closure$compiler_0, getter);
          var id = 'v' + toString(closure$compiler_0.nextId());
          block$result = new GetterCode(code(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(codeLeft, id, $receiver, name)), $receiver.not_pdl1vz$(id));
          break block$break;
        }throw Exception_init('Illegal Operator Argument: ' + $receiver.channelContext.value.left.type + '::' + $receiver.channelContext.value.right.type);
      }
       while (false);
      return block$result;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_14(closure$compiler) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_19(closure$compiler));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$parseArguments$lambda(closure$idObject, this$parseArguments, closure$codesMainNamed) {
    return function ($receiver) {
      $receiver.line_3pad5q$(this$parseArguments.not_pdl1vz$('const v' + closure$idObject + ' = {};'));
      var $receiver_0 = closure$codesMainNamed;
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var closure$idObject_0 = closure$idObject;
        var this$parseArguments_0 = this$parseArguments;
        $receiver.line_3pe74m$(element.second.head);
        $receiver.line_3pad5q$(plus_0(plus_0(plus_0(plus_0(this$parseArguments_0.not_pdl1vz$('v' + closure$idObject_0 + '['), times(JSON.stringify(element.first), element.third)), this$parseArguments_0.not_pdl1vz$('] = ')), element.second.body), this$parseArguments_0.not_pdl1vz$(';')));
      }
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$parseArguments(closure$compiler) {
    return function ($receiver, node) {
      var block$result;
      block$break: do {
        if (isType(node, semicolon)) {
          block$result = toList(node.value);
          break block$break;
        }block$result = listOf(node);
      }
       while (false);
      var nodesMain = block$result;
      var codesMain = ArrayList_init_0();
      var codesMainNamed = ArrayList_init_0();
      var namedMode = {v: false};
      var tmp$;
      tmp$ = nodesMain.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var closure$compiler_0 = closure$compiler;
        if (equals(element.type, 'void')) {
          if (!namedMode.v) {
            var element_0 = GetterCode_init($receiver.not_pdl1vz$('undefined'));
            codesMain.add_11rb$(element_0);
          }} else if (equals(element.type, 'colon')) {
          namedMode.v = true;
          var nodeKey = element.value.left;
          var nodeValue = element.value.right;
          if (equals(nodeKey.type, 'identifier')) {
            var tmp$_0 = nodeKey.value;
            var $this = closure$compiler_0.get_ttiokq$(aliases);
            $this.push();
            var result = compile_0(nodeValue, closure$compiler_0, getter);
            $this.pop();
            var element_1 = new Triple(tmp$_0, result, nodeKey.location);
            codesMainNamed.add_11rb$(element_1);
          } else {
            throw Exception_init('Illegal Argument Name: ' + nodeKey.type);
          }
        } else {
          var $this_0 = closure$compiler_0.get_ttiokq$(aliases);
          $this_0.push();
          var result_0 = compile_0(element, closure$compiler_0, getter);
          $this_0.pop();
          codesMain.add_11rb$(result_0);
        }
      }
      var codes = ArrayList_init_0();
      var tmp$_1;
      tmp$_1 = codesMain.iterator();
      while (tmp$_1.hasNext()) {
        var element_2 = tmp$_1.next();
        var element_3 = toArgumentsGetter(element_2);
        codes.add_11rb$(element_3);
      }
      if (!codesMainNamed.isEmpty()) {
        var idObject = closure$compiler.nextId();
        var element_4 = new ArgumentsGetterCode(code(applyStandardOperatorPlugin$lambda$lambda$lambda$parseArguments$lambda(idObject, $receiver, codesMainNamed)), listOf($receiver.not_pdl1vz$('v' + idObject)));
        codes.add_11rb$(element_4);
      }return concat(codes);
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_8(closure$codeFunction, closure$codeArguments, closure$id, this$) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeFunction.v.head);
      $receiver.line_3pe74m$(closure$codeArguments.v.head);
      var tmp$ = plus_0(plus_0(this$.not_pdl1vz$('const v' + closure$id + ' = runtime.apply('), closure$codeFunction.v.body), this$.not_pdl1vz$(', ['));
      var $receiver_0 = closure$codeArguments.v.bodies;
      var tmp$_0;
      var reduceOrNull$result;
      reduceOrNull$break: do {
        var iterator = $receiver_0.iterator();
        if (!iterator.hasNext()) {
          reduceOrNull$result = null;
          break reduceOrNull$break;
        }var accumulator = iterator.next();
        while (iterator.hasNext()) {
          var this$_0 = this$;
          var left = accumulator;
          var right = iterator.next();
          accumulator = plus_0(plus_0(left, this$_0.not_pdl1vz$(', ')), right);
        }
        reduceOrNull$result = accumulator;
      }
       while (false);
      $receiver.line_3pad5q$(plus_0(plus_0(tmp$, (tmp$_0 = reduceOrNull$result) != null ? tmp$_0 : package$fl9.zeroLine), this$.not_pdl1vz$(']);')));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_20(closure$compiler) {
    return function ($receiver) {
      var codeFunction = {v: compile_0($receiver.channelContext.value.left, closure$compiler, getter)};
      var codeArguments = {v: ArgumentsGetterCode_init_0()};
      var id = closure$compiler.nextId();
      return new GetterCode(code(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_8(codeFunction, codeArguments, id, $receiver)), $receiver.not_pdl1vz$('v' + id));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_15(closure$compiler) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_20(closure$compiler));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_9(closure$codeFunction, closure$codeArguments, closure$id, this$) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeFunction.v.head);
      $receiver.line_3pe74m$(closure$codeArguments.v.head);
      var tmp$ = plus_0(plus_0(this$.not_pdl1vz$('const v' + closure$id + ' = runtime.apply('), closure$codeFunction.v.body), this$.not_pdl1vz$(', ['));
      var $receiver_0 = closure$codeArguments.v.bodies;
      var tmp$_0;
      var reduceOrNull$result;
      reduceOrNull$break: do {
        var iterator = $receiver_0.iterator();
        if (!iterator.hasNext()) {
          reduceOrNull$result = null;
          break reduceOrNull$break;
        }var accumulator = iterator.next();
        while (iterator.hasNext()) {
          var this$_0 = this$;
          var left = accumulator;
          var right = iterator.next();
          accumulator = plus_0(plus_0(left, this$_0.not_pdl1vz$(', ')), right);
        }
        reduceOrNull$result = accumulator;
      }
       while (false);
      $receiver.line_3pad5q$(plus_0(plus_0(tmp$, (tmp$_0 = reduceOrNull$result) != null ? tmp$_0 : package$fl9.zeroLine), this$.not_pdl1vz$(']);')));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_21(closure$compiler, closure$parseArguments) {
    return function ($receiver) {
      var codeFunction = {v: compile_0($receiver.channelContext.value.left, closure$compiler, getter)};
      var codeArguments = {v: closure$parseArguments($receiver, $receiver.channelContext.value.main)};
      var id = closure$compiler.nextId();
      return new GetterCode(code(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_9(codeFunction, codeArguments, id, $receiver)), $receiver.not_pdl1vz$('v' + id));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_16(closure$compiler, closure$parseArguments) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_21(closure$compiler, closure$parseArguments));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$codeMainContent, this$) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeMainContent.head);
      $receiver.line_3pad5q$(plus_0(plus_0(this$.not_pdl1vz$('return '), closure$codeMainContent.body), this$.not_pdl1vz$(';')));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$idSymbol, closure$label, this$, closure$idFuntion, closure$idArgument, closure$codeMainContent) {
    return function ($receiver) {
      $receiver.line_3pad5q$(this$.not_pdl1vz$('const ' + closure$idSymbol + ' = Symbol(' + JSON.stringify(closure$label) + ');'));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('const ' + closure$idFuntion + ' = {[' + closure$idSymbol + ']: function(' + closure$idArgument + ') {'));
      $receiver.indent_3vmjfp$(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$codeMainContent, this$));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('}}[' + closure$idSymbol + '];'));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_10(closure$codeFunction, closure$codeArguments, closure$id, this$) {
    return function ($receiver) {
      $receiver.line_3pe74m$((closure$codeFunction.v == null ? throwUPAE('codeFunction') : closure$codeFunction.v).head);
      $receiver.line_3pe74m$((closure$codeArguments.v == null ? throwUPAE('codeArguments') : closure$codeArguments.v).head);
      var tmp$ = plus_0(plus_0(this$.not_pdl1vz$('const v' + closure$id + ' = runtime.apply('), (closure$codeFunction.v == null ? throwUPAE('codeFunction') : closure$codeFunction.v).body), this$.not_pdl1vz$(', ['));
      var $receiver_0 = (closure$codeArguments.v == null ? throwUPAE('codeArguments') : closure$codeArguments.v).bodies;
      var tmp$_0;
      var reduceOrNull$result;
      reduceOrNull$break: do {
        var iterator = $receiver_0.iterator();
        if (!iterator.hasNext()) {
          reduceOrNull$result = null;
          break reduceOrNull$break;
        }var accumulator = iterator.next();
        while (iterator.hasNext()) {
          var this$_0 = this$;
          var left = accumulator;
          var right = iterator.next();
          accumulator = plus_0(plus_0(left, this$_0.not_pdl1vz$(', ')), right);
        }
        reduceOrNull$result = accumulator;
      }
       while (false);
      $receiver.line_3pad5q$(plus_0(plus_0(tmp$, (tmp$_0 = reduceOrNull$result) != null ? tmp$_0 : package$fl9.zeroLine), this$.not_pdl1vz$(']);')));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_22(closure$compiler, closure$parseArguments) {
    return function ($receiver) {
      var codeFunction = {v: null};
      var codeArguments = {v: null};
      var $receiver_0 = $receiver.channelContext.value.left;
      var closure$compiler_0 = closure$compiler;
      var closure$parseArguments_0 = closure$parseArguments;
      block$break: do {
        if (isType($receiver_0, right_empty_square)) {
          codeFunction.v = compile_0($receiver_0.value.left, closure$compiler_0, getter);
          codeArguments.v = ArgumentsGetterCode_init_0();
          break block$break;
        }if (isType($receiver_0, right_square)) {
          var value = $receiver_0.value;
          codeFunction.v = compile_0(value.left, closure$compiler_0, getter);
          codeArguments.v = closure$parseArguments_0($receiver, value.main);
          break block$break;
        }codeFunction.v = compile_0($receiver_0, closure$compiler_0, getter);
        codeArguments.v = ArgumentsGetterCode_init_0();
      }
       while (false);
      var tmp$ = codeArguments.v == null ? throwUPAE('codeArguments') : codeArguments.v;
      var closure$compiler_1 = closure$compiler;
      var idArgument = 'v' + toString(closure$compiler_1.nextId());
      var codeMainContent = GetterCode_init($receiver.not_pdl1vz$('(runtime.getEmpty())'));
      var idFuntion = 'v' + toString(closure$compiler_1.nextId());
      var idSymbol = 'v' + toString(closure$compiler_1.nextId());
      var label = '<CLOSURE> (<EVAL>:' + $receiver.location.row + ',' + $receiver.location.column + ')';
      codeArguments.v = tmp$.plus_es5wyp$(new ArgumentsGetterCode(code(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(idSymbol, label, $receiver, idFuntion, idArgument, codeMainContent)), listOf($receiver.not_pdl1vz$(idFuntion))));
      var id = closure$compiler.nextId();
      return new GetterCode(code(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_10(codeFunction, codeArguments, id, $receiver)), $receiver.not_pdl1vz$('v' + id));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_17(closure$compiler, closure$parseArguments) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_22(closure$compiler, closure$parseArguments));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$idArgument) {
    return function ($receiver) {
      return GetterCode_init($receiver.not_pdl1vz$(closure$idArgument));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$code, closure$idArgument, this$) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$code.head);
      $receiver.line_3pad5q$(plus_0(plus_0(this$.not_pdl1vz$(closure$idArgument + ' = '), closure$code.body), this$.not_pdl1vz$(';')));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$idArgument, this$) {
    return function (code_0) {
      return new RunnerCode(code(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(code_0, closure$idArgument, this$)));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$idArgument) {
    return function ($receiver) {
      return new SetterCode(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$idArgument, $receiver));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$idArgument) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$idArgument));
      $receiver.invoke_wbj58y$(setter, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$idArgument));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$codeMainContent, this$) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeMainContent.head);
      $receiver.line_3pad5q$(plus_0(plus_0(this$.not_pdl1vz$('return '), closure$codeMainContent.body), this$.not_pdl1vz$(';')));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$idSymbol, closure$label, this$, closure$idFuntion, closure$idArgument, closure$codeMainContent) {
    return function ($receiver) {
      $receiver.line_3pad5q$(this$.not_pdl1vz$('const ' + closure$idSymbol + ' = Symbol(' + JSON.stringify(closure$label) + ');'));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('const ' + closure$idFuntion + ' = {[' + closure$idSymbol + ']: function(' + closure$idArgument + ') {'));
      $receiver.indent_3vmjfp$(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$codeMainContent, this$));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('}}[' + closure$idSymbol + '];'));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_11(closure$codeFunction, closure$codeArguments, closure$id, this$) {
    return function ($receiver) {
      $receiver.line_3pe74m$((closure$codeFunction.v == null ? throwUPAE('codeFunction') : closure$codeFunction.v).head);
      $receiver.line_3pe74m$((closure$codeArguments.v == null ? throwUPAE('codeArguments') : closure$codeArguments.v).head);
      var tmp$ = plus_0(plus_0(this$.not_pdl1vz$('const v' + closure$id + ' = runtime.apply('), (closure$codeFunction.v == null ? throwUPAE('codeFunction') : closure$codeFunction.v).body), this$.not_pdl1vz$(', ['));
      var $receiver_0 = (closure$codeArguments.v == null ? throwUPAE('codeArguments') : closure$codeArguments.v).bodies;
      var tmp$_0;
      var reduceOrNull$result;
      reduceOrNull$break: do {
        var iterator = $receiver_0.iterator();
        if (!iterator.hasNext()) {
          reduceOrNull$result = null;
          break reduceOrNull$break;
        }var accumulator = iterator.next();
        while (iterator.hasNext()) {
          var this$_0 = this$;
          var left = accumulator;
          var right = iterator.next();
          accumulator = plus_0(plus_0(left, this$_0.not_pdl1vz$(', ')), right);
        }
        reduceOrNull$result = accumulator;
      }
       while (false);
      $receiver.line_3pad5q$(plus_0(plus_0(tmp$, (tmp$_0 = reduceOrNull$result) != null ? tmp$_0 : package$fl9.zeroLine), this$.not_pdl1vz$(']);')));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_23(closure$compiler, closure$parseArguments) {
    return function ($receiver) {
      var codeFunction = {v: null};
      var codeArguments = {v: null};
      var $receiver_0 = $receiver.channelContext.value.left;
      var closure$compiler_0 = closure$compiler;
      var closure$parseArguments_0 = closure$parseArguments;
      block$break: do {
        if (isType($receiver_0, right_empty_square)) {
          codeFunction.v = compile_0($receiver_0.value.left, closure$compiler_0, getter);
          codeArguments.v = ArgumentsGetterCode_init_0();
          break block$break;
        }if (isType($receiver_0, right_square)) {
          var value = $receiver_0.value;
          codeFunction.v = compile_0(value.left, closure$compiler_0, getter);
          codeArguments.v = closure$parseArguments_0($receiver, value.main);
          break block$break;
        }codeFunction.v = compile_0($receiver_0, closure$compiler_0, getter);
        codeArguments.v = ArgumentsGetterCode_init_0();
      }
       while (false);
      var tmp$ = codeArguments.v == null ? throwUPAE('codeArguments') : codeArguments.v;
      var closure$compiler_1 = closure$compiler;
      var idArgument = 'v' + toString(closure$compiler_1.nextId());
      var $this = closure$compiler_1.get_ttiokq$(aliases);
      $this.push();
      closure$compiler_1.get_ttiokq$(aliases).invoke_myna1y$('_', applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(idArgument));
      var result = compile_0($receiver.channelContext.value.main, closure$compiler_1, getter);
      $this.pop();
      var codeMainContent = result;
      var idFuntion = 'v' + toString(closure$compiler_1.nextId());
      var idSymbol = 'v' + toString(closure$compiler_1.nextId());
      var label = '<CLOSURE> (<EVAL>:' + $receiver.location.row + ',' + $receiver.location.column + ')';
      codeArguments.v = tmp$.plus_es5wyp$(new ArgumentsGetterCode(code(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(idSymbol, label, $receiver, idFuntion, idArgument, codeMainContent)), listOf($receiver.not_pdl1vz$(idFuntion))));
      var id = closure$compiler.nextId();
      return new GetterCode(code(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_11(codeFunction, codeArguments, id, $receiver)), $receiver.not_pdl1vz$('v' + id));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_18(closure$compiler, closure$parseArguments) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_23(closure$compiler, closure$parseArguments));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$leftUnaryOperatorGetter$lambda$lambda(closure$codeRight, closure$id, this$, closure$function) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeRight.head);
      $receiver.line_3pad5q$(plus_0(plus_0(this$.not_pdl1vz$('const v' + closure$id + ' = '), closure$function(this$, closure$codeRight.body)), this$.not_pdl1vz$(';')));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$leftUnaryOperatorGetter$lambda(closure$compiler, closure$function) {
    return function ($receiver) {
      var codeRight = compile_0($receiver.channelContext.value.right, closure$compiler, getter);
      var id = closure$compiler.nextId();
      return new GetterCode(code(applyStandardOperatorPlugin$lambda$lambda$lambda$leftUnaryOperatorGetter$lambda$lambda(codeRight, id, $receiver, closure$function)), $receiver.not_pdl1vz$('v' + id));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$leftUnaryOperatorGetter(closure$compiler) {
    return function (function_0) {
      return applyStandardOperatorPlugin$lambda$lambda$lambda$leftUnaryOperatorGetter$lambda(closure$compiler, function_0);
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_24($receiver, it) {
    return plus_0(plus_0($receiver.not_pdl1vz$('runtime.toNumber('), it), $receiver.not_pdl1vz$(')'));
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_19(closure$leftUnaryOperatorGetter) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, closure$leftUnaryOperatorGetter(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_24));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_25($receiver, it) {
    return plus_0(plus_0($receiver.not_pdl1vz$('-runtime.toNumber('), it), $receiver.not_pdl1vz$(')'));
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_20(closure$leftUnaryOperatorGetter) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, closure$leftUnaryOperatorGetter(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_25));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_26($receiver, it) {
    return plus_0(plus_0($receiver.not_pdl1vz$('runtime.toString('), it), $receiver.not_pdl1vz$(')'));
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_21(closure$leftUnaryOperatorGetter) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, closure$leftUnaryOperatorGetter(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_26));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_27($receiver, it) {
    return plus_0(plus_0($receiver.not_pdl1vz$('runtime.toBoolean('), it), $receiver.not_pdl1vz$(')'));
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_22(closure$leftUnaryOperatorGetter) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, closure$leftUnaryOperatorGetter(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_27));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_28($receiver, it) {
    return plus_0(plus_0($receiver.not_pdl1vz$('!runtime.toBoolean('), it), $receiver.not_pdl1vz$(')'));
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_23(closure$leftUnaryOperatorGetter) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, closure$leftUnaryOperatorGetter(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_28));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_29($receiver, it) {
    return plus_0(plus_0($receiver.not_pdl1vz$('runtime.getLength('), it), $receiver.not_pdl1vz$(')'));
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_24(closure$leftUnaryOperatorGetter) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, closure$leftUnaryOperatorGetter(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_29));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_30($receiver, it) {
    return plus_0(plus_0($receiver.not_pdl1vz$('runtime.toJson('), it), $receiver.not_pdl1vz$(')'));
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_25(closure$leftUnaryOperatorGetter) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, closure$leftUnaryOperatorGetter(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_30));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_31($receiver, it) {
    return plus_0(plus_0($receiver.not_pdl1vz$('runtime.fromJson('), it), $receiver.not_pdl1vz$(')'));
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_26(closure$leftUnaryOperatorGetter) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, closure$leftUnaryOperatorGetter(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_31));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$binaryOperatorGetter$lambda$lambda(closure$codeLeft, closure$codeRight, closure$id, this$, closure$function) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeLeft.head);
      $receiver.line_3pe74m$(closure$codeRight.head);
      $receiver.line_3pad5q$(plus_0(plus_0(this$.not_pdl1vz$('const v' + closure$id + ' = '), closure$function(this$, closure$codeLeft.body, closure$codeRight.body)), this$.not_pdl1vz$(';')));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$binaryOperatorGetter$lambda(closure$compiler, closure$function) {
    return function ($receiver) {
      var codeLeft = compile_0($receiver.channelContext.value.left, closure$compiler, getter);
      var codeRight = compile_0($receiver.channelContext.value.right, closure$compiler, getter);
      var id = closure$compiler.nextId();
      return new GetterCode(code(applyStandardOperatorPlugin$lambda$lambda$lambda$binaryOperatorGetter$lambda$lambda(codeLeft, codeRight, id, $receiver, closure$function)), $receiver.not_pdl1vz$('v' + id));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$binaryOperatorGetter(closure$compiler) {
    return function (function_0) {
      return applyStandardOperatorPlugin$lambda$lambda$lambda$binaryOperatorGetter$lambda(closure$compiler, function_0);
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_32($receiver, left, right) {
    return plus_0(plus_0(plus_0(plus_0($receiver.not_pdl1vz$('runtime.multiply('), left), $receiver.not_pdl1vz$(', ')), right), $receiver.not_pdl1vz$(')'));
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_27(closure$binaryOperatorGetter) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, closure$binaryOperatorGetter(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_32));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_33($receiver, left, right) {
    return plus_0(plus_0(plus_0(plus_0($receiver.not_pdl1vz$('runtime.divide('), left), $receiver.not_pdl1vz$(', ')), right), $receiver.not_pdl1vz$(')'));
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_28(closure$binaryOperatorGetter) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, closure$binaryOperatorGetter(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_33));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_34($receiver, left, right) {
    return plus_0(plus_0(plus_0(plus_0($receiver.not_pdl1vz$('runtime.add('), left), $receiver.not_pdl1vz$(', ')), right), $receiver.not_pdl1vz$(')'));
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_29(closure$binaryOperatorGetter) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, closure$binaryOperatorGetter(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_34));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_35($receiver, left, right) {
    return plus_0(plus_0(plus_0(plus_0($receiver.not_pdl1vz$('runtime.subtract('), left), $receiver.not_pdl1vz$(', ')), right), $receiver.not_pdl1vz$(')'));
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_30(closure$binaryOperatorGetter) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, closure$binaryOperatorGetter(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_35));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_36($receiver, left, right) {
    return plus_0(plus_0(plus_0(plus_0($receiver.not_pdl1vz$('runtime.rangeClosed('), left), $receiver.not_pdl1vz$(', ')), right), $receiver.not_pdl1vz$(')'));
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_31(closure$binaryOperatorGetter) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, closure$binaryOperatorGetter(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_36));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_37($receiver, left, right) {
    return plus_0(plus_0(plus_0(plus_0($receiver.not_pdl1vz$('runtime.rangeOpened('), left), $receiver.not_pdl1vz$(', ')), right), $receiver.not_pdl1vz$(')'));
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_32(closure$binaryOperatorGetter) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, closure$binaryOperatorGetter(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_37));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$idVarResult, this$, closure$idLabel) {
    return function ($receiver) {
      $receiver.line_3pad5q$(this$.not_pdl1vz$(closure$idVarResult + ' = false;'));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('break ' + closure$idLabel + ';'));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$codesTerm, closure$idVars, this$, closure$codesOperator, closure$idVarResult, closure$idLabel) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codesTerm.get_za3lpa$(0).head);
      $receiver.line_3pad5q$(plus_0(plus_0(this$.not_pdl1vz$('const ' + closure$idVars.get_za3lpa$(0) + ' = '), closure$codesTerm.get_za3lpa$(0).body), this$.not_pdl1vz$(';')));
      var $receiver_0 = get_indices(this$.channelContext.value.types);
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var closure$codesTerm_0 = closure$codesTerm;
        var closure$idVars_0 = closure$idVars;
        var this$_0 = this$;
        var closure$codesOperator_0 = closure$codesOperator;
        var closure$idVarResult_0 = closure$idVarResult;
        var closure$idLabel_0 = closure$idLabel;
        $receiver.line_3pe74m$(closure$codesTerm_0.get_za3lpa$(element + 1 | 0).head);
        $receiver.line_3pad5q$(plus_0(plus_0(this$_0.not_pdl1vz$('const ' + closure$idVars_0.get_za3lpa$(element + 1 | 0) + ' = '), closure$codesTerm_0.get_za3lpa$(element + 1 | 0).body), this$_0.not_pdl1vz$(';')));
        $receiver.line_3pad5q$(plus_0(plus_0(this$_0.not_pdl1vz$('if (!('), closure$codesOperator_0.get_za3lpa$(element).comparator(this$_0.not_pdl1vz$(closure$idVars_0.get_za3lpa$(element)), this$_0.not_pdl1vz$(closure$idVars_0.get_za3lpa$(element + 1 | 0)))), this$_0.not_pdl1vz$(')) {')));
        $receiver.indent_3vmjfp$(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$idVarResult_0, this$_0, closure$idLabel_0));
        $receiver.line_3pad5q$(this$_0.not_pdl1vz$('}'));
      }
      $receiver.line_3pad5q$(this$.not_pdl1vz$(closure$idVarResult + ' = true;'));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_12(closure$idVarResult, this$, closure$idLabel, closure$codesTerm, closure$idVars, closure$codesOperator) {
    return function ($receiver) {
      $receiver.line_3pad5q$(this$.not_pdl1vz$('let ' + closure$idVarResult + ';'));
      $receiver.line_3pad5q$(this$.not_pdl1vz$(closure$idLabel + ':'));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('{'));
      $receiver.indent_3vmjfp$(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$codesTerm, closure$idVars, this$, closure$codesOperator, closure$idVarResult, closure$idLabel));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('}'));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_38(closure$compiler) {
    return function ($receiver) {
      var $receiver_0 = get_indices($receiver.channelContext.value.nodes);
      var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$('v' + closure$compiler.nextId() + '$' + item);
      }
      var idVars = destination;
      var idVarResult = 'v' + closure$compiler.nextId() + '$' + 'result';
      var idLabel = 'l' + toString(closure$compiler.nextId());
      var $receiver_1 = get_indices($receiver.channelContext.value.types);
      var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
      var tmp$_0;
      tmp$_0 = $receiver_1.iterator();
      while (tmp$_0.hasNext()) {
        var item_0 = tmp$_0.next();
        var tmp$_1 = destination_0.add_11rb$;
        var closure$compiler_0 = closure$compiler;
        tmp$_1.call(destination_0, compile_0(new Node($receiver.channelContext.value.types[item_0], Unit, $receiver.channelContext.value.locations[item_0]), closure$compiler_0, comparator));
      }
      var codesOperator = destination_0;
      var $receiver_2 = $receiver.channelContext.value.nodes;
      var destination_1 = ArrayList_init($receiver_2.length);
      var tmp$_2;
      for (tmp$_2 = 0; tmp$_2 !== $receiver_2.length; ++tmp$_2) {
        var item_1 = $receiver_2[tmp$_2];
        destination_1.add_11rb$(compile_0(item_1, closure$compiler, getter));
      }
      var codesTerm = destination_1;
      return new GetterCode(code(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_12(idVarResult, $receiver, idLabel, codesTerm, idVars, codesOperator)), $receiver.not_pdl1vz$(idVarResult));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_33(closure$compiler) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_38(closure$compiler));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_13(this$) {
    return function (left, right) {
      return plus_0(plus_0(left, this$.not_pdl1vz$(' == ')), right);
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_39($receiver) {
    return new ComparatorCode(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_13($receiver));
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_34($receiver) {
    $receiver.invoke_wbj58y$(comparator, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_39);
    return Unit;
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_14(this$) {
    return function (left, right) {
      return plus_0(plus_0(left, this$.not_pdl1vz$(' != ')), right);
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_40($receiver) {
    return new ComparatorCode(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_14($receiver));
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_35($receiver) {
    $receiver.invoke_wbj58y$(comparator, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_40);
    return Unit;
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_15(this$) {
    return function (left, right) {
      return plus_0(plus_0(left, this$.not_pdl1vz$(' === ')), right);
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_41($receiver) {
    return new ComparatorCode(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_15($receiver));
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_36($receiver) {
    $receiver.invoke_wbj58y$(comparator, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_41);
    return Unit;
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_16(this$) {
    return function (left, right) {
      return plus_0(plus_0(left, this$.not_pdl1vz$(' !== ')), right);
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_42($receiver) {
    return new ComparatorCode(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_16($receiver));
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_37($receiver) {
    $receiver.invoke_wbj58y$(comparator, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_42);
    return Unit;
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_17(this$) {
    return function (left, right) {
      return plus_0(plus_0(left, this$.not_pdl1vz$(' > ')), right);
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_43($receiver) {
    return new ComparatorCode(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_17($receiver));
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_38($receiver) {
    $receiver.invoke_wbj58y$(comparator, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_43);
    return Unit;
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_18(this$) {
    return function (left, right) {
      return plus_0(plus_0(left, this$.not_pdl1vz$(' < ')), right);
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_44($receiver) {
    return new ComparatorCode(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_18($receiver));
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_39($receiver) {
    $receiver.invoke_wbj58y$(comparator, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_44);
    return Unit;
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_19(this$) {
    return function (left, right) {
      return plus_0(plus_0(left, this$.not_pdl1vz$(' >= ')), right);
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_45($receiver) {
    return new ComparatorCode(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_19($receiver));
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_40($receiver) {
    $receiver.invoke_wbj58y$(comparator, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_45);
    return Unit;
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_20(this$) {
    return function (left, right) {
      return plus_0(plus_0(left, this$.not_pdl1vz$(' <= ')), right);
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_46($receiver) {
    return new ComparatorCode(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_20($receiver));
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_41($receiver) {
    $receiver.invoke_wbj58y$(comparator, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_46);
    return Unit;
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$binaryConditionOperatorGetter$lambda$lambda$lambda(closure$codeRight, closure$id, this$) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeRight.head);
      $receiver.line_3pad5q$(plus_0(plus_0(this$.not_pdl1vz$('v' + closure$id + ' = '), closure$codeRight.body), this$.not_pdl1vz$(';')));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$binaryConditionOperatorGetter$lambda$lambda$lambda_0(closure$id, this$, closure$codeLeft) {
    return function ($receiver) {
      $receiver.line_3pad5q$(plus_0(plus_0(this$.not_pdl1vz$('v' + closure$id + ' = '), closure$codeLeft.body), this$.not_pdl1vz$(';')));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$binaryConditionOperatorGetter$lambda$lambda(closure$codeLeft, closure$id, this$, closure$function, closure$codeRight) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeLeft.head);
      $receiver.line_3pad5q$(this$.not_pdl1vz$('let v' + closure$id + ';'));
      $receiver.line_3pad5q$(plus_0(plus_0(this$.not_pdl1vz$('if ('), closure$function(this$, closure$codeLeft.body)), this$.not_pdl1vz$(') {')));
      $receiver.indent_3vmjfp$(applyStandardOperatorPlugin$lambda$lambda$lambda$binaryConditionOperatorGetter$lambda$lambda$lambda(closure$codeRight, closure$id, this$));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('} else {'));
      $receiver.indent_3vmjfp$(applyStandardOperatorPlugin$lambda$lambda$lambda$binaryConditionOperatorGetter$lambda$lambda$lambda_0(closure$id, this$, closure$codeLeft));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('}'));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$binaryConditionOperatorGetter$lambda(closure$compiler, closure$function) {
    return function ($receiver) {
      var codeLeft = compile_0($receiver.channelContext.value.left, closure$compiler, getter);
      var $this = closure$compiler.get_ttiokq$(aliases);
      $this.push();
      var result = compile_0($receiver.channelContext.value.right, closure$compiler, getter);
      $this.pop();
      var codeRight = result;
      var id = closure$compiler.nextId();
      return new GetterCode(code(applyStandardOperatorPlugin$lambda$lambda$lambda$binaryConditionOperatorGetter$lambda$lambda(codeLeft, id, $receiver, closure$function, codeRight)), $receiver.not_pdl1vz$('v' + id));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$binaryConditionOperatorGetter(closure$compiler) {
    return function (function_0) {
      return applyStandardOperatorPlugin$lambda$lambda$lambda$binaryConditionOperatorGetter$lambda(closure$compiler, function_0);
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$binaryConditionOperatorRunner$lambda$lambda$lambda(closure$codeRight) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeRight.head);
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$binaryConditionOperatorRunner$lambda$lambda(closure$codeLeft, this$, closure$function, closure$codeRight) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeLeft.head);
      $receiver.line_3pad5q$(plus_0(plus_0(this$.not_pdl1vz$('if ('), closure$function(this$, closure$codeLeft.body)), this$.not_pdl1vz$(') {')));
      $receiver.indent_3vmjfp$(applyStandardOperatorPlugin$lambda$lambda$lambda$binaryConditionOperatorRunner$lambda$lambda$lambda(closure$codeRight));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('}'));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$binaryConditionOperatorRunner$lambda(closure$compiler, closure$function) {
    return function ($receiver) {
      var codeLeft = compile_0($receiver.channelContext.value.left, closure$compiler, getter);
      var $this = closure$compiler.get_ttiokq$(aliases);
      $this.push();
      var result = compile_0($receiver.channelContext.value.right, closure$compiler, runner);
      $this.pop();
      var codeRight = result;
      return new RunnerCode(code(applyStandardOperatorPlugin$lambda$lambda$lambda$binaryConditionOperatorRunner$lambda$lambda(codeLeft, $receiver, closure$function, codeRight)));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$binaryConditionOperatorRunner(closure$compiler) {
    return function (function_0) {
      return applyStandardOperatorPlugin$lambda$lambda$lambda$binaryConditionOperatorRunner$lambda(closure$compiler, function_0);
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_47($receiver, it) {
    return plus_0(plus_0($receiver.not_pdl1vz$('runtime.toBoolean('), it), $receiver.not_pdl1vz$(')'));
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_48($receiver, it) {
    return plus_0(plus_0($receiver.not_pdl1vz$('runtime.toBoolean('), it), $receiver.not_pdl1vz$(')'));
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_42(closure$binaryConditionOperatorGetter, closure$binaryConditionOperatorRunner) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, closure$binaryConditionOperatorGetter(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_47));
      $receiver.invoke_wbj58y$(runner, closure$binaryConditionOperatorRunner(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_48));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_49($receiver, it) {
    return plus_0(plus_0($receiver.not_pdl1vz$('!runtime.toBoolean('), it), $receiver.not_pdl1vz$(')'));
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_50($receiver, it) {
    return plus_0(plus_0($receiver.not_pdl1vz$('!runtime.toBoolean('), it), $receiver.not_pdl1vz$(')'));
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_43(closure$binaryConditionOperatorGetter, closure$binaryConditionOperatorRunner) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, closure$binaryConditionOperatorGetter(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_49));
      $receiver.invoke_wbj58y$(runner, closure$binaryConditionOperatorRunner(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_50));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_51($receiver, it) {
    return plus_0(it, $receiver.not_pdl1vz$(' === undefined'));
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_52($receiver, it) {
    return plus_0(it, $receiver.not_pdl1vz$(' === undefined'));
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_44(closure$binaryConditionOperatorGetter, closure$binaryConditionOperatorRunner) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, closure$binaryConditionOperatorGetter(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_51));
      $receiver.invoke_wbj58y$(runner, closure$binaryConditionOperatorRunner(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_52));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_53($receiver, it) {
    return plus_0(it, $receiver.not_pdl1vz$(' !== undefined'));
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_54($receiver, it) {
    return plus_0(it, $receiver.not_pdl1vz$(' !== undefined'));
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_45(closure$binaryConditionOperatorGetter, closure$binaryConditionOperatorRunner) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, closure$binaryConditionOperatorGetter(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_53));
      $receiver.invoke_wbj58y$(runner, closure$binaryConditionOperatorRunner(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_54));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$codeCenter, closure$id, this$) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeCenter.head);
      $receiver.line_3pad5q$(plus_0(plus_0(this$.not_pdl1vz$('v' + closure$id + ' = '), closure$codeCenter.body), this$.not_pdl1vz$(';')));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$codeRight, closure$id, this$) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeRight.head);
      $receiver.line_3pad5q$(plus_0(plus_0(this$.not_pdl1vz$('v' + closure$id + ' = '), closure$codeRight.body), this$.not_pdl1vz$(';')));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_21(closure$codeLeft, closure$id, this$, closure$codeCenter, closure$codeRight) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeLeft.head);
      $receiver.line_3pad5q$(this$.not_pdl1vz$('let v' + closure$id + ';'));
      $receiver.line_3pad5q$(plus_0(plus_0(this$.not_pdl1vz$('if (runtime.toBoolean('), closure$codeLeft.body), this$.not_pdl1vz$(')) {')));
      $receiver.indent_3vmjfp$(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$codeCenter, closure$id, this$));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('} else {'));
      $receiver.indent_3vmjfp$(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$codeRight, closure$id, this$));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('}'));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_55(closure$compiler) {
    return function ($receiver) {
      var codeLeft = compile_0($receiver.channelContext.value.left, closure$compiler, getter);
      var $this = closure$compiler.get_ttiokq$(aliases);
      $this.push();
      var result = compile_0($receiver.channelContext.value.center, closure$compiler, getter);
      $this.pop();
      var codeCenter = result;
      var $this_0 = closure$compiler.get_ttiokq$(aliases);
      $this_0.push();
      var result_0 = compile_0($receiver.channelContext.value.right, closure$compiler, getter);
      $this_0.pop();
      var codeRight = result_0;
      var id = closure$compiler.nextId();
      return new GetterCode(code(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_21(codeLeft, id, $receiver, codeCenter, codeRight)), $receiver.not_pdl1vz$('v' + id));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda_8(closure$codeCenter) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeCenter.head);
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda_9(closure$codeRight) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeRight.head);
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_22(closure$codeLeft, this$, closure$codeCenter, closure$codeRight) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeLeft.head);
      $receiver.line_3pad5q$(plus_0(plus_0(this$.not_pdl1vz$('if (runtime.toBoolean('), closure$codeLeft.body), this$.not_pdl1vz$(')) {')));
      $receiver.indent_3vmjfp$(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda_8(closure$codeCenter));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('} else {'));
      $receiver.indent_3vmjfp$(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda_9(closure$codeRight));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('}'));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_56(closure$compiler) {
    return function ($receiver) {
      var codeLeft = compile_0($receiver.channelContext.value.left, closure$compiler, getter);
      var $this = closure$compiler.get_ttiokq$(aliases);
      $this.push();
      var result = compile_0($receiver.channelContext.value.center, closure$compiler, runner);
      $this.pop();
      var codeCenter = result;
      var $this_0 = closure$compiler.get_ttiokq$(aliases);
      $this_0.push();
      var result_0 = compile_0($receiver.channelContext.value.right, closure$compiler, runner);
      $this_0.pop();
      var codeRight = result_0;
      return new RunnerCode(code(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_22(codeLeft, $receiver, codeCenter, codeRight)));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_46(closure$compiler) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_55(closure$compiler));
      $receiver.invoke_wbj58y$(runner, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_56(closure$compiler));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda_10(closure$codeLeft, closure$id, this$) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeLeft.head);
      $receiver.line_3pad5q$(plus_0(plus_0(this$.not_pdl1vz$('v' + closure$id + ' = '), closure$codeLeft.body), this$.not_pdl1vz$(';')));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda_11(closure$codeRight, closure$id, this$) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeRight.head);
      $receiver.line_3pad5q$(plus_0(plus_0(this$.not_pdl1vz$('v' + closure$id + ' = '), closure$codeRight.body), this$.not_pdl1vz$(';')));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_23(closure$id, this$, closure$codeLeft, closure$codeRight) {
    return function ($receiver) {
      $receiver.line_3pad5q$(this$.not_pdl1vz$('let v' + closure$id + ';'));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('try {'));
      $receiver.indent_3vmjfp$(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda_10(closure$codeLeft, closure$id, this$));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('} catch (e) {'));
      $receiver.indent_3vmjfp$(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda_11(closure$codeRight, closure$id, this$));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('}'));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_57(closure$compiler) {
    return function ($receiver) {
      var codeLeft = compile_0($receiver.channelContext.value.left, closure$compiler, getter);
      var $this = closure$compiler.get_ttiokq$(aliases);
      $this.push();
      var result = compile_0($receiver.channelContext.value.right, closure$compiler, getter);
      $this.pop();
      var codeRight = result;
      var id = closure$compiler.nextId();
      return new GetterCode(code(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_23(id, $receiver, codeLeft, codeRight)), $receiver.not_pdl1vz$('v' + id));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda_12(closure$codeLeft) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeLeft.head);
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda_13(closure$codeRight) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeRight.head);
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_24(this$, closure$codeLeft, closure$codeRight) {
    return function ($receiver) {
      $receiver.line_3pad5q$(this$.not_pdl1vz$('try {'));
      $receiver.indent_3vmjfp$(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda_12(closure$codeLeft));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('} catch (e) {'));
      $receiver.indent_3vmjfp$(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda_13(closure$codeRight));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('}'));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_58(closure$compiler) {
    return function ($receiver) {
      var codeLeft = compile_0($receiver.channelContext.value.left, closure$compiler, runner);
      var $this = closure$compiler.get_ttiokq$(aliases);
      $this.push();
      var result = compile_0($receiver.channelContext.value.right, closure$compiler, runner);
      $this.pop();
      var codeRight = result;
      return new RunnerCode(code(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_24($receiver, codeLeft, codeRight)));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_47(closure$compiler) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_57(closure$compiler));
      $receiver.invoke_wbj58y$(runner, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_58(closure$compiler));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_25(closure$codes, closure$id, this$) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$codes.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        $receiver.line_3pe74m$(element.head);
      }
      var tmp$_0 = this$.not_pdl1vz$('const ' + closure$id + ' = runtime.createStream([');
      var $receiver_0 = closure$codes;
      var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_1;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var item = tmp$_1.next();
        destination.add_11rb$(item.body);
      }
      var tmp$_2;
      var reduceOrNull$result;
      reduceOrNull$break: do {
        var iterator = destination.iterator();
        if (!iterator.hasNext()) {
          reduceOrNull$result = null;
          break reduceOrNull$break;
        }var accumulator = iterator.next();
        while (iterator.hasNext()) {
          var this$_0 = this$;
          var a = accumulator;
          var b = iterator.next();
          accumulator = plus_0(plus_0(a, this$_0.not_pdl1vz$(', ')), b);
        }
        reduceOrNull$result = accumulator;
      }
       while (false);
      $receiver.line_3pad5q$(plus_0(plus_0(tmp$_0, (tmp$_2 = reduceOrNull$result) != null ? tmp$_2 : package$fl9.zeroLine), this$.not_pdl1vz$(']);')));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_59(closure$compiler) {
    return function ($receiver) {
      var $receiver_0 = $receiver.channelContext.value;
      var destination = ArrayList_init_0();
      var tmp$;
      loop_label: for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var element = $receiver_0[tmp$];
        var tmp$_0;
        var closure$compiler_0 = closure$compiler;
        var transform$result;
        transform$break: do {
          if (isType(element, void_0)) {
            transform$result = null;
            break transform$break;
          }transform$result = compile_0(element, closure$compiler_0, getter);
        }
         while (false);
        if ((tmp$_0 = transform$result) != null) {
          destination.add_11rb$(tmp$_0);
        }}
      var codes = destination;
      var id = 'v' + toString(closure$compiler.nextId());
      return new GetterCode(code(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_25(codes, id, $receiver)), $receiver.not_pdl1vz$(id));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_48(closure$compiler) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_59(closure$compiler));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$Argument(name, code, location) {
    this.name = name;
    this.code = code;
    this.location = location;
  }
  applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$Argument.$metadata$ = {kind: Kind_CLASS, simpleName: 'Argument', interfaces: []};
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$argument) {
    return function ($receiver) {
      return GetterCode_init($receiver.not_pdl1vz$(closure$argument.code));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$code, closure$argument, this$) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$code.head);
      $receiver.line_3pad5q$(plus_0(plus_0(this$.not_pdl1vz$(closure$argument.code + ' = '), closure$code.body), this$.not_pdl1vz$(';')));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$argument, this$) {
    return function (code_0) {
      return new RunnerCode(code(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(code_0, closure$argument, this$)));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$argument) {
    return function ($receiver) {
      return new SetterCode(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$argument, $receiver));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$argument) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$argument));
      $receiver.invoke_wbj58y$(setter, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$argument));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda_14(closure$codeRight, this$) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeRight.head);
      $receiver.line_3pad5q$(plus_0(plus_0(this$.not_pdl1vz$('return '), closure$codeRight.body), this$.not_pdl1vz$(';')));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_26(closure$idSymbol, closure$label, this$, closure$id, closure$arguments, closure$codeRight) {
    return function ($receiver) {
      $receiver.line_3pad5q$(this$.not_pdl1vz$('const v' + closure$idSymbol + ' = Symbol(' + JSON.stringify(closure$label) + ');'));
      var tmp$ = this$.not_pdl1vz$('const v' + closure$id + ' = {[v' + closure$idSymbol + ']: function(');
      var $receiver_0 = closure$arguments;
      var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination.add_11rb$(times(item.code, item.location));
      }
      var tmp$_1;
      var reduceOrNull$result;
      reduceOrNull$break: do {
        var iterator = destination.iterator();
        if (!iterator.hasNext()) {
          reduceOrNull$result = null;
          break reduceOrNull$break;
        }var accumulator = iterator.next();
        while (iterator.hasNext()) {
          var this$_0 = this$;
          var left = accumulator;
          var right = iterator.next();
          accumulator = plus_0(plus_0(left, this$_0.not_pdl1vz$(', ')), right);
        }
        reduceOrNull$result = accumulator;
      }
       while (false);
      $receiver.line_3pad5q$(plus_0(plus_0(tmp$, (tmp$_1 = reduceOrNull$result) != null ? tmp$_1 : package$fl9.zeroLine), this$.not_pdl1vz$(') {')));
      $receiver.indent_3vmjfp$(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda_14(closure$codeRight, this$));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('}}[v' + closure$idSymbol + '];'));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_60(closure$compiler) {
    return function ($receiver) {
      var tmp$;
      var node = $receiver.channelContext.value.left;
      var block$result;
      block$break: do {
        if (isType(node, empty_round)) {
          block$result = null;
          break block$break;
        }if (isType(node, round)) {
          block$result = node.value.main;
          break block$break;
        }if (isType(node, empty_square)) {
          block$result = null;
          break block$break;
        }if (isType(node, square)) {
          block$result = node.value.main;
          break block$break;
        }block$result = node;
      }
       while (false);
      var node_0 = block$result;
      var block$result_0;
      block$break: do {
        if (node_0 == null) {
          block$result_0 = [];
          break block$break;
        }if (isType(node_0, comma)) {
          block$result_0 = node_0.value;
          break block$break;
        }if (isType(node_0, semicolon)) {
          block$result_0 = node_0.value;
          break block$break;
        }block$result_0 = [node_0];
      }
       while (false);
      var $receiver_0 = block$result_0;
      var destination = ArrayList_init_0();
      var tmp$_0;
      loop_label: for (tmp$_0 = 0; tmp$_0 !== $receiver_0.length; ++tmp$_0) {
        var element = $receiver_0[tmp$_0];
        var tmp$_0_0;
        var transform$result;
        transform$break: do {
          if (isType(element, void_0)) {
            transform$result = null;
            break transform$break;
          }if (isType(element, identifier)) {
            transform$result = new Pair(element.value, element.location);
            break transform$break;
          }throw Exception_init('Illegal Operator Argument: ' + element.type);
        }
         while (false);
        if ((tmp$_0_0 = transform$result) != null) {
          destination.add_11rb$(tmp$_0_0);
        }}
      var destination_0 = ArrayList_init(collectionSizeOrDefault(destination, 10));
      var tmp$_1;
      tmp$_1 = destination.iterator();
      while (tmp$_1.hasNext()) {
        var item = tmp$_1.next();
        var tmp$_2 = destination_0.add_11rb$;
        var closure$compiler_0 = closure$compiler;
        var tmp$_3 = item.first;
        var tmp$_4 = 'v' + closure$compiler_0.nextId() + '$';
        var tmp$_5 = item.first;
        tmp$_2.call(destination_0, new applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$Argument(tmp$_3, tmp$_4 + Regex_init('[^a-zA-Z0-9_]').replace_x2uqeu$(tmp$_5, ''), item.second));
      }
      var arguments_0 = destination_0;
      var $this = closure$compiler.get_ttiokq$(aliases);
      $this.push();
      var closure$compiler_1 = closure$compiler;
      var tmp$_6;
      tmp$_6 = arguments_0.iterator();
      while (tmp$_6.hasNext()) {
        var element_0 = tmp$_6.next();
        closure$compiler_1.get_ttiokq$(aliases).invoke_myna1y$(element_0.name, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(element_0));
      }
      var result = compile_0($receiver.channelContext.value.right, closure$compiler_1, getter);
      $this.pop();
      var codeRight = result;
      var id = closure$compiler.nextId();
      var idSymbol = closure$compiler.nextId();
      var label = ((tmp$ = $receiver.domainContext.givenName) != null ? tmp$ : '<LAMBDA>') + (' (<EVAL>:' + $receiver.location.row + ',' + $receiver.location.column + ')');
      return new GetterCode(code(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_26(idSymbol, label, $receiver, id, arguments_0, codeRight)), $receiver.not_pdl1vz$('v' + id));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_49(closure$compiler) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_60(closure$compiler));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$id, closure$internalName) {
    return function ($receiver) {
      return GetterCode_init($receiver.not_pdl1vz$('v' + closure$id + '$' + closure$internalName));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$code, closure$id, closure$internalName, this$) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$code.head);
      $receiver.line_3pad5q$(plus_0(plus_0(this$.not_pdl1vz$('v' + closure$id + '$' + closure$internalName + ' = '), closure$code.body), this$.not_pdl1vz$(';')));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$id, closure$internalName, this$) {
    return function (code_0) {
      return new RunnerCode(code(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(code_0, closure$id, closure$internalName, this$)));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$id, closure$internalName) {
    return function ($receiver) {
      return new SetterCode(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$id, closure$internalName, $receiver));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda_15(closure$id, closure$internalName) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$id, closure$internalName));
      $receiver.invoke_wbj58y$(setter, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$id, closure$internalName));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_27(closure$name) {
    return function ($receiver) {
      $receiver.givenName = closure$name;
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_28(closure$id, closure$internalName, this$, closure$codeRight) {
    return function ($receiver) {
      $receiver.line_3pad5q$(this$.not_pdl1vz$('let v' + closure$id + '$' + closure$internalName + ';'));
      $receiver.line_3pe74m$(closure$codeRight.head);
      $receiver.line_3pad5q$(plus_0(plus_0(this$.not_pdl1vz$('v' + closure$id + '$' + closure$internalName + ' = '), closure$codeRight.body), this$.not_pdl1vz$(';')));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_61(closure$compiler) {
    return function ($receiver) {
      if (equals($receiver.channelContext.value.left.type, 'identifier')) {
        var name = $receiver.channelContext.value.left.value;
        var internalName = Regex_init('[^a-zA-Z0-9_]').replace_x2uqeu$(name, '');
        var id = closure$compiler.nextId();
        closure$compiler.get_ttiokq$(aliases).invoke_myna1y$(name, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda_15(id, internalName));
        var codeRight = compile_0($receiver.channelContext.value.right, closure$compiler, getter, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_27(name));
        return new RunnerCode(code(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_28(id, internalName, $receiver, codeRight)));
      } else {
        throw Exception_init('Illegal Operator Argument: ' + $receiver.channelContext.value.left.type + ' : ' + $receiver.channelContext.value.right.type);
      }
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_50(closure$compiler) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(runner, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_61(closure$compiler));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_29(closure$codeRight, closure$id, this$, closure$codeLeft) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeRight.head);
      $receiver.line_3pad5q$(plus_0(plus_0(this$.not_pdl1vz$('const v' + closure$id + ' = '), closure$codeRight.body), this$.not_pdl1vz$(';')));
      $receiver.line_3pe74m$(closure$codeLeft.head);
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_62(closure$compiler) {
    return function ($receiver) {
      var id = closure$compiler.nextId();
      var codeRight = compile_0($receiver.channelContext.value.right, closure$compiler, getter);
      var codeLeft = compile_0($receiver.channelContext.value.left, closure$compiler, setter).consumer(GetterCode_init($receiver.not_pdl1vz$('v' + id)));
      return new GetterCode(code(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_29(codeRight, id, $receiver, codeLeft)), $receiver.not_pdl1vz$('v' + id));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_63(closure$compiler) {
    return function ($receiver) {
      return compile_0($receiver.channelContext.value.left, closure$compiler, setter).consumer(compile_0($receiver.channelContext.value.right, closure$compiler, getter));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda_16(closure$key, this$, closure$codeRight) {
    return function (consumer) {
      consumer(GetterCode_init(times(JSON.stringify(closure$key), this$.channelContext.value.left.location)), closure$codeRight);
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_30(closure$codeLeft, closure$codeRight) {
    return function (consumer) {
      consumer(closure$codeLeft, closure$codeRight);
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_64(closure$compiler) {
    return function ($receiver) {
      var $receiver_0 = $receiver.channelContext.value.left;
      var operator = identifier;
      if (isType($receiver_0, operator)) {
        var closure$compiler_0 = closure$compiler;
        var key = $receiver_0.value;
        var codeRight = compile_0($receiver.channelContext.value.right, closure$compiler_0, getter);
        return new ObjectInitializerCode(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda_16(key, $receiver, codeRight));
      }if (isType($receiver.channelContext.value.left, round)) {
        var $this = closure$compiler.get_ttiokq$(aliases);
        $this.push();
        var result = compile_0($receiver.channelContext.value.left, closure$compiler, getter);
        $this.pop();
        var codeLeft = result;
        var codeRight_0 = compile_0($receiver.channelContext.value.right, closure$compiler, getter);
        return new ObjectInitializerCode(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_30(codeLeft, codeRight_0));
      }throw Exception_init('Illegal Operator Argument: ' + $receiver.channelContext.value.left.type + ' = ' + $receiver.channelContext.value.right.type);
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_51(closure$compiler) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_62(closure$compiler));
      $receiver.invoke_wbj58y$(runner, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_63(closure$compiler));
      $receiver.invoke_wbj58y$(objectInitializer, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_64(closure$compiler));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$Receiver(name, node) {
    this.name = name;
    this.node = node;
  }
  applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$Receiver.$metadata$ = {kind: Kind_CLASS, simpleName: 'Receiver', interfaces: []};
  applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$Receiver.prototype.component1 = function () {
    return this.name;
  };
  applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$Receiver.prototype.component2 = function () {
    return this.node;
  };
  applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$Receiver.prototype.copy_5myqj9$ = function (name, node) {
    return new applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$Receiver(name === void 0 ? this.name : name, node === void 0 ? this.node : node);
  };
  applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$Receiver.prototype.toString = function () {
    return 'Receiver(name=' + Kotlin.toString(this.name) + (', node=' + Kotlin.toString(this.node)) + ')';
  };
  applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$Receiver.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.node) | 0;
    return result;
  };
  applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$Receiver.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.node, other.node)))));
  };
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$idArgument) {
    return function ($receiver) {
      return GetterCode_init($receiver.not_pdl1vz$(closure$idArgument));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$code, closure$idArgument, this$) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$code.head);
      $receiver.line_3pad5q$(plus_0(plus_0(this$.not_pdl1vz$(closure$idArgument + ' = '), closure$code.body), this$.not_pdl1vz$(';')));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$idArgument, this$) {
    return function (code_0) {
      return new RunnerCode(code(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(code_0, closure$idArgument, this$)));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$idArgument) {
    return function ($receiver) {
      return new SetterCode(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$idArgument, $receiver));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_8(closure$idArgument) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$idArgument));
      $receiver.invoke_wbj58y$(setter, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$idArgument));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda_17(closure$codeRight, this$) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeRight.head);
      $receiver.line_3pad5q$(plus_0(plus_0(this$.not_pdl1vz$('return '), closure$codeRight.body), this$.not_pdl1vz$(';')));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_31(closure$codeLeft, closure$idSymbol, closure$label, this$, closure$id, closure$idArgument, closure$codeRight) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeLeft.head);
      $receiver.line_3pad5q$(this$.not_pdl1vz$('const ' + closure$idSymbol + ' = Symbol(' + JSON.stringify(closure$label) + ');'));
      $receiver.line_3pad5q$(plus_0(plus_0(this$.not_pdl1vz$('const ' + closure$id + ' = runtime.map('), closure$codeLeft.body), this$.not_pdl1vz$(', {[' + closure$idSymbol + ']: function(' + closure$idArgument + ') {')));
      $receiver.indent_3vmjfp$(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda_17(closure$codeRight, this$));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('}}[' + closure$idSymbol + ']);'));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_65(closure$compiler) {
    return function ($receiver) {
      var codeLeft = compile_0($receiver.channelContext.value.left, closure$compiler, getter);
      var block$result;
      block$break: do {
        var $receiver_0 = $receiver.channelContext.value.right;
        if (isType($receiver_0, equal_greater)) {
          var value2 = $receiver_0.value;
          var $receiver_1 = value2.left;
          if (isType($receiver_1, identifier)) {
            block$result = new applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$Receiver($receiver_1.value, value2.right);
            break block$break;
          }throw Exception_init('Illegal Operator Argument: ' + value2.left.type + ' => ' + value2.right.type);
        }block$result = new applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$Receiver('_', $receiver.channelContext.value.right);
      }
       while (false);
      var tmp$ = block$result;
      var name = tmp$.component1(), nodeBody = tmp$.component2();
      var idArgument = 'v' + toString(closure$compiler.nextId());
      var $this = closure$compiler.get_ttiokq$(aliases);
      $this.push();
      var closure$compiler_0 = closure$compiler;
      closure$compiler_0.get_ttiokq$(aliases).invoke_myna1y$(name, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_8(idArgument));
      var result = compile_0(nodeBody, closure$compiler_0, getter);
      $this.pop();
      var codeRight = result;
      var id = 'v' + toString(closure$compiler.nextId());
      var idSymbol = 'v' + toString(closure$compiler.nextId());
      var label = '<PIPE> (<EVAL>:' + $receiver.location.row + ',' + $receiver.location.column + ')';
      return new GetterCode(code(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_31(codeLeft, idSymbol, label, $receiver, id, idArgument, codeRight)), $receiver.not_pdl1vz$(id));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$Receiver_0(name, node) {
    this.name = name;
    this.node = node;
  }
  applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$Receiver_0.$metadata$ = {kind: Kind_CLASS, simpleName: 'Receiver', interfaces: []};
  applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$Receiver_0.prototype.component1 = function () {
    return this.name;
  };
  applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$Receiver_0.prototype.component2 = function () {
    return this.node;
  };
  applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$Receiver_0.prototype.copy_5myqj9$ = function (name, node) {
    return new applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$Receiver_0(name === void 0 ? this.name : name, node === void 0 ? this.node : node);
  };
  applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$Receiver_0.prototype.toString = function () {
    return 'Receiver(name=' + Kotlin.toString(this.name) + (', node=' + Kotlin.toString(this.node)) + ')';
  };
  applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$Receiver_0.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.node) | 0;
    return result;
  };
  applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$Receiver_0.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.node, other.node)))));
  };
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$idArgument) {
    return function ($receiver) {
      return GetterCode_init($receiver.not_pdl1vz$(closure$idArgument));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$code, closure$idArgument, this$) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$code.head);
      $receiver.line_3pad5q$(plus_0(plus_0(this$.not_pdl1vz$(closure$idArgument + ' = '), closure$code.body), this$.not_pdl1vz$(';')));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$idArgument, this$) {
    return function (code_0) {
      return new RunnerCode(code(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(code_0, closure$idArgument, this$)));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$idArgument) {
    return function ($receiver) {
      return new SetterCode(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$idArgument, $receiver));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_9(closure$idArgument) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$idArgument));
      $receiver.invoke_wbj58y$(setter, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$idArgument));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda_18(closure$idArgument, closure$idArgument2, this$, closure$codeRight) {
    return function ($receiver) {
      $receiver.line_3pad5q$(this$.not_pdl1vz$('let ' + closure$idArgument + ' = ' + closure$idArgument2 + ';'));
      $receiver.line_3pe74m$(closure$codeRight.head);
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_32(closure$codeLeft, closure$idArgument2, this$, closure$idArgument, closure$codeRight) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeLeft.head);
      $receiver.line_3pad5q$(plus_0(plus_0(this$.not_pdl1vz$('for (let ' + closure$idArgument2 + ' of runtime.toStream('), closure$codeLeft.body), this$.not_pdl1vz$(')) {')));
      $receiver.indent_3vmjfp$(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda_18(closure$idArgument, closure$idArgument2, this$, closure$codeRight));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('}'));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_66(closure$compiler) {
    return function ($receiver) {
      var codeLeft = compile_0($receiver.channelContext.value.left, closure$compiler, getter);
      var block$result;
      block$break: do {
        var $receiver_0 = $receiver.channelContext.value.right;
        if (isType($receiver_0, equal_greater)) {
          var value2 = $receiver_0.value;
          var $receiver_1 = value2.left;
          if (isType($receiver_1, identifier)) {
            block$result = new applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$Receiver_0($receiver_1.value, value2.right);
            break block$break;
          }throw Exception_init('Illegal Operator Argument: ' + value2.left.type + ' => ' + value2.right.type);
        }block$result = new applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$Receiver_0('_', $receiver.channelContext.value.right);
      }
       while (false);
      var tmp$ = block$result;
      var name = tmp$.component1(), nodeBody = tmp$.component2();
      var idArgument = 'v' + toString(closure$compiler.nextId());
      var $this = closure$compiler.get_ttiokq$(aliases);
      $this.push();
      var closure$compiler_0 = closure$compiler;
      closure$compiler_0.get_ttiokq$(aliases).invoke_myna1y$(name, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_9(idArgument));
      var result = compile_0(nodeBody, closure$compiler_0, runner);
      $this.pop();
      var codeRight = result;
      var idArgument2 = 'v' + toString(closure$compiler.nextId());
      return new RunnerCode(code(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_32(codeLeft, idArgument2, $receiver, idArgument, codeRight)));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_52(closure$compiler) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_65(closure$compiler));
      $receiver.invoke_wbj58y$(runner, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_66(closure$compiler));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_33(closure$codesLeft, closure$codeRight) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$codesLeft.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        $receiver.line_3pe74m$(element.head);
      }
      $receiver.line_3pe74m$(closure$codeRight.head);
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_67(closure$compiler) {
    return function ($receiver) {
      var $receiver_0 = slice($receiver.channelContext.value, new IntRange(0, $receiver.channelContext.value.length - 2 | 0));
      var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(compile_0(item, closure$compiler, runner));
      }
      var codesLeft = destination;
      var codeRight = compile_0($receiver.channelContext.value[$receiver.channelContext.value.length - 1 | 0], closure$compiler, getter);
      return new GetterCode(code(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_33(codesLeft, codeRight)), codeRight.body);
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_34(closure$codes) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$codes.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        $receiver.line_3pe74m$(element.head);
      }
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_68(closure$compiler) {
    return function ($receiver) {
      var $receiver_0 = $receiver.channelContext.value;
      var destination = ArrayList_init($receiver_0.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var item = $receiver_0[tmp$];
        destination.add_11rb$(compile_0(item, closure$compiler, runner));
      }
      var codes = destination;
      return new RunnerCode(code(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_34(codes)));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_35(closure$codes) {
    return function (consumer) {
      var tmp$;
      tmp$ = closure$codes.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        element.generator(consumer);
      }
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_69(closure$compiler) {
    return function ($receiver) {
      var $receiver_0 = $receiver.channelContext.value;
      var destination = ArrayList_init($receiver_0.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var item = $receiver_0[tmp$];
        destination.add_11rb$(compile_0(item, closure$compiler, arrayInitializer));
      }
      var codes = destination;
      return new ArrayInitializerCode(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_35(codes));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_36(closure$codes) {
    return function (consumer) {
      var tmp$;
      tmp$ = closure$codes.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        element.generator(consumer);
      }
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_70(closure$compiler) {
    return function ($receiver) {
      var $receiver_0 = $receiver.channelContext.value;
      var destination = ArrayList_init($receiver_0.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var item = $receiver_0[tmp$];
        destination.add_11rb$(compile_0(item, closure$compiler, objectInitializer));
      }
      var codes = destination;
      return new ObjectInitializerCode(applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda$lambda_36(codes));
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_53(closure$compiler) {
    return function ($receiver) {
      $receiver.invoke_wbj58y$(getter, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_67(closure$compiler));
      $receiver.invoke_wbj58y$(runner, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_68(closure$compiler));
      $receiver.invoke_wbj58y$(arrayInitializer, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_69(closure$compiler));
      $receiver.invoke_wbj58y$(objectInitializer, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda$lambda_70(closure$compiler));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda$lambda(closure$compiler) {
    return function ($receiver) {
      $receiver.invoke_bdx8wc$(void_0, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda);
      $receiver.invoke_bdx8wc$(number, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_0);
      $receiver.invoke_bdx8wc$(string, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_1(closure$compiler));
      $receiver.invoke_bdx8wc$(join, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_2(closure$compiler));
      $receiver.invoke_bdx8wc$(identifier, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_3(closure$compiler));
      $receiver.invoke_bdx8wc$(empty_round, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_4);
      $receiver.invoke_bdx8wc$(round, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_5(closure$compiler));
      $receiver.invoke_bdx8wc$(empty_square, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_6(closure$compiler));
      $receiver.invoke_bdx8wc$(square, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_7(closure$compiler));
      $receiver.invoke_bdx8wc$(empty_curly, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_8(closure$compiler));
      $receiver.invoke_bdx8wc$(curly, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_9(closure$compiler));
      $receiver.invoke_bdx8wc$(empty_dollar_round, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_10);
      $receiver.invoke_bdx8wc$(dollar_round, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_11(closure$compiler));
      $receiver.invoke_bdx8wc$(formatted_dollar_round, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_12(closure$compiler));
      $receiver.invoke_bdx8wc$(period, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_13(closure$compiler));
      $receiver.invoke_bdx8wc$(colon_colon, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_14(closure$compiler));
      var parseArguments = applyStandardOperatorPlugin$lambda$lambda$lambda$parseArguments(closure$compiler);
      $receiver.invoke_bdx8wc$(right_empty_square, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_15(closure$compiler));
      $receiver.invoke_bdx8wc$(right_square, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_16(closure$compiler, parseArguments));
      $receiver.invoke_bdx8wc$(right_empty_round, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_17(closure$compiler, parseArguments));
      $receiver.invoke_bdx8wc$(right_round, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_18(closure$compiler, parseArguments));
      var leftUnaryOperatorGetter = applyStandardOperatorPlugin$lambda$lambda$lambda$leftUnaryOperatorGetter(closure$compiler);
      $receiver.invoke_bdx8wc$(left_plus, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_19(leftUnaryOperatorGetter));
      $receiver.invoke_bdx8wc$(left_minus, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_20(leftUnaryOperatorGetter));
      $receiver.invoke_bdx8wc$(left_ampersand, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_21(leftUnaryOperatorGetter));
      $receiver.invoke_bdx8wc$(left_question, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_22(leftUnaryOperatorGetter));
      $receiver.invoke_bdx8wc$(left_exclamation, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_23(leftUnaryOperatorGetter));
      $receiver.invoke_bdx8wc$(left_dollar_number, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_24(leftUnaryOperatorGetter));
      $receiver.invoke_bdx8wc$(left_dollar_ampersand, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_25(leftUnaryOperatorGetter));
      $receiver.invoke_bdx8wc$(left_dollar_asterisk, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_26(leftUnaryOperatorGetter));
      var binaryOperatorGetter = applyStandardOperatorPlugin$lambda$lambda$lambda$binaryOperatorGetter(closure$compiler);
      $receiver.invoke_bdx8wc$(asterisk, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_27(binaryOperatorGetter));
      $receiver.invoke_bdx8wc$(slash, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_28(binaryOperatorGetter));
      $receiver.invoke_bdx8wc$(plus_1, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_29(binaryOperatorGetter));
      $receiver.invoke_bdx8wc$(minus, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_30(binaryOperatorGetter));
      $receiver.invoke_bdx8wc$(period_period, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_31(binaryOperatorGetter));
      $receiver.invoke_bdx8wc$(tilde, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_32(binaryOperatorGetter));
      $receiver.invoke_bdx8wc$(comparison, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_33(closure$compiler));
      $receiver.invoke_bdx8wc$(equal_equal, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_34);
      $receiver.invoke_bdx8wc$(exclamation_equal, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_35);
      $receiver.invoke_bdx8wc$(equal_equal_equal, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_36);
      $receiver.invoke_bdx8wc$(exclamation_equal_equal, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_37);
      $receiver.invoke_bdx8wc$(greater, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_38);
      $receiver.invoke_bdx8wc$(less, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_39);
      $receiver.invoke_bdx8wc$(greater_equal, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_40);
      $receiver.invoke_bdx8wc$(less_equal, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_41);
      var binaryConditionOperatorGetter = applyStandardOperatorPlugin$lambda$lambda$lambda$binaryConditionOperatorGetter(closure$compiler);
      var binaryConditionOperatorRunner = applyStandardOperatorPlugin$lambda$lambda$lambda$binaryConditionOperatorRunner(closure$compiler);
      $receiver.invoke_bdx8wc$(ampersand_ampersand, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_42(binaryConditionOperatorGetter, binaryConditionOperatorRunner));
      $receiver.invoke_bdx8wc$(pipe_pipe, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_43(binaryConditionOperatorGetter, binaryConditionOperatorRunner));
      $receiver.invoke_bdx8wc$(question_colon, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_44(binaryConditionOperatorGetter, binaryConditionOperatorRunner));
      $receiver.invoke_bdx8wc$(exclamation_colon, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_45(binaryConditionOperatorGetter, binaryConditionOperatorRunner));
      $receiver.invoke_bdx8wc$(ternary_question_colon, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_46(closure$compiler));
      $receiver.invoke_bdx8wc$(exclamation_question, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_47(closure$compiler));
      $receiver.invoke_bdx8wc$(comma, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_48(closure$compiler));
      $receiver.invoke_bdx8wc$(minus_greater, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_49(closure$compiler));
      $receiver.invoke_bdx8wc$(colon, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_50(closure$compiler));
      $receiver.invoke_bdx8wc$(equal, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_51(closure$compiler));
      $receiver.invoke_bdx8wc$(pipe, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_52(closure$compiler));
      $receiver.invoke_bdx8wc$(semicolon, applyStandardOperatorPlugin$lambda$lambda$lambda$lambda_53(closure$compiler));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda$lambda(closure$compiler) {
    return function ($receiver) {
      $receiver.invoke_r4x81w$(operators, applyStandardOperatorPlugin$lambda$lambda$lambda(closure$compiler));
      return Unit;
    };
  }
  function applyStandardOperatorPlugin$lambda(compiler) {
    compiler.invoke_ts5k8t$(applyStandardOperatorPlugin$lambda$lambda(compiler));
    return Unit;
  }
  var applyStandardOperatorPlugin;
  function applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda$lambda($receiver) {
    return GetterCode_init($receiver.not_pdl1vz$('true'));
  }
  function applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda($receiver) {
    $receiver.invoke_wbj58y$(getter, applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    return GetterCode_init($receiver.not_pdl1vz$('false'));
  }
  function applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.invoke_wbj58y$(getter, applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    return GetterCode_init($receiver.not_pdl1vz$('null'));
  }
  function applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.invoke_wbj58y$(getter, applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda$lambda_1);
    return Unit;
  }
  function applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    return GetterCode_init($receiver.not_pdl1vz$('NaN'));
  }
  function applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.invoke_wbj58y$(getter, applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda$lambda_2);
    return Unit;
  }
  function applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda$lambda_3($receiver) {
    return GetterCode_init($receiver.not_pdl1vz$('Infinity'));
  }
  function applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda_3($receiver) {
    $receiver.invoke_wbj58y$(getter, applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda$lambda_3);
    return Unit;
  }
  function applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda$lambda_4($receiver) {
    return GetterCode_init($receiver.not_pdl1vz$('undefined'));
  }
  function applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda_4($receiver) {
    $receiver.invoke_wbj58y$(getter, applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda$lambda_4);
    return Unit;
  }
  function applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda$lambda_5($receiver) {
    return GetterCode_init($receiver.not_pdl1vz$('(message => { throw new Error(runtime.toString(message)); })'));
  }
  function applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda_5($receiver) {
    $receiver.invoke_wbj58y$(getter, applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda$lambda_5);
    return Unit;
  }
  function applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda$lambda_6($receiver) {
    return GetterCode_init($receiver.not_pdl1vz$('(runtime.symbolToNumber)'));
  }
  function applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda_6($receiver) {
    $receiver.invoke_wbj58y$(getter, applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda$lambda_6);
    return Unit;
  }
  function applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda$lambda_7($receiver) {
    return GetterCode_init($receiver.not_pdl1vz$('(runtime.symbolToString)'));
  }
  function applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda_7($receiver) {
    $receiver.invoke_wbj58y$(getter, applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda$lambda_7);
    return Unit;
  }
  function applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda$lambda_8($receiver) {
    return GetterCode_init($receiver.not_pdl1vz$('(runtime.symbolToBoolean)'));
  }
  function applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda_8($receiver) {
    $receiver.invoke_wbj58y$(getter, applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda$lambda_8);
    return Unit;
  }
  function applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda$lambda_9($receiver) {
    return GetterCode_init($receiver.not_pdl1vz$('(runtime.symbolAdd)'));
  }
  function applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda_9($receiver) {
    $receiver.invoke_wbj58y$(getter, applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda$lambda_9);
    return Unit;
  }
  function applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda$lambda_10($receiver) {
    return GetterCode_init($receiver.not_pdl1vz$('(runtime.symbolSubtract)'));
  }
  function applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda_10($receiver) {
    $receiver.invoke_wbj58y$(getter, applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda$lambda_10);
    return Unit;
  }
  function applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda$lambda_11($receiver) {
    return GetterCode_init($receiver.not_pdl1vz$('(runtime.symbolMultiply)'));
  }
  function applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda_11($receiver) {
    $receiver.invoke_wbj58y$(getter, applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda$lambda_11);
    return Unit;
  }
  function applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda$lambda_12($receiver) {
    return GetterCode_init($receiver.not_pdl1vz$('(runtime.symbolDivide)'));
  }
  function applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda_12($receiver) {
    $receiver.invoke_wbj58y$(getter, applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda$lambda_12);
    return Unit;
  }
  function applyEnglishKeywordPlugin$lambda$lambda$lambda($receiver) {
    $receiver.invoke_myna1y$('TRUE', applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda);
    $receiver.invoke_myna1y$('FALSE', applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda_0);
    $receiver.invoke_myna1y$('NULL', applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda_1);
    $receiver.invoke_myna1y$('NAN', applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda_2);
    $receiver.invoke_myna1y$('INFINITY', applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda_3);
    $receiver.invoke_myna1y$('UNDEFINED', applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda_4);
    $receiver.invoke_myna1y$('THROW', applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda_5);
    $receiver.invoke_myna1y$('OPERATOR_TO_NUMBER', applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda_6);
    $receiver.invoke_myna1y$('OPERATOR_TO_STRING', applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda_7);
    $receiver.invoke_myna1y$('OPERATOR_TO_BOOLEAN', applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda_8);
    $receiver.invoke_myna1y$('OPERATOR_ADD', applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda_9);
    $receiver.invoke_myna1y$('OPERATOR_SUBTRACT', applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda_10);
    $receiver.invoke_myna1y$('OPERATOR_MULTIPLY', applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda_11);
    $receiver.invoke_myna1y$('OPERATOR_DIVIDE', applyEnglishKeywordPlugin$lambda$lambda$lambda$lambda_12);
    return Unit;
  }
  function applyEnglishKeywordPlugin$lambda$lambda($receiver) {
    $receiver.invoke_r4x81w$(aliases, applyEnglishKeywordPlugin$lambda$lambda$lambda);
    return Unit;
  }
  function applyEnglishKeywordPlugin$lambda(compiler) {
    compiler.invoke_ts5k8t$(applyEnglishKeywordPlugin$lambda$lambda);
    return Unit;
  }
  var applyEnglishKeywordPlugin;
  function Context(compiler, location, channelContext, domainContext) {
    this.compiler = compiler;
    this.location = location;
    this.channelContext = channelContext;
    this.domainContext = domainContext;
  }
  Context.prototype.not_pdl1vz$ = function ($receiver) {
    if (contains($receiver, '\n'))
      throw Exception_init('SourcedString cannot have line breaks');
    return new SourcedLine(listOf(new SourcedString($receiver, this.location)));
  };
  Context.$metadata$ = {kind: Kind_CLASS, simpleName: 'Context', interfaces: []};
  function Domain(name) {
    this.name = name;
  }
  Domain.prototype.getDefault_geodwp$ = function (node, compiler) {
    return null;
  };
  Domain.$metadata$ = {kind: Kind_CLASS, simpleName: 'Domain', interfaces: []};
  function DomainBundle() {
    this.map_0 = LinkedHashMap_init();
  }
  DomainBundle.prototype.invoke_wbj58y$ = function ($receiver, handler) {
    this.map_0.put_xwzc9p$($receiver, handler);
  };
  DomainBundle.prototype.get_loizr5$ = function (domain) {
    var tmp$;
    return (tmp$ = this.map_0.get_11rb$(domain)) != null ? tmp$ : null;
  };
  DomainBundle.$metadata$ = {kind: Kind_CLASS, simpleName: 'DomainBundle', interfaces: []};
  function DomainBundle_init($this) {
    $this = $this || Object.create(DomainBundle.prototype);
    DomainBundle.call($this);
    return $this;
  }
  function DomainBundle_init_0(block, $this) {
    $this = $this || Object.create(DomainBundle.prototype);
    DomainBundle.call($this);
    block($this);
    return $this;
  }
  function Channel() {
  }
  Channel.$metadata$ = {kind: Kind_CLASS, simpleName: 'Channel', interfaces: []};
  function Compiler() {
    this.map_0 = LinkedHashMap_init();
    this.nextId_0 = 0;
  }
  Compiler.prototype.invoke_ts5k8t$ = function (block) {
    block(this);
  };
  Compiler.prototype.invoke_r4x81w$ = function ($receiver, block) {
    block(this.get_ttiokq$($receiver));
  };
  Compiler.prototype.get_ttiokq$ = function (channel) {
    var $receiver = this.map_0;
    var tmp$;
    var value = $receiver.get_11rb$(channel);
    if (value == null) {
      var answer = channel.createChannel();
      $receiver.put_xwzc9p$(channel, answer);
      tmp$ = answer;
    } else {
      tmp$ = value;
    }
    return tmp$;
  };
  Compiler.prototype.nextId = function () {
    var nextId2 = this.nextId_0;
    this.nextId_0 = this.nextId_0 + 1 | 0;
    return nextId2;
  };
  Compiler.$metadata$ = {kind: Kind_CLASS, simpleName: 'Compiler', interfaces: []};
  function Node(type, value, location) {
    this.type = type;
    this.value = value;
    this.location = location;
  }
  Node.$metadata$ = {kind: Kind_CLASS, simpleName: 'Node', interfaces: []};
  Node.prototype.component1 = function () {
    return this.type;
  };
  Node.prototype.component2 = function () {
    return this.value;
  };
  Node.prototype.component3 = function () {
    return this.location;
  };
  Node.prototype.copy_2ie8pd$ = function (type, value, location) {
    return new Node(type === void 0 ? this.type : type, value === void 0 ? this.value : value, location === void 0 ? this.location : location);
  };
  Node.prototype.toString = function () {
    return 'Node(type=' + Kotlin.toString(this.type) + (', value=' + Kotlin.toString(this.value)) + (', location=' + Kotlin.toString(this.location)) + ')';
  };
  Node.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    result = result * 31 + Kotlin.hashCode(this.location) | 0;
    return result;
  };
  Node.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.value, other.value) && Kotlin.equals(this.location, other.location)))));
  };
  function isType($receiver, operator) {
    return equals($receiver.type, operator.type);
  }
  var maybe = defineInlineFunction('fl9_compiler.fl9.maybe_onpwmt$', wrapFunction(function () {
    var isType = _.fl9.isType_2f51e$;
    return function ($receiver, operator, block) {
      if (isType($receiver, operator)) {
        block($receiver.value);
      }};
  }));
  function compile$lambda_0($receiver) {
    return Unit;
  }
  function compile_0($receiver, compiler, domain, initializeDomainContext) {
    if (initializeDomainContext === void 0)
      initializeDomainContext = compile$lambda_0;
    var tmp$;
    tmp$ = tryCompile($receiver, compiler, domain, initializeDomainContext);
    if (tmp$ == null) {
      throw Exception_init('Unknown Operator: ' + $receiver.type + '/' + domain.name);
    }return tmp$;
  }
  function tryCompile$lambda($receiver) {
    return Unit;
  }
  function tryCompile($receiver, compiler, domain, initializeDomainContext) {
    if (initializeDomainContext === void 0)
      initializeDomainContext = tryCompile$lambda;
    var tmp$;
    var block$result;
    block$break: do {
      var tmp$_0, tmp$_1, tmp$_2;
      var domainContext = domain.createDomainContext();
      initializeDomainContext(domainContext);
      tmp$_1 = (tmp$_0 = compiler.get_ttiokq$(operators).get_61zpoe$($receiver.type)) != null ? tmp$_0 : null;
      if (tmp$_1 == null) {
        block$result = null;
        break block$break;
      }var operator = tmp$_1;
      tmp$_2 = operator.get_loizr5$(domain);
      if (tmp$_2 == null) {
        block$result = null;
        break block$break;
      }var handler = tmp$_2;
      block$result = handler(new Context(compiler, $receiver.location, new OperatorContext($receiver.value), domainContext));
    }
     while (false);
    return (tmp$ = block$result) != null ? tmp$ : domain.getDefault_geodwp$($receiver, compiler);
  }
  function operators$ObjectLiteral() {
    Channel.call(this);
  }
  operators$ObjectLiteral.prototype.createChannel = function () {
    return new OperatorRegistry();
  };
  operators$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Channel]};
  var operators;
  function OperatorRegistry() {
    this.map_0 = LinkedHashMap_init();
  }
  OperatorRegistry.prototype.get_61zpoe$ = function (key) {
    var tmp$;
    return (tmp$ = this.map_0.get_11rb$(key)) != null ? tmp$ : null;
  };
  OperatorRegistry.prototype.invoke_bdx8wc$ = function ($receiver, block) {
    var domainBundle = DomainBundle_init();
    block(domainBundle);
    var $receiver_0 = this.map_0;
    var key = $receiver.type;
    $receiver_0.put_xwzc9p$(key, domainBundle);
  };
  OperatorRegistry.$metadata$ = {kind: Kind_CLASS, simpleName: 'OperatorRegistry', interfaces: []};
  function Operator(type) {
    this.type = type;
  }
  Operator.$metadata$ = {kind: Kind_CLASS, simpleName: 'Operator', interfaces: []};
  function OperatorContext(value) {
    this.value = value;
  }
  OperatorContext.$metadata$ = {kind: Kind_CLASS, simpleName: 'OperatorContext', interfaces: []};
  function aliases$ObjectLiteral() {
    Channel.call(this);
  }
  aliases$ObjectLiteral.prototype.createChannel = function () {
    return new AliasRegistry();
  };
  aliases$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Channel]};
  var aliases;
  function AliasRegistry() {
    this.frame_0 = new AliasRegistry$Frame(null);
  }
  function AliasRegistry$Frame(parent) {
    this.parent = parent;
    this.map_0 = LinkedHashMap_init();
  }
  AliasRegistry$Frame.prototype.get_61zpoe$ = function (key) {
    var tmp$, tmp$_0;
    return (tmp$_0 = this.map_0.get_11rb$(key)) != null ? tmp$_0 : (tmp$ = this.parent) != null ? tmp$.get_61zpoe$(key) : null;
  };
  AliasRegistry$Frame.prototype.set_z04kca$ = function (key, value) {
    this.map_0.put_xwzc9p$(key, value);
  };
  AliasRegistry$Frame.$metadata$ = {kind: Kind_CLASS, simpleName: 'Frame', interfaces: []};
  AliasRegistry.prototype.get_61zpoe$ = function (key) {
    return this.frame_0.get_61zpoe$(key);
  };
  AliasRegistry.prototype.invoke_myna1y$ = function ($receiver, block) {
    var domainBundle = DomainBundle_init();
    block(domainBundle);
    this.frame_0.set_z04kca$($receiver, domainBundle);
  };
  AliasRegistry.prototype.push = function () {
    this.frame_0 = new AliasRegistry$Frame(this.frame_0);
  };
  AliasRegistry.prototype.pop = function () {
    var tmp$;
    tmp$ = this.frame_0.parent;
    if (tmp$ == null) {
      throw Error_init('Null parent access');
    }this.frame_0 = tmp$;
  };
  AliasRegistry.prototype.stack_klfg04$ = defineInlineFunction('fl9_compiler.fl9.channel.AliasRegistry.stack_klfg04$', function (block) {
    this.push();
    var result = block();
    this.pop();
    return result;
  });
  AliasRegistry.$metadata$ = {kind: Kind_CLASS, simpleName: 'AliasRegistry', interfaces: []};
  function Location(row, column) {
    this.row = row;
    this.column = column;
  }
  Location.$metadata$ = {kind: Kind_CLASS, simpleName: 'Location', interfaces: []};
  var nullLocation;
  function SourcedString(string, location) {
    this.string = string;
    this.location = location;
  }
  SourcedString.prototype.toString = function () {
    throw Error_init_0();
  };
  SourcedString.$metadata$ = {kind: Kind_CLASS, simpleName: 'SourcedString', interfaces: []};
  function SourcedLine(sourcesStrings) {
    this.sourcesStrings = sourcesStrings;
  }
  SourcedLine.prototype.toString = function () {
    throw Error_init_0();
  };
  SourcedLine.$metadata$ = {kind: Kind_CLASS, simpleName: 'SourcedLine', interfaces: []};
  function times($receiver, location) {
    if (contains($receiver, '\n'))
      throw Exception_init('SourcedString cannot have line breaks');
    return new SourcedLine(listOf(new SourcedString($receiver, location)));
  }
  function plus_0($receiver, right) {
    return new SourcedLine(plus($receiver.sourcesStrings, right.sourcesStrings));
  }
  var zeroLine;
  var reduceOrZero = defineInlineFunction('fl9_compiler.fl9.reduceOrZero_tvz5es$', wrapFunction(function () {
    var fl9 = _.fl9;
    return function ($receiver, operation) {
      var tmp$;
      var reduceOrNull$result;
      reduceOrNull$break: do {
        var iterator = $receiver.iterator();
        if (!iterator.hasNext()) {
          reduceOrNull$result = null;
          break reduceOrNull$break;
        }var accumulator = iterator.next();
        while (iterator.hasNext()) {
          accumulator = operation(accumulator, iterator.next());
        }
        reduceOrNull$result = accumulator;
      }
       while (false);
      return (tmp$ = reduceOrNull$result) != null ? tmp$ : fl9.zeroLine;
    };
  }));
  function SourcedFile(sourcedLines) {
    this.sourcedLines = sourcedLines;
  }
  SourcedFile.prototype.toString = function () {
    throw Error_init_0();
  };
  SourcedFile.$metadata$ = {kind: Kind_CLASS, simpleName: 'SourcedFile', interfaces: []};
  var zeroFile;
  function code$ObjectLiteral(closure$sourcedLines) {
    this.closure$sourcedLines = closure$sourcedLines;
  }
  code$ObjectLiteral.prototype.line_3pad5q$ = function (sourcedLine) {
    this.closure$sourcedLines.add_11rb$(sourcedLine);
  };
  code$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [CodeScope]};
  function code(block) {
    var sourcedLines = ArrayList_init_0();
    block(new code$ObjectLiteral(sourcedLines));
    return new SourcedFile(sourcedLines);
  }
  function CodeScope() {
  }
  CodeScope.prototype.line_3pe74m$ = function (sourcedFile) {
    var tmp$;
    tmp$ = sourcedFile.sourcedLines.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.line_3pad5q$(element);
    }
  };
  CodeScope.prototype.indent_3vmjfp$ = function (block) {
    var tmp$;
    tmp$ = code(block).sourcedLines.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.line_3pad5q$(plus_0(times('  ', nullLocation), element));
    }
  };
  CodeScope.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'CodeScope', interfaces: []};
  function getter$ObjectLiteral(name) {
    Domain.call(this, name);
  }
  getter$ObjectLiteral.prototype.createDomainContext = function () {
    return new GetterContext();
  };
  getter$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Domain]};
  var getter;
  function GetterContext() {
    this.givenName = null;
  }
  GetterContext.$metadata$ = {kind: Kind_CLASS, simpleName: 'GetterContext', interfaces: []};
  function GetterCode(head, body) {
    this.head = head;
    this.body = body;
  }
  GetterCode.$metadata$ = {kind: Kind_CLASS, simpleName: 'GetterCode', interfaces: []};
  function GetterCode_init(body, $this) {
    $this = $this || Object.create(GetterCode.prototype);
    GetterCode.call($this, zeroFile, body);
    return $this;
  }
  function runner$ObjectLiteral(name) {
    Domain.call(this, name);
  }
  runner$ObjectLiteral.prototype.createDomainContext = function () {
  };
  function runner$ObjectLiteral$getDefault$lambda$lambda(closure$it) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$it.head);
      return Unit;
    };
  }
  runner$ObjectLiteral.prototype.getDefault_geodwp$ = function (node, compiler) {
    var tmp$;
    return (tmp$ = tryCompile(node, compiler, getter)) != null ? new RunnerCode(code(runner$ObjectLiteral$getDefault$lambda$lambda(tmp$))) : null;
  };
  runner$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Domain]};
  var runner;
  function RunnerCode(head) {
    this.head = head;
  }
  RunnerCode.$metadata$ = {kind: Kind_CLASS, simpleName: 'RunnerCode', interfaces: []};
  function RunnerCode_init($this) {
    $this = $this || Object.create(RunnerCode.prototype);
    RunnerCode.call($this, zeroFile);
    return $this;
  }
  function setter$ObjectLiteral(name) {
    Domain.call(this, name);
  }
  setter$ObjectLiteral.prototype.createDomainContext = function () {
  };
  setter$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Domain]};
  var setter;
  function SetterCode(consumer) {
    this.consumer = consumer;
  }
  SetterCode.$metadata$ = {kind: Kind_CLASS, simpleName: 'SetterCode', interfaces: []};
  function arrayInitializer$ObjectLiteral(name) {
    Domain.call(this, name);
  }
  arrayInitializer$ObjectLiteral.prototype.createDomainContext = function () {
  };
  function arrayInitializer$ObjectLiteral$getDefault$lambda$lambda(closure$it) {
    return function (consumer) {
      consumer(closure$it);
      return Unit;
    };
  }
  arrayInitializer$ObjectLiteral.prototype.getDefault_geodwp$ = function (node, compiler) {
    var tmp$;
    return (tmp$ = tryCompile(node, compiler, getter)) != null ? new ArrayInitializerCode(arrayInitializer$ObjectLiteral$getDefault$lambda$lambda(tmp$)) : null;
  };
  arrayInitializer$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Domain]};
  var arrayInitializer;
  function ArrayInitializerCode(generator) {
    this.generator = generator;
  }
  ArrayInitializerCode.$metadata$ = {kind: Kind_CLASS, simpleName: 'ArrayInitializerCode', interfaces: []};
  function objectInitializer$ObjectLiteral(name) {
    Domain.call(this, name);
  }
  objectInitializer$ObjectLiteral.prototype.createDomainContext = function () {
  };
  objectInitializer$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Domain]};
  var objectInitializer;
  function ObjectInitializerCode(generator) {
    this.generator = generator;
  }
  ObjectInitializerCode.$metadata$ = {kind: Kind_CLASS, simpleName: 'ObjectInitializerCode', interfaces: []};
  function comparator$ObjectLiteral(name) {
    Domain.call(this, name);
  }
  comparator$ObjectLiteral.prototype.createDomainContext = function () {
  };
  comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Domain]};
  var comparator;
  function ComparatorCode(comparator) {
    this.comparator = comparator;
  }
  ComparatorCode.$metadata$ = {kind: Kind_CLASS, simpleName: 'ComparatorCode', interfaces: []};
  function argumentsGetter$ObjectLiteral(name) {
    Domain.call(this, name);
  }
  argumentsGetter$ObjectLiteral.prototype.createDomainContext = function () {
  };
  argumentsGetter$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Domain]};
  var argumentsGetter;
  function ArgumentsGetterCode(head, bodies) {
    this.head = head;
    this.bodies = bodies;
  }
  function ArgumentsGetterCode$plus$lambda(this$ArgumentsGetterCode, closure$other) {
    return function ($receiver) {
      $receiver.line_3pe74m$(this$ArgumentsGetterCode.head);
      $receiver.line_3pe74m$(closure$other.head);
      return Unit;
    };
  }
  ArgumentsGetterCode.prototype.plus_es5wyp$ = function (other) {
    return new ArgumentsGetterCode(code(ArgumentsGetterCode$plus$lambda(this, other)), plus(this.bodies, other.bodies));
  };
  ArgumentsGetterCode.$metadata$ = {kind: Kind_CLASS, simpleName: 'ArgumentsGetterCode', interfaces: []};
  function ArgumentsGetterCode_init(bodies, $this) {
    $this = $this || Object.create(ArgumentsGetterCode.prototype);
    ArgumentsGetterCode.call($this, zeroFile, bodies);
    return $this;
  }
  function ArgumentsGetterCode_init_0($this) {
    $this = $this || Object.create(ArgumentsGetterCode.prototype);
    ArgumentsGetterCode.call($this, zeroFile, emptyList());
    return $this;
  }
  function toArgumentsGetter($receiver) {
    return new ArgumentsGetterCode($receiver.head, listOf($receiver.body));
  }
  function concat($receiver) {
    var iterator = $receiver.iterator();
    if (!iterator.hasNext())
      throw UnsupportedOperationException_init("Empty collection can't be reduced.");
    var accumulator = iterator.next();
    while (iterator.hasNext()) {
      accumulator = accumulator.plus_es5wyp$(iterator.next());
    }
    return accumulator;
  }
  function Formatter(width, zero) {
    this.width = width;
    this.zero = zero;
  }
  Formatter.$metadata$ = {kind: Kind_CLASS, simpleName: 'Formatter', interfaces: []};
  function EmptyFormattedBracketsArgument(formatter) {
    this.formatter = formatter;
  }
  EmptyFormattedBracketsArgument.$metadata$ = {kind: Kind_CLASS, simpleName: 'EmptyFormattedBracketsArgument', interfaces: []};
  function FormattedBracketsArgument(formatter, main) {
    this.formatter = formatter;
    this.main = main;
  }
  FormattedBracketsArgument.$metadata$ = {kind: Kind_CLASS, simpleName: 'FormattedBracketsArgument', interfaces: []};
  function EmptyBracketsArgument() {
  }
  EmptyBracketsArgument.$metadata$ = {kind: Kind_CLASS, simpleName: 'EmptyBracketsArgument', interfaces: []};
  function BracketsArgument(main) {
    this.main = main;
  }
  BracketsArgument.$metadata$ = {kind: Kind_CLASS, simpleName: 'BracketsArgument', interfaces: []};
  function RightEmptyBracketsArgument(left) {
    this.left = left;
  }
  RightEmptyBracketsArgument.$metadata$ = {kind: Kind_CLASS, simpleName: 'RightEmptyBracketsArgument', interfaces: []};
  function RightBracketsArgument(left, main) {
    this.left = left;
    this.main = main;
  }
  RightBracketsArgument.$metadata$ = {kind: Kind_CLASS, simpleName: 'RightBracketsArgument', interfaces: []};
  function LeftUnaryOperatorArgument(right) {
    this.right = right;
  }
  LeftUnaryOperatorArgument.$metadata$ = {kind: Kind_CLASS, simpleName: 'LeftUnaryOperatorArgument', interfaces: []};
  function BinaryOperatorArgument(left, right) {
    this.left = left;
    this.right = right;
  }
  BinaryOperatorArgument.$metadata$ = {kind: Kind_CLASS, simpleName: 'BinaryOperatorArgument', interfaces: []};
  function TernaryOperatorArgument(left, center, right) {
    this.left = left;
    this.center = center;
    this.right = right;
  }
  TernaryOperatorArgument.$metadata$ = {kind: Kind_CLASS, simpleName: 'TernaryOperatorArgument', interfaces: []};
  function ComparisonArgument(types, locations, nodes) {
    this.types = types;
    this.locations = locations;
    this.nodes = nodes;
  }
  ComparisonArgument.$metadata$ = {kind: Kind_CLASS, simpleName: 'ComparisonArgument', interfaces: []};
  var void_0;
  var number;
  var string;
  var join;
  var identifier;
  var empty_round;
  var empty_square;
  var empty_curly;
  var round;
  var square;
  var curly;
  var empty_dollar_round;
  var empty_dollar_square;
  var empty_dollar_curly;
  var dollar_round;
  var dollar_square;
  var dollar_curly;
  var empty_formatted_dollar_round;
  var empty_formatted_dollar_square;
  var empty_formatted_dollar_curly;
  var formatted_dollar_round;
  var formatted_dollar_square;
  var formatted_dollar_curly;
  var period;
  var colon_colon;
  var right_empty_round;
  var right_round;
  var right_empty_square;
  var right_square;
  var right_empty_curly;
  var right_curly;
  var left_plus;
  var left_minus;
  var left_ampersand;
  var left_question;
  var left_exclamation;
  var left_dollar_number;
  var left_dollar_ampersand;
  var left_dollar_asterisk;
  var asterisk;
  var slash;
  var plus_1;
  var minus;
  var period_period;
  var tilde;
  var comparison;
  var equal_equal_equal;
  var exclamation_equal_equal;
  var equal_equal;
  var exclamation_equal;
  var greater_equal;
  var less_equal;
  var greater;
  var less;
  var ampersand_ampersand;
  var pipe_pipe;
  var ternary_question_colon;
  var question_colon;
  var exclamation_colon;
  var exclamation_question;
  var comma;
  var minus_greater;
  var equal_greater;
  var colon;
  var equal;
  var pipe;
  var semicolon;
  var package$fl9 = _.fl9 || (_.fl9 = {});
  Object.defineProperty(package$fl9, 'createCompiler', {get: function () {
    return createCompiler;
  }, set: function (value) {
    createCompiler = value;
  }});
  Object.defineProperty(package$fl9, 'compile', {get: function () {
    return compile;
  }, set: function (value) {
    compile = value;
  }});
  Object.defineProperty(package$fl9, 'applyStandardOperatorPlugin', {get: function () {
    return applyStandardOperatorPlugin;
  }, set: function (value) {
    applyStandardOperatorPlugin = value;
  }});
  Object.defineProperty(package$fl9, 'applyEnglishKeywordPlugin', {get: function () {
    return applyEnglishKeywordPlugin;
  }, set: function (value) {
    applyEnglishKeywordPlugin = value;
  }});
  package$fl9.Context = Context;
  package$fl9.Domain = Domain;
  package$fl9.DomainBundle_init_287e2$ = DomainBundle_init;
  package$fl9.DomainBundle_init_eqg0ss$ = DomainBundle_init_0;
  package$fl9.DomainBundle = DomainBundle;
  package$fl9.Channel = Channel;
  package$fl9.Compiler = Compiler;
  package$fl9.Node = Node;
  package$fl9.isType_2f51e$ = isType;
  package$fl9.maybe_onpwmt$ = maybe;
  package$fl9.compile_rs99c8$ = compile_0;
  package$fl9.tryCompile_rs99c8$ = tryCompile;
  var package$channel = package$fl9.channel || (package$fl9.channel = {});
  Object.defineProperty(package$channel, 'operators', {get: function () {
    return operators;
  }});
  package$channel.OperatorRegistry = OperatorRegistry;
  package$channel.Operator = Operator;
  package$channel.OperatorContext = OperatorContext;
  Object.defineProperty(package$channel, 'aliases', {get: function () {
    return aliases;
  }});
  AliasRegistry.Frame = AliasRegistry$Frame;
  package$channel.AliasRegistry = AliasRegistry;
  package$fl9.Location = Location;
  Object.defineProperty(package$fl9, 'nullLocation', {get: function () {
    return nullLocation;
  }});
  package$fl9.SourcedString = SourcedString;
  package$fl9.SourcedLine = SourcedLine;
  package$fl9.times_qho2lb$ = times;
  package$fl9.plus_v2wlsb$ = plus_0;
  Object.defineProperty(package$fl9, 'zeroLine', {get: function () {
    return zeroLine;
  }});
  package$fl9.reduceOrZero_tvz5es$ = reduceOrZero;
  package$fl9.SourcedFile = SourcedFile;
  Object.defineProperty(package$fl9, 'zeroFile', {get: function () {
    return zeroFile;
  }});
  package$fl9.code_3vmjfp$ = code;
  package$fl9.CodeScope = CodeScope;
  var package$domain = package$fl9.domain || (package$fl9.domain = {});
  Object.defineProperty(package$domain, 'getter', {get: function () {
    return getter;
  }});
  package$domain.GetterContext = GetterContext;
  package$domain.GetterCode_init_3pad5q$ = GetterCode_init;
  package$domain.GetterCode = GetterCode;
  Object.defineProperty(package$domain, 'runner', {get: function () {
    return runner;
  }});
  package$domain.RunnerCode_init = RunnerCode_init;
  package$domain.RunnerCode = RunnerCode;
  Object.defineProperty(package$domain, 'setter', {get: function () {
    return setter;
  }});
  package$domain.SetterCode = SetterCode;
  Object.defineProperty(package$domain, 'arrayInitializer', {get: function () {
    return arrayInitializer;
  }});
  package$domain.ArrayInitializerCode = ArrayInitializerCode;
  Object.defineProperty(package$domain, 'objectInitializer', {get: function () {
    return objectInitializer;
  }});
  package$domain.ObjectInitializerCode = ObjectInitializerCode;
  Object.defineProperty(package$domain, 'comparator', {get: function () {
    return comparator;
  }});
  package$domain.ComparatorCode = ComparatorCode;
  Object.defineProperty(package$domain, 'argumentsGetter', {get: function () {
    return argumentsGetter;
  }});
  package$domain.ArgumentsGetterCode_init_1jbz67$ = ArgumentsGetterCode_init;
  package$domain.ArgumentsGetterCode_init = ArgumentsGetterCode_init_0;
  package$domain.ArgumentsGetterCode = ArgumentsGetterCode;
  package$domain.toArgumentsGetter_qpa2nc$ = toArgumentsGetter;
  package$domain.concat_vldj2v$ = concat;
  var package$operator = package$fl9.operator || (package$fl9.operator = {});
  package$operator.Formatter = Formatter;
  package$operator.EmptyFormattedBracketsArgument = EmptyFormattedBracketsArgument;
  package$operator.FormattedBracketsArgument = FormattedBracketsArgument;
  package$operator.EmptyBracketsArgument = EmptyBracketsArgument;
  package$operator.BracketsArgument = BracketsArgument;
  package$operator.RightEmptyBracketsArgument = RightEmptyBracketsArgument;
  package$operator.RightBracketsArgument = RightBracketsArgument;
  package$operator.LeftUnaryOperatorArgument = LeftUnaryOperatorArgument;
  package$operator.BinaryOperatorArgument = BinaryOperatorArgument;
  package$operator.TernaryOperatorArgument = TernaryOperatorArgument;
  package$operator.ComparisonArgument = ComparisonArgument;
  Object.defineProperty(package$operator, 'void', {get: function () {
    return void_0;
  }});
  Object.defineProperty(package$operator, 'number', {get: function () {
    return number;
  }});
  Object.defineProperty(package$operator, 'string', {get: function () {
    return string;
  }});
  Object.defineProperty(package$operator, 'join', {get: function () {
    return join;
  }});
  Object.defineProperty(package$operator, 'identifier', {get: function () {
    return identifier;
  }});
  Object.defineProperty(package$operator, 'empty_round', {get: function () {
    return empty_round;
  }});
  Object.defineProperty(package$operator, 'empty_square', {get: function () {
    return empty_square;
  }});
  Object.defineProperty(package$operator, 'empty_curly', {get: function () {
    return empty_curly;
  }});
  Object.defineProperty(package$operator, 'round', {get: function () {
    return round;
  }});
  Object.defineProperty(package$operator, 'square', {get: function () {
    return square;
  }});
  Object.defineProperty(package$operator, 'curly', {get: function () {
    return curly;
  }});
  Object.defineProperty(package$operator, 'empty_dollar_round', {get: function () {
    return empty_dollar_round;
  }});
  Object.defineProperty(package$operator, 'empty_dollar_square', {get: function () {
    return empty_dollar_square;
  }});
  Object.defineProperty(package$operator, 'empty_dollar_curly', {get: function () {
    return empty_dollar_curly;
  }});
  Object.defineProperty(package$operator, 'dollar_round', {get: function () {
    return dollar_round;
  }});
  Object.defineProperty(package$operator, 'dollar_square', {get: function () {
    return dollar_square;
  }});
  Object.defineProperty(package$operator, 'dollar_curly', {get: function () {
    return dollar_curly;
  }});
  Object.defineProperty(package$operator, 'empty_formatted_dollar_round', {get: function () {
    return empty_formatted_dollar_round;
  }});
  Object.defineProperty(package$operator, 'empty_formatted_dollar_square', {get: function () {
    return empty_formatted_dollar_square;
  }});
  Object.defineProperty(package$operator, 'empty_formatted_dollar_curly', {get: function () {
    return empty_formatted_dollar_curly;
  }});
  Object.defineProperty(package$operator, 'formatted_dollar_round', {get: function () {
    return formatted_dollar_round;
  }});
  Object.defineProperty(package$operator, 'formatted_dollar_square', {get: function () {
    return formatted_dollar_square;
  }});
  Object.defineProperty(package$operator, 'formatted_dollar_curly', {get: function () {
    return formatted_dollar_curly;
  }});
  Object.defineProperty(package$operator, 'period', {get: function () {
    return period;
  }});
  Object.defineProperty(package$operator, 'colon_colon', {get: function () {
    return colon_colon;
  }});
  Object.defineProperty(package$operator, 'right_empty_round', {get: function () {
    return right_empty_round;
  }});
  Object.defineProperty(package$operator, 'right_round', {get: function () {
    return right_round;
  }});
  Object.defineProperty(package$operator, 'right_empty_square', {get: function () {
    return right_empty_square;
  }});
  Object.defineProperty(package$operator, 'right_square', {get: function () {
    return right_square;
  }});
  Object.defineProperty(package$operator, 'right_empty_curly', {get: function () {
    return right_empty_curly;
  }});
  Object.defineProperty(package$operator, 'right_curly', {get: function () {
    return right_curly;
  }});
  Object.defineProperty(package$operator, 'left_plus', {get: function () {
    return left_plus;
  }});
  Object.defineProperty(package$operator, 'left_minus', {get: function () {
    return left_minus;
  }});
  Object.defineProperty(package$operator, 'left_ampersand', {get: function () {
    return left_ampersand;
  }});
  Object.defineProperty(package$operator, 'left_question', {get: function () {
    return left_question;
  }});
  Object.defineProperty(package$operator, 'left_exclamation', {get: function () {
    return left_exclamation;
  }});
  Object.defineProperty(package$operator, 'left_dollar_number', {get: function () {
    return left_dollar_number;
  }});
  Object.defineProperty(package$operator, 'left_dollar_ampersand', {get: function () {
    return left_dollar_ampersand;
  }});
  Object.defineProperty(package$operator, 'left_dollar_asterisk', {get: function () {
    return left_dollar_asterisk;
  }});
  Object.defineProperty(package$operator, 'asterisk', {get: function () {
    return asterisk;
  }});
  Object.defineProperty(package$operator, 'slash', {get: function () {
    return slash;
  }});
  Object.defineProperty(package$operator, 'plus', {get: function () {
    return plus_1;
  }});
  Object.defineProperty(package$operator, 'minus', {get: function () {
    return minus;
  }});
  Object.defineProperty(package$operator, 'period_period', {get: function () {
    return period_period;
  }});
  Object.defineProperty(package$operator, 'tilde', {get: function () {
    return tilde;
  }});
  Object.defineProperty(package$operator, 'comparison', {get: function () {
    return comparison;
  }});
  Object.defineProperty(package$operator, 'equal_equal_equal', {get: function () {
    return equal_equal_equal;
  }});
  Object.defineProperty(package$operator, 'exclamation_equal_equal', {get: function () {
    return exclamation_equal_equal;
  }});
  Object.defineProperty(package$operator, 'equal_equal', {get: function () {
    return equal_equal;
  }});
  Object.defineProperty(package$operator, 'exclamation_equal', {get: function () {
    return exclamation_equal;
  }});
  Object.defineProperty(package$operator, 'greater_equal', {get: function () {
    return greater_equal;
  }});
  Object.defineProperty(package$operator, 'less_equal', {get: function () {
    return less_equal;
  }});
  Object.defineProperty(package$operator, 'greater', {get: function () {
    return greater;
  }});
  Object.defineProperty(package$operator, 'less', {get: function () {
    return less;
  }});
  Object.defineProperty(package$operator, 'ampersand_ampersand', {get: function () {
    return ampersand_ampersand;
  }});
  Object.defineProperty(package$operator, 'pipe_pipe', {get: function () {
    return pipe_pipe;
  }});
  Object.defineProperty(package$operator, 'ternary_question_colon', {get: function () {
    return ternary_question_colon;
  }});
  Object.defineProperty(package$operator, 'question_colon', {get: function () {
    return question_colon;
  }});
  Object.defineProperty(package$operator, 'exclamation_colon', {get: function () {
    return exclamation_colon;
  }});
  Object.defineProperty(package$operator, 'exclamation_question', {get: function () {
    return exclamation_question;
  }});
  Object.defineProperty(package$operator, 'comma', {get: function () {
    return comma;
  }});
  Object.defineProperty(package$operator, 'minus_greater', {get: function () {
    return minus_greater;
  }});
  Object.defineProperty(package$operator, 'equal_greater', {get: function () {
    return equal_greater;
  }});
  Object.defineProperty(package$operator, 'colon', {get: function () {
    return colon;
  }});
  Object.defineProperty(package$operator, 'equal', {get: function () {
    return equal;
  }});
  Object.defineProperty(package$operator, 'pipe', {get: function () {
    return pipe;
  }});
  Object.defineProperty(package$operator, 'semicolon', {get: function () {
    return semicolon;
  }});
  code$ObjectLiteral.prototype.line_3pe74m$ = CodeScope.prototype.line_3pe74m$;
  code$ObjectLiteral.prototype.indent_3vmjfp$ = CodeScope.prototype.indent_3vmjfp$;
  createCompiler = createCompiler$lambda;
  compile = compile$lambda;
  applyStandardOperatorPlugin = applyStandardOperatorPlugin$lambda;
  applyEnglishKeywordPlugin = applyEnglishKeywordPlugin$lambda;
  operators = new operators$ObjectLiteral();
  aliases = new aliases$ObjectLiteral();
  nullLocation = new Location(-1, -1);
  zeroLine = new SourcedLine(emptyList());
  zeroFile = new SourcedFile(emptyList());
  getter = new getter$ObjectLiteral('getter');
  runner = new runner$ObjectLiteral('runner');
  setter = new setter$ObjectLiteral('setter');
  arrayInitializer = new arrayInitializer$ObjectLiteral('arrayInitializer');
  objectInitializer = new objectInitializer$ObjectLiteral('objectInitializer');
  comparator = new comparator$ObjectLiteral('comparator');
  argumentsGetter = new argumentsGetter$ObjectLiteral('argumentsGetter');
  void_0 = new Operator('void');
  number = new Operator('number');
  string = new Operator('string');
  join = new Operator('join');
  identifier = new Operator('identifier');
  empty_round = new Operator('empty_round');
  empty_square = new Operator('empty_square');
  empty_curly = new Operator('empty_curly');
  round = new Operator('round');
  square = new Operator('square');
  curly = new Operator('curly');
  empty_dollar_round = new Operator('empty_dollar_round');
  empty_dollar_square = new Operator('empty_dollar_square');
  empty_dollar_curly = new Operator('empty_dollar_curly');
  dollar_round = new Operator('dollar_round');
  dollar_square = new Operator('dollar_square');
  dollar_curly = new Operator('dollar_curly');
  empty_formatted_dollar_round = new Operator('empty_formatted_dollar_round');
  empty_formatted_dollar_square = new Operator('empty_formatted_dollar_square');
  empty_formatted_dollar_curly = new Operator('empty_formatted_dollar_curly');
  formatted_dollar_round = new Operator('formatted_dollar_round');
  formatted_dollar_square = new Operator('formatted_dollar_square');
  formatted_dollar_curly = new Operator('formatted_dollar_curly');
  period = new Operator('period');
  colon_colon = new Operator('colon_colon');
  right_empty_round = new Operator('right_empty_round');
  right_round = new Operator('right_round');
  right_empty_square = new Operator('right_empty_square');
  right_square = new Operator('right_square');
  right_empty_curly = new Operator('right_empty_curly');
  right_curly = new Operator('right_curly');
  left_plus = new Operator('left_plus');
  left_minus = new Operator('left_minus');
  left_ampersand = new Operator('left_ampersand');
  left_question = new Operator('left_question');
  left_exclamation = new Operator('left_exclamation');
  left_dollar_number = new Operator('left_dollar_number');
  left_dollar_ampersand = new Operator('left_dollar_ampersand');
  left_dollar_asterisk = new Operator('left_dollar_asterisk');
  asterisk = new Operator('asterisk');
  slash = new Operator('slash');
  plus_1 = new Operator('plus');
  minus = new Operator('minus');
  period_period = new Operator('period_period');
  tilde = new Operator('tilde');
  comparison = new Operator('comparison');
  equal_equal_equal = new Operator('equal_equal_equal');
  exclamation_equal_equal = new Operator('exclamation_equal_equal');
  equal_equal = new Operator('equal_equal');
  exclamation_equal = new Operator('exclamation_equal');
  greater_equal = new Operator('greater_equal');
  less_equal = new Operator('less_equal');
  greater = new Operator('greater');
  less = new Operator('less');
  ampersand_ampersand = new Operator('ampersand_ampersand');
  pipe_pipe = new Operator('pipe_pipe');
  ternary_question_colon = new Operator('ternary_question_colon');
  question_colon = new Operator('question_colon');
  exclamation_colon = new Operator('exclamation_colon');
  exclamation_question = new Operator('exclamation_question');
  comma = new Operator('comma');
  minus_greater = new Operator('minus_greater');
  equal_greater = new Operator('equal_greater');
  colon = new Operator('colon');
  equal = new Operator('equal');
  pipe = new Operator('pipe');
  semicolon = new Operator('semicolon');
  return _;
}));

//# sourceMappingURL=fl9_compiler.js.map

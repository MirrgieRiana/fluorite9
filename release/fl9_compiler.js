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
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var equals = Kotlin.equals;
  var Triple = Kotlin.kotlin.Triple;
  var plus = Kotlin.kotlin.collections.plus_qloxvw$;
  var get_indices = Kotlin.kotlin.collections.get_indices_m7z4lg$;
  var toString = Kotlin.toString;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Pair = Kotlin.kotlin.Pair;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var slice = Kotlin.kotlin.collections.slice_l0m14x$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Error_init = Kotlin.kotlin.Error_init_pdl1vj$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var Error_init_0 = Kotlin.kotlin.Error_init;
  var plus_0 = Kotlin.kotlin.collections.plus_mydzjv$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  OperatorRegistry.prototype = Object.create(Registry.prototype);
  OperatorRegistry.prototype.constructor = OperatorRegistry;
  AliasRegistry.prototype = Object.create(FramedRegistry.prototype);
  AliasRegistry.prototype.constructor = AliasRegistry;
  function getStandardCompiler$lambda$lambda$lambda$lambda($receiver) {
    return CodeGet_init($receiver.not_pdl1vz$('(runtime.void)'));
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_0($receiver) {
    return CodeRun_init();
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda(it) {
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_1($receiver) {
    return new CodeArrayInit(getStandardCompiler$lambda$lambda$lambda$lambda$lambda);
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_0(it) {
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_2($receiver) {
    return new CodeObjectInit(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_0);
  }
  function getStandardCompiler$lambda$lambda$lambda($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda);
    $receiver.run.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_0);
    $receiver.arrayInit.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_1);
    $receiver.objectInit.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_2);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_3($receiver) {
    return CodeGet_init($receiver.not_pdl1vz$('(' + $receiver.value + ')'));
  }
  function getStandardCompiler$lambda$lambda$lambda_0($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_3);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_4($receiver) {
    return CodeGet_init($receiver.not_pdl1vz$(JSON.stringify($receiver.value)));
  }
  function getStandardCompiler$lambda$lambda$lambda_1($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_4);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_1(closure$codes, closure$id, this$) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$codes.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        $receiver.line_3pe74m$(element.head);
      }
      var tmp$_0 = this$.not_pdl1vz$('const v' + closure$id + ' = `');
      var $receiver_0 = closure$codes;
      var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_1;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var item = tmp$_1.next();
        var tmp$_2 = destination.add_11rb$;
        var this$_0 = this$;
        tmp$_2.call(destination, plus_1(plus_1(this$_0.not_pdl1vz$('${runtime.toString('), item.body), this$_0.not_pdl1vz$(')}')));
      }
      var tmp$_3;
      var reduceOrNull$result;
      reduceOrNull$break: do {
        var iterator = destination.iterator();
        if (!iterator.hasNext()) {
          reduceOrNull$result = null;
          break reduceOrNull$break;
        }var accumulator = iterator.next();
        while (iterator.hasNext()) {
          accumulator = plus_1(accumulator, iterator.next());
        }
        reduceOrNull$result = accumulator;
      }
       while (false);
      $receiver.line_3pad5q$(plus_1(plus_1(tmp$_0, (tmp$_3 = reduceOrNull$result) != null ? tmp$_3 : package$fl9.zeroLine), this$.not_pdl1vz$('`;')));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_5(closure$context) {
    return function ($receiver) {
      if ($receiver.value.length === 0) {
        return CodeGet_init($receiver.not_pdl1vz$('""'));
      } else if ($receiver.value.length === 1 && isType($receiver.value[0], string)) {
        return mustGet($receiver.value[0], closure$context);
      } else {
        var $receiver_0 = $receiver.value;
        var destination = ArrayList_init($receiver_0.length);
        var tmp$;
        for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
          var item = $receiver_0[tmp$];
          destination.add_11rb$(mustGet(item, closure$context));
        }
        var codes = destination;
        var id = closure$context.nextId();
        return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_1(codes, id, $receiver)), $receiver.not_pdl1vz$('v' + id));
      }
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_2(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_5(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_6(closure$context) {
    return function ($receiver) {
      var tmp$, tmp$_0, tmp$_1;
      tmp$_1 = (tmp$_0 = (tmp$ = closure$context.aliases.get_61zpoe$($receiver.value)) != null ? tmp$.get : null) != null ? tmp$_0.invoke_11rb$(new AliasCompilerArgument(closure$context, $receiver.location)) : null;
      if (tmp$_1 == null) {
        throw Exception_init('Unknown Identifier: ' + $receiver.value);
      }return tmp$_1;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_7(closure$context) {
    return function ($receiver) {
      var tmp$, tmp$_0, tmp$_1;
      tmp$_1 = (tmp$_0 = (tmp$ = closure$context.aliases.get_61zpoe$($receiver.value)) != null ? tmp$.set : null) != null ? tmp$_0.invoke_11rb$(new AliasCompilerArgument(closure$context, $receiver.location)) : null;
      if (tmp$_1 == null) {
        throw Exception_init('Unknown Identifier: ' + $receiver.value);
      }return tmp$_1;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_3(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_6(closure$context));
      $receiver.set.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_7(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_8($receiver) {
    return CodeGet_init($receiver.not_pdl1vz$('(runtime.empty)'));
  }
  function getStandardCompiler$lambda$lambda$lambda_4($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_8);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_9(closure$context) {
    return function ($receiver) {
      var $this = closure$context.aliases;
      $this.push();
      var result = mustGet($receiver.value.main, closure$context);
      $this.pop();
      return result;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_10(closure$context) {
    return function ($receiver) {
      var $this = closure$context.aliases;
      $this.push();
      var result = mustRun($receiver.value.main, closure$context);
      $this.pop();
      return result;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_5(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_9(closure$context));
      $receiver.run.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_10(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_2(closure$id, this$) {
    return function ($receiver) {
      $receiver.line_3pad5q$(this$.not_pdl1vz$('const v' + closure$id + ' = [];'));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_11(closure$context) {
    return function ($receiver) {
      var id = closure$context.nextId();
      return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_2(id, $receiver)), $receiver.not_pdl1vz$('v' + id));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_6(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_11(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda(this$, closure$id, this$_0) {
    return function (code) {
      this$.line_3pe74m$(code.head);
      this$.line_3pad5q$(plus_1(plus_1(this$_0.not_pdl1vz$('v' + closure$id + '[v' + closure$id + '.length] = '), code.body), this$_0.not_pdl1vz$(';')));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_3(closure$id, this$, closure$codeMain) {
    return function ($receiver) {
      $receiver.line_3pad5q$(this$.not_pdl1vz$('const v' + closure$id + ' = [];'));
      closure$codeMain.generator(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda($receiver, closure$id, this$));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_12(closure$context) {
    return function ($receiver) {
      var codeMain = mustArrayInit($receiver.value.main, closure$context);
      var id = closure$context.nextId();
      return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_3(id, $receiver, codeMain)), $receiver.not_pdl1vz$('v' + id));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_7(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_12(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_4(closure$id, this$) {
    return function ($receiver) {
      $receiver.line_3pad5q$(this$.not_pdl1vz$('const v' + closure$id + ' = {};'));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_13(closure$context) {
    return function ($receiver) {
      var id = closure$context.nextId();
      return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_4(id, $receiver)), $receiver.not_pdl1vz$('v' + id));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_8(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_13(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_0(this$, closure$id, this$_0) {
    return function (key, code) {
      this$.line_3pe74m$(key.head);
      this$.line_3pe74m$(code.head);
      this$.line_3pad5q$(plus_1(plus_1(plus_1(plus_1(this$_0.not_pdl1vz$('v' + closure$id + '['), key.body), this$_0.not_pdl1vz$('] = ')), code.body), this$_0.not_pdl1vz$(';')));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_5(closure$id, this$, closure$codeMain) {
    return function ($receiver) {
      $receiver.line_3pad5q$(this$.not_pdl1vz$('const v' + closure$id + ' = {};'));
      closure$codeMain.generator(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver, closure$id, this$));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_14(closure$context) {
    return function ($receiver) {
      var codeMain = mustObjectInit($receiver.value.main, closure$context);
      var id = closure$context.nextId();
      return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_5(id, $receiver, codeMain)), $receiver.not_pdl1vz$('v' + id));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_9(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_14(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_15($receiver) {
    return CodeGet_init($receiver.not_pdl1vz$('(runtime.empty)'));
  }
  function getStandardCompiler$lambda$lambda$lambda_10($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_15);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_16(closure$context) {
    return function ($receiver) {
      var $this = closure$context.aliases;
      $this.push();
      var result = mustGet($receiver.value.main, closure$context);
      $this.pop();
      return result;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_11(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_16(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$codeLeft, closure$id, this$, closure$name) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeLeft.head);
      $receiver.line_3pad5q$(plus_1(plus_1(plus_1(plus_1(this$.not_pdl1vz$('const v' + closure$id + ' = '), closure$codeLeft.body), this$.not_pdl1vz$('[')), times(JSON.stringify(closure$name), this$.value.right.location)), this$.not_pdl1vz$('];')));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_17(closure$context) {
    return function ($receiver) {
      var closure$context_0 = closure$context;
      var block$result;
      block$break: do {
        var $receiver_0 = $receiver.value.right;
        if (isType($receiver_0, identifier)) {
          var name = $receiver_0.value;
          var codeLeft = mustGet($receiver.value.left, closure$context_0);
          var id = closure$context_0.nextId();
          block$result = new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda(codeLeft, id, $receiver, name)), $receiver.not_pdl1vz$('v' + id));
          break block$break;
        }throw Exception_init('Illegal Operator Argument: ' + $receiver.value.left.type + ' : ' + $receiver.value.right.type);
      }
       while (false);
      return block$result;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_12(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_17(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_6(closure$codeLeft, closure$id, this$) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeLeft.head);
      $receiver.line_3pad5q$(plus_1(plus_1(this$.not_pdl1vz$('const v' + closure$id + ' = runtime.apply('), closure$codeLeft.body), this$.not_pdl1vz$(', []);')));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_18(closure$context) {
    return function ($receiver) {
      var codeLeft = mustGet($receiver.value.left, closure$context);
      var id = closure$context.nextId();
      return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_6(codeLeft, id, $receiver)), $receiver.not_pdl1vz$('v' + id));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_13(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_18(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_7(closure$codeLeft, closure$codesMain, closure$id, this$) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeLeft.head);
      var tmp$;
      tmp$ = closure$codesMain.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        $receiver.line_3pe74m$(element.head);
      }
      var tmp$_0 = plus_1(plus_1(this$.not_pdl1vz$('const v' + closure$id + ' = runtime.apply('), closure$codeLeft.body), this$.not_pdl1vz$(', ['));
      var $receiver_0 = closure$codesMain;
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
          var left = accumulator;
          var right = iterator.next();
          accumulator = plus_1(plus_1(left, this$_0.not_pdl1vz$(', ')), right);
        }
        reduceOrNull$result = accumulator;
      }
       while (false);
      $receiver.line_3pad5q$(plus_1(plus_1(tmp$_0, (tmp$_2 = reduceOrNull$result) != null ? tmp$_2 : package$fl9.zeroLine), this$.not_pdl1vz$(']);')));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_8(closure$codeLeft, closure$codesMain, closure$idObject, this$, closure$codesMainNamed, closure$id) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeLeft.head);
      var tmp$;
      tmp$ = closure$codesMain.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        $receiver.line_3pe74m$(element.head);
      }
      $receiver.line_3pad5q$(this$.not_pdl1vz$('const v' + closure$idObject + ' = {};'));
      var $receiver_0 = closure$codesMainNamed;
      var tmp$_0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        var closure$idObject_0 = closure$idObject;
        var this$_0 = this$;
        $receiver.line_3pe74m$(element_0.second.head);
        $receiver.line_3pad5q$(plus_1(plus_1(plus_1(plus_1(this$_0.not_pdl1vz$('v' + closure$idObject_0 + '['), times(JSON.stringify(element_0.first), element_0.third)), this$_0.not_pdl1vz$('] = ')), element_0.second.body), this$_0.not_pdl1vz$(';')));
      }
      var tmp$_1 = plus_1(plus_1(this$.not_pdl1vz$('const v' + closure$id + ' = runtime.apply('), closure$codeLeft.body), this$.not_pdl1vz$(', ['));
      var $receiver_1 = closure$codesMain;
      var destination = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
      var tmp$_2;
      tmp$_2 = $receiver_1.iterator();
      while (tmp$_2.hasNext()) {
        var item = tmp$_2.next();
        destination.add_11rb$(item.body);
      }
      var $receiver_2 = plus(destination, this$.not_pdl1vz$('v' + closure$idObject));
      var tmp$_3;
      var reduceOrNull$result;
      reduceOrNull$break: do {
        var iterator = $receiver_2.iterator();
        if (!iterator.hasNext()) {
          reduceOrNull$result = null;
          break reduceOrNull$break;
        }var accumulator = iterator.next();
        while (iterator.hasNext()) {
          var this$_1 = this$;
          var left = accumulator;
          var right = iterator.next();
          accumulator = plus_1(plus_1(left, this$_1.not_pdl1vz$(', ')), right);
        }
        reduceOrNull$result = accumulator;
      }
       while (false);
      $receiver.line_3pad5q$(plus_1(plus_1(tmp$_1, (tmp$_3 = reduceOrNull$result) != null ? tmp$_3 : package$fl9.zeroLine), this$.not_pdl1vz$(']);')));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_19(closure$context) {
    return function ($receiver) {
      var codeLeft = mustGet($receiver.value.left, closure$context);
      var block$result;
      block$break: do {
        var $receiver_0 = $receiver.value.main;
        if (isType($receiver_0, semicolon)) {
          block$result = toList($receiver_0.value);
          break block$break;
        }block$result = listOf($receiver.value.main);
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
        var closure$context_0 = closure$context;
        if (equals(element.type, 'void')) {
          if (!namedMode.v) {
            var element_0 = CodeGet_init(times('undefined', $receiver.location));
            codesMain.add_11rb$(element_0);
          }} else if (equals(element.type, 'colon')) {
          namedMode.v = true;
          var nodeKey = element.value.left;
          var nodeValue = element.value.right;
          if (equals(nodeKey.type, 'identifier')) {
            var tmp$_0 = nodeKey.value;
            var $this = closure$context_0.aliases;
            $this.push();
            var result = mustGet(nodeValue, closure$context_0);
            $this.pop();
            var element_1 = new Triple(tmp$_0, result, nodeKey.location);
            codesMainNamed.add_11rb$(element_1);
          } else {
            throw Exception_init('Illegal Argument Name: ' + nodeKey.type);
          }
        } else {
          var $this_0 = closure$context_0.aliases;
          $this_0.push();
          var result_0 = mustGet(element, closure$context_0);
          $this_0.pop();
          codesMain.add_11rb$(result_0);
        }
      }
      if (codesMainNamed.isEmpty()) {
        var id = closure$context.nextId();
        return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_7(codeLeft, codesMain, id, $receiver)), $receiver.not_pdl1vz$('v' + id));
      } else {
        var id_0 = closure$context.nextId();
        var idObject = closure$context.nextId();
        return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_8(codeLeft, codesMain, idObject, $receiver, codesMainNamed, id_0)), $receiver.not_pdl1vz$('v' + id_0));
      }
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_14(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_19(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$idArgument) {
    return function ($receiver) {
      return CodeGet_init($receiver.not_pdl1vz$('v' + closure$idArgument));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$code, closure$idArgument, this$) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$code.head);
      $receiver.line_3pad5q$(plus_1(plus_1(this$.not_pdl1vz$('v' + closure$idArgument + ' = '), closure$code.body), this$.not_pdl1vz$(';')));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$idArgument, this$) {
    return function (code_0) {
      return new CodeRun(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(code_0, closure$idArgument, this$)));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$idArgument) {
    return function ($receiver) {
      return new CodeSet(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$idArgument, $receiver));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$idArgument) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$idArgument));
      $receiver.set.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$idArgument));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$codeRight, this$) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeRight.head);
      $receiver.line_3pad5q$(plus_1(plus_1(this$.not_pdl1vz$('return '), closure$codeRight.body), this$.not_pdl1vz$(';')));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_9(closure$codeLeft, closure$id, this$, closure$idArgument, closure$codeRight) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeLeft.head);
      $receiver.line_3pad5q$(plus_1(plus_1(this$.not_pdl1vz$('const v' + closure$id + ' = runtime.apply('), closure$codeLeft.body), this$.not_pdl1vz$(', [function(v' + closure$idArgument + ') {')));
      $receiver.indent_3vmjfp$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$codeRight, this$));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('}]);'));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_20(closure$context) {
    return function ($receiver) {
      var codeLeft = mustGet($receiver.value.left, closure$context);
      var idArgument = closure$context.nextId();
      var $this = closure$context.aliases;
      $this.push();
      var closure$context_0 = closure$context;
      closure$context_0.aliases.set_yuqcw7$('_', Alias_init_0(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_1(idArgument)));
      var result = mustGet($receiver.value.main, closure$context_0);
      $this.pop();
      var codeRight = result;
      var id = closure$context.nextId();
      return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_9(codeLeft, id, $receiver, idArgument, codeRight)), $receiver.not_pdl1vz$('v' + id));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_15(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_20(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$leftUnaryOperatorGetter$lambda$lambda(closure$codeRight, closure$id, this$, closure$function) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeRight.head);
      $receiver.line_3pad5q$(plus_1(plus_1(this$.not_pdl1vz$('const v' + closure$id + ' = '), closure$function(this$, closure$codeRight.body)), this$.not_pdl1vz$(';')));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$leftUnaryOperatorGetter$lambda(closure$context, closure$function) {
    return function ($receiver) {
      var codeRight = mustGet($receiver.value.right, closure$context);
      var id = closure$context.nextId();
      return new CodeGet(code(getStandardCompiler$lambda$lambda$leftUnaryOperatorGetter$lambda$lambda(codeRight, id, $receiver, closure$function)), $receiver.not_pdl1vz$('v' + id));
    };
  }
  function getStandardCompiler$lambda$lambda$leftUnaryOperatorGetter(closure$context) {
    return function (function_0) {
      return getStandardCompiler$lambda$lambda$leftUnaryOperatorGetter$lambda(closure$context, function_0);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_21($receiver, it) {
    return plus_1(plus_1($receiver.not_pdl1vz$('runtime.toNumber('), it), $receiver.not_pdl1vz$(')'));
  }
  function getStandardCompiler$lambda$lambda$lambda_16(closure$leftUnaryOperatorGetter) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(closure$leftUnaryOperatorGetter(getStandardCompiler$lambda$lambda$lambda$lambda_21));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_22($receiver, it) {
    return plus_1(plus_1($receiver.not_pdl1vz$('-runtime.toNumber('), it), $receiver.not_pdl1vz$(')'));
  }
  function getStandardCompiler$lambda$lambda$lambda_17(closure$leftUnaryOperatorGetter) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(closure$leftUnaryOperatorGetter(getStandardCompiler$lambda$lambda$lambda$lambda_22));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_23($receiver, it) {
    return plus_1(plus_1($receiver.not_pdl1vz$('runtime.toString('), it), $receiver.not_pdl1vz$(')'));
  }
  function getStandardCompiler$lambda$lambda$lambda_18(closure$leftUnaryOperatorGetter) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(closure$leftUnaryOperatorGetter(getStandardCompiler$lambda$lambda$lambda$lambda_23));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_24($receiver, it) {
    return plus_1(plus_1($receiver.not_pdl1vz$('runtime.toBoolean('), it), $receiver.not_pdl1vz$(')'));
  }
  function getStandardCompiler$lambda$lambda$lambda_19(closure$leftUnaryOperatorGetter) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(closure$leftUnaryOperatorGetter(getStandardCompiler$lambda$lambda$lambda$lambda_24));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_25($receiver, it) {
    return plus_1(plus_1($receiver.not_pdl1vz$('!runtime.toBoolean('), it), $receiver.not_pdl1vz$(')'));
  }
  function getStandardCompiler$lambda$lambda$lambda_20(closure$leftUnaryOperatorGetter) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(closure$leftUnaryOperatorGetter(getStandardCompiler$lambda$lambda$lambda$lambda_25));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_26($receiver, it) {
    return plus_1(plus_1($receiver.not_pdl1vz$('runtime.getLength('), it), $receiver.not_pdl1vz$(')'));
  }
  function getStandardCompiler$lambda$lambda$lambda_21(closure$leftUnaryOperatorGetter) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(closure$leftUnaryOperatorGetter(getStandardCompiler$lambda$lambda$lambda$lambda_26));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$binaryOperatorGetter$lambda$lambda(closure$codeLeft, closure$codeRight, closure$id, this$, closure$function) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeLeft.head);
      $receiver.line_3pe74m$(closure$codeRight.head);
      $receiver.line_3pad5q$(plus_1(plus_1(this$.not_pdl1vz$('const v' + closure$id + ' = '), closure$function(this$, closure$codeLeft.body, closure$codeRight.body)), this$.not_pdl1vz$(';')));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$binaryOperatorGetter$lambda(closure$context, closure$function) {
    return function ($receiver) {
      var codeLeft = mustGet($receiver.value.left, closure$context);
      var codeRight = mustGet($receiver.value.right, closure$context);
      var id = closure$context.nextId();
      return new CodeGet(code(getStandardCompiler$lambda$lambda$binaryOperatorGetter$lambda$lambda(codeLeft, codeRight, id, $receiver, closure$function)), $receiver.not_pdl1vz$('v' + id));
    };
  }
  function getStandardCompiler$lambda$lambda$binaryOperatorGetter(closure$context) {
    return function (function_0) {
      return getStandardCompiler$lambda$lambda$binaryOperatorGetter$lambda(closure$context, function_0);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_27($receiver, left, right) {
    return plus_1(plus_1(plus_1(plus_1($receiver.not_pdl1vz$('runtime.multiply('), left), $receiver.not_pdl1vz$(', ')), right), $receiver.not_pdl1vz$(')'));
  }
  function getStandardCompiler$lambda$lambda$lambda_22(closure$binaryOperatorGetter) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(closure$binaryOperatorGetter(getStandardCompiler$lambda$lambda$lambda$lambda_27));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_28($receiver, left, right) {
    return plus_1(plus_1(plus_1(plus_1($receiver.not_pdl1vz$('runtime.divide('), left), $receiver.not_pdl1vz$(', ')), right), $receiver.not_pdl1vz$(')'));
  }
  function getStandardCompiler$lambda$lambda$lambda_23(closure$binaryOperatorGetter) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(closure$binaryOperatorGetter(getStandardCompiler$lambda$lambda$lambda$lambda_28));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_29($receiver, left, right) {
    return plus_1(plus_1(plus_1(plus_1($receiver.not_pdl1vz$('runtime.add('), left), $receiver.not_pdl1vz$(', ')), right), $receiver.not_pdl1vz$(')'));
  }
  function getStandardCompiler$lambda$lambda$lambda_24(closure$binaryOperatorGetter) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(closure$binaryOperatorGetter(getStandardCompiler$lambda$lambda$lambda$lambda_29));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_30($receiver, left, right) {
    return plus_1(plus_1(plus_1(plus_1($receiver.not_pdl1vz$('runtime.subtract('), left), $receiver.not_pdl1vz$(', ')), right), $receiver.not_pdl1vz$(')'));
  }
  function getStandardCompiler$lambda$lambda$lambda_25(closure$binaryOperatorGetter) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(closure$binaryOperatorGetter(getStandardCompiler$lambda$lambda$lambda$lambda_30));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_31($receiver, left, right) {
    return plus_1(plus_1(plus_1(plus_1($receiver.not_pdl1vz$('runtime.rangeClosed('), left), $receiver.not_pdl1vz$(', ')), right), $receiver.not_pdl1vz$(')'));
  }
  function getStandardCompiler$lambda$lambda$lambda_26(closure$binaryOperatorGetter) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(closure$binaryOperatorGetter(getStandardCompiler$lambda$lambda$lambda$lambda_31));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_32($receiver, left, right) {
    return plus_1(plus_1(plus_1(plus_1($receiver.not_pdl1vz$('runtime.rangeOpened('), left), $receiver.not_pdl1vz$(', ')), right), $receiver.not_pdl1vz$(')'));
  }
  function getStandardCompiler$lambda$lambda$lambda_27(closure$binaryOperatorGetter) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(closure$binaryOperatorGetter(getStandardCompiler$lambda$lambda$lambda$lambda_32));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$idVarResult, this$, closure$idLabel) {
    return function ($receiver) {
      $receiver.line_3pad5q$(this$.not_pdl1vz$(closure$idVarResult + ' = false;'));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('break ' + closure$idLabel + ';'));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$codesTerm, closure$idVars, this$, closure$codesOperator, closure$idVarResult, closure$idLabel) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codesTerm.get_za3lpa$(0).head);
      $receiver.line_3pad5q$(plus_1(plus_1(this$.not_pdl1vz$('const ' + closure$idVars.get_za3lpa$(0) + ' = '), closure$codesTerm.get_za3lpa$(0).body), this$.not_pdl1vz$(';')));
      var $receiver_0 = get_indices(this$.value.types);
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
        $receiver.line_3pad5q$(plus_1(plus_1(this$_0.not_pdl1vz$('const ' + closure$idVars_0.get_za3lpa$(element + 1 | 0) + ' = '), closure$codesTerm_0.get_za3lpa$(element + 1 | 0).body), this$_0.not_pdl1vz$(';')));
        $receiver.line_3pad5q$(plus_1(plus_1(this$_0.not_pdl1vz$('if (!('), closure$codesOperator_0.get_za3lpa$(element).comparator(this$_0.not_pdl1vz$(closure$idVars_0.get_za3lpa$(element)), this$_0.not_pdl1vz$(closure$idVars_0.get_za3lpa$(element + 1 | 0)))), this$_0.not_pdl1vz$(')) {')));
        $receiver.indent_3vmjfp$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$idVarResult_0, this$_0, closure$idLabel_0));
        $receiver.line_3pad5q$(this$_0.not_pdl1vz$('}'));
      }
      $receiver.line_3pad5q$(this$.not_pdl1vz$(closure$idVarResult + ' = true;'));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_10(closure$idVarResult, this$, closure$idLabel, closure$codesTerm, closure$idVars, closure$codesOperator) {
    return function ($receiver) {
      $receiver.line_3pad5q$(this$.not_pdl1vz$('let ' + closure$idVarResult + ';'));
      $receiver.line_3pad5q$(this$.not_pdl1vz$(closure$idLabel + ':'));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('{'));
      $receiver.indent_3vmjfp$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$codesTerm, closure$idVars, this$, closure$codesOperator, closure$idVarResult, closure$idLabel));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('}'));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_33(closure$context) {
    return function ($receiver) {
      var $receiver_0 = get_indices($receiver.value.nodes);
      var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$('v' + closure$context.nextId() + '$' + item);
      }
      var idVars = destination;
      var idVarResult = 'v' + closure$context.nextId() + '$' + 'result';
      var idLabel = 'l' + toString(closure$context.nextId());
      var $receiver_1 = get_indices($receiver.value.types);
      var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
      var tmp$_0;
      tmp$_0 = $receiver_1.iterator();
      while (tmp$_0.hasNext()) {
        var item_0 = tmp$_0.next();
        var tmp$_1 = destination_0.add_11rb$;
        var closure$context_0 = closure$context;
        tmp$_1.call(destination_0, mustCompare(new Node($receiver.value.types[item_0], Unit, $receiver.value.locations[item_0]), closure$context_0));
      }
      var codesOperator = destination_0;
      var $receiver_2 = $receiver.value.nodes;
      var destination_1 = ArrayList_init($receiver_2.length);
      var tmp$_2;
      for (tmp$_2 = 0; tmp$_2 !== $receiver_2.length; ++tmp$_2) {
        var item_1 = $receiver_2[tmp$_2];
        destination_1.add_11rb$(mustGet(item_1, closure$context));
      }
      var codesTerm = destination_1;
      return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_10(idVarResult, $receiver, idLabel, codesTerm, idVars, codesOperator)), $receiver.not_pdl1vz$(idVarResult));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_28(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_33(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_11(this$) {
    return function (left, right) {
      return plus_1(plus_1(left, this$.not_pdl1vz$(' == ')), right);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_34($receiver) {
    return new CodeCompare(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_11($receiver));
  }
  function getStandardCompiler$lambda$lambda$lambda_29($receiver) {
    $receiver.compare.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_34);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_12(this$) {
    return function (left, right) {
      return plus_1(plus_1(left, this$.not_pdl1vz$(' != ')), right);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_35($receiver) {
    return new CodeCompare(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_12($receiver));
  }
  function getStandardCompiler$lambda$lambda$lambda_30($receiver) {
    $receiver.compare.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_35);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_13(this$) {
    return function (left, right) {
      return plus_1(plus_1(left, this$.not_pdl1vz$(' === ')), right);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_36($receiver) {
    return new CodeCompare(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_13($receiver));
  }
  function getStandardCompiler$lambda$lambda$lambda_31($receiver) {
    $receiver.compare.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_36);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_14(this$) {
    return function (left, right) {
      return plus_1(plus_1(left, this$.not_pdl1vz$(' !== ')), right);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_37($receiver) {
    return new CodeCompare(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_14($receiver));
  }
  function getStandardCompiler$lambda$lambda$lambda_32($receiver) {
    $receiver.compare.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_37);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_15(this$) {
    return function (left, right) {
      return plus_1(plus_1(left, this$.not_pdl1vz$(' > ')), right);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_38($receiver) {
    return new CodeCompare(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_15($receiver));
  }
  function getStandardCompiler$lambda$lambda$lambda_33($receiver) {
    $receiver.compare.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_38);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_16(this$) {
    return function (left, right) {
      return plus_1(plus_1(left, this$.not_pdl1vz$(' < ')), right);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_39($receiver) {
    return new CodeCompare(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_16($receiver));
  }
  function getStandardCompiler$lambda$lambda$lambda_34($receiver) {
    $receiver.compare.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_39);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_17(this$) {
    return function (left, right) {
      return plus_1(plus_1(left, this$.not_pdl1vz$(' >= ')), right);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_40($receiver) {
    return new CodeCompare(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_17($receiver));
  }
  function getStandardCompiler$lambda$lambda$lambda_35($receiver) {
    $receiver.compare.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_40);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_18(this$) {
    return function (left, right) {
      return plus_1(plus_1(left, this$.not_pdl1vz$(' <= ')), right);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_41($receiver) {
    return new CodeCompare(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_18($receiver));
  }
  function getStandardCompiler$lambda$lambda$lambda_36($receiver) {
    $receiver.compare.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_41);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$binaryConditionOperatorGetter$lambda$lambda$lambda(closure$codeRight, closure$id, this$) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeRight.head);
      $receiver.line_3pad5q$(plus_1(plus_1(this$.not_pdl1vz$('v' + closure$id + ' = '), closure$codeRight.body), this$.not_pdl1vz$(';')));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$binaryConditionOperatorGetter$lambda$lambda$lambda_0(closure$id, this$, closure$codeLeft) {
    return function ($receiver) {
      $receiver.line_3pad5q$(plus_1(plus_1(this$.not_pdl1vz$('v' + closure$id + ' = '), closure$codeLeft.body), this$.not_pdl1vz$(';')));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$binaryConditionOperatorGetter$lambda$lambda(closure$codeLeft, closure$id, this$, closure$function, closure$codeRight) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeLeft.head);
      $receiver.line_3pad5q$(this$.not_pdl1vz$('let v' + closure$id + ';'));
      $receiver.line_3pad5q$(plus_1(plus_1(this$.not_pdl1vz$('if ('), closure$function(this$, closure$codeLeft.body)), this$.not_pdl1vz$(') {')));
      $receiver.indent_3vmjfp$(getStandardCompiler$lambda$lambda$binaryConditionOperatorGetter$lambda$lambda$lambda(closure$codeRight, closure$id, this$));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('} else {'));
      $receiver.indent_3vmjfp$(getStandardCompiler$lambda$lambda$binaryConditionOperatorGetter$lambda$lambda$lambda_0(closure$id, this$, closure$codeLeft));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('}'));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$binaryConditionOperatorGetter$lambda(closure$context, closure$function) {
    return function ($receiver) {
      var codeLeft = mustGet($receiver.value.left, closure$context);
      var $this = closure$context.aliases;
      $this.push();
      var result = mustGet($receiver.value.right, closure$context);
      $this.pop();
      var codeRight = result;
      var id = closure$context.nextId();
      return new CodeGet(code(getStandardCompiler$lambda$lambda$binaryConditionOperatorGetter$lambda$lambda(codeLeft, id, $receiver, closure$function, codeRight)), $receiver.not_pdl1vz$('v' + id));
    };
  }
  function getStandardCompiler$lambda$lambda$binaryConditionOperatorGetter(closure$context) {
    return function (function_0) {
      return getStandardCompiler$lambda$lambda$binaryConditionOperatorGetter$lambda(closure$context, function_0);
    };
  }
  function getStandardCompiler$lambda$lambda$binaryConditionOperatorRunner$lambda$lambda$lambda(closure$codeRight) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeRight.head);
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$binaryConditionOperatorRunner$lambda$lambda(closure$codeLeft, this$, closure$function, closure$codeRight) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeLeft.head);
      $receiver.line_3pad5q$(plus_1(plus_1(this$.not_pdl1vz$('if ('), closure$function(this$, closure$codeLeft.body)), this$.not_pdl1vz$(') {')));
      $receiver.indent_3vmjfp$(getStandardCompiler$lambda$lambda$binaryConditionOperatorRunner$lambda$lambda$lambda(closure$codeRight));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('}'));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$binaryConditionOperatorRunner$lambda(closure$context, closure$function) {
    return function ($receiver) {
      var codeLeft = mustGet($receiver.value.left, closure$context);
      var $this = closure$context.aliases;
      $this.push();
      var result = mustRun($receiver.value.right, closure$context);
      $this.pop();
      var codeRight = result;
      return new CodeRun(code(getStandardCompiler$lambda$lambda$binaryConditionOperatorRunner$lambda$lambda(codeLeft, $receiver, closure$function, codeRight)));
    };
  }
  function getStandardCompiler$lambda$lambda$binaryConditionOperatorRunner(closure$context) {
    return function (function_0) {
      return getStandardCompiler$lambda$lambda$binaryConditionOperatorRunner$lambda(closure$context, function_0);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_42($receiver, it) {
    return plus_1(plus_1($receiver.not_pdl1vz$('runtime.toBoolean('), it), $receiver.not_pdl1vz$(')'));
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_43($receiver, it) {
    return plus_1(plus_1($receiver.not_pdl1vz$('runtime.toBoolean('), it), $receiver.not_pdl1vz$(')'));
  }
  function getStandardCompiler$lambda$lambda$lambda_37(closure$binaryConditionOperatorGetter, closure$binaryConditionOperatorRunner) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(closure$binaryConditionOperatorGetter(getStandardCompiler$lambda$lambda$lambda$lambda_42));
      $receiver.run.invoke_ru8m1r$(closure$binaryConditionOperatorRunner(getStandardCompiler$lambda$lambda$lambda$lambda_43));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_44($receiver, it) {
    return plus_1(plus_1($receiver.not_pdl1vz$('!runtime.toBoolean('), it), $receiver.not_pdl1vz$(')'));
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_45($receiver, it) {
    return plus_1(plus_1($receiver.not_pdl1vz$('!runtime.toBoolean('), it), $receiver.not_pdl1vz$(')'));
  }
  function getStandardCompiler$lambda$lambda$lambda_38(closure$binaryConditionOperatorGetter, closure$binaryConditionOperatorRunner) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(closure$binaryConditionOperatorGetter(getStandardCompiler$lambda$lambda$lambda$lambda_44));
      $receiver.run.invoke_ru8m1r$(closure$binaryConditionOperatorRunner(getStandardCompiler$lambda$lambda$lambda$lambda_45));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_46($receiver, it) {
    return plus_1(it, $receiver.not_pdl1vz$('=== undefined'));
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_47($receiver, it) {
    return plus_1(it, $receiver.not_pdl1vz$('=== undefined'));
  }
  function getStandardCompiler$lambda$lambda$lambda_39(closure$binaryConditionOperatorGetter, closure$binaryConditionOperatorRunner) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(closure$binaryConditionOperatorGetter(getStandardCompiler$lambda$lambda$lambda$lambda_46));
      $receiver.run.invoke_ru8m1r$(closure$binaryConditionOperatorRunner(getStandardCompiler$lambda$lambda$lambda$lambda_47));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_48($receiver, it) {
    return plus_1(it, $receiver.not_pdl1vz$('!== undefined'));
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_49($receiver, it) {
    return plus_1(it, $receiver.not_pdl1vz$('!== undefined'));
  }
  function getStandardCompiler$lambda$lambda$lambda_40(closure$binaryConditionOperatorGetter, closure$binaryConditionOperatorRunner) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(closure$binaryConditionOperatorGetter(getStandardCompiler$lambda$lambda$lambda$lambda_48));
      $receiver.run.invoke_ru8m1r$(closure$binaryConditionOperatorRunner(getStandardCompiler$lambda$lambda$lambda$lambda_49));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$codeCenter, closure$id, this$) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeCenter.head);
      $receiver.line_3pad5q$(plus_1(plus_1(this$.not_pdl1vz$('v' + closure$id + ' = '), closure$codeCenter.body), this$.not_pdl1vz$(';')));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$codeRight, closure$id, this$) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeRight.head);
      $receiver.line_3pad5q$(plus_1(plus_1(this$.not_pdl1vz$('v' + closure$id + ' = '), closure$codeRight.body), this$.not_pdl1vz$(';')));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_19(closure$codeLeft, closure$id, this$, closure$codeCenter, closure$codeRight) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeLeft.head);
      $receiver.line_3pad5q$(this$.not_pdl1vz$('let v' + closure$id + ';'));
      $receiver.line_3pad5q$(plus_1(plus_1(this$.not_pdl1vz$('if (runtime.toBoolean('), closure$codeLeft.body), this$.not_pdl1vz$(')) {')));
      $receiver.indent_3vmjfp$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$codeCenter, closure$id, this$));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('} else {'));
      $receiver.indent_3vmjfp$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$codeRight, closure$id, this$));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('}'));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_50(closure$context) {
    return function ($receiver) {
      var codeLeft = mustGet($receiver.value.left, closure$context);
      var $this = closure$context.aliases;
      $this.push();
      var result = mustGet($receiver.value.center, closure$context);
      $this.pop();
      var codeCenter = result;
      var $this_0 = closure$context.aliases;
      $this_0.push();
      var result_0 = mustGet($receiver.value.right, closure$context);
      $this_0.pop();
      var codeRight = result_0;
      var id = closure$context.nextId();
      return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_19(codeLeft, id, $receiver, codeCenter, codeRight)), $receiver.not_pdl1vz$('v' + id));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$codeCenter) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeCenter.head);
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$codeRight) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeRight.head);
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_20(closure$codeLeft, this$, closure$codeCenter, closure$codeRight) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeLeft.head);
      $receiver.line_3pad5q$(plus_1(plus_1(this$.not_pdl1vz$('if (runtime.toBoolean('), closure$codeLeft.body), this$.not_pdl1vz$(')) {')));
      $receiver.indent_3vmjfp$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$codeCenter));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('} else {'));
      $receiver.indent_3vmjfp$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$codeRight));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('}'));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_51(closure$context) {
    return function ($receiver) {
      var codeLeft = mustGet($receiver.value.left, closure$context);
      var $this = closure$context.aliases;
      $this.push();
      var result = mustRun($receiver.value.center, closure$context);
      $this.pop();
      var codeCenter = result;
      var $this_0 = closure$context.aliases;
      $this_0.push();
      var result_0 = mustRun($receiver.value.right, closure$context);
      $this_0.pop();
      var codeRight = result_0;
      return new CodeRun(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_20(codeLeft, $receiver, codeCenter, codeRight)));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_41(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_50(closure$context));
      $receiver.run.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_51(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_8(closure$codeLeft, closure$id, this$) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeLeft.head);
      $receiver.line_3pad5q$(plus_1(plus_1(this$.not_pdl1vz$('v' + closure$id + ' = '), closure$codeLeft.body), this$.not_pdl1vz$(';')));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_9(closure$codeRight, closure$id, this$) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeRight.head);
      $receiver.line_3pad5q$(plus_1(plus_1(this$.not_pdl1vz$('v' + closure$id + ' = '), closure$codeRight.body), this$.not_pdl1vz$(';')));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_21(closure$id, this$, closure$codeLeft, closure$codeRight) {
    return function ($receiver) {
      $receiver.line_3pad5q$(this$.not_pdl1vz$('let v' + closure$id + ';'));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('try {'));
      $receiver.indent_3vmjfp$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_8(closure$codeLeft, closure$id, this$));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('} catch (e) {'));
      $receiver.indent_3vmjfp$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_9(closure$codeRight, closure$id, this$));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('}'));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_52(closure$context) {
    return function ($receiver) {
      var codeLeft = mustGet($receiver.value.left, closure$context);
      var $this = closure$context.aliases;
      $this.push();
      var result = mustGet($receiver.value.right, closure$context);
      $this.pop();
      var codeRight = result;
      var id = closure$context.nextId();
      return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_21(id, $receiver, codeLeft, codeRight)), $receiver.not_pdl1vz$('v' + id));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_10(closure$codeLeft) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeLeft.head);
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_11(closure$codeRight) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeRight.head);
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_22(this$, closure$codeLeft, closure$codeRight) {
    return function ($receiver) {
      $receiver.line_3pad5q$(this$.not_pdl1vz$('try {'));
      $receiver.indent_3vmjfp$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_10(closure$codeLeft));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('} catch (e) {'));
      $receiver.indent_3vmjfp$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_11(closure$codeRight));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('}'));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_53(closure$context) {
    return function ($receiver) {
      var codeLeft = mustRun($receiver.value.left, closure$context);
      var $this = closure$context.aliases;
      $this.push();
      var result = mustRun($receiver.value.right, closure$context);
      $this.pop();
      var codeRight = result;
      return new CodeRun(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_22($receiver, codeLeft, codeRight)));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_42(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_52(closure$context));
      $receiver.run.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_53(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$Argument(name, code, location) {
    this.name = name;
    this.code = code;
    this.location = location;
  }
  getStandardCompiler$lambda$lambda$lambda$lambda$Argument.$metadata$ = {kind: Kind_CLASS, simpleName: 'Argument', interfaces: []};
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$argument) {
    return function ($receiver) {
      return CodeGet_init($receiver.not_pdl1vz$(closure$argument.code));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$code, closure$argument, this$) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$code.head);
      $receiver.line_3pad5q$(plus_1(plus_1(this$.not_pdl1vz$(closure$argument.code + ' = '), closure$code.body), this$.not_pdl1vz$(';')));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$argument, this$) {
    return function (code_0) {
      return new CodeRun(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(code_0, closure$argument, this$)));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$argument) {
    return function ($receiver) {
      return new CodeSet(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$argument, $receiver));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$argument) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$argument));
      $receiver.set.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$argument));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_12(closure$codeRight, this$) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeRight.head);
      $receiver.line_3pad5q$(plus_1(plus_1(this$.not_pdl1vz$('return '), closure$codeRight.body), this$.not_pdl1vz$(';')));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_23(closure$idSymbol, closure$label, this$, closure$id, closure$arguments, closure$codeRight) {
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
          accumulator = plus_1(plus_1(left, this$_0.not_pdl1vz$(', ')), right);
        }
        reduceOrNull$result = accumulator;
      }
       while (false);
      $receiver.line_3pad5q$(plus_1(plus_1(tmp$, (tmp$_1 = reduceOrNull$result) != null ? tmp$_1 : package$fl9.zeroLine), this$.not_pdl1vz$(') {')));
      $receiver.indent_3vmjfp$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_12(closure$codeRight, this$));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('}}[v' + closure$idSymbol + '];'));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_54(closure$context) {
    return function ($receiver) {
      var node = $receiver.value.left;
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
      var tmp$;
      loop_label: for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var element = $receiver_0[tmp$];
        var tmp$_0;
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
        if ((tmp$_0 = transform$result) != null) {
          destination.add_11rb$(tmp$_0);
        }}
      var destination_0 = ArrayList_init(collectionSizeOrDefault(destination, 10));
      var tmp$_1;
      tmp$_1 = destination.iterator();
      while (tmp$_1.hasNext()) {
        var item = tmp$_1.next();
        var tmp$_2 = destination_0.add_11rb$;
        var closure$context_0 = closure$context;
        var tmp$_3 = item.first;
        var tmp$_4 = 'v' + closure$context_0.nextId() + '$';
        var tmp$_5 = item.first;
        tmp$_2.call(destination_0, new getStandardCompiler$lambda$lambda$lambda$lambda$Argument(tmp$_3, tmp$_4 + Regex_init('[^a-zA-Z0-9_]').replace_x2uqeu$(tmp$_5, ''), item.second));
      }
      var arguments_0 = destination_0;
      var $this = closure$context.aliases;
      $this.push();
      var closure$context_1 = closure$context;
      var tmp$_6;
      tmp$_6 = arguments_0.iterator();
      while (tmp$_6.hasNext()) {
        var element_0 = tmp$_6.next();
        closure$context_1.aliases.set_yuqcw7$(element_0.name, Alias_init_0(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(element_0)));
      }
      var result = mustGet($receiver.value.right, closure$context_1);
      $this.pop();
      var codeRight = result;
      var id = closure$context.nextId();
      var idSymbol = closure$context.nextId();
      var label = 'ANONYMOUS (EVAL.fl9:' + $receiver.location.row + ',' + $receiver.location.column + ')';
      return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_23(idSymbol, label, $receiver, id, arguments_0, codeRight)), $receiver.not_pdl1vz$('v' + id));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_43(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_54(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_13(closure$id, closure$internalName) {
    return function ($receiver) {
      return CodeGet_init($receiver.not_pdl1vz$('v' + closure$id + '$' + closure$internalName));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$code, closure$id, closure$internalName, this$) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$code.head);
      $receiver.line_3pad5q$(plus_1(plus_1(this$.not_pdl1vz$('v' + closure$id + '$' + closure$internalName + ' = '), closure$code.body), this$.not_pdl1vz$(';')));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$id, closure$internalName, this$) {
    return function (code_0) {
      return new CodeRun(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(code_0, closure$id, closure$internalName, this$)));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_14(closure$id, closure$internalName) {
    return function ($receiver) {
      return new CodeSet(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$id, closure$internalName, $receiver));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_24(closure$id, closure$internalName) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_13(closure$id, closure$internalName));
      $receiver.set.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_14(closure$id, closure$internalName));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_25(closure$id, closure$internalName, this$, closure$codeRight) {
    return function ($receiver) {
      $receiver.line_3pad5q$(this$.not_pdl1vz$('let v' + closure$id + '$' + closure$internalName + ';'));
      $receiver.line_3pe74m$(closure$codeRight.head);
      $receiver.line_3pad5q$(plus_1(plus_1(this$.not_pdl1vz$('v' + closure$id + '$' + closure$internalName + ' = '), closure$codeRight.body), this$.not_pdl1vz$(';')));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_55(closure$context) {
    return function ($receiver) {
      if (equals($receiver.value.left.type, 'identifier')) {
        var name = $receiver.value.left.value;
        var internalName = Regex_init('[^a-zA-Z0-9_]').replace_x2uqeu$(name, '');
        var id = closure$context.nextId();
        closure$context.aliases.set_yuqcw7$(name, Alias_init_0(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_24(id, internalName)));
        var codeRight = mustGet($receiver.value.right, closure$context);
        return new CodeRun(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_25(id, internalName, $receiver, codeRight)));
      } else {
        throw Exception_init('Illegal Operator Argument: ' + $receiver.value.left.type + ' : ' + $receiver.value.right.type);
      }
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_44(closure$context) {
    return function ($receiver) {
      $receiver.run.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_55(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_26(closure$codeRight, closure$id, this$, closure$codeLeft) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeRight.head);
      $receiver.line_3pad5q$(plus_1(plus_1(this$.not_pdl1vz$('const v' + closure$id + ' = '), closure$codeRight.body), this$.not_pdl1vz$(';')));
      $receiver.line_3pe74m$(closure$codeLeft.head);
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_56(closure$context) {
    return function ($receiver) {
      var id = closure$context.nextId();
      var codeRight = mustGet($receiver.value.right, closure$context);
      var codeLeft = mustSet($receiver.value.left, closure$context).consumer(CodeGet_init($receiver.not_pdl1vz$('v' + id)));
      return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_26(codeRight, id, $receiver, codeLeft)), $receiver.not_pdl1vz$('v' + id));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_57(closure$context) {
    return function ($receiver) {
      return mustSet($receiver.value.left, closure$context).consumer(mustGet($receiver.value.right, closure$context));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_15(closure$key, this$, closure$codeRight) {
    return function (consumer) {
      consumer(CodeGet_init(times(JSON.stringify(closure$key), this$.value.left.location)), closure$codeRight);
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_27(closure$codeLeft, closure$codeRight) {
    return function (consumer) {
      consumer(closure$codeLeft, closure$codeRight);
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_58(closure$context) {
    return function ($receiver) {
      var $receiver_0 = $receiver.value.left;
      var token = identifier;
      if (isType($receiver_0, token)) {
        var closure$context_0 = closure$context;
        var key = $receiver_0.value;
        var codeRight = mustGet($receiver.value.right, closure$context_0);
        return new CodeObjectInit(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_15(key, $receiver, codeRight));
      }if (isType($receiver.value.left, round)) {
        var $this = closure$context.aliases;
        $this.push();
        var result = mustGet($receiver.value.left, closure$context);
        $this.pop();
        var codeLeft = result;
        var codeRight_0 = mustGet($receiver.value.right, closure$context);
        return new CodeObjectInit(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_27(codeLeft, codeRight_0));
      }throw Exception_init('Illegal Operator Argument: ' + $receiver.value.left.type + ' = ' + $receiver.value.right.type);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_45(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_56(closure$context));
      $receiver.run.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_57(closure$context));
      $receiver.objectInit.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_58(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$idArgument) {
    return function ($receiver) {
      return CodeGet_init($receiver.not_pdl1vz$('v' + closure$idArgument));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$code, closure$idArgument, this$) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$code.head);
      $receiver.line_3pad5q$(plus_1(plus_1(this$.not_pdl1vz$('v' + closure$idArgument + ' = '), closure$code.body), this$.not_pdl1vz$(';')));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$idArgument, this$) {
    return function (code_0) {
      return new CodeRun(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(code_0, closure$idArgument, this$)));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$idArgument) {
    return function ($receiver) {
      return new CodeSet(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$idArgument, $receiver));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_16(closure$idArgument) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$idArgument));
      $receiver.set.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$idArgument));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_17(closure$codeRight, this$) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeRight.head);
      $receiver.line_3pad5q$(plus_1(plus_1(this$.not_pdl1vz$('return '), closure$codeRight.body), this$.not_pdl1vz$(';')));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_28(closure$codeLeft, closure$id, this$, closure$idArgument, closure$codeRight) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeLeft.head);
      $receiver.line_3pad5q$(plus_1(plus_1(this$.not_pdl1vz$('const v' + closure$id + ' = runtime.map('), closure$codeLeft.body), this$.not_pdl1vz$(', function(v' + closure$idArgument + ') {')));
      $receiver.indent_3vmjfp$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_17(closure$codeRight, this$));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('});'));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_59(closure$context) {
    return function ($receiver) {
      var codeLeft = mustGet($receiver.value.left, closure$context);
      var idArgument = closure$context.nextId();
      var $this = closure$context.aliases;
      $this.push();
      var closure$context_0 = closure$context;
      closure$context_0.aliases.set_yuqcw7$('_', Alias_init_0(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_16(idArgument)));
      var result = mustGet($receiver.value.right, closure$context_0);
      $this.pop();
      var codeRight = result;
      var id = closure$context.nextId();
      return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_28(codeLeft, id, $receiver, idArgument, codeRight)), $receiver.not_pdl1vz$('v' + id));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$idArgument) {
    return function ($receiver) {
      return CodeGet_init($receiver.not_pdl1vz$('v' + closure$idArgument));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$code, closure$idArgument, this$) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$code.head);
      $receiver.line_3pad5q$(plus_1(plus_1(this$.not_pdl1vz$('v' + closure$idArgument + ' = '), closure$code.body), this$.not_pdl1vz$(';')));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$idArgument, this$) {
    return function (code_0) {
      return new CodeRun(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(code_0, closure$idArgument, this$)));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$idArgument) {
    return function ($receiver) {
      return new CodeSet(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$idArgument, $receiver));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_18(closure$idArgument) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$idArgument));
      $receiver.set.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$idArgument));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_19(closure$idArgument, closure$idArgument2, this$, closure$codeRight) {
    return function ($receiver) {
      $receiver.line_3pad5q$(this$.not_pdl1vz$('let v' + closure$idArgument + ' = v' + closure$idArgument2 + ';'));
      $receiver.line_3pe74m$(closure$codeRight.head);
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_29(closure$codeLeft, closure$idArgument2, this$, closure$idArgument, closure$codeRight) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$codeLeft.head);
      $receiver.line_3pad5q$(plus_1(plus_1(this$.not_pdl1vz$('for (let v' + closure$idArgument2 + ' of runtime.toStream('), closure$codeLeft.body), this$.not_pdl1vz$(')[runtime.symbolStream]()) {')));
      $receiver.indent_3vmjfp$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_19(closure$idArgument, closure$idArgument2, this$, closure$codeRight));
      $receiver.line_3pad5q$(this$.not_pdl1vz$('}'));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_60(closure$context) {
    return function ($receiver) {
      var codeLeft = mustGet($receiver.value.left, closure$context);
      var idArgument = closure$context.nextId();
      var idArgument2 = closure$context.nextId();
      var $this = closure$context.aliases;
      $this.push();
      var closure$context_0 = closure$context;
      closure$context_0.aliases.set_yuqcw7$('_', Alias_init_0(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_18(idArgument)));
      var result = mustRun($receiver.value.right, closure$context_0);
      $this.pop();
      var codeRight = result;
      return new CodeRun(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_29(codeLeft, idArgument2, $receiver, idArgument, codeRight)));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_46(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_59(closure$context));
      $receiver.run.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_60(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_30(closure$codesLeft, closure$codeRight) {
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
  function getStandardCompiler$lambda$lambda$lambda$lambda_61(closure$context) {
    return function ($receiver) {
      var $receiver_0 = slice($receiver.value, new IntRange(0, $receiver.value.length - 2 | 0));
      var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(mustRun(item, closure$context));
      }
      var codesLeft = destination;
      var codeRight = mustGet($receiver.value[$receiver.value.length - 1 | 0], closure$context);
      return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_30(codesLeft, codeRight)), codeRight.body);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_31(closure$codes) {
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
  function getStandardCompiler$lambda$lambda$lambda$lambda_62(closure$context) {
    return function ($receiver) {
      var $receiver_0 = $receiver.value;
      var destination = ArrayList_init($receiver_0.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var item = $receiver_0[tmp$];
        destination.add_11rb$(mustRun(item, closure$context));
      }
      var codes = destination;
      return new CodeRun(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_31(codes)));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_32(closure$codes) {
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
  function getStandardCompiler$lambda$lambda$lambda$lambda_63(closure$context) {
    return function ($receiver) {
      var $receiver_0 = $receiver.value;
      var destination = ArrayList_init($receiver_0.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var item = $receiver_0[tmp$];
        destination.add_11rb$(mustArrayInit(item, closure$context));
      }
      var codes = destination;
      return new CodeArrayInit(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_32(codes));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_33(closure$codes) {
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
  function getStandardCompiler$lambda$lambda$lambda$lambda_64(closure$context) {
    return function ($receiver) {
      var $receiver_0 = $receiver.value;
      var destination = ArrayList_init($receiver_0.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var item = $receiver_0[tmp$];
        destination.add_11rb$(mustObjectInit(item, closure$context));
      }
      var codes = destination;
      return new CodeObjectInit(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_33(codes));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_47(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_61(closure$context));
      $receiver.run.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_62(closure$context));
      $receiver.arrayInit.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_63(closure$context));
      $receiver.objectInit.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_64(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_65($receiver) {
    return CodeGet_init($receiver.not_pdl1vz$('([1, 2, 3])'));
  }
  function getStandardCompiler$lambda$lambda$lambda_48($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_65);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_66($receiver) {
    return CodeGet_init($receiver.not_pdl1vz$('(a => a * 20)'));
  }
  function getStandardCompiler$lambda$lambda$lambda_49($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_66);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_67($receiver) {
    return CodeGet_init($receiver.not_pdl1vz$('({m: a => a * 20})'));
  }
  function getStandardCompiler$lambda$lambda$lambda_50($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_67);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_68($receiver) {
    return CodeGet_init($receiver.not_pdl1vz$('(Math.PI)'));
  }
  function getStandardCompiler$lambda$lambda$lambda_51($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_68);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_69($receiver) {
    return CodeGet_init($receiver.not_pdl1vz$('(Math.sin)'));
  }
  function getStandardCompiler$lambda$lambda$lambda_52($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_69);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_70($receiver) {
    return CodeGet_init($receiver.not_pdl1vz$('((a, b) => Math.log(a) / Math.log(b))'));
  }
  function getStandardCompiler$lambda$lambda$lambda_53($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_70);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_71($receiver) {
    return CodeGet_init($receiver.not_pdl1vz$('(array => code => array.map(item => code(item)))'));
  }
  function getStandardCompiler$lambda$lambda$lambda_54($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_71);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_72($receiver) {
    return CodeGet_init($receiver.not_pdl1vz$('true'));
  }
  function getStandardCompiler$lambda$lambda$lambda_55($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_72);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_73($receiver) {
    return CodeGet_init($receiver.not_pdl1vz$('false'));
  }
  function getStandardCompiler$lambda$lambda$lambda_56($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_73);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_74($receiver) {
    return CodeGet_init($receiver.not_pdl1vz$('null'));
  }
  function getStandardCompiler$lambda$lambda$lambda_57($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_74);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_75($receiver) {
    return CodeGet_init($receiver.not_pdl1vz$('NaN'));
  }
  function getStandardCompiler$lambda$lambda$lambda_58($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_75);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_76($receiver) {
    return CodeGet_init($receiver.not_pdl1vz$('Infinity'));
  }
  function getStandardCompiler$lambda$lambda$lambda_59($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_76);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_77($receiver) {
    return CodeGet_init($receiver.not_pdl1vz$('undefined'));
  }
  function getStandardCompiler$lambda$lambda$lambda_60($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_77);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_78($receiver) {
    return CodeGet_init($receiver.not_pdl1vz$('(message => { throw new Error(runtime.toString(message)); })'));
  }
  function getStandardCompiler$lambda$lambda$lambda_61($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_78);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_79($receiver) {
    return CodeGet_init($receiver.not_pdl1vz$('(runtime.symbolToString)'));
  }
  function getStandardCompiler$lambda$lambda$lambda_62($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_79);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_80($receiver) {
    return CodeGet_init($receiver.not_pdl1vz$('(runtime.symbolAdd)'));
  }
  function getStandardCompiler$lambda$lambda$lambda_63($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_80);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_81($receiver) {
    return CodeGet_init($receiver.not_pdl1vz$('(runtime.symbolSubtract)'));
  }
  function getStandardCompiler$lambda$lambda$lambda_64($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_81);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_82($receiver) {
    return CodeGet_init($receiver.not_pdl1vz$('(runtime.symbolMultiply)'));
  }
  function getStandardCompiler$lambda$lambda$lambda_65($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_82);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_83($receiver) {
    return CodeGet_init($receiver.not_pdl1vz$('(runtime.symbolDivide)'));
  }
  function getStandardCompiler$lambda$lambda$lambda_66($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_83);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_84($receiver) {
    return CodeGet_init($receiver.not_pdl1vz$('(runtime.symbolStream)'));
  }
  function getStandardCompiler$lambda$lambda$lambda_67($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_84);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda_68(closure$code) {
    return function ($receiver) {
      $receiver.line_3pad5q$(times('"use strict";', nullLocation));
      $receiver.line_3pe74m$(closure$code.head);
      $receiver.line_3pad5q$(plus_1(plus_1(times('return ', nullLocation), closure$code.body), times(';', nullLocation)));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda(closure$code) {
    return function ($receiver) {
      $receiver.line_3pad5q$(times('(function(runtime) {', nullLocation));
      $receiver.indent_3vmjfp$(getStandardCompiler$lambda$lambda$lambda_68(closure$code));
      $receiver.line_3pad5q$(times('})', nullLocation));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_69(sourcedString) {
    return sourcedString.string;
  }
  function getStandardCompiler$lambda$lambda_0(sourcedLine) {
    return joinToString(sourcedLine.sourcesStrings, '', void 0, void 0, void 0, void 0, getStandardCompiler$lambda$lambda$lambda_69) + '\n';
  }
  function getStandardCompiler$lambda(nodeRoot) {
    var context = new Context();
    var $receiver = context.operators;
    $receiver.invoke_rm9vxy$(void_0, getStandardCompiler$lambda$lambda$lambda);
    $receiver.invoke_rm9vxy$(number, getStandardCompiler$lambda$lambda$lambda_0);
    $receiver.invoke_rm9vxy$(string, getStandardCompiler$lambda$lambda$lambda_1);
    $receiver.invoke_rm9vxy$(join, getStandardCompiler$lambda$lambda$lambda_2(context));
    $receiver.invoke_rm9vxy$(identifier, getStandardCompiler$lambda$lambda$lambda_3(context));
    $receiver.invoke_rm9vxy$(empty_round, getStandardCompiler$lambda$lambda$lambda_4);
    $receiver.invoke_rm9vxy$(round, getStandardCompiler$lambda$lambda$lambda_5(context));
    $receiver.invoke_rm9vxy$(empty_square, getStandardCompiler$lambda$lambda$lambda_6(context));
    $receiver.invoke_rm9vxy$(square, getStandardCompiler$lambda$lambda$lambda_7(context));
    $receiver.invoke_rm9vxy$(empty_curly, getStandardCompiler$lambda$lambda$lambda_8(context));
    $receiver.invoke_rm9vxy$(curly, getStandardCompiler$lambda$lambda$lambda_9(context));
    $receiver.invoke_rm9vxy$(empty_dollar_round, getStandardCompiler$lambda$lambda$lambda_10);
    $receiver.invoke_rm9vxy$(dollar_round, getStandardCompiler$lambda$lambda$lambda_11(context));
    $receiver.invoke_rm9vxy$(period, getStandardCompiler$lambda$lambda$lambda_12(context));
    $receiver.invoke_rm9vxy$(right_empty_square, getStandardCompiler$lambda$lambda$lambda_13(context));
    $receiver.invoke_rm9vxy$(right_square, getStandardCompiler$lambda$lambda$lambda_14(context));
    $receiver.invoke_rm9vxy$(right_round, getStandardCompiler$lambda$lambda$lambda_15(context));
    var leftUnaryOperatorGetter = getStandardCompiler$lambda$lambda$leftUnaryOperatorGetter(context);
    $receiver.invoke_rm9vxy$(left_plus, getStandardCompiler$lambda$lambda$lambda_16(leftUnaryOperatorGetter));
    $receiver.invoke_rm9vxy$(left_minus, getStandardCompiler$lambda$lambda$lambda_17(leftUnaryOperatorGetter));
    $receiver.invoke_rm9vxy$(left_ampersand, getStandardCompiler$lambda$lambda$lambda_18(leftUnaryOperatorGetter));
    $receiver.invoke_rm9vxy$(left_question, getStandardCompiler$lambda$lambda$lambda_19(leftUnaryOperatorGetter));
    $receiver.invoke_rm9vxy$(left_exclamation, getStandardCompiler$lambda$lambda$lambda_20(leftUnaryOperatorGetter));
    $receiver.invoke_rm9vxy$(left_dollar_number, getStandardCompiler$lambda$lambda$lambda_21(leftUnaryOperatorGetter));
    var binaryOperatorGetter = getStandardCompiler$lambda$lambda$binaryOperatorGetter(context);
    $receiver.invoke_rm9vxy$(asterisk, getStandardCompiler$lambda$lambda$lambda_22(binaryOperatorGetter));
    $receiver.invoke_rm9vxy$(slash, getStandardCompiler$lambda$lambda$lambda_23(binaryOperatorGetter));
    $receiver.invoke_rm9vxy$(plus_2, getStandardCompiler$lambda$lambda$lambda_24(binaryOperatorGetter));
    $receiver.invoke_rm9vxy$(minus, getStandardCompiler$lambda$lambda$lambda_25(binaryOperatorGetter));
    $receiver.invoke_rm9vxy$(period_period, getStandardCompiler$lambda$lambda$lambda_26(binaryOperatorGetter));
    $receiver.invoke_rm9vxy$(tilde, getStandardCompiler$lambda$lambda$lambda_27(binaryOperatorGetter));
    $receiver.invoke_rm9vxy$(comparison, getStandardCompiler$lambda$lambda$lambda_28(context));
    $receiver.invoke_rm9vxy$(equal_equal, getStandardCompiler$lambda$lambda$lambda_29);
    $receiver.invoke_rm9vxy$(exclamation_equal, getStandardCompiler$lambda$lambda$lambda_30);
    $receiver.invoke_rm9vxy$(equal_equal_equal, getStandardCompiler$lambda$lambda$lambda_31);
    $receiver.invoke_rm9vxy$(exclamation_equal_equal, getStandardCompiler$lambda$lambda$lambda_32);
    $receiver.invoke_rm9vxy$(greater, getStandardCompiler$lambda$lambda$lambda_33);
    $receiver.invoke_rm9vxy$(less, getStandardCompiler$lambda$lambda$lambda_34);
    $receiver.invoke_rm9vxy$(greater_equal, getStandardCompiler$lambda$lambda$lambda_35);
    $receiver.invoke_rm9vxy$(less_equal, getStandardCompiler$lambda$lambda$lambda_36);
    var binaryConditionOperatorGetter = getStandardCompiler$lambda$lambda$binaryConditionOperatorGetter(context);
    var binaryConditionOperatorRunner = getStandardCompiler$lambda$lambda$binaryConditionOperatorRunner(context);
    $receiver.invoke_rm9vxy$(ampersand_ampersand, getStandardCompiler$lambda$lambda$lambda_37(binaryConditionOperatorGetter, binaryConditionOperatorRunner));
    $receiver.invoke_rm9vxy$(pipe_pipe, getStandardCompiler$lambda$lambda$lambda_38(binaryConditionOperatorGetter, binaryConditionOperatorRunner));
    $receiver.invoke_rm9vxy$(question_colon, getStandardCompiler$lambda$lambda$lambda_39(binaryConditionOperatorGetter, binaryConditionOperatorRunner));
    $receiver.invoke_rm9vxy$(exclamation_colon, getStandardCompiler$lambda$lambda$lambda_40(binaryConditionOperatorGetter, binaryConditionOperatorRunner));
    $receiver.invoke_rm9vxy$(ternary_question_colon, getStandardCompiler$lambda$lambda$lambda_41(context));
    $receiver.invoke_rm9vxy$(exclamation_question, getStandardCompiler$lambda$lambda$lambda_42(context));
    $receiver.invoke_rm9vxy$(minus_greater, getStandardCompiler$lambda$lambda$lambda_43(context));
    $receiver.invoke_rm9vxy$(colon, getStandardCompiler$lambda$lambda$lambda_44(context));
    $receiver.invoke_rm9vxy$(equal, getStandardCompiler$lambda$lambda$lambda_45(context));
    $receiver.invoke_rm9vxy$(pipe, getStandardCompiler$lambda$lambda$lambda_46(context));
    $receiver.invoke_rm9vxy$(semicolon, getStandardCompiler$lambda$lambda$lambda_47(context));
    var $receiver_0 = context.aliases;
    $receiver_0.invoke_2lqwj7$('A', getStandardCompiler$lambda$lambda$lambda_48);
    $receiver_0.invoke_2lqwj7$('F', getStandardCompiler$lambda$lambda$lambda_49);
    $receiver_0.invoke_2lqwj7$('O', getStandardCompiler$lambda$lambda$lambda_50);
    $receiver_0.invoke_2lqwj7$('PI', getStandardCompiler$lambda$lambda$lambda_51);
    $receiver_0.invoke_2lqwj7$('SIN', getStandardCompiler$lambda$lambda$lambda_52);
    $receiver_0.invoke_2lqwj7$('LOG', getStandardCompiler$lambda$lambda$lambda_53);
    $receiver_0.invoke_2lqwj7$('MAP', getStandardCompiler$lambda$lambda$lambda_54);
    $receiver_0.invoke_2lqwj7$('TRUE', getStandardCompiler$lambda$lambda$lambda_55);
    $receiver_0.invoke_2lqwj7$('FALSE', getStandardCompiler$lambda$lambda$lambda_56);
    $receiver_0.invoke_2lqwj7$('NULL', getStandardCompiler$lambda$lambda$lambda_57);
    $receiver_0.invoke_2lqwj7$('NAN', getStandardCompiler$lambda$lambda$lambda_58);
    $receiver_0.invoke_2lqwj7$('INFINITY', getStandardCompiler$lambda$lambda$lambda_59);
    $receiver_0.invoke_2lqwj7$('UNDEFINED', getStandardCompiler$lambda$lambda$lambda_60);
    $receiver_0.invoke_2lqwj7$('ERROR', getStandardCompiler$lambda$lambda$lambda_61);
    $receiver_0.invoke_2lqwj7$('OPERATOR_TO_STRING', getStandardCompiler$lambda$lambda$lambda_62);
    $receiver_0.invoke_2lqwj7$('OPERATOR_ADD', getStandardCompiler$lambda$lambda$lambda_63);
    $receiver_0.invoke_2lqwj7$('OPERATOR_SUBTRACT', getStandardCompiler$lambda$lambda$lambda_64);
    $receiver_0.invoke_2lqwj7$('OPERATOR_MULTIPLY', getStandardCompiler$lambda$lambda$lambda_65);
    $receiver_0.invoke_2lqwj7$('OPERATOR_DIVIDE', getStandardCompiler$lambda$lambda$lambda_66);
    $receiver_0.invoke_2lqwj7$('OPERATOR_STREAM', getStandardCompiler$lambda$lambda$lambda_67);
    var code_0 = mustGet(nodeRoot, context);
    var sourcedFile = code(getStandardCompiler$lambda$lambda(code_0));
    return joinToString(sourcedFile.sourcedLines, '', void 0, void 0, void 0, void 0, getStandardCompiler$lambda$lambda_0);
  }
  function getStandardCompiler() {
    return getStandardCompiler$lambda;
  }
  function CodeGet(head, body) {
    this.head = head;
    this.body = body;
  }
  CodeGet.$metadata$ = {kind: Kind_CLASS, simpleName: 'CodeGet', interfaces: []};
  function CodeGet_init(body, $this) {
    $this = $this || Object.create(CodeGet.prototype);
    CodeGet.call($this, new SourcedFile(emptyList()), body);
    return $this;
  }
  function CodeRun(head) {
    this.head = head;
  }
  CodeRun.$metadata$ = {kind: Kind_CLASS, simpleName: 'CodeRun', interfaces: []};
  function CodeRun_init($this) {
    $this = $this || Object.create(CodeRun.prototype);
    CodeRun.call($this, new SourcedFile(emptyList()));
    return $this;
  }
  function CodeSet(consumer) {
    this.consumer = consumer;
  }
  CodeSet.$metadata$ = {kind: Kind_CLASS, simpleName: 'CodeSet', interfaces: []};
  function CodeArrayInit(generator) {
    this.generator = generator;
  }
  CodeArrayInit.$metadata$ = {kind: Kind_CLASS, simpleName: 'CodeArrayInit', interfaces: []};
  function CodeObjectInit(generator) {
    this.generator = generator;
  }
  CodeObjectInit.$metadata$ = {kind: Kind_CLASS, simpleName: 'CodeObjectInit', interfaces: []};
  function CodeCompare(comparator) {
    this.comparator = comparator;
  }
  CodeCompare.$metadata$ = {kind: Kind_CLASS, simpleName: 'CodeCompare', interfaces: []};
  function DomainSlot() {
    this.value_0 = null;
  }
  DomainSlot.prototype.invoke_ru8m1r$ = function (value) {
    this.value_0 = value;
  };
  DomainSlot.prototype.invoke_11rb$ = function (argument) {
    var tmp$;
    return (tmp$ = this.value_0) != null ? tmp$(argument) : null;
  };
  DomainSlot.$metadata$ = {kind: Kind_CLASS, simpleName: 'DomainSlot', interfaces: []};
  function OperatorCompilerArgument(context, value, location) {
    this.context = context;
    this.value = value;
    this.location = location;
  }
  OperatorCompilerArgument.prototype.not_pdl1vz$ = function ($receiver) {
    if (contains($receiver, '\n'))
      throw Exception_init('SourcedString cannot have line breaks');
    return new SourcedLine(listOf(new SourcedString($receiver, this.location)));
  };
  OperatorCompilerArgument.$metadata$ = {kind: Kind_CLASS, simpleName: 'OperatorCompilerArgument', interfaces: []};
  function Operator() {
    this.get = new DomainSlot();
    this.run = new DomainSlot();
    this.set = new DomainSlot();
    this.arrayInit = new DomainSlot();
    this.objectInit = new DomainSlot();
    this.compare = new DomainSlot();
  }
  Operator.$metadata$ = {kind: Kind_CLASS, simpleName: 'Operator', interfaces: []};
  function Operator_init($this) {
    $this = $this || Object.create(Operator.prototype);
    Operator.call($this);
    return $this;
  }
  function Operator_init_0(block, $this) {
    $this = $this || Object.create(Operator.prototype);
    Operator.call($this);
    block($this);
    return $this;
  }
  function OperatorRegistry() {
    Registry.call(this);
  }
  OperatorRegistry.prototype.invoke_rm9vxy$ = function ($receiver, block) {
    var operator = Operator_init();
    this.set_yuqcw7$($receiver.type, operator);
    block(operator);
  };
  OperatorRegistry.$metadata$ = {kind: Kind_CLASS, simpleName: 'OperatorRegistry', interfaces: [Registry]};
  function AliasCompilerArgument(context, location) {
    this.context = context;
    this.location = location;
  }
  AliasCompilerArgument.prototype.not_pdl1vz$ = function ($receiver) {
    if (contains($receiver, '\n'))
      throw Exception_init('SourcedString cannot have line breaks');
    return new SourcedLine(listOf(new SourcedString($receiver, this.location)));
  };
  AliasCompilerArgument.$metadata$ = {kind: Kind_CLASS, simpleName: 'AliasCompilerArgument', interfaces: []};
  function Alias() {
    this.get = new DomainSlot();
    this.run = new DomainSlot();
    this.set = new DomainSlot();
    this.arrayInit = new DomainSlot();
    this.objectInit = new DomainSlot();
    this.compare = new DomainSlot();
  }
  Alias.$metadata$ = {kind: Kind_CLASS, simpleName: 'Alias', interfaces: []};
  function Alias_init($this) {
    $this = $this || Object.create(Alias.prototype);
    Alias.call($this);
    return $this;
  }
  function Alias_init_0(block, $this) {
    $this = $this || Object.create(Alias.prototype);
    Alias.call($this);
    block($this);
    return $this;
  }
  function AliasRegistry() {
    FramedRegistry.call(this);
  }
  AliasRegistry.prototype.invoke_2lqwj7$ = function ($receiver, block) {
    var alias = Alias_init();
    this.set_yuqcw7$($receiver, alias);
    block(alias);
  };
  AliasRegistry.$metadata$ = {kind: Kind_CLASS, simpleName: 'AliasRegistry', interfaces: [FramedRegistry]};
  function Context() {
    this.operators = new OperatorRegistry();
    this.aliases = new AliasRegistry();
    this.nextId_0 = 0;
  }
  Context.prototype.nextId = function () {
    var nextId2 = this.nextId_0;
    this.nextId_0 = this.nextId_0 + 1 | 0;
    return nextId2;
  };
  Context.$metadata$ = {kind: Kind_CLASS, simpleName: 'Context', interfaces: []};
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
  function isType($receiver, token) {
    return equals($receiver.type, token.type);
  }
  var maybe = defineInlineFunction('fl9_compiler.fl9.maybe_v3bpf4$', wrapFunction(function () {
    var isType = _.fl9.isType_8kgrp5$;
    return function ($receiver, token, block) {
      if (isType($receiver, token)) {
        block($receiver.value);
      }};
  }));
  function mustGet($receiver, context) {
    var tmp$;
    tmp$ = mayGet($receiver, context);
    if (tmp$ == null) {
      throw Exception_init('Unknown Operator: ' + $receiver.type + '/get');
    }return tmp$;
  }
  function mustRun($receiver, context) {
    var tmp$;
    tmp$ = mayRun($receiver, context);
    if (tmp$ == null) {
      throw Exception_init('Unknown Operator: ' + $receiver.type + '/run');
    }return tmp$;
  }
  function mustSet($receiver, context) {
    var tmp$;
    tmp$ = maySet($receiver, context);
    if (tmp$ == null) {
      throw Exception_init('Unknown Operator: ' + $receiver.type + '/set');
    }return tmp$;
  }
  function mustArrayInit($receiver, context) {
    var tmp$;
    tmp$ = mayArrayInit($receiver, context);
    if (tmp$ == null) {
      throw Exception_init('Unknown Operator: ' + $receiver.type + '/arrayInit');
    }return tmp$;
  }
  function mustObjectInit($receiver, context) {
    var tmp$;
    tmp$ = mayObjectInit($receiver, context);
    if (tmp$ == null) {
      throw Exception_init('Unknown Operator: ' + $receiver.type + '/objectInit');
    }return tmp$;
  }
  function mustCompare($receiver, context) {
    var tmp$;
    tmp$ = mayCompare($receiver, context);
    if (tmp$ == null) {
      throw Exception_init('Unknown Operator: ' + $receiver.type + '/compare');
    }return tmp$;
  }
  function mayGet($receiver, context) {
    var tmp$;
    return (tmp$ = context.operators.get_61zpoe$($receiver.type)) != null ? tmp$.get.invoke_11rb$(new OperatorCompilerArgument(context, $receiver.value, $receiver.location)) : null;
  }
  function mayRun$lambda$lambda(closure$it) {
    return function ($receiver) {
      $receiver.line_3pe74m$(closure$it.head);
      return Unit;
    };
  }
  function mayRun($receiver, context) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$ = context.operators.get_61zpoe$($receiver.type)) != null ? tmp$.run.invoke_11rb$(new OperatorCompilerArgument(context, $receiver.value, $receiver.location)) : null) != null ? tmp$_1 : (tmp$_0 = mayGet($receiver, context)) != null ? new CodeRun(code(mayRun$lambda$lambda(tmp$_0))) : null;
  }
  function maySet($receiver, context) {
    var tmp$;
    return (tmp$ = context.operators.get_61zpoe$($receiver.type)) != null ? tmp$.set.invoke_11rb$(new OperatorCompilerArgument(context, $receiver.value, $receiver.location)) : null;
  }
  function mayArrayInit$lambda$lambda(closure$it) {
    return function (consumer) {
      consumer(closure$it);
      return Unit;
    };
  }
  function mayArrayInit($receiver, context) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$ = context.operators.get_61zpoe$($receiver.type)) != null ? tmp$.arrayInit.invoke_11rb$(new OperatorCompilerArgument(context, $receiver.value, $receiver.location)) : null) != null ? tmp$_1 : (tmp$_0 = mayGet($receiver, context)) != null ? new CodeArrayInit(mayArrayInit$lambda$lambda(tmp$_0)) : null;
  }
  function mayObjectInit($receiver, context) {
    var tmp$;
    return (tmp$ = context.operators.get_61zpoe$($receiver.type)) != null ? tmp$.objectInit.invoke_11rb$(new OperatorCompilerArgument(context, $receiver.value, $receiver.location)) : null;
  }
  function mayCompare($receiver, context) {
    var tmp$;
    return (tmp$ = context.operators.get_61zpoe$($receiver.type)) != null ? tmp$.compare.invoke_11rb$(new OperatorCompilerArgument(context, $receiver.value, $receiver.location)) : null;
  }
  function Registry() {
    this.map_y0wces$_0 = LinkedHashMap_init();
  }
  Registry.prototype.get_61zpoe$ = function (key) {
    return this.map_y0wces$_0.get_11rb$(key);
  };
  Registry.prototype.set_yuqcw7$ = function (key, value) {
    this.map_y0wces$_0.put_xwzc9p$(key, value);
  };
  Registry.$metadata$ = {kind: Kind_CLASS, simpleName: 'Registry', interfaces: []};
  function Frame() {
    this.parent = null;
    this.map_0 = LinkedHashMap_init();
  }
  Frame.prototype.get_11rb$ = function (key) {
    var tmp$, tmp$_0;
    return (tmp$_0 = this.map_0.get_11rb$(key)) != null ? tmp$_0 : (tmp$ = this.parent) != null ? tmp$.get_11rb$(key) : null;
  };
  Frame.prototype.set_xwzc9p$ = function (key, value) {
    this.map_0.put_xwzc9p$(key, value);
  };
  Frame.$metadata$ = {kind: Kind_CLASS, simpleName: 'Frame', interfaces: []};
  function Frame_init($this) {
    $this = $this || Object.create(Frame.prototype);
    Frame.call($this);
    $this.parent = null;
    return $this;
  }
  function Frame_init_0(parent, $this) {
    $this = $this || Object.create(Frame.prototype);
    Frame.call($this);
    $this.parent = parent;
    return $this;
  }
  function FramedRegistry() {
    this.frame_haar5g$_0 = Frame_init();
  }
  FramedRegistry.prototype.get_61zpoe$ = function (key) {
    return this.frame_haar5g$_0.get_11rb$(key);
  };
  FramedRegistry.prototype.set_yuqcw7$ = function (key, value) {
    this.frame_haar5g$_0.set_xwzc9p$(key, value);
  };
  FramedRegistry.prototype.push = function () {
    this.frame_haar5g$_0 = Frame_init_0(this.frame_haar5g$_0);
  };
  FramedRegistry.prototype.pop = function () {
    var tmp$;
    tmp$ = this.frame_haar5g$_0.parent;
    if (tmp$ == null) {
      throw Error_init('Null parent access');
    }this.frame_haar5g$_0 = tmp$;
  };
  FramedRegistry.prototype.stack_klfg04$ = defineInlineFunction('fl9_compiler.fl9.FramedRegistry.stack_klfg04$', function (block) {
    this.push();
    var result = block();
    this.pop();
    return result;
  });
  FramedRegistry.$metadata$ = {kind: Kind_CLASS, simpleName: 'FramedRegistry', interfaces: []};
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
  function plus_1($receiver, right) {
    return new SourcedLine(plus_0($receiver.sourcesStrings, right.sourcesStrings));
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
      this.line_3pad5q$(plus_1(times('  ', nullLocation), element));
    }
  };
  CodeScope.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'CodeScope', interfaces: []};
  function Token(type) {
    this.type = type;
  }
  Token.$metadata$ = {kind: Kind_CLASS, simpleName: 'Token', interfaces: []};
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
  var round;
  var empty_square;
  var square;
  var empty_curly;
  var curly;
  var empty_dollar_round;
  var dollar_round;
  var empty_dollar_square;
  var dollar_square;
  var empty_dollar_curly;
  var dollar_curly;
  var period;
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
  var asterisk;
  var slash;
  var plus_2;
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
  package$fl9.getStandardCompiler = getStandardCompiler;
  package$fl9.CodeGet_init_3pad5q$ = CodeGet_init;
  package$fl9.CodeGet = CodeGet;
  package$fl9.CodeRun_init = CodeRun_init;
  package$fl9.CodeRun = CodeRun;
  package$fl9.CodeSet = CodeSet;
  package$fl9.CodeArrayInit = CodeArrayInit;
  package$fl9.CodeObjectInit = CodeObjectInit;
  package$fl9.CodeCompare = CodeCompare;
  package$fl9.DomainSlot = DomainSlot;
  package$fl9.OperatorCompilerArgument = OperatorCompilerArgument;
  package$fl9.Operator_init_287e2$ = Operator_init;
  package$fl9.Operator_init_8esvta$ = Operator_init_0;
  package$fl9.Operator = Operator;
  package$fl9.OperatorRegistry = OperatorRegistry;
  package$fl9.AliasCompilerArgument = AliasCompilerArgument;
  package$fl9.Alias_init = Alias_init;
  package$fl9.Alias_init_m5ksp0$ = Alias_init_0;
  package$fl9.Alias = Alias;
  package$fl9.AliasRegistry = AliasRegistry;
  package$fl9.Context = Context;
  package$fl9.Node = Node;
  package$fl9.isType_8kgrp5$ = isType;
  package$fl9.maybe_v3bpf4$ = maybe;
  package$fl9.mustGet_tv3sn6$ = mustGet;
  package$fl9.mustRun_tv3sn6$ = mustRun;
  package$fl9.mustSet_tv3sn6$ = mustSet;
  package$fl9.mustArrayInit_tv3sn6$ = mustArrayInit;
  package$fl9.mustObjectInit_tv3sn6$ = mustObjectInit;
  package$fl9.mustCompare_tv3sn6$ = mustCompare;
  package$fl9.mayGet_tv3sn6$ = mayGet;
  package$fl9.mayRun_tv3sn6$ = mayRun;
  package$fl9.maySet_tv3sn6$ = maySet;
  package$fl9.mayArrayInit_tv3sn6$ = mayArrayInit;
  package$fl9.mayObjectInit_tv3sn6$ = mayObjectInit;
  package$fl9.mayCompare_tv3sn6$ = mayCompare;
  package$fl9.Registry = Registry;
  package$fl9.Frame_init_q3lmfv$ = Frame_init;
  package$fl9.Frame_init_s0w92s$ = Frame_init_0;
  package$fl9.Frame = Frame;
  package$fl9.FramedRegistry = FramedRegistry;
  package$fl9.Location = Location;
  Object.defineProperty(package$fl9, 'nullLocation', {get: function () {
    return nullLocation;
  }});
  package$fl9.SourcedString = SourcedString;
  package$fl9.SourcedLine = SourcedLine;
  package$fl9.times_qho2lb$ = times;
  package$fl9.plus_v2wlsb$ = plus_1;
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
  var package$token = package$fl9.token || (package$fl9.token = {});
  package$token.Token = Token;
  package$token.EmptyBracketsArgument = EmptyBracketsArgument;
  package$token.BracketsArgument = BracketsArgument;
  package$token.RightEmptyBracketsArgument = RightEmptyBracketsArgument;
  package$token.RightBracketsArgument = RightBracketsArgument;
  package$token.LeftUnaryOperatorArgument = LeftUnaryOperatorArgument;
  package$token.BinaryOperatorArgument = BinaryOperatorArgument;
  package$token.TernaryOperatorArgument = TernaryOperatorArgument;
  package$token.ComparisonArgument = ComparisonArgument;
  Object.defineProperty(package$token, 'void', {get: function () {
    return void_0;
  }});
  Object.defineProperty(package$token, 'number', {get: function () {
    return number;
  }});
  Object.defineProperty(package$token, 'string', {get: function () {
    return string;
  }});
  Object.defineProperty(package$token, 'join', {get: function () {
    return join;
  }});
  Object.defineProperty(package$token, 'identifier', {get: function () {
    return identifier;
  }});
  Object.defineProperty(package$token, 'empty_round', {get: function () {
    return empty_round;
  }});
  Object.defineProperty(package$token, 'round', {get: function () {
    return round;
  }});
  Object.defineProperty(package$token, 'empty_square', {get: function () {
    return empty_square;
  }});
  Object.defineProperty(package$token, 'square', {get: function () {
    return square;
  }});
  Object.defineProperty(package$token, 'empty_curly', {get: function () {
    return empty_curly;
  }});
  Object.defineProperty(package$token, 'curly', {get: function () {
    return curly;
  }});
  Object.defineProperty(package$token, 'empty_dollar_round', {get: function () {
    return empty_dollar_round;
  }});
  Object.defineProperty(package$token, 'dollar_round', {get: function () {
    return dollar_round;
  }});
  Object.defineProperty(package$token, 'empty_dollar_square', {get: function () {
    return empty_dollar_square;
  }});
  Object.defineProperty(package$token, 'dollar_square', {get: function () {
    return dollar_square;
  }});
  Object.defineProperty(package$token, 'empty_dollar_curly', {get: function () {
    return empty_dollar_curly;
  }});
  Object.defineProperty(package$token, 'dollar_curly', {get: function () {
    return dollar_curly;
  }});
  Object.defineProperty(package$token, 'period', {get: function () {
    return period;
  }});
  Object.defineProperty(package$token, 'right_empty_round', {get: function () {
    return right_empty_round;
  }});
  Object.defineProperty(package$token, 'right_round', {get: function () {
    return right_round;
  }});
  Object.defineProperty(package$token, 'right_empty_square', {get: function () {
    return right_empty_square;
  }});
  Object.defineProperty(package$token, 'right_square', {get: function () {
    return right_square;
  }});
  Object.defineProperty(package$token, 'right_empty_curly', {get: function () {
    return right_empty_curly;
  }});
  Object.defineProperty(package$token, 'right_curly', {get: function () {
    return right_curly;
  }});
  Object.defineProperty(package$token, 'left_plus', {get: function () {
    return left_plus;
  }});
  Object.defineProperty(package$token, 'left_minus', {get: function () {
    return left_minus;
  }});
  Object.defineProperty(package$token, 'left_ampersand', {get: function () {
    return left_ampersand;
  }});
  Object.defineProperty(package$token, 'left_question', {get: function () {
    return left_question;
  }});
  Object.defineProperty(package$token, 'left_exclamation', {get: function () {
    return left_exclamation;
  }});
  Object.defineProperty(package$token, 'left_dollar_number', {get: function () {
    return left_dollar_number;
  }});
  Object.defineProperty(package$token, 'asterisk', {get: function () {
    return asterisk;
  }});
  Object.defineProperty(package$token, 'slash', {get: function () {
    return slash;
  }});
  Object.defineProperty(package$token, 'plus', {get: function () {
    return plus_2;
  }});
  Object.defineProperty(package$token, 'minus', {get: function () {
    return minus;
  }});
  Object.defineProperty(package$token, 'period_period', {get: function () {
    return period_period;
  }});
  Object.defineProperty(package$token, 'tilde', {get: function () {
    return tilde;
  }});
  Object.defineProperty(package$token, 'comparison', {get: function () {
    return comparison;
  }});
  Object.defineProperty(package$token, 'equal_equal_equal', {get: function () {
    return equal_equal_equal;
  }});
  Object.defineProperty(package$token, 'exclamation_equal_equal', {get: function () {
    return exclamation_equal_equal;
  }});
  Object.defineProperty(package$token, 'equal_equal', {get: function () {
    return equal_equal;
  }});
  Object.defineProperty(package$token, 'exclamation_equal', {get: function () {
    return exclamation_equal;
  }});
  Object.defineProperty(package$token, 'greater_equal', {get: function () {
    return greater_equal;
  }});
  Object.defineProperty(package$token, 'less_equal', {get: function () {
    return less_equal;
  }});
  Object.defineProperty(package$token, 'greater', {get: function () {
    return greater;
  }});
  Object.defineProperty(package$token, 'less', {get: function () {
    return less;
  }});
  Object.defineProperty(package$token, 'ampersand_ampersand', {get: function () {
    return ampersand_ampersand;
  }});
  Object.defineProperty(package$token, 'pipe_pipe', {get: function () {
    return pipe_pipe;
  }});
  Object.defineProperty(package$token, 'ternary_question_colon', {get: function () {
    return ternary_question_colon;
  }});
  Object.defineProperty(package$token, 'question_colon', {get: function () {
    return question_colon;
  }});
  Object.defineProperty(package$token, 'exclamation_colon', {get: function () {
    return exclamation_colon;
  }});
  Object.defineProperty(package$token, 'exclamation_question', {get: function () {
    return exclamation_question;
  }});
  Object.defineProperty(package$token, 'comma', {get: function () {
    return comma;
  }});
  Object.defineProperty(package$token, 'minus_greater', {get: function () {
    return minus_greater;
  }});
  Object.defineProperty(package$token, 'equal_greater', {get: function () {
    return equal_greater;
  }});
  Object.defineProperty(package$token, 'colon', {get: function () {
    return colon;
  }});
  Object.defineProperty(package$token, 'equal', {get: function () {
    return equal;
  }});
  Object.defineProperty(package$token, 'pipe', {get: function () {
    return pipe;
  }});
  Object.defineProperty(package$token, 'semicolon', {get: function () {
    return semicolon;
  }});
  code$ObjectLiteral.prototype.line_3pe74m$ = CodeScope.prototype.line_3pe74m$;
  code$ObjectLiteral.prototype.indent_3vmjfp$ = CodeScope.prototype.indent_3vmjfp$;
  nullLocation = new Location(-1, -1);
  zeroLine = new SourcedLine(emptyList());
  zeroFile = new SourcedFile(emptyList());
  void_0 = new Token('void');
  number = new Token('number');
  string = new Token('string');
  join = new Token('join');
  identifier = new Token('identifier');
  empty_round = new Token('empty_round');
  round = new Token('round');
  empty_square = new Token('empty_square');
  square = new Token('square');
  empty_curly = new Token('empty_curly');
  curly = new Token('curly');
  empty_dollar_round = new Token('empty_dollar_round');
  dollar_round = new Token('dollar_round');
  empty_dollar_square = new Token('empty_dollar_square');
  dollar_square = new Token('dollar_square');
  empty_dollar_curly = new Token('empty_dollar_curly');
  dollar_curly = new Token('dollar_curly');
  period = new Token('period');
  right_empty_round = new Token('right_empty_round');
  right_round = new Token('right_round');
  right_empty_square = new Token('right_empty_square');
  right_square = new Token('right_square');
  right_empty_curly = new Token('right_empty_curly');
  right_curly = new Token('right_curly');
  left_plus = new Token('left_plus');
  left_minus = new Token('left_minus');
  left_ampersand = new Token('left_ampersand');
  left_question = new Token('left_question');
  left_exclamation = new Token('left_exclamation');
  left_dollar_number = new Token('left_dollar_number');
  asterisk = new Token('asterisk');
  slash = new Token('slash');
  plus_2 = new Token('plus');
  minus = new Token('minus');
  period_period = new Token('period_period');
  tilde = new Token('tilde');
  comparison = new Token('comparison');
  equal_equal_equal = new Token('equal_equal_equal');
  exclamation_equal_equal = new Token('exclamation_equal_equal');
  equal_equal = new Token('equal_equal');
  exclamation_equal = new Token('exclamation_equal');
  greater_equal = new Token('greater_equal');
  less_equal = new Token('less_equal');
  greater = new Token('greater');
  less = new Token('less');
  ampersand_ampersand = new Token('ampersand_ampersand');
  pipe_pipe = new Token('pipe_pipe');
  ternary_question_colon = new Token('ternary_question_colon');
  question_colon = new Token('question_colon');
  exclamation_colon = new Token('exclamation_colon');
  exclamation_question = new Token('exclamation_question');
  comma = new Token('comma');
  minus_greater = new Token('minus_greater');
  equal_greater = new Token('equal_greater');
  colon = new Token('colon');
  equal = new Token('equal');
  pipe = new Token('pipe');
  semicolon = new Token('semicolon');
  return _;
}));

//# sourceMappingURL=fl9_compiler.js.map

(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'fluorite9'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'fluorite9'.");
    }root.fluorite9 = factory(typeof fluorite9 === 'undefined' ? {} : fluorite9, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var equals = Kotlin.equals;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var Pair = Kotlin.kotlin.Pair;
  var plus = Kotlin.kotlin.collections.plus_qloxvw$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var slice = Kotlin.kotlin.collections.slice_l0m14x$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Error_init = Kotlin.kotlin.Error_init_pdl1vj$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  OperatorRegistry.prototype = Object.create(Registry.prototype);
  OperatorRegistry.prototype.constructor = OperatorRegistry;
  AliasRegistry.prototype = Object.create(FramedRegistry.prototype);
  AliasRegistry.prototype.constructor = AliasRegistry;
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda(it) {
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda($receiver) {
    return new CodeArrayInit(getStandardCompiler$lambda$lambda$lambda$lambda$lambda);
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_0(it) {
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_0($receiver) {
    return new CodeObjectInit(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_0);
  }
  function getStandardCompiler$lambda$lambda$lambda($receiver) {
    $receiver.arrayInit.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda);
    $receiver.objectInit.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_1($receiver) {
    return new CodeGet('', '(' + $receiver.value + ')');
  }
  function getStandardCompiler$lambda$lambda$lambda_0($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_1);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_2($receiver) {
    return new CodeGet('', JSON.stringify($receiver.value));
  }
  function getStandardCompiler$lambda$lambda$lambda_1($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_2);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda(it) {
    return '$' + '{runtime.toString(' + it.body + ')}';
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_1(closure$codes, closure$id) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$codes.v.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        $receiver.not_pdl1vz$(element.head);
      }
      $receiver.not_pdl1vz$('const v' + closure$id + ' = `' + joinToString(closure$codes.v, '', void 0, void 0, void 0, void 0, getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda) + '`;' + '\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_3(closure$context) {
    return function ($receiver) {
      var $receiver_0 = $receiver.value;
      var destination = ArrayList_init($receiver_0.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var item = $receiver_0[tmp$];
        destination.add_11rb$(mustGet(item, closure$context));
      }
      var codes = {v: destination};
      var id = closure$context.nextId();
      return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_1(codes, id)), 'v' + id);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_2(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_3(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_4(closure$context) {
    return function ($receiver) {
      var tmp$, tmp$_0, tmp$_1;
      tmp$_1 = (tmp$_0 = (tmp$ = closure$context.aliases.get_61zpoe$($receiver.value)) != null ? tmp$.get : null) != null ? tmp$_0.invoke_11rb$(new AliasCompilerArgument(closure$context)) : null;
      if (tmp$_1 == null) {
        throw Exception_init('Unknown Identifier: ' + $receiver.value);
      }return tmp$_1;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_5(closure$context) {
    return function ($receiver) {
      var tmp$, tmp$_0, tmp$_1;
      tmp$_1 = (tmp$_0 = (tmp$ = closure$context.aliases.get_61zpoe$($receiver.value)) != null ? tmp$.set : null) != null ? tmp$_0.invoke_11rb$(new AliasCompilerArgument(closure$context)) : null;
      if (tmp$_1 == null) {
        throw Exception_init('Unknown Identifier: ' + $receiver.value);
      }return tmp$_1;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_3(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_4(closure$context));
      $receiver.set.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_5(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_6($receiver) {
    return new CodeGet('', '(runtime.empty)');
  }
  function getStandardCompiler$lambda$lambda$lambda_4($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_6);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_7(closure$context) {
    return function ($receiver) {
      var $this = closure$context.aliases;
      $this.push();
      var result = mustGet($receiver.value.main, closure$context);
      $this.pop();
      return result;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_5(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_7(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_2(closure$id) {
    return function ($receiver) {
      $receiver.not_pdl1vz$('const v' + closure$id + ' = [];' + '\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_8(closure$context) {
    return function ($receiver) {
      var id = closure$context.nextId();
      return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_2(id)), 'v' + id);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_6(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_8(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_0(this$, closure$id) {
    return function (code) {
      this$.not_pdl1vz$(code.head);
      this$.not_pdl1vz$('v' + closure$id + '[v' + closure$id + '.length] = ' + code.body + ';' + '\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_3(closure$id, closure$codeMain) {
    return function ($receiver) {
      $receiver.not_pdl1vz$('const v' + closure$id + ' = [];' + '\n');
      closure$codeMain.generator(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver, closure$id));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_9(closure$context) {
    return function ($receiver) {
      var codeMain = mustArrayInit($receiver.value.main, closure$context);
      var id = closure$context.nextId();
      return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_3(id, codeMain)), 'v' + id);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_7(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_9(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_4(closure$id) {
    return function ($receiver) {
      $receiver.not_pdl1vz$('const v' + closure$id + ' = {};' + '\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_10(closure$context) {
    return function ($receiver) {
      var id = closure$context.nextId();
      return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_4(id)), 'v' + id);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_8(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_10(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_1(this$, closure$id) {
    return function (key, code) {
      this$.not_pdl1vz$(code.head);
      this$.not_pdl1vz$('v' + closure$id + '[' + JSON.stringify(key) + '] = ' + code.body + ';' + '\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_5(closure$id, closure$codeMain) {
    return function ($receiver) {
      $receiver.not_pdl1vz$('const v' + closure$id + ' = {};' + '\n');
      closure$codeMain.generator(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver, closure$id));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_11(closure$context) {
    return function ($receiver) {
      var codeMain = mustObjectInit($receiver.value.main, closure$context);
      var id = closure$context.nextId();
      return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_5(id, codeMain)), 'v' + id);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_9(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_11(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_12($receiver) {
    return new CodeGet('', '(runtime.empty)');
  }
  function getStandardCompiler$lambda$lambda$lambda_10($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_12);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_13(closure$context) {
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
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_13(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_6(closure$codeLeft, closure$id, this$) {
    return function ($receiver) {
      $receiver.not_pdl1vz$(closure$codeLeft.head);
      $receiver.not_pdl1vz$('const v' + closure$id + ' = ' + closure$codeLeft.body + '[' + JSON.stringify(this$.value.right.value) + '];' + '\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_14(closure$context) {
    return function ($receiver) {
      if (equals($receiver.value.right.type, 'identifier')) {
        var codeLeft = mustGet($receiver.value.left, closure$context);
        var id = closure$context.nextId();
        return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_6(codeLeft, id, $receiver)), 'v' + id);
      } else {
        throw Exception_init('Illegal Operator Argument: ' + $receiver.value.left.type + ' : ' + $receiver.value.right.type);
      }
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_12(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_14(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_7(closure$codeLeft, closure$id) {
    return function ($receiver) {
      $receiver.not_pdl1vz$(closure$codeLeft.head);
      $receiver.not_pdl1vz$('const v' + closure$id + ' = runtime.apply(' + closure$codeLeft.body + ', []);' + '\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_15(closure$context) {
    return function ($receiver) {
      var codeLeft = mustGet($receiver.value.left, closure$context);
      var id = closure$context.nextId();
      return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_7(codeLeft, id)), 'v' + id);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_13(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_15(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_8(closure$codeLeft, closure$codesMain, closure$id) {
    return function ($receiver) {
      $receiver.not_pdl1vz$(closure$codeLeft.head);
      var tmp$;
      tmp$ = closure$codesMain.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        $receiver.not_pdl1vz$(element.head);
      }
      var tmp$_0 = 'const v' + closure$id + ' = runtime.apply(' + closure$codeLeft.body + ', [';
      var $receiver_0 = closure$codesMain;
      var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_1;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var item = tmp$_1.next();
        destination.add_11rb$(item.body);
      }
      $receiver.not_pdl1vz$(tmp$_0 + joinToString(destination, ', ') + ']);' + '\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_9(closure$codeLeft, closure$codesMain, closure$idObject, closure$codesMainNamed, closure$id) {
    return function ($receiver) {
      $receiver.not_pdl1vz$(closure$codeLeft.head);
      var tmp$;
      tmp$ = closure$codesMain.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        $receiver.not_pdl1vz$(element.head);
      }
      $receiver.not_pdl1vz$('const v' + closure$idObject + ' = {};' + '\n');
      var $receiver_0 = closure$codesMainNamed;
      var tmp$_0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        var closure$idObject_0 = closure$idObject;
        $receiver.not_pdl1vz$(element_0.second.head);
        $receiver.not_pdl1vz$('v' + closure$idObject_0 + '[' + JSON.stringify(element_0.first) + '] = ' + element_0.second.body + ';' + '\n');
      }
      var tmp$_1 = 'const v' + closure$id + ' = runtime.apply(' + closure$codeLeft.body + ', [';
      var $receiver_1 = closure$codesMain;
      var destination = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
      var tmp$_2;
      tmp$_2 = $receiver_1.iterator();
      while (tmp$_2.hasNext()) {
        var item = tmp$_2.next();
        destination.add_11rb$(item.body);
      }
      $receiver.not_pdl1vz$(tmp$_1 + joinToString(plus(destination, 'v' + closure$idObject), ', ') + ']);' + '\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_16(closure$context) {
    return function ($receiver) {
      var codeLeft = mustGet($receiver.value.left, closure$context);
      var nodesMain;
      if (equals($receiver.value.main.type, 'semicolon')) {
        nodesMain = toList($receiver.value.main.value);
      } else {
        nodesMain = listOf($receiver.value.main);
      }
      var codesMain = ArrayList_init_0();
      var codesMainNamed = ArrayList_init_0();
      var namedMode = {v: false};
      var $receiver_0 = nodesMain;
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var closure$context_0 = closure$context;
        if (equals(element.type, 'void')) {
          if (!namedMode.v) {
            var element_0 = new CodeGet('', 'undefined');
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
            var element_1 = new Pair(tmp$_0, result);
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
        return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_8(codeLeft, codesMain, id)), 'v' + id);
      } else {
        var id_0 = closure$context.nextId();
        var idObject = closure$context.nextId();
        return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_9(codeLeft, codesMain, idObject, codesMainNamed, id_0)), 'v' + id_0);
      }
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_14(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_16(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$idArgument) {
    return function ($receiver) {
      return new CodeGet('', 'v' + closure$idArgument);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$code, closure$idArgument) {
    return function ($receiver) {
      $receiver.not_pdl1vz$(closure$code.head);
      $receiver.not_pdl1vz$('v' + closure$idArgument + ' = ' + closure$code.body + ';' + '\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$idArgument) {
    return function (code_0) {
      return new CodeRun(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(code_0, closure$idArgument)));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$idArgument) {
    return function ($receiver) {
      return new CodeSet(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$idArgument));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$idArgument) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$idArgument));
      $receiver.set.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$idArgument));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$codeRight) {
    return function ($receiver) {
      $receiver.not_pdl1vz$(closure$codeRight.head);
      $receiver.not_pdl1vz$('return ' + closure$codeRight.body + ';' + '\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_10(closure$codeLeft, closure$id, closure$idArgument, closure$codeRight) {
    return function ($receiver) {
      $receiver.not_pdl1vz$(closure$codeLeft.head);
      $receiver.not_pdl1vz$('const v' + closure$id + ' = runtime.apply(' + closure$codeLeft.body + ', [function(v' + closure$idArgument + ') {' + '\n');
      $receiver.indent_3vmjfp$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$codeRight));
      $receiver.not_pdl1vz$('}]);\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_17(closure$context) {
    return function ($receiver) {
      var codeLeft = mustGet($receiver.value.left, closure$context);
      var idArgument = closure$context.nextId();
      var $this = closure$context.aliases;
      $this.push();
      var closure$context_0 = closure$context;
      closure$context_0.aliases.set_yuqcw7$('_', Alias_init_0(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_2(idArgument)));
      var result = mustGet($receiver.value.main, closure$context_0);
      $this.pop();
      var codeRight = result;
      var id = closure$context.nextId();
      return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_10(codeLeft, id, idArgument, codeRight)), 'v' + id);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_15(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_17(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$leftUnaryOperatorGetter$lambda$lambda(closure$codeRight, closure$id, closure$function) {
    return function ($receiver) {
      $receiver.not_pdl1vz$(closure$codeRight.head);
      $receiver.not_pdl1vz$('const v' + closure$id + ' = ' + closure$function(closure$codeRight.body) + ';' + '\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$leftUnaryOperatorGetter$lambda(closure$context, closure$function) {
    return function ($receiver) {
      var codeRight = mustGet($receiver.value.right, closure$context);
      var id = closure$context.nextId();
      return new CodeGet(code(getStandardCompiler$lambda$lambda$leftUnaryOperatorGetter$lambda$lambda(codeRight, id, closure$function)), 'v' + id);
    };
  }
  function getStandardCompiler$lambda$lambda$leftUnaryOperatorGetter(closure$context) {
    return function (function_0) {
      return getStandardCompiler$lambda$lambda$leftUnaryOperatorGetter$lambda(closure$context, function_0);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_18(it) {
    return 'runtime.toNumber(' + it + ')';
  }
  function getStandardCompiler$lambda$lambda$lambda_16(closure$leftUnaryOperatorGetter) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(closure$leftUnaryOperatorGetter(getStandardCompiler$lambda$lambda$lambda$lambda_18));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_19(it) {
    return '-runtime.toNumber(' + it + ')';
  }
  function getStandardCompiler$lambda$lambda$lambda_17(closure$leftUnaryOperatorGetter) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(closure$leftUnaryOperatorGetter(getStandardCompiler$lambda$lambda$lambda$lambda_19));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_20(it) {
    return 'runtime.toString(' + it + ')';
  }
  function getStandardCompiler$lambda$lambda$lambda_18(closure$leftUnaryOperatorGetter) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(closure$leftUnaryOperatorGetter(getStandardCompiler$lambda$lambda$lambda$lambda_20));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_21(it) {
    return 'runtime.toBoolean(' + it + ')';
  }
  function getStandardCompiler$lambda$lambda$lambda_19(closure$leftUnaryOperatorGetter) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(closure$leftUnaryOperatorGetter(getStandardCompiler$lambda$lambda$lambda$lambda_21));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_22(it) {
    return '!runtime.toBoolean(' + it + ')';
  }
  function getStandardCompiler$lambda$lambda$lambda_20(closure$leftUnaryOperatorGetter) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(closure$leftUnaryOperatorGetter(getStandardCompiler$lambda$lambda$lambda$lambda_22));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_23(it) {
    return 'runtime.getLength(' + it + ')';
  }
  function getStandardCompiler$lambda$lambda$lambda_21(closure$leftUnaryOperatorGetter) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(closure$leftUnaryOperatorGetter(getStandardCompiler$lambda$lambda$lambda$lambda_23));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_11(closure$codeLeft, closure$codeRight, closure$id) {
    return function ($receiver) {
      $receiver.not_pdl1vz$(closure$codeLeft.head);
      $receiver.not_pdl1vz$(closure$codeRight.head);
      $receiver.not_pdl1vz$('const v' + closure$id + ' = ' + closure$codeLeft.body + ' + ' + closure$codeRight.body + ';' + '\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_24(closure$context) {
    return function ($receiver) {
      var codeLeft = mustGet($receiver.value.left, closure$context);
      var codeRight = mustGet($receiver.value.right, closure$context);
      var id = closure$context.nextId();
      return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_11(codeLeft, codeRight, id)), 'v' + id);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_22(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_24(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_12(closure$codeLeft, closure$codeRight, closure$id) {
    return function ($receiver) {
      $receiver.not_pdl1vz$(closure$codeLeft.head);
      $receiver.not_pdl1vz$(closure$codeRight.head);
      $receiver.not_pdl1vz$('const v' + closure$id + ' = ' + closure$codeLeft.body + ' - ' + closure$codeRight.body + ';' + '\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_25(closure$context) {
    return function ($receiver) {
      var codeLeft = mustGet($receiver.value.left, closure$context);
      var codeRight = mustGet($receiver.value.right, closure$context);
      var id = closure$context.nextId();
      return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_12(codeLeft, codeRight, id)), 'v' + id);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_23(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_25(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_13(closure$codeLeft, closure$codeRight, closure$id) {
    return function ($receiver) {
      $receiver.not_pdl1vz$(closure$codeLeft.head);
      $receiver.not_pdl1vz$(closure$codeRight.head);
      $receiver.not_pdl1vz$('const v' + closure$id + ' = ' + closure$codeLeft.body + ' * ' + closure$codeRight.body + ';' + '\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_26(closure$context) {
    return function ($receiver) {
      var codeLeft = mustGet($receiver.value.left, closure$context);
      var codeRight = mustGet($receiver.value.right, closure$context);
      var id = closure$context.nextId();
      return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_13(codeLeft, codeRight, id)), 'v' + id);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_24(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_26(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_14(closure$codeLeft, closure$codeRight, closure$id) {
    return function ($receiver) {
      $receiver.not_pdl1vz$(closure$codeLeft.head);
      $receiver.not_pdl1vz$(closure$codeRight.head);
      $receiver.not_pdl1vz$('const v' + closure$id + ' = ' + closure$codeLeft.body + ' / ' + closure$codeRight.body + ';' + '\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_27(closure$context) {
    return function ($receiver) {
      var codeLeft = mustGet($receiver.value.left, closure$context);
      var codeRight = mustGet($receiver.value.right, closure$context);
      var id = closure$context.nextId();
      return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_14(codeLeft, codeRight, id)), 'v' + id);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_25(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_27(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$idArgument, closure$internalName) {
    return function ($receiver) {
      return new CodeGet('', 'v' + closure$idArgument + '$' + closure$internalName);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$code, closure$idArgument, closure$internalName) {
    return function ($receiver) {
      $receiver.not_pdl1vz$(closure$code.head);
      $receiver.not_pdl1vz$('v' + closure$idArgument + '$' + closure$internalName + ' = ' + closure$code.body + ';' + '\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$idArgument, closure$internalName) {
    return function (code_0) {
      return new CodeRun(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(code_0, closure$idArgument, closure$internalName)));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$idArgument, closure$internalName) {
    return function ($receiver) {
      return new CodeSet(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$idArgument, closure$internalName));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$idArgument, closure$internalName) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$idArgument, closure$internalName));
      $receiver.set.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$idArgument, closure$internalName));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$codeRight) {
    return function ($receiver) {
      $receiver.not_pdl1vz$(closure$codeRight.head);
      $receiver.not_pdl1vz$('return ' + closure$codeRight.body + ';' + '\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_15(closure$id, closure$idArgument, closure$internalName, closure$codeRight) {
    return function ($receiver) {
      $receiver.not_pdl1vz$('const v' + closure$id + ' = function(v' + closure$idArgument + '$' + closure$internalName + ') {' + '\n');
      $receiver.indent_3vmjfp$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$codeRight));
      $receiver.not_pdl1vz$('};\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_28(closure$context) {
    return function ($receiver) {
      if (equals($receiver.value.left.type, 'identifier')) {
        var name = $receiver.value.left.value;
        var internalName = Regex_init('[^a-zA-Z0-9_]').replace_x2uqeu$(name, '');
        var idArgument = closure$context.nextId();
        var $this = closure$context.aliases;
        $this.push();
        var closure$context_0 = closure$context;
        closure$context_0.aliases.set_yuqcw7$(name, Alias_init_0(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_4(idArgument, internalName)));
        var result = mustGet($receiver.value.right, closure$context_0);
        $this.pop();
        var codeRight = result;
        var id = closure$context.nextId();
        return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_15(id, idArgument, internalName, codeRight)), 'v' + id);
      } else {
        throw Exception_init('Illegal Operator Argument: ' + $receiver.value.left.type + ' -> ' + $receiver.value.right.type);
      }
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_26(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_28(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$id, closure$internalName) {
    return function ($receiver) {
      return new CodeGet('', 'v' + closure$id + '$' + closure$internalName);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$code, closure$id, closure$internalName) {
    return function ($receiver) {
      $receiver.not_pdl1vz$(closure$code.head);
      $receiver.not_pdl1vz$('v' + closure$id + '$' + closure$internalName + ' = ' + closure$code.body + ';' + '\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$id, closure$internalName) {
    return function (code_0) {
      return new CodeRun(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(code_0, closure$id, closure$internalName)));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$id, closure$internalName) {
    return function ($receiver) {
      return new CodeSet(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$id, closure$internalName));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_16(closure$id, closure$internalName) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$id, closure$internalName));
      $receiver.set.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$id, closure$internalName));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_17(closure$id, closure$internalName, closure$codeRight) {
    return function ($receiver) {
      $receiver.not_pdl1vz$('let v' + closure$id + '$' + closure$internalName + ';' + '\n');
      $receiver.not_pdl1vz$(closure$codeRight.head);
      $receiver.not_pdl1vz$('v' + closure$id + '$' + closure$internalName + ' = ' + closure$codeRight.body + ';' + '\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_29(closure$context) {
    return function ($receiver) {
      if (equals($receiver.value.left.type, 'identifier')) {
        var name = $receiver.value.left.value;
        var internalName = Regex_init('[^a-zA-Z0-9_]').replace_x2uqeu$(name, '');
        var id = closure$context.nextId();
        closure$context.aliases.set_yuqcw7$(name, Alias_init_0(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_16(id, internalName)));
        var codeRight = mustGet($receiver.value.right, closure$context);
        return new CodeRun(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_17(id, internalName, codeRight)));
      } else {
        throw Exception_init('Illegal Operator Argument: ' + $receiver.value.left.type + ' : ' + $receiver.value.right.type);
      }
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_27(closure$context) {
    return function ($receiver) {
      $receiver.run.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_29(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_18(closure$codeRight, closure$id, closure$codeLeft) {
    return function ($receiver) {
      $receiver.not_pdl1vz$(closure$codeRight.head);
      $receiver.not_pdl1vz$('const v' + closure$id + ' = ' + closure$codeRight.body + ';' + '\n');
      $receiver.not_pdl1vz$(closure$codeLeft.head);
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_30(closure$context) {
    return function ($receiver) {
      var id = closure$context.nextId();
      var codeRight = mustGet($receiver.value.right, closure$context);
      var codeLeft = mustSet($receiver.value.left, closure$context).consumer(new CodeGet('', 'v' + id));
      return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_18(codeRight, id, codeLeft)), 'v' + id);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_31(closure$context) {
    return function ($receiver) {
      return mustSet($receiver.value.left, closure$context).consumer(mustGet($receiver.value.right, closure$context));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_19(this$, closure$codeRight) {
    return function (consumer) {
      consumer(this$.value.left.value, closure$codeRight);
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_32(closure$context) {
    return function ($receiver) {
      if (equals($receiver.value.left.type, 'identifier')) {
        var codeRight = mustGet($receiver.value.right, closure$context);
        return new CodeObjectInit(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_19($receiver, codeRight));
      } else {
        throw Exception_init('Illegal Operator Argument: ' + $receiver.value.left.type + ' = ' + $receiver.value.right.type);
      }
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_28(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_30(closure$context));
      $receiver.run.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_31(closure$context));
      $receiver.objectInit.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_32(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_20(closure$codesLeft, closure$codeRight) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$codesLeft.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        $receiver.not_pdl1vz$(element.head);
      }
      $receiver.not_pdl1vz$(closure$codeRight.head);
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_33(closure$context) {
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
      return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_20(codesLeft, codeRight)), codeRight.body);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_21(closure$codes) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$codes.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        $receiver.not_pdl1vz$(element.head);
      }
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_34(closure$context) {
    return function ($receiver) {
      var $receiver_0 = $receiver.value;
      var destination = ArrayList_init($receiver_0.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var item = $receiver_0[tmp$];
        destination.add_11rb$(mustRun(item, closure$context));
      }
      var codes = destination;
      return new CodeRun(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_21(codes)));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$consumer) {
    return function (code2) {
      closure$consumer(code2);
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_22(closure$codes) {
    return function (consumer) {
      var tmp$;
      tmp$ = closure$codes.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        element.generator(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(consumer));
      }
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_35(closure$context) {
    return function ($receiver) {
      var $receiver_0 = $receiver.value;
      var destination = ArrayList_init($receiver_0.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var item = $receiver_0[tmp$];
        destination.add_11rb$(mustArrayInit(item, closure$context));
      }
      var codes = destination;
      return new CodeArrayInit(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_22(codes));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$consumer) {
    return function (key2, code2) {
      closure$consumer(key2, code2);
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_23(closure$codes) {
    return function (consumer) {
      var tmp$;
      tmp$ = closure$codes.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        element.generator(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(consumer));
      }
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_36(closure$context) {
    return function ($receiver) {
      var $receiver_0 = $receiver.value;
      var destination = ArrayList_init($receiver_0.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var item = $receiver_0[tmp$];
        destination.add_11rb$(mustObjectInit(item, closure$context));
      }
      var codes = destination;
      return new CodeObjectInit(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_23(codes));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_29(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_33(closure$context));
      $receiver.run.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_34(closure$context));
      $receiver.arrayInit.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_35(closure$context));
      $receiver.objectInit.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_36(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_37($receiver) {
    return new CodeGet('', '([1, 2, 3])');
  }
  function getStandardCompiler$lambda$lambda$lambda_30($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_37);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_38($receiver) {
    return new CodeGet('', '(a => a * 20)');
  }
  function getStandardCompiler$lambda$lambda$lambda_31($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_38);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_39($receiver) {
    return new CodeGet('', '({m: a => a * 20})');
  }
  function getStandardCompiler$lambda$lambda$lambda_32($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_39);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_40($receiver) {
    return new CodeGet('', '(Math.PI)');
  }
  function getStandardCompiler$lambda$lambda$lambda_33($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_40);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_41($receiver) {
    return new CodeGet('', '(Math.sin)');
  }
  function getStandardCompiler$lambda$lambda$lambda_34($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_41);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_42($receiver) {
    return new CodeGet('', '((a, b) => Math.log(a) / Math.log(b))');
  }
  function getStandardCompiler$lambda$lambda$lambda_35($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_42);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_43($receiver) {
    return new CodeGet('', '(array => code => array.map(item => code(item)))');
  }
  function getStandardCompiler$lambda$lambda$lambda_36($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_43);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_44($receiver) {
    return new CodeGet('', 'true');
  }
  function getStandardCompiler$lambda$lambda$lambda_37($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_44);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_45($receiver) {
    return new CodeGet('', 'false');
  }
  function getStandardCompiler$lambda$lambda$lambda_38($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_45);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_46($receiver) {
    return new CodeGet('', 'null');
  }
  function getStandardCompiler$lambda$lambda$lambda_39($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_46);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_47($receiver) {
    return new CodeGet('', 'NaN');
  }
  function getStandardCompiler$lambda$lambda$lambda_40($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_47);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_48($receiver) {
    return new CodeGet('', 'Infinity');
  }
  function getStandardCompiler$lambda$lambda$lambda_41($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_48);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_49($receiver) {
    return new CodeGet('', 'undefined');
  }
  function getStandardCompiler$lambda$lambda$lambda_42($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_49);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda_43(closure$code) {
    return function ($receiver) {
      $receiver.not_pdl1vz$(closure$code.head);
      $receiver.not_pdl1vz$('return ' + closure$code.body + ';' + '\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda(closure$code) {
    return function ($receiver) {
      $receiver.not_pdl1vz$('(function(runtime) {\n');
      $receiver.indent_3vmjfp$(getStandardCompiler$lambda$lambda$lambda_43(closure$code));
      $receiver.not_pdl1vz$('})');
      return Unit;
    };
  }
  function getStandardCompiler$lambda(node) {
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
    $receiver.invoke_rm9vxy$(plus_0, getStandardCompiler$lambda$lambda$lambda_22(context));
    $receiver.invoke_rm9vxy$(minus, getStandardCompiler$lambda$lambda$lambda_23(context));
    $receiver.invoke_rm9vxy$(asterisk, getStandardCompiler$lambda$lambda$lambda_24(context));
    $receiver.invoke_rm9vxy$(slash, getStandardCompiler$lambda$lambda$lambda_25(context));
    $receiver.invoke_rm9vxy$(minus_greater, getStandardCompiler$lambda$lambda$lambda_26(context));
    $receiver.invoke_rm9vxy$(colon, getStandardCompiler$lambda$lambda$lambda_27(context));
    $receiver.invoke_rm9vxy$(equal, getStandardCompiler$lambda$lambda$lambda_28(context));
    $receiver.invoke_rm9vxy$(semicolon, getStandardCompiler$lambda$lambda$lambda_29(context));
    var $receiver_0 = context.aliases;
    $receiver_0.invoke_2lqwj7$('A', getStandardCompiler$lambda$lambda$lambda_30);
    $receiver_0.invoke_2lqwj7$('F', getStandardCompiler$lambda$lambda$lambda_31);
    $receiver_0.invoke_2lqwj7$('O', getStandardCompiler$lambda$lambda$lambda_32);
    $receiver_0.invoke_2lqwj7$('PI', getStandardCompiler$lambda$lambda$lambda_33);
    $receiver_0.invoke_2lqwj7$('SIN', getStandardCompiler$lambda$lambda$lambda_34);
    $receiver_0.invoke_2lqwj7$('LOG', getStandardCompiler$lambda$lambda$lambda_35);
    $receiver_0.invoke_2lqwj7$('MAP', getStandardCompiler$lambda$lambda$lambda_36);
    $receiver_0.invoke_2lqwj7$('TRUE', getStandardCompiler$lambda$lambda$lambda_37);
    $receiver_0.invoke_2lqwj7$('FALSE', getStandardCompiler$lambda$lambda$lambda_38);
    $receiver_0.invoke_2lqwj7$('NULL', getStandardCompiler$lambda$lambda$lambda_39);
    $receiver_0.invoke_2lqwj7$('NAN', getStandardCompiler$lambda$lambda$lambda_40);
    $receiver_0.invoke_2lqwj7$('INFINITY', getStandardCompiler$lambda$lambda$lambda_41);
    $receiver_0.invoke_2lqwj7$('UNDEFINED', getStandardCompiler$lambda$lambda$lambda_42);
    var code_0 = mustGet(node, context);
    return code(getStandardCompiler$lambda$lambda(code_0));
  }
  function getStandardCompiler() {
    return getStandardCompiler$lambda;
  }
  function CodeGet(head, body) {
    this.head = head;
    this.body = body;
  }
  CodeGet.$metadata$ = {kind: Kind_CLASS, simpleName: 'CodeGet', interfaces: []};
  function CodeRun(head) {
    this.head = head;
  }
  CodeRun.$metadata$ = {kind: Kind_CLASS, simpleName: 'CodeRun', interfaces: []};
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
  function OperatorCompilerArgument(context, value) {
    this.context = context;
    this.value = value;
  }
  OperatorCompilerArgument.$metadata$ = {kind: Kind_CLASS, simpleName: 'OperatorCompilerArgument', interfaces: []};
  function Operator() {
    this.get = new DomainSlot();
    this.run = new DomainSlot();
    this.set = new DomainSlot();
    this.arrayInit = new DomainSlot();
    this.objectInit = new DomainSlot();
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
  function AliasCompilerArgument(context) {
    this.context = context;
  }
  AliasCompilerArgument.$metadata$ = {kind: Kind_CLASS, simpleName: 'AliasCompilerArgument', interfaces: []};
  function Alias() {
    this.get = new DomainSlot();
    this.run = new DomainSlot();
    this.set = new DomainSlot();
    this.arrayInit = new DomainSlot();
    this.objectInit = new DomainSlot();
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
  function Node(type, value) {
    this.type = type;
    this.value = value;
  }
  Node.$metadata$ = {kind: Kind_CLASS, simpleName: 'Node', interfaces: []};
  Node.prototype.component1 = function () {
    return this.type;
  };
  Node.prototype.component2 = function () {
    return this.value;
  };
  Node.prototype.copy_bm4g0d$ = function (type, value) {
    return new Node(type === void 0 ? this.type : type, value === void 0 ? this.value : value);
  };
  Node.prototype.toString = function () {
    return 'Node(type=' + Kotlin.toString(this.type) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  Node.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  Node.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.value, other.value)))));
  };
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
  function mayGet($receiver, context) {
    var tmp$;
    return (tmp$ = context.operators.get_61zpoe$($receiver.type)) != null ? tmp$.get.invoke_11rb$(new OperatorCompilerArgument(context, $receiver.value)) : null;
  }
  function mayRun$lambda$lambda(closure$it) {
    return function ($receiver) {
      $receiver.not_pdl1vz$(closure$it.head);
      $receiver.not_pdl1vz$(closure$it.body + ';' + '\n');
      return Unit;
    };
  }
  function mayRun($receiver, context) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$ = context.operators.get_61zpoe$($receiver.type)) != null ? tmp$.run.invoke_11rb$(new OperatorCompilerArgument(context, $receiver.value)) : null) != null ? tmp$_1 : (tmp$_0 = mayGet($receiver, context)) != null ? new CodeRun(code(mayRun$lambda$lambda(tmp$_0))) : null;
  }
  function maySet($receiver, context) {
    var tmp$;
    return (tmp$ = context.operators.get_61zpoe$($receiver.type)) != null ? tmp$.set.invoke_11rb$(new OperatorCompilerArgument(context, $receiver.value)) : null;
  }
  function mayArrayInit$lambda$lambda(closure$it) {
    return function (consumer) {
      consumer(closure$it);
      return Unit;
    };
  }
  function mayArrayInit($receiver, context) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$ = context.operators.get_61zpoe$($receiver.type)) != null ? tmp$.arrayInit.invoke_11rb$(new OperatorCompilerArgument(context, $receiver.value)) : null) != null ? tmp$_1 : (tmp$_0 = mayGet($receiver, context)) != null ? new CodeArrayInit(mayArrayInit$lambda$lambda(tmp$_0)) : null;
  }
  function mayObjectInit($receiver, context) {
    var tmp$;
    return (tmp$ = context.operators.get_61zpoe$($receiver.type)) != null ? tmp$.objectInit.invoke_11rb$(new OperatorCompilerArgument(context, $receiver.value)) : null;
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
  FramedRegistry.prototype.stack_klfg04$ = defineInlineFunction('fluorite9.fl9.FramedRegistry.stack_klfg04$', function (block) {
    this.push();
    var result = block();
    this.pop();
    return result;
  });
  FramedRegistry.$metadata$ = {kind: Kind_CLASS, simpleName: 'FramedRegistry', interfaces: []};
  function code$ObjectLiteral(closure$strings) {
    this.closure$strings = closure$strings;
  }
  code$ObjectLiteral.prototype.accept_61zpoe$ = function (string) {
    this.closure$strings.add_11rb$(string);
  };
  code$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [CodeScope]};
  function code(block) {
    var strings = ArrayList_init_0();
    block(new code$ObjectLiteral(strings));
    return joinToString(strings, '');
  }
  function CodeScope() {
  }
  CodeScope.prototype.not_pdl1vz$ = function ($receiver) {
    this.accept_61zpoe$($receiver);
  };
  CodeScope.prototype.not_sdeqdk$ = function ($receiver) {
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.accept_61zpoe$(element);
    }
  };
  CodeScope.prototype.indent_3vmjfp$ = function (block) {
    var tmp$ = code(block);
    this.accept_61zpoe$('  ' + Regex_init('\\n(?!$)').replace_x2uqeu$(tmp$, '\n  '));
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
  var plus_0;
  var minus;
  var comma;
  var minus_greater;
  var equal_greater;
  var colon;
  var equal;
  var semicolon;
  var package$fl9 = _.fl9 || (_.fl9 = {});
  package$fl9.getStandardCompiler = getStandardCompiler;
  package$fl9.CodeGet = CodeGet;
  package$fl9.CodeRun = CodeRun;
  package$fl9.CodeSet = CodeSet;
  package$fl9.CodeArrayInit = CodeArrayInit;
  package$fl9.CodeObjectInit = CodeObjectInit;
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
  package$fl9.mustGet_tv3sn6$ = mustGet;
  package$fl9.mustRun_tv3sn6$ = mustRun;
  package$fl9.mustSet_tv3sn6$ = mustSet;
  package$fl9.mustArrayInit_tv3sn6$ = mustArrayInit;
  package$fl9.mustObjectInit_tv3sn6$ = mustObjectInit;
  package$fl9.mayGet_tv3sn6$ = mayGet;
  package$fl9.mayRun_tv3sn6$ = mayRun;
  package$fl9.maySet_tv3sn6$ = maySet;
  package$fl9.mayArrayInit_tv3sn6$ = mayArrayInit;
  package$fl9.mayObjectInit_tv3sn6$ = mayObjectInit;
  package$fl9.Registry = Registry;
  package$fl9.Frame_init_q3lmfv$ = Frame_init;
  package$fl9.Frame_init_s0w92s$ = Frame_init_0;
  package$fl9.Frame = Frame;
  package$fl9.FramedRegistry = FramedRegistry;
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
    return plus_0;
  }});
  Object.defineProperty(package$token, 'minus', {get: function () {
    return minus;
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
  Object.defineProperty(package$token, 'semicolon', {get: function () {
    return semicolon;
  }});
  code$ObjectLiteral.prototype.not_pdl1vz$ = CodeScope.prototype.not_pdl1vz$;
  code$ObjectLiteral.prototype.not_sdeqdk$ = CodeScope.prototype.not_sdeqdk$;
  code$ObjectLiteral.prototype.indent_3vmjfp$ = CodeScope.prototype.indent_3vmjfp$;
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
  plus_0 = new Token('plus');
  minus = new Token('minus');
  comma = new Token('comma');
  minus_greater = new Token('minus_greater');
  equal_greater = new Token('equal_greater');
  colon = new Token('colon');
  equal = new Token('equal');
  semicolon = new Token('semicolon');
  return _;
}));

//# sourceMappingURL=fluorite9.js.map

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
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var equals = Kotlin.equals;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var Pair = Kotlin.kotlin.Pair;
  var plus = Kotlin.kotlin.collections.plus_qloxvw$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var slice = Kotlin.kotlin.collections.slice_l0m14x$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Error_init = Kotlin.kotlin.Error_init_pdl1vj$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  OperatorRegistry.prototype = Object.create(Registry.prototype);
  OperatorRegistry.prototype.constructor = OperatorRegistry;
  AliasRegistry.prototype = Object.create(FramedRegistry.prototype);
  AliasRegistry.prototype.constructor = AliasRegistry;
  function getStandardCompiler$lambda$lambda$lambda$lambda($receiver) {
    return new CodeGet('', '(runtime.void)');
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda(it) {
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_0($receiver) {
    return new CodeArrayInit(getStandardCompiler$lambda$lambda$lambda$lambda$lambda);
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_0(it) {
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_1($receiver) {
    return new CodeObjectInit(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_0);
  }
  function getStandardCompiler$lambda$lambda$lambda($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda);
    $receiver.arrayInit.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_0);
    $receiver.objectInit.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_1);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_2($receiver) {
    return new CodeGet('', '(' + $receiver.value + ')');
  }
  function getStandardCompiler$lambda$lambda$lambda_0($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_2);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_3($receiver) {
    return new CodeGet('', JSON.stringify($receiver.value));
  }
  function getStandardCompiler$lambda$lambda$lambda_1($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_3);
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
  function getStandardCompiler$lambda$lambda$lambda$lambda_4(closure$context) {
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
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_4(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_5(closure$context) {
    return function ($receiver) {
      var tmp$, tmp$_0, tmp$_1;
      tmp$_1 = (tmp$_0 = (tmp$ = closure$context.aliases.get_61zpoe$($receiver.value)) != null ? tmp$.get : null) != null ? tmp$_0.invoke_11rb$(new AliasCompilerArgument(closure$context)) : null;
      if (tmp$_1 == null) {
        throw Exception_init('Unknown Identifier: ' + $receiver.value);
      }return tmp$_1;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_6(closure$context) {
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
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_5(closure$context));
      $receiver.set.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_6(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_7($receiver) {
    return new CodeGet('', '(runtime.empty)');
  }
  function getStandardCompiler$lambda$lambda$lambda_4($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_7);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_8(closure$context) {
    return function ($receiver) {
      var $this = closure$context.aliases;
      $this.push();
      var result = mustGet($receiver.value.main, closure$context);
      $this.pop();
      return result;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_9(closure$context) {
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
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_8(closure$context));
      $receiver.run.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_9(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_2(closure$id) {
    return function ($receiver) {
      $receiver.not_pdl1vz$('const v' + closure$id + ' = [];' + '\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_10(closure$context) {
    return function ($receiver) {
      var id = closure$context.nextId();
      return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_2(id)), 'v' + id);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_6(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_10(closure$context));
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
  function getStandardCompiler$lambda$lambda$lambda$lambda_11(closure$context) {
    return function ($receiver) {
      var codeMain = mustArrayInit($receiver.value.main, closure$context);
      var id = closure$context.nextId();
      return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_3(id, codeMain)), 'v' + id);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_7(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_11(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_4(closure$id) {
    return function ($receiver) {
      $receiver.not_pdl1vz$('const v' + closure$id + ' = {};' + '\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_12(closure$context) {
    return function ($receiver) {
      var id = closure$context.nextId();
      return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_4(id)), 'v' + id);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_8(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_12(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_1(this$, closure$id) {
    return function (key, code) {
      this$.not_pdl1vz$(key.head);
      this$.not_pdl1vz$(code.head);
      this$.not_pdl1vz$('v' + closure$id + '[' + key.body + '] = ' + code.body + ';' + '\n');
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
  function getStandardCompiler$lambda$lambda$lambda$lambda_13(closure$context) {
    return function ($receiver) {
      var codeMain = mustObjectInit($receiver.value.main, closure$context);
      var id = closure$context.nextId();
      return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_5(id, codeMain)), 'v' + id);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_9(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_13(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_14($receiver) {
    return new CodeGet('', '(runtime.empty)');
  }
  function getStandardCompiler$lambda$lambda$lambda_10($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_14);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_15(closure$context) {
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
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_15(closure$context));
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
  function getStandardCompiler$lambda$lambda$lambda$lambda_16(closure$context) {
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
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_16(closure$context));
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
  function getStandardCompiler$lambda$lambda$lambda$lambda_17(closure$context) {
    return function ($receiver) {
      var codeLeft = mustGet($receiver.value.left, closure$context);
      var id = closure$context.nextId();
      return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_7(codeLeft, id)), 'v' + id);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_13(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_17(closure$context));
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
  function getStandardCompiler$lambda$lambda$lambda$lambda_18(closure$context) {
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
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_18(closure$context));
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
  function getStandardCompiler$lambda$lambda$lambda$lambda_19(closure$context) {
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
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_19(closure$context));
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
  function getStandardCompiler$lambda$lambda$lambda$lambda_20(it) {
    return 'runtime.toNumber(' + it + ')';
  }
  function getStandardCompiler$lambda$lambda$lambda_16(closure$leftUnaryOperatorGetter) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(closure$leftUnaryOperatorGetter(getStandardCompiler$lambda$lambda$lambda$lambda_20));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_21(it) {
    return '-runtime.toNumber(' + it + ')';
  }
  function getStandardCompiler$lambda$lambda$lambda_17(closure$leftUnaryOperatorGetter) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(closure$leftUnaryOperatorGetter(getStandardCompiler$lambda$lambda$lambda$lambda_21));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_22(it) {
    return 'runtime.toString(' + it + ')';
  }
  function getStandardCompiler$lambda$lambda$lambda_18(closure$leftUnaryOperatorGetter) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(closure$leftUnaryOperatorGetter(getStandardCompiler$lambda$lambda$lambda$lambda_22));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_23(it) {
    return 'runtime.toBoolean(' + it + ')';
  }
  function getStandardCompiler$lambda$lambda$lambda_19(closure$leftUnaryOperatorGetter) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(closure$leftUnaryOperatorGetter(getStandardCompiler$lambda$lambda$lambda$lambda_23));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_24(it) {
    return '!runtime.toBoolean(' + it + ')';
  }
  function getStandardCompiler$lambda$lambda$lambda_20(closure$leftUnaryOperatorGetter) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(closure$leftUnaryOperatorGetter(getStandardCompiler$lambda$lambda$lambda$lambda_24));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_25(it) {
    return 'runtime.getLength(' + it + ')';
  }
  function getStandardCompiler$lambda$lambda$lambda_21(closure$leftUnaryOperatorGetter) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(closure$leftUnaryOperatorGetter(getStandardCompiler$lambda$lambda$lambda$lambda_25));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$binaryOperatorGetter$lambda$lambda(closure$codeLeft, closure$codeRight, closure$id, closure$function) {
    return function ($receiver) {
      $receiver.not_pdl1vz$(closure$codeLeft.head);
      $receiver.not_pdl1vz$(closure$codeRight.head);
      $receiver.not_pdl1vz$('const v' + closure$id + ' = ' + closure$function(closure$codeLeft.body, closure$codeRight.body) + ';' + '\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$binaryOperatorGetter$lambda(closure$context, closure$function) {
    return function ($receiver) {
      var codeLeft = mustGet($receiver.value.left, closure$context);
      var codeRight = mustGet($receiver.value.right, closure$context);
      var id = closure$context.nextId();
      return new CodeGet(code(getStandardCompiler$lambda$lambda$binaryOperatorGetter$lambda$lambda(codeLeft, codeRight, id, closure$function)), 'v' + id);
    };
  }
  function getStandardCompiler$lambda$lambda$binaryOperatorGetter(closure$context) {
    return function (function_0) {
      return getStandardCompiler$lambda$lambda$binaryOperatorGetter$lambda(closure$context, function_0);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_26(left, right) {
    return 'runtime.multiply(' + left + ', ' + right + ')';
  }
  function getStandardCompiler$lambda$lambda$lambda_22(closure$binaryOperatorGetter) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(closure$binaryOperatorGetter(getStandardCompiler$lambda$lambda$lambda$lambda_26));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_27(left, right) {
    return 'runtime.divide(' + left + ', ' + right + ')';
  }
  function getStandardCompiler$lambda$lambda$lambda_23(closure$binaryOperatorGetter) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(closure$binaryOperatorGetter(getStandardCompiler$lambda$lambda$lambda$lambda_27));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_28(left, right) {
    return 'runtime.add(' + left + ', ' + right + ')';
  }
  function getStandardCompiler$lambda$lambda$lambda_24(closure$binaryOperatorGetter) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(closure$binaryOperatorGetter(getStandardCompiler$lambda$lambda$lambda$lambda_28));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_29(left, right) {
    return 'runtime.subtract(' + left + ', ' + right + ')';
  }
  function getStandardCompiler$lambda$lambda$lambda_25(closure$binaryOperatorGetter) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(closure$binaryOperatorGetter(getStandardCompiler$lambda$lambda$lambda$lambda_29));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_30(left, right) {
    return 'runtime.rangeClosed(' + left + ', ' + right + ')';
  }
  function getStandardCompiler$lambda$lambda$lambda_26(closure$binaryOperatorGetter) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(closure$binaryOperatorGetter(getStandardCompiler$lambda$lambda$lambda$lambda_30));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_31(left, right) {
    return 'runtime.rangeOpened(' + left + ', ' + right + ')';
  }
  function getStandardCompiler$lambda$lambda$lambda_27(closure$binaryOperatorGetter) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(closure$binaryOperatorGetter(getStandardCompiler$lambda$lambda$lambda$lambda_31));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$binaryConditionOperatorGetter$lambda$lambda$lambda(closure$codeRight, closure$id) {
    return function ($receiver) {
      $receiver.not_pdl1vz$(closure$codeRight.head);
      $receiver.not_pdl1vz$('v' + closure$id + ' = ' + closure$codeRight.body + ';' + '\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$binaryConditionOperatorGetter$lambda$lambda$lambda_0(closure$id, closure$codeLeft) {
    return function ($receiver) {
      $receiver.not_pdl1vz$('v' + closure$id + ' = ' + closure$codeLeft.body + ';' + '\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$binaryConditionOperatorGetter$lambda$lambda(closure$codeLeft, closure$id, closure$function, closure$codeRight) {
    return function ($receiver) {
      $receiver.not_pdl1vz$(closure$codeLeft.head);
      $receiver.not_pdl1vz$('let v' + closure$id + ';' + '\n');
      $receiver.not_pdl1vz$('if (' + closure$function(closure$codeLeft.body) + ') {' + '\n');
      $receiver.indent_3vmjfp$(getStandardCompiler$lambda$lambda$binaryConditionOperatorGetter$lambda$lambda$lambda(closure$codeRight, closure$id));
      $receiver.not_pdl1vz$('} else {\n');
      $receiver.indent_3vmjfp$(getStandardCompiler$lambda$lambda$binaryConditionOperatorGetter$lambda$lambda$lambda_0(closure$id, closure$codeLeft));
      $receiver.not_pdl1vz$('}\n');
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
      return new CodeGet(code(getStandardCompiler$lambda$lambda$binaryConditionOperatorGetter$lambda$lambda(codeLeft, id, closure$function, codeRight)), 'v' + id);
    };
  }
  function getStandardCompiler$lambda$lambda$binaryConditionOperatorGetter(closure$context) {
    return function (function_0) {
      return getStandardCompiler$lambda$lambda$binaryConditionOperatorGetter$lambda(closure$context, function_0);
    };
  }
  function getStandardCompiler$lambda$lambda$binaryConditionOperatorRunner$lambda$lambda$lambda(closure$codeRight) {
    return function ($receiver) {
      $receiver.not_pdl1vz$(closure$codeRight.head);
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$binaryConditionOperatorRunner$lambda$lambda(closure$codeLeft, closure$function, closure$codeRight) {
    return function ($receiver) {
      $receiver.not_pdl1vz$(closure$codeLeft.head);
      $receiver.not_pdl1vz$('if (' + closure$function(closure$codeLeft.body) + ') {' + '\n');
      $receiver.indent_3vmjfp$(getStandardCompiler$lambda$lambda$binaryConditionOperatorRunner$lambda$lambda$lambda(closure$codeRight));
      $receiver.not_pdl1vz$('}\n');
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
      return new CodeRun(code(getStandardCompiler$lambda$lambda$binaryConditionOperatorRunner$lambda$lambda(codeLeft, closure$function, codeRight)));
    };
  }
  function getStandardCompiler$lambda$lambda$binaryConditionOperatorRunner(closure$context) {
    return function (function_0) {
      return getStandardCompiler$lambda$lambda$binaryConditionOperatorRunner$lambda(closure$context, function_0);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_32(it) {
    return 'runtime.toBoolean(' + it + ')';
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_33(it) {
    return 'runtime.toBoolean(' + it + ')';
  }
  function getStandardCompiler$lambda$lambda$lambda_28(closure$binaryConditionOperatorGetter, closure$binaryConditionOperatorRunner) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(closure$binaryConditionOperatorGetter(getStandardCompiler$lambda$lambda$lambda$lambda_32));
      $receiver.run.invoke_ru8m1r$(closure$binaryConditionOperatorRunner(getStandardCompiler$lambda$lambda$lambda$lambda_33));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_34(it) {
    return '!runtime.toBoolean(' + it + ')';
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_35(it) {
    return '!runtime.toBoolean(' + it + ')';
  }
  function getStandardCompiler$lambda$lambda$lambda_29(closure$binaryConditionOperatorGetter, closure$binaryConditionOperatorRunner) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(closure$binaryConditionOperatorGetter(getStandardCompiler$lambda$lambda$lambda$lambda_34));
      $receiver.run.invoke_ru8m1r$(closure$binaryConditionOperatorRunner(getStandardCompiler$lambda$lambda$lambda$lambda_35));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_36(it) {
    return it + ' === undefined';
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_37(it) {
    return it + ' === undefined';
  }
  function getStandardCompiler$lambda$lambda$lambda_30(closure$binaryConditionOperatorGetter, closure$binaryConditionOperatorRunner) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(closure$binaryConditionOperatorGetter(getStandardCompiler$lambda$lambda$lambda$lambda_36));
      $receiver.run.invoke_ru8m1r$(closure$binaryConditionOperatorRunner(getStandardCompiler$lambda$lambda$lambda$lambda_37));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_38(it) {
    return it + ' !== undefined';
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_39(it) {
    return it + ' !== undefined';
  }
  function getStandardCompiler$lambda$lambda$lambda_31(closure$binaryConditionOperatorGetter, closure$binaryConditionOperatorRunner) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(closure$binaryConditionOperatorGetter(getStandardCompiler$lambda$lambda$lambda$lambda_38));
      $receiver.run.invoke_ru8m1r$(closure$binaryConditionOperatorRunner(getStandardCompiler$lambda$lambda$lambda$lambda_39));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$codeCenter, closure$id) {
    return function ($receiver) {
      $receiver.not_pdl1vz$(closure$codeCenter.head);
      $receiver.not_pdl1vz$('v' + closure$id + ' = ' + closure$codeCenter.body + ';' + '\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$codeRight, closure$id) {
    return function ($receiver) {
      $receiver.not_pdl1vz$(closure$codeRight.head);
      $receiver.not_pdl1vz$('v' + closure$id + ' = ' + closure$codeRight.body + ';' + '\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_11(closure$codeLeft, closure$id, closure$codeCenter, closure$codeRight) {
    return function ($receiver) {
      $receiver.not_pdl1vz$(closure$codeLeft.head);
      $receiver.not_pdl1vz$('let v' + closure$id + ';' + '\n');
      $receiver.not_pdl1vz$('if (runtime.toBoolean(' + closure$codeLeft.body + ')) {' + '\n');
      $receiver.indent_3vmjfp$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$codeCenter, closure$id));
      $receiver.not_pdl1vz$('} else {\n');
      $receiver.indent_3vmjfp$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$codeRight, closure$id));
      $receiver.not_pdl1vz$('}\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_40(closure$context) {
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
      return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_11(codeLeft, id, codeCenter, codeRight)), 'v' + id);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$codeCenter) {
    return function ($receiver) {
      $receiver.not_pdl1vz$(closure$codeCenter.head);
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$codeRight) {
    return function ($receiver) {
      $receiver.not_pdl1vz$(closure$codeRight.head);
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_12(closure$codeLeft, closure$codeCenter, closure$codeRight) {
    return function ($receiver) {
      $receiver.not_pdl1vz$(closure$codeLeft.head);
      $receiver.not_pdl1vz$('if (runtime.toBoolean(' + closure$codeLeft.body + ')) {' + '\n');
      $receiver.indent_3vmjfp$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$codeCenter));
      $receiver.not_pdl1vz$('} else {\n');
      $receiver.indent_3vmjfp$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$codeRight));
      $receiver.not_pdl1vz$('}\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_41(closure$context) {
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
      return new CodeRun(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_12(codeLeft, codeCenter, codeRight)));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_32(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_40(closure$context));
      $receiver.run.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_41(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_8(closure$codeLeft, closure$id) {
    return function ($receiver) {
      $receiver.not_pdl1vz$(closure$codeLeft.head);
      $receiver.not_pdl1vz$('v' + closure$id + ' = ' + closure$codeLeft.body + ';' + '\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_9(closure$codeRight, closure$id) {
    return function ($receiver) {
      $receiver.not_pdl1vz$(closure$codeRight.head);
      $receiver.not_pdl1vz$('v' + closure$id + ' = ' + closure$codeRight.body + ';' + '\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_13(closure$id, closure$codeLeft, closure$codeRight) {
    return function ($receiver) {
      $receiver.not_pdl1vz$('let v' + closure$id + ';' + '\n');
      $receiver.not_pdl1vz$('try {\n');
      $receiver.indent_3vmjfp$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_8(closure$codeLeft, closure$id));
      $receiver.not_pdl1vz$('} catch (e) {\n');
      $receiver.indent_3vmjfp$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_9(closure$codeRight, closure$id));
      $receiver.not_pdl1vz$('}\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_42(closure$context) {
    return function ($receiver) {
      var codeLeft = mustGet($receiver.value.left, closure$context);
      var $this = closure$context.aliases;
      $this.push();
      var result = mustGet($receiver.value.right, closure$context);
      $this.pop();
      var codeRight = result;
      var id = closure$context.nextId();
      return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_13(id, codeLeft, codeRight)), 'v' + id);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_10(closure$codeLeft) {
    return function ($receiver) {
      $receiver.not_pdl1vz$(closure$codeLeft.head);
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_11(closure$codeRight) {
    return function ($receiver) {
      $receiver.not_pdl1vz$(closure$codeRight.head);
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_14(closure$codeLeft, closure$codeRight) {
    return function ($receiver) {
      $receiver.not_pdl1vz$('try {\n');
      $receiver.indent_3vmjfp$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_10(closure$codeLeft));
      $receiver.not_pdl1vz$('} catch (e) {\n');
      $receiver.indent_3vmjfp$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_11(closure$codeRight));
      $receiver.not_pdl1vz$('}\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_43(closure$context) {
    return function ($receiver) {
      var codeLeft = mustRun($receiver.value.left, closure$context);
      var $this = closure$context.aliases;
      $this.push();
      var result = mustRun($receiver.value.right, closure$context);
      $this.pop();
      var codeRight = result;
      return new CodeRun(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_14(codeLeft, codeRight)));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_33(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_42(closure$context));
      $receiver.run.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_43(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$Argument(name, code) {
    this.name = name;
    this.code = code;
  }
  getStandardCompiler$lambda$lambda$lambda$lambda$Argument.$metadata$ = {kind: Kind_CLASS, simpleName: 'Argument', interfaces: []};
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$argument) {
    return function ($receiver) {
      return new CodeGet('', closure$argument.code);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$code, closure$argument) {
    return function ($receiver) {
      $receiver.not_pdl1vz$(closure$code.head);
      $receiver.not_pdl1vz$(closure$argument.code + ' = ' + closure$code.body + ';' + '\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$argument) {
    return function (code_0) {
      return new CodeRun(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(code_0, closure$argument)));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$argument) {
    return function ($receiver) {
      return new CodeSet(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$argument));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$argument) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$argument));
      $receiver.set.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$argument));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_12(closure$codeRight) {
    return function ($receiver) {
      $receiver.not_pdl1vz$(closure$codeRight.head);
      $receiver.not_pdl1vz$('return ' + closure$codeRight.body + ';' + '\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_15(closure$id, closure$arguments, closure$codeRight) {
    return function ($receiver) {
      var tmp$ = 'const v' + closure$id + ' = function(';
      var $receiver_0 = closure$arguments;
      var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination.add_11rb$(item.code);
      }
      $receiver.not_pdl1vz$(tmp$ + joinToString(destination, ', ') + ') {' + '\n');
      $receiver.indent_3vmjfp$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_12(closure$codeRight));
      $receiver.not_pdl1vz$('};\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_44(closure$context) {
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
            transform$result = element.value;
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
        destination_0.add_11rb$(new getStandardCompiler$lambda$lambda$lambda$lambda$Argument(item, 'v' + closure$context.nextId() + '$' + Regex_init('[^a-zA-Z0-9_]').replace_x2uqeu$(item, '')));
      }
      var arguments_0 = destination_0;
      var $this = closure$context.aliases;
      $this.push();
      var closure$context_0 = closure$context;
      var tmp$_2;
      tmp$_2 = arguments_0.iterator();
      while (tmp$_2.hasNext()) {
        var element_0 = tmp$_2.next();
        closure$context_0.aliases.set_yuqcw7$(element_0.name, Alias_init_0(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(element_0)));
      }
      var result = mustGet($receiver.value.right, closure$context_0);
      $this.pop();
      var codeRight = result;
      var id = closure$context.nextId();
      return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_15(id, arguments_0, codeRight)), 'v' + id);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_34(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_44(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_13(closure$id, closure$internalName) {
    return function ($receiver) {
      return new CodeGet('', 'v' + closure$id + '$' + closure$internalName);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$code, closure$id, closure$internalName) {
    return function ($receiver) {
      $receiver.not_pdl1vz$(closure$code.head);
      $receiver.not_pdl1vz$('v' + closure$id + '$' + closure$internalName + ' = ' + closure$code.body + ';' + '\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$id, closure$internalName) {
    return function (code_0) {
      return new CodeRun(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(code_0, closure$id, closure$internalName)));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_14(closure$id, closure$internalName) {
    return function ($receiver) {
      return new CodeSet(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$id, closure$internalName));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_16(closure$id, closure$internalName) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_13(closure$id, closure$internalName));
      $receiver.set.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_14(closure$id, closure$internalName));
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
  function getStandardCompiler$lambda$lambda$lambda$lambda_45(closure$context) {
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
  function getStandardCompiler$lambda$lambda$lambda_35(closure$context) {
    return function ($receiver) {
      $receiver.run.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_45(closure$context));
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
  function getStandardCompiler$lambda$lambda$lambda$lambda_46(closure$context) {
    return function ($receiver) {
      var id = closure$context.nextId();
      var codeRight = mustGet($receiver.value.right, closure$context);
      var codeLeft = mustSet($receiver.value.left, closure$context).consumer(new CodeGet('', 'v' + id));
      return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_18(codeRight, id, codeLeft)), 'v' + id);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_47(closure$context) {
    return function ($receiver) {
      return mustSet($receiver.value.left, closure$context).consumer(mustGet($receiver.value.right, closure$context));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_15(closure$key, closure$codeRight) {
    return function (consumer) {
      consumer(new CodeGet('', JSON.stringify(closure$key)), closure$codeRight);
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_19(closure$codeLeft, closure$codeRight) {
    return function (consumer) {
      consumer(closure$codeLeft, closure$codeRight);
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_48(closure$context) {
    return function ($receiver) {
      var $receiver_0 = $receiver.value.left;
      var token = identifier;
      if (isType($receiver_0, token)) {
        var closure$context_0 = closure$context;
        var key = $receiver_0.value;
        var codeRight = mustGet($receiver.value.right, closure$context_0);
        return new CodeObjectInit(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_15(key, codeRight));
      }if (isType($receiver.value.left, round)) {
        var $this = closure$context.aliases;
        $this.push();
        var result = mustGet($receiver.value.left, closure$context);
        $this.pop();
        var codeLeft = result;
        var codeRight_0 = mustGet($receiver.value.right, closure$context);
        return new CodeObjectInit(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_19(codeLeft, codeRight_0));
      }throw Exception_init('Illegal Operator Argument: ' + $receiver.value.left.type + ' = ' + $receiver.value.right.type);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_36(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_46(closure$context));
      $receiver.run.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_47(closure$context));
      $receiver.objectInit.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_48(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$idArgument) {
    return function ($receiver) {
      return new CodeGet('', 'v' + closure$idArgument);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$code, closure$idArgument) {
    return function ($receiver) {
      $receiver.not_pdl1vz$(closure$code.head);
      $receiver.not_pdl1vz$('v' + closure$idArgument + ' = ' + closure$code.body + ';' + '\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$idArgument) {
    return function (code_0) {
      return new CodeRun(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(code_0, closure$idArgument)));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$idArgument) {
    return function ($receiver) {
      return new CodeSet(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$idArgument));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_16(closure$idArgument) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$idArgument));
      $receiver.set.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$idArgument));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_17(closure$codeRight) {
    return function ($receiver) {
      $receiver.not_pdl1vz$(closure$codeRight.head);
      $receiver.not_pdl1vz$('return ' + closure$codeRight.body + ';' + '\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_20(closure$codeLeft, closure$id, closure$idArgument, closure$codeRight) {
    return function ($receiver) {
      $receiver.not_pdl1vz$(closure$codeLeft.head);
      $receiver.not_pdl1vz$('const v' + closure$id + ' = runtime.map(' + closure$codeLeft.body + ', function(v' + closure$idArgument + ') {' + '\n');
      $receiver.indent_3vmjfp$(getStandardCompiler$lambda$lambda$lambda$lambda$lambda$lambda_17(closure$codeRight));
      $receiver.not_pdl1vz$('});\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_49(closure$context) {
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
      return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_20(codeLeft, id, idArgument, codeRight)), 'v' + id);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_37(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_49(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_21(closure$codesLeft, closure$codeRight) {
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
  function getStandardCompiler$lambda$lambda$lambda$lambda_50(closure$context) {
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
      return new CodeGet(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_21(codesLeft, codeRight)), codeRight.body);
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_22(closure$codes) {
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
  function getStandardCompiler$lambda$lambda$lambda$lambda_51(closure$context) {
    return function ($receiver) {
      var $receiver_0 = $receiver.value;
      var destination = ArrayList_init($receiver_0.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var item = $receiver_0[tmp$];
        destination.add_11rb$(mustRun(item, closure$context));
      }
      var codes = destination;
      return new CodeRun(code(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_22(codes)));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_23(closure$codes) {
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
  function getStandardCompiler$lambda$lambda$lambda$lambda_52(closure$context) {
    return function ($receiver) {
      var $receiver_0 = $receiver.value;
      var destination = ArrayList_init($receiver_0.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var item = $receiver_0[tmp$];
        destination.add_11rb$(mustArrayInit(item, closure$context));
      }
      var codes = destination;
      return new CodeArrayInit(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_23(codes));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda$lambda_24(closure$codes) {
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
  function getStandardCompiler$lambda$lambda$lambda$lambda_53(closure$context) {
    return function ($receiver) {
      var $receiver_0 = $receiver.value;
      var destination = ArrayList_init($receiver_0.length);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var item = $receiver_0[tmp$];
        destination.add_11rb$(mustObjectInit(item, closure$context));
      }
      var codes = destination;
      return new CodeObjectInit(getStandardCompiler$lambda$lambda$lambda$lambda$lambda_24(codes));
    };
  }
  function getStandardCompiler$lambda$lambda$lambda_38(closure$context) {
    return function ($receiver) {
      $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_50(closure$context));
      $receiver.run.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_51(closure$context));
      $receiver.arrayInit.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_52(closure$context));
      $receiver.objectInit.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_53(closure$context));
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_54($receiver) {
    return new CodeGet('', '([1, 2, 3])');
  }
  function getStandardCompiler$lambda$lambda$lambda_39($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_54);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_55($receiver) {
    return new CodeGet('', '(a => a * 20)');
  }
  function getStandardCompiler$lambda$lambda$lambda_40($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_55);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_56($receiver) {
    return new CodeGet('', '({m: a => a * 20})');
  }
  function getStandardCompiler$lambda$lambda$lambda_41($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_56);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_57($receiver) {
    return new CodeGet('', '(Math.PI)');
  }
  function getStandardCompiler$lambda$lambda$lambda_42($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_57);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_58($receiver) {
    return new CodeGet('', '(Math.sin)');
  }
  function getStandardCompiler$lambda$lambda$lambda_43($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_58);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_59($receiver) {
    return new CodeGet('', '((a, b) => Math.log(a) / Math.log(b))');
  }
  function getStandardCompiler$lambda$lambda$lambda_44($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_59);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_60($receiver) {
    return new CodeGet('', '(array => code => array.map(item => code(item)))');
  }
  function getStandardCompiler$lambda$lambda$lambda_45($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_60);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_61($receiver) {
    return new CodeGet('', 'true');
  }
  function getStandardCompiler$lambda$lambda$lambda_46($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_61);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_62($receiver) {
    return new CodeGet('', 'false');
  }
  function getStandardCompiler$lambda$lambda$lambda_47($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_62);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_63($receiver) {
    return new CodeGet('', 'null');
  }
  function getStandardCompiler$lambda$lambda$lambda_48($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_63);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_64($receiver) {
    return new CodeGet('', 'NaN');
  }
  function getStandardCompiler$lambda$lambda$lambda_49($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_64);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_65($receiver) {
    return new CodeGet('', 'Infinity');
  }
  function getStandardCompiler$lambda$lambda$lambda_50($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_65);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_66($receiver) {
    return new CodeGet('', 'undefined');
  }
  function getStandardCompiler$lambda$lambda$lambda_51($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_66);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_67($receiver) {
    return new CodeGet('', '(message => { throw new Error(runtime.toString(message)); })');
  }
  function getStandardCompiler$lambda$lambda$lambda_52($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_67);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_68($receiver) {
    return new CodeGet('', '(runtime.symbolToString)');
  }
  function getStandardCompiler$lambda$lambda$lambda_53($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_68);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_69($receiver) {
    return new CodeGet('', '(runtime.symbolAdd)');
  }
  function getStandardCompiler$lambda$lambda$lambda_54($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_69);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_70($receiver) {
    return new CodeGet('', '(runtime.symbolSubtract)');
  }
  function getStandardCompiler$lambda$lambda$lambda_55($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_70);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_71($receiver) {
    return new CodeGet('', '(runtime.symbolMultiply)');
  }
  function getStandardCompiler$lambda$lambda$lambda_56($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_71);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_72($receiver) {
    return new CodeGet('', '(runtime.symbolDivide)');
  }
  function getStandardCompiler$lambda$lambda$lambda_57($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_72);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda$lambda_73($receiver) {
    return new CodeGet('', '(runtime.symbolStream)');
  }
  function getStandardCompiler$lambda$lambda$lambda_58($receiver) {
    $receiver.get.invoke_ru8m1r$(getStandardCompiler$lambda$lambda$lambda$lambda_73);
    return Unit;
  }
  function getStandardCompiler$lambda$lambda$lambda_59(closure$code) {
    return function ($receiver) {
      $receiver.not_pdl1vz$(closure$code.head);
      $receiver.not_pdl1vz$('return ' + closure$code.body + ';' + '\n');
      return Unit;
    };
  }
  function getStandardCompiler$lambda$lambda(closure$code) {
    return function ($receiver) {
      $receiver.not_pdl1vz$('(function(runtime) {\n');
      $receiver.indent_3vmjfp$(getStandardCompiler$lambda$lambda$lambda_59(closure$code));
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
    var binaryOperatorGetter = getStandardCompiler$lambda$lambda$binaryOperatorGetter(context);
    $receiver.invoke_rm9vxy$(asterisk, getStandardCompiler$lambda$lambda$lambda_22(binaryOperatorGetter));
    $receiver.invoke_rm9vxy$(slash, getStandardCompiler$lambda$lambda$lambda_23(binaryOperatorGetter));
    $receiver.invoke_rm9vxy$(plus_0, getStandardCompiler$lambda$lambda$lambda_24(binaryOperatorGetter));
    $receiver.invoke_rm9vxy$(minus, getStandardCompiler$lambda$lambda$lambda_25(binaryOperatorGetter));
    $receiver.invoke_rm9vxy$(period_period, getStandardCompiler$lambda$lambda$lambda_26(binaryOperatorGetter));
    $receiver.invoke_rm9vxy$(tilde, getStandardCompiler$lambda$lambda$lambda_27(binaryOperatorGetter));
    var binaryConditionOperatorGetter = getStandardCompiler$lambda$lambda$binaryConditionOperatorGetter(context);
    var binaryConditionOperatorRunner = getStandardCompiler$lambda$lambda$binaryConditionOperatorRunner(context);
    $receiver.invoke_rm9vxy$(ampersand_ampersand, getStandardCompiler$lambda$lambda$lambda_28(binaryConditionOperatorGetter, binaryConditionOperatorRunner));
    $receiver.invoke_rm9vxy$(pipe_pipe, getStandardCompiler$lambda$lambda$lambda_29(binaryConditionOperatorGetter, binaryConditionOperatorRunner));
    $receiver.invoke_rm9vxy$(question_colon, getStandardCompiler$lambda$lambda$lambda_30(binaryConditionOperatorGetter, binaryConditionOperatorRunner));
    $receiver.invoke_rm9vxy$(exclamation_colon, getStandardCompiler$lambda$lambda$lambda_31(binaryConditionOperatorGetter, binaryConditionOperatorRunner));
    $receiver.invoke_rm9vxy$(ternary_question_colon, getStandardCompiler$lambda$lambda$lambda_32(context));
    $receiver.invoke_rm9vxy$(exclamation_question, getStandardCompiler$lambda$lambda$lambda_33(context));
    $receiver.invoke_rm9vxy$(minus_greater, getStandardCompiler$lambda$lambda$lambda_34(context));
    $receiver.invoke_rm9vxy$(colon, getStandardCompiler$lambda$lambda$lambda_35(context));
    $receiver.invoke_rm9vxy$(equal, getStandardCompiler$lambda$lambda$lambda_36(context));
    $receiver.invoke_rm9vxy$(pipe, getStandardCompiler$lambda$lambda$lambda_37(context));
    $receiver.invoke_rm9vxy$(semicolon, getStandardCompiler$lambda$lambda$lambda_38(context));
    var $receiver_0 = context.aliases;
    $receiver_0.invoke_2lqwj7$('A', getStandardCompiler$lambda$lambda$lambda_39);
    $receiver_0.invoke_2lqwj7$('F', getStandardCompiler$lambda$lambda$lambda_40);
    $receiver_0.invoke_2lqwj7$('O', getStandardCompiler$lambda$lambda$lambda_41);
    $receiver_0.invoke_2lqwj7$('PI', getStandardCompiler$lambda$lambda$lambda_42);
    $receiver_0.invoke_2lqwj7$('SIN', getStandardCompiler$lambda$lambda$lambda_43);
    $receiver_0.invoke_2lqwj7$('LOG', getStandardCompiler$lambda$lambda$lambda_44);
    $receiver_0.invoke_2lqwj7$('MAP', getStandardCompiler$lambda$lambda$lambda_45);
    $receiver_0.invoke_2lqwj7$('TRUE', getStandardCompiler$lambda$lambda$lambda_46);
    $receiver_0.invoke_2lqwj7$('FALSE', getStandardCompiler$lambda$lambda$lambda_47);
    $receiver_0.invoke_2lqwj7$('NULL', getStandardCompiler$lambda$lambda$lambda_48);
    $receiver_0.invoke_2lqwj7$('NAN', getStandardCompiler$lambda$lambda$lambda_49);
    $receiver_0.invoke_2lqwj7$('INFINITY', getStandardCompiler$lambda$lambda$lambda_50);
    $receiver_0.invoke_2lqwj7$('UNDEFINED', getStandardCompiler$lambda$lambda$lambda_51);
    $receiver_0.invoke_2lqwj7$('ERROR', getStandardCompiler$lambda$lambda$lambda_52);
    $receiver_0.invoke_2lqwj7$('OPERATOR_TO_STRING', getStandardCompiler$lambda$lambda$lambda_53);
    $receiver_0.invoke_2lqwj7$('OPERATOR_ADD', getStandardCompiler$lambda$lambda$lambda_54);
    $receiver_0.invoke_2lqwj7$('OPERATOR_SUBTRACT', getStandardCompiler$lambda$lambda$lambda_55);
    $receiver_0.invoke_2lqwj7$('OPERATOR_MULTIPLY', getStandardCompiler$lambda$lambda$lambda_56);
    $receiver_0.invoke_2lqwj7$('OPERATOR_DIVIDE', getStandardCompiler$lambda$lambda$lambda_57);
    $receiver_0.invoke_2lqwj7$('OPERATOR_STREAM', getStandardCompiler$lambda$lambda$lambda_58);
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
  FramedRegistry.prototype.stack_klfg04$ = defineInlineFunction('fl9_compiler.fl9.FramedRegistry.stack_klfg04$', function (block) {
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
  function TernaryOperatorArgument(left, center, right) {
    this.left = left;
    this.center = center;
    this.right = right;
  }
  TernaryOperatorArgument.$metadata$ = {kind: Kind_CLASS, simpleName: 'TernaryOperatorArgument', interfaces: []};
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
  var period_period;
  var tilde;
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
  package$fl9.isType_8kgrp5$ = isType;
  package$fl9.maybe_v3bpf4$ = maybe;
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
  package$token.TernaryOperatorArgument = TernaryOperatorArgument;
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
  Object.defineProperty(package$token, 'period_period', {get: function () {
    return period_period;
  }});
  Object.defineProperty(package$token, 'tilde', {get: function () {
    return tilde;
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
  period_period = new Token('period_period');
  tilde = new Token('tilde');
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

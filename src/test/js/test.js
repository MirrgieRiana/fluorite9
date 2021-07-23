const fl9_parser = require("fl9_parser.js");
const fl9_compiler = require("fl9_compiler.js");
const fl9_runtime = require("fl9_runtime.js");

function assertEquals(expected, src) {
  const node = fl9_parser.parse(src);
  const compiler = fl9_compiler.fl9.createCompiler();
  fl9_compiler.fl9.applyStandardOperatorPlugin(compiler);
  fl9_compiler.fl9.applyEnglishKeywordPlugin(compiler);
  const code = fl9_compiler.fl9.compile(compiler, node);
  const runtime = new fl9_runtime.Runtime();
  runtime.addLibrary(require("fl9_lib/std.js").main(runtime));
  runtime.addLibrary(require("fl9_lib/console.js").main(runtime));
  let result;
  {
    const exports = {};
    const module = {exports: {}};
    eval(code);
    result = module.exports.main(runtime);
  }
  if (result !== expected) {
    console.error("Assertion Error:");
    console.error(`  expected: ${expected} (${typeof expected})`);
    console.error(`  actual  : ${result} (${typeof result})`);
    console.error("");
    console.error("===== Source =====");
    console.error(src);
    console.error("");
    console.error("===== JS Code =====");
    console.error(code);
    console.error("");
    throw new Error("Assertion Error");
  }
}

function assertEqualsJson(expected, src) {
  const node = fl9_parser.parse(src);
  const compiler = fl9_compiler.fl9.createCompiler();
  fl9_compiler.fl9.applyStandardOperatorPlugin(compiler);
  fl9_compiler.fl9.applyEnglishKeywordPlugin(compiler);
  const code = fl9_compiler.fl9.compile(compiler, node);
  const runtime = new fl9_runtime.Runtime();
  runtime.addLibrary(require("fl9_lib/std.js").main(runtime));
  let result;
  {
    const exports = {};
    const module = {exports: {}};
    eval(code);
    result = module.exports.main(runtime);
  }
  if (JSON.stringify(result) !== JSON.stringify(expected)) {
    console.error("Assertion Error:");
    console.error(`  expected: ${expected} (Json)`);
    console.error(`  actual  : ${result} (Json)`);
    console.error("");
    console.error("===== Source =====");
    console.error(src);
    console.error("");
    console.error("===== JS Code =====");
    console.error(code);
    console.error("");
    throw new Error("Assertion Error");
  }
}

// 改行
{

  // セミコロンは省略できる
  assertEquals(8, `
    a : 0
    f : () -> a = a + 1
    1 .. 7 | f[]
    f[]
    a
  `);

  // 中置演算子の直後では改行してもよい
  assertEquals(123, `
    100 +
    20 +
    3
  `);

  // 括弧のすぐ内側では改行してもよい
  assertEquals(123, `
    f : a, b, c -> a + b + c
    f[
      100
      20
      3
    ]
  `);

  // アクセス演算子の左側では改行してもよい
  assertEquals(1, `
    {a={b={c={d=1}}}}
      .a
      .b
      .c
      .d
  `);

  // 中置演算子の直前では改行できない
  assertEquals(3, `
    100
    + 20
    + 3
  `);

  // 後置括弧演算子の直前では改行できない
  assertEquals(3, `
    100
    (20)
    (3)
  `);

  // \ は改行を無効化する
  assertEquals(1234, `
    1000 \\
    + 200 \\
    \\+ 30
    \\+ 4
  `);

  // \ の効果は複数行に渡る
  assertEquals(123, `
    100 \\

    + 20

    \\+ 3
  `);

  // \ を置けば三項演算子をインデントして書ける
  assertEquals(4, `
    1
      \\? 2
        \\? 4
        \\: 5
      \\: 3
        \\? 6
        \\: 7
  `);

  // \ を無駄に大量に書いてもよい
  assertEquals("abcdefghi", `
    "abc"\\
    \\\\ \\ + \\\\"def"\\
      \\+ \\"ghi"\\
  `);

}

// 整数
{
  assertEquals(0, "     0");
  assertEquals(1, "     1");
  assertEquals(10, "   10");
  assertEquals(10, "  010"); // 先頭が0でも8進数にしない
  assertEquals(-10, " -10"); // 負号
  assertEquals(0, "    -0"); // 整数の負の0は正の0と等しい
  assertEquals(10, "  +10"); // 正号
  assertEquals(10, " + 10"); // 符号と数値の間にスペースを入れてもよい
  assertEquals(-10, "- 10"); // 符号と数値の間にスペースを入れてもよい
}

// 文字列
{

  // 文字列
  assertEquals('', "             ''                   ");
  assertEquals('abc', "          'abc'                ");
  assertEquals('["][\'][n][t]', "'[\"][\\'][\\n][\\t]'"); // エスケープは常に直後の文字を返す

  // 埋め込み文字列
  assertEquals("", '               ""                   ');
  assertEquals("abc", '            "abc"                ');
  assertEquals("['][\"][\n][\t]", '"[\'][\\"][\\n][\\t]"'); // エスケープは直後の文字によって異なる挙動になる
  assertEquals("TRUE", '           "$TRUE"              '); // 識別子1個しかなくても文字列化はされる
  assertEquals("[TRUE]", '         "[$TRUE]"            '); // 文字と埋め込みの混在
  assertEquals("TRUE", '           "$(TRUE)"            '); // ドル括弧による埋め込み
  assertEquals("3", '              "$(1 + 2)"           '); // 式の埋め込み

}

// EFL
{
  assertEquals("123abc", "        %>123abc<%                   "); // 文字列を書ける
  assertEquals("123abc", "        %>12<%= '3a' %>bc<%          "); // 文字列を埋め込むことができる
  assertEquals("123abc", "        %>12<%= 3 %>abc<%            "); // 文字列以外を埋め込むと文字列化される
  assertEquals("---1,2,3---", "   %>---<%= [1; 2; 3] %>---<%   "); // 配列の埋め込み
  assertEquals(true, "            %><%= TRUE %><% === 'TRUE'   "); // 要素が埋め込みしかなくても文字列化は行う
  assertEquals("aaa1bbb2ccc", "   %>aaa<%= 1 %>bbb<%= 2 %>ccc<%"); // 複数の埋め込みを含むEFL
  assertEquals("[\"]['][\\][$]", "%>[\"]['][\\][$]<%           "); // EFLの中では通常のエスケープは無効
}

// 配列初期化子
{
  assertEqualsJson([], "                   [                     ]"); // 空配列
  assertEqualsJson([0], "                  [0                    ]"); // 要素数が1個の配列
  assertEqualsJson([0, 1], "               [0; 1                 ]"); // 要素数が2個の配列
  assertEqualsJson([0, 1, 2], "            [0 .. 2               ]"); // ストリームを含む配列
  assertEqualsJson([0, 1, 2, 3], "         [0 .. 2; 3            ]"); // ストリームを含む複数の要素を持つ配列
  assertEqualsJson([0, 1], "               [0; (); 1             ]"); // 空ストリームを含む配列
  assertEquals("0,NULL,UNDEFINED,1", "    &[0; NULL; UNDEFINED; 1]"); // NULLおよびUNDEFINEDを要素に持つ配列
  assertEqualsJson([0, [1, 2], 3], "       [0; [1; 2]; 3         ]"); // 配列を含む配列

  assertEqualsJson([1, "abc", [2, 3], null], `[
    1
    "abc"
    ()
    [2; 3]
    NULL
  ]`); // 改行によって記述される配列
}

// フォーマット
{
  assertEquals("[12]", '      "[$%s(     12 )]"'); // 何もしないフォーマッター
  assertEquals("[   12]", '  "[$%5s(     12 )]"'); // 5桁埋めフォーマッター
  assertEquals("[00012]", ' "[$%05s(     12 )]"'); // 0埋め
  assertEquals("[000ab]", ' "[$%05s(    "ab")]"'); // 文字列もOK
  assertEquals("[123456]", ' "[$%5s( 123456 )]"'); // 溢れた場合は単に埋め込む

  assertEquals("12", '$%s(12)'); // 中身が数値で特にフォーマットする内容がなくても文字列化は行う
}

// 関数呼び出し
{

  // 基本
  assertEquals(123, "([    ] ->              123)[    ]"); // 0引数関数の呼び出し
  assertEquals(200, "([a   ] -> a * 100         )[2   ]"); // 1引数関数の呼び出し
  assertEquals(230, "([a; b] -> a * 100 + b * 10)[2; 3]"); // 多引数関数の呼び出し

  // 複数行形式での ; を省略した関数呼び出し
  assertEquals(230, `
    (a, b -> a * 100 + b * 10)[
      2
      3
    ]
  `);

  // 名前付き引数
  assertEqualsJson([2, 3, {a : 4       }], "(a, b, args -> [a; b; args])[2; 3; a : 4       ]"); // 名前付き引数
  assertEqualsJson([2, 3, {a : 4, b : 5}], "(a, b, args -> [a; b; args])[2; 3; a : 4; b : 5]"); // 名前付き引数を複数指定すると1個にまとめられる
  assertEqualsJson([2, 3, {a : 4       }], "(a, b, args -> [a; b; args])[2; a : 4; 3       ]"); // 名前付き引数のあとに通常の引数を記述してもよい
  assertEqualsJson([2, 3, {a : 4       }], "(a, b, args -> [a; b; args])[2; a : 4; 3;      ]"); // 名前付き引数のあとでは無駄な ; は無視される

  // 配列の要素アクセス
  assertEqualsJson([], "                [[]       [  ]               ]"); // 空配列のストリームアクセス
  assertEqualsJson([1, 2, 3], "         [[1; 2; 3][  ]               ]"); // 配列のストリームアクセス
  assertEqualsJson([1, 2, 3, 4, 5, 6], "[[1; 2; 3][  ]; [4; 5; 6][  ]]"); // 配列のストリームアクセス
  assertEquals(2, "                      [1; 2; 3][ 1]                "); // 配列の要素アクセス
  assertEquals(undefined, "              [1; 2; 3][-1]                "); // 配列の定義域外要素アクセス
  assertEquals(undefined, "              [1; 2; 3][ 3]                "); // 配列の定義域外要素アクセス

  // クロージャによる関数呼び出し
  assertEquals(30, "(      block -> block[2 * 5  ])           (_ * 3)") // クロージャを受け取る関数は後置 ( ) で呼び出せる
  assertEquals(30, "(a,    block -> block[a * 5  ])[2       ] (_ * 3)") // クロージャと引数は同時に指定できる
  assertEquals(30, "(a, o, block -> block[a * o.c])[2; c : 5] (_ * 3)") // クロージャと引数と名前付き引数を同時に指定する

}

// デリゲート
{
  assertEquals(100, "o : {v = 100; m = _       -> _.v        }; o::m[     ]"); // メソッド
  assertEquals(120, "o : {v = 100; m = _, b    -> _.v + b    }; o::m[20   ]"); // 1個の引数を受け取るメソッド
  assertEquals(123, "o : {v = 100; m = _, b, c -> _.v + b + c}; o::m[20; 3]"); // 2個の引数を受け取るメソッド
}

// 数値化
{
  assertEquals(1, '   +        1 '); // 数値
  assertEquals(1.5, ' +     "1.5"'); // 文字列
  assertEquals(-1.5, '+    "-1.5"'); // 文字列
  assertEquals(1, '   +     TRUE '); // 論理値
  assertEquals(0, '   +    FALSE '); // 論理値
  assertEquals(0, '   +UNDEFINED '); // UNDEFINED
  assertEquals(0, '   +     NULL '); // NULL

  assertEquals(6, '+(   1, 2,  3 )'); // ストリーム
  assertEquals(6, '+(TRUE, 2, "3")'); // 不一致型のストリーム
  assertEquals(0, '+(            )'); // 空ストリーム

  assertEquals(50, '  o : {(OPERATOR_TO_NUMBER) = _ ->  50   }; +o'); // オーバーライド
  assertEquals(-1.5, 'o : {(OPERATOR_TO_NUMBER) = _ -> "-1.5"}; +o'); // オーバーライドの結果は数値化される
}

// 文字列化
{
  assertEquals("a\nb\nc", '   &(  "a", "b", "c")'); // ストリーム
  assertEquals("TRUE\n2\n3", '&(TRUE ,  2 , "3")'); // 不一致型のストリーム
  assertEquals("", '          &(               )'); // 空ストリーム
}

// 論理値化
{
  assertEquals(false, '?(FALSE, FALSE, FALSE )'); // ストリーム
  assertEquals(true, ' ?(FALSE,  TRUE, FALSE )'); // ストリーム
  assertEquals(true, ' ?( TRUE,  TRUE,  TRUE )'); // ストリーム
  assertEquals(true, ' ?( TRUE,     2,    "3")'); // 不一致型のストリーム
  assertEquals(false, '?(                    )'); // 空ストリーム
}

// JSONエンコード・デコード
{
  assertEquals('1', '$&1'); // 数値のJSON化
  assertEquals('"a"', '$&"a"'); // 文字列のJSON化
  assertEquals('"a\\nb"', '$&"a\\nb"'); // エスケープが必要な文字を含む文字列のJSON化
  assertEquals('true', '$&TRUE'); // 論理値のJSON化
  assertEquals('[\n  1,\n  2,\n  [\n    3,\n    4\n  ],\n  5\n]', '$&[1 .. 2; [3; 4]; 5]'); // 配列のJSON化
  assertEquals('{\n  "a": 1,\n  "b": [\n    2,\n    3\n  ]\n}', '$&{a = 1; b = [2; 3]}'); // オブジェクトのJSON化

  assertEquals(true, 'v : [1; "a"; TRUE; NULL; {b = 2}]; v.$& === v.$&.$*.$&'); // JSONにして戻す
}

// 四則演算
{

  // 数値同士の四則演算
  assertEquals(110, " 100 + 10");
  assertEquals(90, "  100 - 10");
  assertEquals(1000, "100 * 10");
  assertEquals(10, "  100 / 10");

  assertEquals(142, "106 + 20 * 2 - 8 / 2"); // 結合優先度
  assertEquals(0.5, "1 / 2"); // 余りの出る除算

  // 文字列連結
  assertEquals("123456", "'123' + '456'");

  // 文字列リピート
  assertEquals("123123123123", "'123' *  4 ");
  assertEquals("123123123123", "'123' * '4'"); // 右辺が文字列

}

// 剰余
{
  assertEquals(1, "10 % 3"); // 基本
  assertEquals(0, "10 % 2"); // 基本
}

// 条件
{

  // 三項演算子
  assertEquals(1, "TRUE  ? 1 : 2");
  assertEquals(2, "FALSE ? 1 : 2");

  // エルビス演算子
  assertEquals(1, "    1         ?: 2");
  assertEquals(null, " NULL      ?: 2");
  assertEquals(false, "FALSE     ?: 2");
  assertEquals(2, "    UNDEFINED ?: 2");

  // 逆エルビス演算子
  assertEquals(2, "        1         !: 2");
  assertEquals(2, "        NULL      !: 2");
  assertEquals(2, "        FALSE     !: 2");
  assertEquals(undefined, "UNDEFINED !: 2");

  // try演算子
  assertEquals(1, "1       !? 2");
  assertEquals(2, "THROW[] !? 2");

  // 三項演算子の結合優先度
  assertEquals(4, "FALSE ? FALSE ? 1 : 2 : FALSE ? 3 : 4");
  assertEquals(3, "FALSE ? FALSE ? 1 : 2 : TRUE  ? 3 : 4");
  assertEquals(4, "FALSE ? TRUE  ? 1 : 2 : FALSE ? 3 : 4");
  assertEquals(3, "FALSE ? TRUE  ? 1 : 2 : TRUE  ? 3 : 4");
  assertEquals(2, "TRUE  ? FALSE ? 1 : 2 : FALSE ? 3 : 4");
  assertEquals(2, "TRUE  ? FALSE ? 1 : 2 : TRUE  ? 3 : 4");
  assertEquals(1, "TRUE  ? TRUE  ? 1 : 2 : FALSE ? 3 : 4");
  assertEquals(1, "TRUE  ? TRUE  ? 1 : 2 : TRUE  ? 3 : 4");

  // エルビス演算子の結合優先度
  assertEquals(3, "UNDEFINED ?: UNDEFINED ?: 3");
  assertEquals(2, "UNDEFINED ?: 2         ?: 3");
  assertEquals(1, "1         ?: 2         ?: 3");

}

// 等価性比較
{

  // 抽象的な等価性比較
  assertEquals(true, '    1  ==   1 ');
  assertEquals(true, '   "1" ==   1 ');
  assertEquals(false, '   2  ==   1 ');
  assertEquals(false, '  "2" ==   1 ');
  assertEquals(true, '   "1" ==  "1"');
  assertEquals(false, '  "2" ==  "1"');
  assertEquals(false, ' "01" ==  "1"');
  assertEquals(true, '    1  ==  "1"');
  assertEquals(false, '   2  ==  "1"');
  assertEquals(true, '   01  ==  "1"');

  assertEquals(!true, '   1  !=   1 ');
  assertEquals(!true, '  "1" !=   1 ');
  assertEquals(!false, '  2  !=   1 ');
  assertEquals(!false, ' "2" !=   1 ');
  assertEquals(!true, '  "1" !=  "1"');
  assertEquals(!false, ' "2" !=  "1"');
  assertEquals(!false, '"01" !=  "1"');
  assertEquals(!true, '   1  !=  "1"');
  assertEquals(!false, '  2  !=  "1"');
  assertEquals(!true, '  01  !=  "1"');

  // 厳格な等価性比較
  assertEquals(true, '    1  ===  1 ');
  assertEquals(false, '  "1" ===  1 ');
  assertEquals(false, '   2  ===  1 ');
  assertEquals(false, '  "2" ===  1 ');
  assertEquals(true, '   "1" === "1"');
  assertEquals(false, '  "2" === "1"');
  assertEquals(false, ' "01" === "1"');
  assertEquals(false, '   1  === "1"');
  assertEquals(false, '   2  === "1"');
  assertEquals(false, '  01  === "1"');

  assertEquals(!true, '   1  !==  1 ');
  assertEquals(!false, ' "1" !==  1 ');
  assertEquals(!false, '  2  !==  1 ');
  assertEquals(!false, ' "2" !==  1 ');
  assertEquals(!true, '  "1" !== "1"');
  assertEquals(!false, ' "2" !== "1"');
  assertEquals(!false, '"01" !== "1"');
  assertEquals(!false, '  1  !== "1"');
  assertEquals(!false, '  2  !== "1"');
  assertEquals(!false, ' 01  !== "1"');

}

// 大小比較
{

  // 数値の大小比較
  {
    assertEquals(true, ' 2 >  1');
    assertEquals(true, ' 2 >= 1');
    assertEquals(false, '2 <  1');
    assertEquals(false, '2 <= 1');

    assertEquals(false, '1 >  2');
    assertEquals(false, '1 >= 2');
    assertEquals(true, ' 1 <  2');
    assertEquals(true, ' 1 <= 2');

    assertEquals(false, '1 >  1');
    assertEquals(true, ' 1 >= 1');
    assertEquals(false, '1 <  1');
    assertEquals(true, ' 1 <= 1');
  }

  // 連続した比較
  assertEquals(true, ' 1 < 2 <= 2 <= 3 < 4  < 5 == 5 > 3  === 3 > 0 != 2 > -5 !== 7 ');
  assertEquals(false, '1 < 1 <= 2 <= 3 < 4  < 5 == 5 > 3  === 3 > 0 != 2 > -5 !== 7 ');
  assertEquals(false, '1 < 2 <= 2 <= 3 < 40 < 5 == 5 > 3  === 3 > 0 != 2 > -5 !== 7 ');
  assertEquals(false, '1 < 2 <= 2 <= 3 < 4  < 5 == 4 > 3  === 3 > 0 != 2 > -5 !== 7 ');
  assertEquals(false, '1 < 2 <= 2 <= 3 < 4  < 5 == 5 > 3  === 4 > 0 != 2 > -5 !== 7 ');
  assertEquals(false, '1 < 2 <= 2 <= 3 < 4  < 5 == 5 > 3  === 3 > 0 != 0 > -5 !== 7 ');
  assertEquals(false, '1 < 2 <= 2 <= 3 < 4  < 5 == 5 > 3  === 3 > 0 != 2 > -5 !== -5');

}

// カンマ
{

  assertEquals("", '   &[    ,       ]'); // 単 , は空ストリーム
  assertEquals("1", '  &[   1,       ]'); // 左単要素
  assertEquals("2", '  &[    ,   2   ]'); // 右単要素
  assertEquals("1,2", '&[   1,   2   ]'); // 2項
  assertEquals("1,2", '&[,,,1,,,,2,,,]'); // 冗長な .

  // 複数行表記でもちゃんと単一のストリームが生成されているか
  assertEquals(7, `
    $#[
      1,
      2,
      (
        3,
        4,
        5
      ),
      6,
      (
      ),
      7,
    ]
  `);

}

// ラムダ式
{

  assertEquals(123, "([    ] ->              123)[    ]"); // 引数は0個でもよい
  assertEquals(200, "([a   ] -> a * 100         )[2   ]"); // 引数は1個でもよい
  assertEquals(230, "([a; b] -> a * 100 + b * 10)[2; 3]"); // 引数は複数でもよい
  assertEquals(230, "((a; b) -> a * 100 + b * 10)[2; 3]"); // 引数列は () で囲んでもよい
  assertEquals(230, "((a, b) -> a * 100 + b * 10)[2; 3]"); // 引数列は , で区切ってもよい
  assertEquals(230, "( a, b  -> a * 100 + b * 10)[2; 3]"); // 引数列を , で区切るとき、括弧を省略してもよい

  // 複数行関数宣言
  assertEquals(230, `
    f : a, b ->
      a * 100 + b * 10
    f[2; 3]
  `);

}

// パイプ
{

  // getドメイン
  assertEquals("", "   &[()   |      _    ]"); // 空ストリーム
  assertEquals("1", "  &[1    |      _    ]"); // 要素が1個のストリーム
  assertEquals("1,2", "&[1, 2 |      _    ]"); // 要素が複数のストリーム
  assertEquals("1,4", "&[1, 2 |      _ * _]"); // 要素に対する演算
  assertEquals("1,4", "&[1, 2 | a => a * a]"); // 引数名の指定

  // runドメイン
  // 副作用が1回だけ発生する
  assertEquals(120, `
    a : 1
    1 .. 5 | b => a = a * b
    a
  `);

}

// Console
{
  assertEquals(3, '  JS[     "1 + 2"]  '); // JSコード呼び出し
  assertEquals(123, 'JS["({a: 123})"].a'); // JSコードは複雑な値も返せる

  assertEquals("/abc", 'REQUIRE["path"].resolve["/abc/def"; ".."]'); // REQUIRE
}

console.log("test.js OK");

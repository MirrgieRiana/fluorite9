const parser = require("fl9_parser.js");
const compiler = require("fl9_compiler.js");
const runtime = require("fl9_runtime.js");

function assertEquals(expected, src) {
  const node = parser.parse(src);
  const code = compiler.fl9.getStandardCompiler()(node);
  const result = eval(code)(runtime);
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
  assertEquals(3, `
    1000 \\
    + 200 \\
    \\+ 30
    \\+ 4
  `);

  // \ の効果は複数行に渡る
  assertEquals(3, `
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

// デリゲート
{
  assertEquals(100, "o : {v = 100; m = _       -> _.v        }; o::m[     ]"); // メソッド
  assertEquals(120, "o : {v = 100; m = _, b    -> _.v + b    }; o::m[20   ]"); // 1個の引数を受け取るメソッド
  assertEquals(123, "o : {v = 100; m = _, b, c -> _.v + b + c}; o::m[20; 3]"); // 2個の引数を受け取るメソッド
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

console.log("Test OK");
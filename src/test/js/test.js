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
    throw new Exception("Assertion Error");
  }
}

// 四則演算
{

  // 数値同士の四則演算
  assertEquals(110, " 100 + 10");
  assertEquals(90, "  100 - 10");
  assertEquals(1000, "100 * 10");
  assertEquals(10, "  100 / 10");

  // 四則演算の結合優先度
  assertEquals(142, "106 + 20 * 2 - 8 / 2");

  // 余りの出る除算
  assertEquals(0.5, "1 / 2");

  // 文字列連結
  assertEquals("123456", "'123' + '456'");

  // 文字列リピート
  assertEquals("123123123123", "'123' *  4 ");
  assertEquals("123123123123", "'123' * '4'");

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
  assertEquals(2, "ERROR[] !? 2");

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

console.log("Test OK");

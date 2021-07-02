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

// 数値同士の四則演算
assertEquals(110, "100 + 10");
assertEquals(90, "100 - 10");
assertEquals(1000, "100 * 10");
assertEquals(10, "100 / 10");

// 四則演算の結合優先度
assertEquals(142, "106 + 20 * 2 - 8 / 2");

// 余りの出る除算
assertEquals(0.5, "1 / 2");

// 文字列連結
assertEquals("123456", "'123' + '456'");

// 文字列リピート
assertEquals("123123123123", "'123' * 4");
assertEquals("123123123123", "'123' * '4'");

console.log("Test OK");

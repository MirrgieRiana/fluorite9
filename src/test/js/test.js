const parser = require("fl9_parser.js");
const compiler = require("fl9_compiler.js");
const runtime = require("fl9_runtime.js");

function assertEquals(expected, src) {
  const node = parser.parse(src);
  const code = compiler.fl9.getStandardCompiler()(node);
  const result = runtime.toString(eval(code)(runtime));
  if (result !== expected) {
    console.error("Assertion Error:");
    console.error("  expected:" + expected);
    console.error("  actual  :" + result);
    throw new Exception("Assertion Error");
  }
}

assertEquals("2", "1 + 1");

console.log("Test OK");

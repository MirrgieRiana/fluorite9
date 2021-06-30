const parser = require("./fl9_parser.js");
const compiler = require("./fl9_compiler.js");
const runtime = require("./fl9_runtime.js");

const src = process.argv[2];
const node = parser.parse(src);
const code = compiler.fl9.getStandardCompiler()(node);
const result = runtime.toString(eval(code)(runtime));
console.log(result);

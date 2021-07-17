const fs = require("fs");

function usage() {
  console.log("Usage: [-N | -C] [-n | -c] [-e] (-f <input_file> | [--] <exec>)");
  process.exit(1);
}

let nodeInput = false;
let nodeOutput = false;
let codeInput = false;
let codeOutput = false;
let fileInput = undefined;
let embedded = false;
let exec = undefined;

const argv = [...process.argv];
argv.shift();
argv.shift();
while (argv.length > 0) {

  if (argv[0] === "-N") {
    if (nodeInput) usage();
    if (codeInput) usage();
    nodeInput = true;
    argv.shift();
    continue;
  }
  if (argv[0] === "-C") {
    if (nodeInput) usage();
    if (codeInput) usage();
    codeInput = true;
    argv.shift();
    continue;
  }

  if (argv[0] === "-n") {
    if (nodeOutput) usage();
    if (codeOutput) usage();
    nodeOutput = true;
    argv.shift();
    continue;
  }
  if (argv[0] === "-c") {
    if (nodeOutput) usage();
    if (codeOutput) usage();
    codeOutput = true;
    argv.shift();
    continue;
  }

  if (argv[0] === "-e") {
    if (embedded) usage();
    embedded = true;
    argv.shift();
    continue;
  }

  if (argv[0] === "-f") {
    argv.shift();
    if (argv.length === 0) usage();

    if (fileInput !== undefined) usage();
    if (exec !== undefined) usage();
    fileInput = argv[0];
    argv.shift();
    continue;
  }
  if (argv[0] === "--") {
    argv.shift();
    if (argv.length === 0) usage();

    if (fileInput !== undefined) usage();
    if (exec !== undefined) usage();
    exec = argv[0];
    argv.shift();
    continue;
  }
  {
    if (fileInput !== undefined) usage();
    if (exec !== undefined) usage();
    exec = argv[0];
    argv.shift();
    continue;
  }

}

if (fileInput === undefined && exec === undefined) usage();

//

function main() {

  let src;
  if (fileInput !== undefined) {
    if (fileInput === "-") {
      src = fs.readFileSync(0, {encoding: "utf8"});
    } else {
      src = fs.readFileSync(fileInput, {encoding: "utf8"});
    }
  } else {
    src = exec;
  }

  let node;
  if (codeInput) {
    node = src;
  } else if (nodeInput) {
    node = JSON.parse(src);
  } else {
    const fl9_parser = embedded ? require("fl9_parser_embedded.js") : require("fl9_parser.js");
    node = fl9_parser.parse(src);
  }
  if (nodeOutput) {
    console.log(JSON.stringify(node, undefined, "  "));
    return;
  }

  let code;
  if (codeInput) {
    code = node;
  } else {
    const fl9_compiler = require("fl9_compiler.js");
    const compiler = fl9_compiler.fl9.createCompiler();
    fl9_compiler.fl9.applyStandardOperatorPlugin(compiler);
    fl9_compiler.fl9.applyEnglishKeywordPlugin(compiler);
    code = fl9_compiler.fl9.compile(compiler, node);
  }
  if (codeOutput) {
    console.log(code);
    return;
  }

  const fl9_runtime = require("fl9_runtime.js");
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

  if (result !== runtime.getVoid()) {
    for (let item of runtime.toStream(result)) {
      console.log(runtime.toString(item));
    }
  }

}
main();

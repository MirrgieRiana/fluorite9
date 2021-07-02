const parser = require("fl9_parser.js");
const compiler = require("fl9_compiler.js");
const runtime = require("fl9_runtime.js");

function usage() {
  console.log("Usage: [-N] [-n] [-C] [-c] [--] <exec>");
  process.exit(1);
}

let nodeInput = false;
let nodeOutput = false;
let codeInput = false;
let codeOutput = false;
let exec = undefined;

const argv = [...process.argv];
argv.shift();
argv.shift();
while (argv.length > 0) {

  if (argv[0] === "-N") {
    nodeInput = true;
    argv.shift();
    continue;
  }
  if (argv[0] === "-n") {
    nodeOutput = true;
    argv.shift();
    continue;
  }
  if (argv[0] === "-C") {
    codeInput = true;
    argv.shift();
    continue;
  }
  if (argv[0] === "-c") {
    codeOutput = true;
    argv.shift();
    continue;
  }
  if (argv[0] === "--") {
    argv.shift();
    if (argv.length === 0) usage();
    exec = argv[0];
    argv.shift();
    continue;
  }
  exec = argv[0];
  argv.shift();
  continue;
}

if (exec === undefined) usage();

//

function main() {
  const src = exec;
  const node = codeInput ? src : nodeInput ? JSON.parse(src) : parser.parse(src);
  if (nodeOutput) {
    console.log(JSON.stringify(node, undefined, "  "));
    return;
  }
  const code = codeInput ? node : compiler.fl9.getStandardCompiler()(node);
  if (codeOutput) {
    console.log(code);
    return;
  }
  const result = runtime.toString(eval(code)(runtime));
  console.log(result);
}
main();

const fs = require("fs");
const parser = require("fl9_parser.js");
const compiler = require("fl9_compiler.js");
const runtime = require("fl9_runtime.js");

function usage() {
  console.log("Usage: [-N | -C] [-n | -c] (-f <input_file> | [--] <exec>)");
  process.exit(1);
}

let nodeInput = false;
let nodeOutput = false;
let codeInput = false;
let codeOutput = false;
let fileInput = undefined;
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
  let result;
  {
    const exports = {};
    const module = {exports: {}};
    eval(code);
    result = runtime.toString(module.exports.main(runtime));
  }
  console.log(result);
}
main();

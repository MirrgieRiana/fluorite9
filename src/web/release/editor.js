
let parser;
$.ajax("fl9_parser.pegjs", {
  dataType: "text",
}).done(data => {
  parser = peg.generate(data, {
    cache: true,
    allowedStartRules: ["Root"],
  })
});

function compile() {

  const src = document.getElementById("src").value;
  console.log(src);

  let node;
  try {
    node = parser.parse(src);
  } catch (e) {
    console.error(e);
    document.getElementById("node").value = "" + e;
    document.getElementById("code").value = "";
    document.getElementById("result").value = "";
    return;
  }
  document.getElementById("node").value = JSON.stringify(node, null, "  ");
  console.log(node);

  let code;
  try {
    const compiler = fl9_compiler.fl9.createCompiler();
    fl9_compiler.fl9.applyStandardOperatorPlugin(compiler);
    fl9_compiler.fl9.applyEnglishKeywordPlugin(compiler);
    code = fl9_compiler.fl9.compile(compiler, node);
  } catch (e) {
    console.error(e);
    document.getElementById("code").value = "" + e;
    document.getElementById("result").value = "";
    return;
  }
  document.getElementById("code").value = code;
  console.log(code);

  const runtime = new fl9_runtime.Runtime();
  runtime.addLibrary(fl9_lib_std.main(runtime));

  let result;
  try {
    const exports = {};
    const module = {exports: {}};
    eval(code);
    result = module.exports.main(runtime);
  } catch (e) {
    console.error(e);
    document.getElementById("result").value = "" + e;
    return;
  }
  console.log(result);

  let string;
  try {
    string = runtime.toString(result);
  } catch (e) {
    console.error(e);
    document.getElementById("result").value = "" + e;
    return;
  }
  document.getElementById("result").value = string;
  console.log(string);

}

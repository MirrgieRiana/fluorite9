
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
    code = fl9_compiler.fl9.getStandardCompiler()(node);
  } catch (e) {
    console.error(e);
    document.getElementById("code").value = "" + e;
    document.getElementById("result").value = "";
    return;
  }
  document.getElementById("code").value = code;
  console.log(code);

  let result;
  try {
    result = eval(code)(fl9_runtime);
  } catch (e) {
    console.error(e);
    document.getElementById("result").value = "" + e;
    return;
  }
  console.log(result);

  let string;
  try {
    string = fl9_runtime.toString(result);
  } catch (e) {
    console.error(e);
    document.getElementById("result").value = "" + e;
    return;
  }
  document.getElementById("result").value = string;
  console.log(string);

}


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
    console.log(e);
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
    console.log(e);
    document.getElementById("code").value = "" + e;
    document.getElementById("result").value = "";
    return;
  }
  document.getElementById("code").value = code;
  console.log(code);

  let result;
  try {
    result = fl9_runtime.toString(eval(code)(fl9_runtime));
  } catch (e) {
    console.log(e);
    document.getElementById("result").value = "" + e;
    return;
  }
  document.getElementById("result").value = result;
  console.log(result);

}

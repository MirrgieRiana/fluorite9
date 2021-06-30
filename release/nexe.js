const nexe = require("nexe");

nexe.compile({
  input: "./fl9.js",
  output: "./fl9.bin",
//  build: true,
  target: "linux-x64-14.15.3",
//  nodeVersion: "14.15.3", //'8.9.0',
//  nodeTempDir: __dirname + "/tmp",
//  resources: ["./assets/**/*"]
}, function (err) {
  if (err) console.log(err);
});

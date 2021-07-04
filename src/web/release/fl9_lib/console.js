(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports === 'object') {
    factory(module.exports);
  } else {
    root.fl9_lib_console = factory(typeof fl9_lib_console === 'undefined' ? {} : fl9_lib_console);
  }
}(this, function(_) {
  "use strict";
  const fs = require("fs");

  _.main = function(runtime) {
    const object = Object.create(null);
    object.IN = runtime.Fl9Stream(function*() {
      const lines = fs.readFileSync(0, "utf8").split(/\r\n|\r|\n/);
      if (lines[lines.length] === "") lines.pop();
      for (let line of lines) {
        yield line;
      }
    });
    return object;
  };
  return _;
}));

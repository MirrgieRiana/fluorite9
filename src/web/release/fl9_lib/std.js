(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports === 'object') {
    factory(module.exports);
  } else {
    root.fl9_lib_std = factory(typeof fl9_lib_std === 'undefined' ? {} : fl9_lib_std);
  }
}(this, function(_) {
  "use strict";
  _.main = function(runtime) {
    const object = Object.create(null);
    object.PI = Math.PI;
    object.SIN = Math.sin;
    object.COS = Math.cos;
    object.TAN = Math.tan;
    object.LOG = function() {
      if (arguments.length == 1) return Math.log(runtime.toNumber(arguments[0]));
      if (arguments.length == 2) return Math.log(runtime.toNumber(arguments[0])) / Math.log(runtime.toNumber(arguments[1]));
      throw new Error(`Illegal Arguments: ${arguments.callee.name}/${arguments.length}`);
    };
    object.MAP = code => array => array.map(item => code(item));
    return object;
  };
  return _;
}));

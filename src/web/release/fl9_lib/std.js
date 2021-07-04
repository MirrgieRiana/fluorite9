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
    object.LOG = (a, b) => Math.log(a) / Math.log(b);
    object.MAP = code => array => array.map(item => code(item));
    return object;
  };
  return _;
}));

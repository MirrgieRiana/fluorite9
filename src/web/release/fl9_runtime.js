(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports === 'object') {
    factory(module.exports);
  } else {
    root.fl9_runtime = factory(typeof fl9_runtime === 'undefined' ? {} : fl9_runtime);
  }
}(this, function(runtime) {
  runtime.empty = {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      return {
        done: true
      };
    }
  };
  runtime.toNumber = function(value) {
    if (typeof value === "number") return value;
    if (typeof value === "string") return parseFloat(value);
    if (typeof value === "boolean") return value ? 1 : 0;
    throw new Error("Illegal Action: toNumber(" + value + ")");
  };
  runtime.toString = function(value) {
    if (typeof value === "string") return value;
    if (typeof value === "number") return "" + value;
    if (typeof value === "boolean") return value ? "TRUE" : "FALSE";
    if (value instanceof Array) return value.map(item => runtime.toString(item)).join(",");
    if (typeof value === "object") return Object.getOwnPropertyNames(value).map(name => `${name}:${runtime.toString(value[name])};`).join("");
    throw new Error("Illegal Action: toString(" + value + ")");
  };
  runtime.toBoolean = function(value) {
    if (typeof value === "boolean") return value;
    if (typeof value === "number") return value !== 0;
    if (typeof value === "string") return value !== "";
    throw new Error("Illegal Action: toBoolean(" + value + ")");
  };
  runtime.getLength = function(value) {
    if (typeof value === "string") return value.length;
    if (value instanceof Array) return value.length;
    throw new Error("Illegal Action: getLength(" + value + ")");
  };
  runtime.apply = function(value, args) {
    if (value instanceof Function) {
      return value.apply(null, args);
    } else if (value instanceof Array) {
      return value[args[0]];
    } else {
      throw new Error(`Illegal Argument: ${value.constructor.name}[${args.constructor.name}]`);
    }
  };
  return runtime;
}));

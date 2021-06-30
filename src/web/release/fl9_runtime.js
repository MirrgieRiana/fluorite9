(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports === 'object') {
    factory(module.exports);
  } else {
    root.fl9_runtime = factory(typeof fl9_runtime === 'undefined' ? {} : fl9_runtime);
  }
}(this, function(runtime) {
  runtime.symbolToString = Symbol("fl9ToString");
  runtime.symbolStream = Symbol("fl9Stream");

  runtime.Fl9Stream = class Fl9Stream {
    constructor(func) {
      this[runtime.symbolStream] = func;
    }
    [runtime.symbolToString]() {
      let string = "";
      let first = true;
      for (let item of this[runtime.symbolStream]()) {
        if (first) {
          first = false;
        } else {
          string += "\n";
        }
        string += runtime.toString(item);
      }
      return string;
    }
  };

  runtime.empty = new runtime.Fl9Stream(function*() { });
  runtime.void = {
    [runtime.symbolToString]() {
      throw new Error("Void access");
    },
    [runtime.symbolStream]() {
      throw new Error("Void access");
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
    if (typeof value === "object" && value[runtime.symbolToString] !== undefined) return value[runtime.symbolToString]();
    if (typeof value === "object") return Object.getOwnPropertyNames(value).map(name => `${name}:${runtime.toString(value[name])};`).join("");
    throw new Error("Illegal Action: toString(" + value + ")");
  };
  runtime.toBoolean = function(value) {
    if (typeof value === "boolean") return value;
    if (typeof value === "number") return value !== 0;
    if (typeof value === "string") return value !== "";
    throw new Error("Illegal Action: toBoolean(" + value + ")");
  };
  runtime.toStream = function(value) {
    if (value[runtime.symbolStream] !== undefined) return value;
    return new runtime.Fl9Stream(function*() {
      yield value;
    });
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
  runtime.rangeOpened = function(start, endExcluded) {
    start = runtime.toNumber(start);
    endExcluded = runtime.toNumber(endExcluded);
    return new runtime.Fl9Stream(function*() {
      for (let i = start; i < endExcluded; i++) {
        yield i;
      }
    });
  };
  runtime.rangeClosed = function(start, endExcluded) {
    start = runtime.toNumber(start);
    endExcluded = runtime.toNumber(endExcluded);
    return new runtime.Fl9Stream(function*() {
      for (let i = start; i <= endExcluded; i++) {
        yield i;
      }
    });
  };
  runtime.map = function(stream, func) {
    stream = runtime.toStream(stream);
    return new runtime.Fl9Stream(function*() {
      for (item of stream[runtime.symbolStream]()) {
        yield func(item);
      }
    });
  };
  return runtime;
}));

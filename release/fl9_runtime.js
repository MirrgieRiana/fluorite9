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
  runtime.symbolAdd = Symbol("fl9Add");
  runtime.symbolSubtract = Symbol("fl9Subtract");
  runtime.symbolMultiply = Symbol("fl9Multiply");
  runtime.symbolDivide = Symbol("fl9Divide");
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
  runtime.add = function(left, right) {
    if (typeof left === "number") return left + runtime.toNumber(right);
    if (typeof left === "string") return left + runtime.toString(right);
    if (left instanceof Array) {
      if (!(right instanceof Array)) throw new Error(`Illegal Argument: ${left.constructor.name} + ${right.constructor.name}`);
      return [...left, ...right];
    }
    if (typeof left === "object" && left[runtime.symbolAdd] !== undefined) return left[runtime.symbolAdd](left, right);
    throw new Error(`Illegal Argument: ${left.constructor.name}.add(${right.constructor.name})`);
  };
  runtime.subtract = function(left, right) {
    if (typeof left === "number") return left - runtime.toNumber(right);
    if (typeof left === "object" && left[runtime.symbolSubtract] !== undefined) return left[runtime.symbolSubtract](left, right);
    throw new Error(`Illegal Argument: ${left.constructor.name}.subtract(${right.constructor.name})`);
  };
  runtime.multiply = function(left, right) {
    if (typeof left === "number") return left * runtime.toNumber(right);
    if (typeof left === "string") return left.repeat(runtime.toNumber(right));
    if (left instanceof Array) return Array.from({length: runtime.toNumber(right)}).flatMap(item => left);
    if (typeof left === "object" && left[runtime.symbolMultiply] !== undefined) return left[runtime.symbolMultiply](left, right);
    throw new Error(`Illegal Argument: ${left.constructor.name}.multiply(${right.constructor.name})`);
  };
  runtime.divide = function(left, right) {
    if (typeof left === "number") return left / runtime.toNumber(right);
    if (typeof left === "object" && left[runtime.symbolDivide] !== undefined) return left[runtime.symbolDivide](left, right);
    throw new Error(`Illegal Argument: ${left.constructor.name}.divide(${right.constructor.name})`);
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

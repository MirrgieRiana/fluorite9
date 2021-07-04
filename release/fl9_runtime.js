(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports === 'object') {
    factory(module.exports);
  } else {
    root.fl9_runtime = factory(typeof fl9_runtime === 'undefined' ? {} : fl9_runtime);
  }
}(this, function(_) {
  "use strict";

  const symbolToString = Symbol("fl9ToString");
  const symbolAdd = Symbol("fl9Add");
  const symbolSubtract = Symbol("fl9Subtract");
  const symbolMultiply = Symbol("fl9Multiply");
  const symbolDivide = Symbol("fl9Divide");
  const symbolStream = Symbol("fl9Stream");

  class Fl9Stream {
    constructor(runtime, func) {
      this._runtime = runtime;
      this[symbolStream] = func;
    }
    [symbolToString]() {
      let string = "";
      let first = true;
      for (let item of this[symbolStream]()) {
        if (first) {
          first = false;
        } else {
          string += "\n";
        }
        string += this._runtime.toString(item);
      }
      return string;
    }
  }

  class Runtime {
    constructor() {
      this._libraries = [];
    }

    addLibrary(library) {
      this._libraries.unshift(library);
    }

    getEmpty() {
      return new this.Fl9Stream(this, function*() { });
    }
    getVoid() {
      return {
        [symbolToString]: () => { throw new Error("Void access"); },
        [symbolAdd]: () => { throw new Error("Void access"); },
        [symbolSubtract]: () => { throw new Error("Void access"); },
        [symbolMultiply]: () => { throw new Error("Void access"); },
        [symbolDivide]: () => { throw new Error("Void access"); },
        [symbolStream]: () => { throw new Error("Void access"); },
      };
    }

    get(name) {
      for (let library of this._libraries) {
        const value = library[name];
        if (value !== undefined) return value;
      }
      throw Error(`Unknown Variable: ${name}`)
    }
    set(name, value) {
      throw Error(`Unknown Variable: ${name}`)
    }

    isStream(value) {
      if (value === null) return false;
      if (value === undefined) return false;
      return value[symbolStream] !== undefined;
    }
    toStream(value) {
      if (value[symbolStream] !== undefined) return value;
      return new this.Fl9Stream(this, function*() {
        yield value;
      });
    }
    streamToIterable(value) {
      return value[symbolStream]();
    }

    toNumber(value) {
      if (typeof value === "number") return value;
      if (typeof value === "string") return parseFloat(value);
      if (typeof value === "boolean") return value ? 1 : 0;
      throw new Error("Illegal Action: toNumber(" + value + ")");
    }
    toString(value) {
      if (typeof value === "string") return value;
      if (typeof value === "number") return "" + value;
      if (typeof value === "boolean") return value ? "TRUE" : "FALSE";
      if (value === undefined) return "UNDEFINED";
      if (value === null) return "NULL";
      if (value instanceof Array) return value.map(item => this.toString(item)).join(",");
      if (typeof value === "object" && value[symbolToString] !== undefined) return value[symbolToString]();
      if (typeof value === "object") return Object.getOwnPropertyNames(value).map(name => `${name}:${this.toString(value[name])};`).join("");
      throw new Error("Illegal Action: toString(" + value + ")");
    }
    toBoolean(value) {
      if (typeof value === "boolean") return value;
      if (typeof value === "number") return value !== 0;
      if (typeof value === "string") return value !== "";
      throw new Error("Illegal Action: toBoolean(" + value + ")");
    }

    getLength(value) {
      if (typeof value === "string") return value.length;
      if (value instanceof Array) return value.length;
      throw new Error("Illegal Action: getLength(" + value + ")");
    }
    toJson(value) {
      return JSON.stringify(value, null, "  ");
    }
    fromJson(value) {
      return JSON.parse(this.toString(value));
    }

    add(left, right) {
      if (typeof left === "number") return left + this.toNumber(right);
      if (typeof left === "string") return left + this.toString(right);
      if (left instanceof Array) {
        if (!(right instanceof Array)) throw new Error(`Illegal Argument: ${left.constructor.name} + ${right.constructor.name}`);
        return [...left, ...right];
      }
      if (typeof left === "object" && left[symbolAdd] !== undefined) return left[symbolAdd](left, right);
      throw new Error(`Illegal Argument: ${left.constructor.name}.add(${right.constructor.name})`);
    }
    subtract(left, right) {
      if (typeof left === "number") return left - this.toNumber(right);
      if (typeof left === "object" && left[symbolSubtract] !== undefined) return left[symbolSubtract](left, right);
      throw new Error(`Illegal Argument: ${left.constructor.name}.subtract(${right.constructor.name})`);
    }
    multiply(left, right) {
      if (typeof left === "number") return left * this.toNumber(right);
      if (typeof left === "string") return left.repeat(this.toNumber(right));
      if (left instanceof Array) return Array.from({length: this.toNumber(right)}).flatMap(item => left);
      if (typeof left === "object" && left[symbolMultiply] !== undefined) return left[symbolMultiply](left, right);
      throw new Error(`Illegal Argument: ${left.constructor.name}.multiply(${right.constructor.name})`);
    }
    divide(left, right) {
      if (typeof left === "number") return left / this.toNumber(right);
      if (typeof left === "object" && left[symbolDivide] !== undefined) return left[symbolDivide](left, right);
      throw new Error(`Illegal Argument: ${left.constructor.name}.divide(${right.constructor.name})`);
    }

    apply(value, args) {
      if (value instanceof Function) {
        return value.apply(null, args);
      } else if (value instanceof Array) {
        return value[args[0]];
      } else {
        throw new Error(`Illegal Argument: ${value.constructor.name}[${args.constructor.name}]`);
      }
    }
    createDelegate(object, key) {
      const symbol = Symbol("<DELEGATE>")
      return {[symbol]: function() {
        return object[key].apply(object, [object, ...arguments]);
      }}[symbol];
    }
    rangeOpened(start, endExcluded) {
      start = this.toNumber(start);
      endExcluded = this.toNumber(endExcluded);
      return new this.Fl9Stream(this, function*() {
        for (let i = start; i < endExcluded; i++) {
          yield i;
        }
      });
    }
    rangeClosed(start, endExcluded) {
      start = this.toNumber(start);
      endExcluded = this.toNumber(endExcluded);
      return new this.Fl9Stream(this, function*() {
        for (let i = start; i <= endExcluded; i++) {
          yield i;
        }
      });
    }
    map(stream, func) {
      stream = this.toStream(stream);
      return new this.Fl9Stream(this, function*() {
        for (item of stream[symbolStream]()) {
          yield func(item);
        }
      });
    }

  }
  Runtime.prototype.symbolToString = symbolToString;
  Runtime.prototype.symbolAdd = symbolAdd;
  Runtime.prototype.symbolSubtract = symbolSubtract;
  Runtime.prototype.symbolMultiply = symbolMultiply;
  Runtime.prototype.symbolDivide = symbolDivide;
  Runtime.prototype.symbolStream = symbolStream;
  Runtime.prototype.Fl9Stream = Fl9Stream;

  _.Runtime = Runtime;
  return _;
}));

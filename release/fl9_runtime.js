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

  const symbolToNumber = Symbol("fl9.symbolToNumber");
  const symbolToString = Symbol("fl9.symbolToString");
  const symbolToBoolean = Symbol("fl9.symbolToBoolean");
  const symbolAdd = Symbol("fl9.symbolAdd");
  const symbolSubtract = Symbol("fl9.symbolSubtract");
  const symbolMultiply = Symbol("fl9.symbolMultiply");
  const symbolDivide = Symbol("fl9.symbolDivide");

  const theVoid = {
   [symbolToString]: () => { throw new Error("Void access"); },
   [symbolAdd]: () => { throw new Error("Void access"); },
   [symbolSubtract]: () => { throw new Error("Void access"); },
   [symbolMultiply]: () => { throw new Error("Void access"); },
   [symbolDivide]: () => { throw new Error("Void access"); },
 };

  class Fl9Stream {
    constructor(runtime, generator) {
      this._runtime = runtime;
      this._generator = generator;
    }
    [symbolToNumber]() {
      let i = 0;
      for (let item of this) {
        i += this._runtime.toNumber(item);
      }
      return i;
    }
    [symbolToString]() {
      let string = "";
      let first = true;
      for (let item of this) {
        if (first) {
          first = false;
        } else {
          string += "\n";
        }
        string += this._runtime.toString(item);
      }
      return string;
    }
    [symbolToBoolean]() {
      let b = false;
      for (let item of this) {
        b = b || this._runtime.toBoolean(item);
      }
      return b;
    }
    [Symbol.iterator]() {
      return this._generator();
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
      return theVoid;
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

    toStream(value) {
      if (value instanceof this.Fl9Stream) return value;
      return new this.Fl9Stream(this, function*() {
        yield value;
      });
    }

    toNumber(value) {
      if (typeof value === "number") return value;
      if (typeof value === "string") return parseFloat(value);
      if (typeof value === "boolean") return value ? 1 : 0;

      if (value === undefined) return 0;
      if (value === null) return 0;

      if (typeof value === "object") {
        if (value[symbolToNumber] !== undefined) return this.toNumber(value[symbolToNumber]());
        throw new Error("Illegal Action: toNumber(" + value + ")");
      }

      throw new Error("Illegal Action: toNumber(" + value + ")");
    }
    toString(value) {
      if (typeof value === "string") return value;
      if (typeof value === "number") return "" + value;
      if (typeof value === "boolean") return value ? "TRUE" : "FALSE";

      if (value === undefined) return "UNDEFINED";
      if (value === null) return "NULL";

      if (typeof value === "object") {
        if (value[symbolToString] !== undefined) return this.toString(value[symbolToString]());
        if (value instanceof Array) return Array.from({length: value.length}).map((v, i) => this.toString(value[i])).join(",");
        return Object.getOwnPropertyNames(value).map(name => `${name}:${this.toString(value[name])};`).join("");
      }

      if (typeof value === "function") return `FUNCTION[${value.name}]`;

      throw new Error("Illegal Action: toString(" + value + ")");
    }
    toBoolean(value) {
      if (typeof value === "boolean") return value;
      if (typeof value === "number") return value !== 0;
      if (typeof value === "string") return value !== "";

      if (value === undefined) return false;
      if (value === null) return false;

      if (typeof value === "object") {
        if (value[symbolToBoolean] !== undefined) return this.toBoolean(value[symbolToBoolean]());
        return true;
      }

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
    mod(left, right) {
      if (typeof left === "number") return left % this.toNumber(right);
      throw new Error(`Illegal Argument: ${left.constructor.name}.mod(${right.constructor.name})`);
    }

    arrayToStream(array) {
      return new this.Fl9Stream(this, function*() {
        for (let item of array) {
          yield item;
        }
      });
    }

    apply(value, args) {
      if (value instanceof Function) {
        return value.apply(null, args);
      } else if (value instanceof Array) {
        if (args.length === 0) {
          return this.arrayToStream(value);
        } else if (args.length === 1) {
          return value[args[0]];
        }
      } else {
        throw new Error(`Illegal Argument: ${value.constructor.name}[${args.constructor.name}]`);
      }
    }
    setValue(object, key, value) {
      if (object instanceof Array) {
        if (typeof key === "number") {
          object[key] = value;
        } else {
          object[this.toNumber(key)] = value;
        }
      } else if (typeof object === "object" && object !== null) {
        if (typeof key === "string") {
          object[key] = value;
        } else if (typeof key === "symbol") {
          object[key] = value;
        } else {
          object[this.toString(key)] = value;
        }
      } else {
       throw new Error("Illegal Action: setValue(" + typeof object + ", " + typeof key + ", " + typeof value + ")");
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
    createStream(array) {
      const runtime = this;
      return new this.Fl9Stream(this, function*() {
        for (let item of array) {
          if (item instanceof runtime.Fl9Stream) {
            for (let item2 of item) {
              yield item2;
            }
          } else {
            yield item;
          }
        }
      });
    }
    map(stream, func) {
      stream = this.toStream(stream);
      return new this.Fl9Stream(this, function*() {
        for (let item of stream) {
          yield func(item);
        }
      });
    }

    isContainedKey(value, container) {
      if (typeof container === "object" && container !== null) {
        if (typeof value === "string") {
          return Object.getOwnPropertyDescriptor(container, value) !== undefined;
        } else if (typeof value === "symbol") {
          return Object.getOwnPropertyDescriptor(container, value) !== undefined;
        } else {
          return Object.getOwnPropertyDescriptor(container, runtime.toString(value)) !== undefined;
        }
      }
      throw new Error("Illegal Action: isContainedKey(" + typeof value + ", " + typeof container + ")");
    }
    isContained(value, container) {
      if (typeof container === "object" && container !== null) {
        for (let name of Object.getOwnPropertyNames(container)) {
          if (value == container[name]) return true;
        }
        return false;
      }
      throw new Error("Illegal Action: isContained(" + typeof value + ", " + typeof container + ")");
    }

  }
  Runtime.prototype.symbolToNumber = symbolToNumber;
  Runtime.prototype.symbolToString = symbolToString;
  Runtime.prototype.symbolToBoolean = symbolToBoolean;
  Runtime.prototype.symbolAdd = symbolAdd;
  Runtime.prototype.symbolSubtract = symbolSubtract;
  Runtime.prototype.symbolMultiply = symbolMultiply;
  Runtime.prototype.symbolDivide = symbolDivide;
  Runtime.prototype.Fl9Stream = Fl9Stream;

  _.Runtime = Runtime;
  return _;
}));

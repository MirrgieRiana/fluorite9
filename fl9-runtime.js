
this.fl9StandardRuntime = {
  empty: {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      return {
        done: true
      };
    }
  },
  toNumber(value) {
    if (typeof value === "number") return value;
    if (typeof value === "string") return parseFloat(value);
    if (typeof value === "boolean") return value ? 1 : 0;
    throw new Error("Illegal Action: toNumber(" + value + ")");
  },
  toString(value) {
    if (typeof value === "string") return value;
    if (typeof value === "number") return "" + value;
    if (typeof value === "boolean") return value ? "TRUE" : "FALSE";
    throw new Error("Illegal Action: toNumber(" + value + ")");
  },
  toBoolean(value) {
    if (typeof value === "boolean") return value;
    if (typeof value === "number") return value !== 0;
    if (typeof value === "string") return value !== "";
    throw new Error("Illegal Action: toNumber(" + value + ")");
  },
  getLength(value) {
    if (typeof value === "string") return value.length;
    if (value instanceof Array) return value.length;
    throw new Error("Illegal Action: getLength(" + value + ")");
  },
  apply(value, args) {
    if (value instanceof Function) {
      return value.apply(null, args);
    } else if (value instanceof Array) {
      return value[args[0]];
    } else {
      throw new Error(`Illegal Argument: ${value.constructor.name}[${args.constructor.name}]`);
    }
  },
  global(name) {
    return {
      a: [1, 2, 3],
      f: a => a * 20,
      pi: Math.PI,
      map: array => code => array.map(item => code(item))
    }[name];
  }
};

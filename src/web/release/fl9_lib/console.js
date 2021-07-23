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

  function createBufferReader(runtime, fd, size, doClose) {
    return new runtime.Fl9Stream(runtime, function*() {
      const buffer = Buffer.alloc(size);
      while (true) {

        // 1回だけバッファを掬う
        let length;
        while (true) {
          try {
            length = fs.readSync(fd, buffer, 0, buffer.length, null);
          } catch (e) {
            if (e.code === "EAGAIN") {
              // 再試行
              continue;
            } else {
              throw e;
            }
          }
          break;
        }

        // ファイルの終端に来た場合は終了する
        if (length === 0) {
          if (doClose) fs.closeSync(fd);
          return;
        }

        yield Array.from(buffer.subarray(0, length));
      }
    });
  }

  _.main = function(runtime) {
    const object = Object.create(null);
    object.IN = new runtime.Fl9Stream(runtime, function*() {
      const lines = fs.readFileSync(process.stdin.fd, "utf8").split(/\r\n|\r|\n/);
      if (lines[lines.length - 1] === "") lines.pop();
      for (let line of lines) {
        yield line;
      }
    });
    object.INB = createBufferReader(runtime, process.stdin.fd, 4096, false);
    object.OUT = function OUT() {
      if (arguments.length == 1) {
        const stream = runtime.toStream(arguments[0]);
        for (let item of stream) {
          process.stdout.write(runtime.toString(item));
          process.stdout.write("\n");
        }
        return runtime.getVoid();
      }
      throw new Error("Illegal argument");
    };
    object.OUTB = function OUTB() {
      if (arguments.length == 1) {
        const stream = runtime.toStream(arguments[0]);
        for (let item of stream) {
          if (item instanceof Array) {
            process.stdout.write(Buffer.from(item))
          } else if (typeof item === "string") {
            process.stdout.write(item);
          } else {
            throw new Error("Illegal argument");
          }
        }
        return runtime.getVoid();
      }
      throw new Error("Illegal argument");
    };
    object.READ = function READ() {
      if (arguments.length == 1) {
        const file = runtime.toString(arguments[0]);
        return new runtime.Fl9Stream(runtime, function*() {
          const fd = fs.openSync(file, "r");
          const lines = fs.readFileSync(fd, "utf8").split(/\r\n|\r|\n/);
          if (lines[lines.length - 1] === "") lines.pop();
          for (let line of lines) {
            yield line;
          }
          fs.closeSync(fd);
        });
      }
      throw new Error("Illegal argument");
    };
    object.JS = function JS() {
      if (arguments.length == 1) {
        return eval(runtime.toString(arguments[0]))
      }
      throw new Error("Illegal argument");
    };
    object.REQUIRE = function REQUIRE() {
      if (arguments.length == 1) {
        return require(runtime.toString(arguments[0]))
      }
      throw new Error("Illegal argument");
    };
    return object;
  };

  return _;
}));

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
  const child_process = require("child_process");

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

    function execBase(name, encoding, filename, args, options, stdin) {
      const usage = () => new Error('Usage: ' + name + '[filename : STRING; args : STRING... = (,); options : OBJECT = {env : OBJECT = {}}; stdin : (ARRAY<NUMBER> | ANY) = ""]');

      if (filename === undefined) throw usage();
      filename = runtime.toString(filename);

      if (args === undefined) args = runtime.getEmpty();
      args = runtime.toStream(args);
      args = Array.from(args).map(item => runtime.toString(item));

      if (options === undefined) options = {};
      if (typeof options !== "object") throw usage();
      if (options === null) throw usage();

      let env = options.env;
      if (env === undefined) env = {};
      if (typeof env !== "object") throw usage();
      if (env === null) throw usage();
      env = {
        ...process.env,
        ...env
      };

      if (stdin === undefined) stdin = "";
      if (stdin instanceof Array) {
        stdin = Buffer.from(stdin);
      } else {
        stdin = runtime.toString(stdin);
      }

      return child_process.execFileSync(filename, args, {
        input: stdin,
        encoding: encoding,
        maxBuffer: 64 * 1024 * 1024,
        env: env
      });
    }
    object.EXEC = function EXEC(filename, args, options, stdin) {
      if (arguments.length > 4) throw usage();
      const stringOut = execBase("EXEC", "utf8", filename, args, options, stdin);
      const arrayOut = stringOut.split("\n");
      if (arrayOut[arrayOut.length - 1] === "") arrayOut.pop();
      return runtime.arrayToStream(arrayOut);
    };
    object.EXECB = function EXECB(filename, args, options, stdin) {
      if (arguments.length > 4) throw usage();
      return runtime.toStream(Array.from(execBase("EXECB", undefined, filename, args, options, stdin)));
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

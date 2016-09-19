(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.B1062942835 = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var B = exports.B = function ($exports) {
    var printSomething = $exports.printSomething = function printSomething(s) {
      console.log("other message");
      console.log(s);
    };

    return $exports;
  }({});
});
//# sourceMappingURL=B-1062942835.js.map
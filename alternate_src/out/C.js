(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./fable_external/B-1062942835"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./fable_external/B-1062942835"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.B1062942835);
    global.C = mod.exports;
  }
})(this, function (exports, _B) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.testFromB = testFromB;

  function testFromB(e) {
    _B.B.printSomething(e);
  }

  testFromB("Hello World!");
});
//# sourceMappingURL=C.js.map
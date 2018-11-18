/**
 * suture v0.0.0 build Sun Nov 18 2018
 * https://github.com/vanruesc/suture
 * Copyright 2018 Raoul van Rüschen, Zlib
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.SUTURE = {})));
}(this, (function (exports) { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Suture = function Suture() {
    _classCallCheck(this, Suture);
  };

  exports.Suture = Suture;

  Object.defineProperty(exports, '__esModule', { value: true });

})));

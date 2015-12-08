/**
 * suture v0.0.0 build Dec 08 2015
 * https://github.com/vanruesc/suture
 * Copyright 2015 Raoul van Rüschen, Apache-2.0
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	factory((global.SUTURE = {}));
}(this, function (exports) { 'use strict';

	/**
	 * The Suture game engine.
	 *
	 * @class Suture
	 */

	function Suture() {
	}

	exports.Suture = Suture;

}));
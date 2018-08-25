/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/rellax/rellax.js":
/*!***************************************!*\
  !*** ./node_modules/rellax/rellax.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n// ------------------------------------------\n// Rellax.js\n// Buttery smooth parallax library\n// Copyright (c) 2016 Moe Amaya (@moeamaya)\n// MIT license\n//\n// Thanks to Paraxify.js and Jaime Cabllero\n// for parallax concepts\n// ------------------------------------------\n\n(function (root, factory) {\n  if (true) {\n    // AMD. Register as an anonymous module.\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else {}\n})(this, function () {\n  var Rellax = function Rellax(el, options) {\n    \"use strict\";\n\n    var self = Object.create(Rellax.prototype);\n\n    var posY = 0;\n    var screenY = 0;\n    var posX = 0;\n    var screenX = 0;\n    var blocks = [];\n    var pause = true;\n\n    // check what requestAnimationFrame to use, and if\n    // it's not supported, use the onscroll event\n    var loop = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (callback) {\n      setTimeout(callback, 1000 / 60);\n    };\n\n    // check which transform property to use\n    var transformProp = window.transformProp || function () {\n      var testEl = document.createElement('div');\n      if (testEl.style.transform === null) {\n        var vendors = ['Webkit', 'Moz', 'ms'];\n        for (var vendor in vendors) {\n          if (testEl.style[vendors[vendor] + 'Transform'] !== undefined) {\n            return vendors[vendor] + 'Transform';\n          }\n        }\n      }\n      return 'transform';\n    }();\n\n    // Default Settings\n    self.options = {\n      speed: -2,\n      center: false,\n      wrapper: null,\n      round: true,\n      vertical: true,\n      horizontal: false,\n      callback: function callback() {}\n    };\n\n    // User defined options (might have more in the future)\n    if (options) {\n      Object.keys(options).forEach(function (key) {\n        self.options[key] = options[key];\n      });\n    }\n\n    // By default, rellax class\n    if (!el) {\n      el = '.rellax';\n    }\n\n    // check if el is a className or a node\n    var elements = typeof el === 'string' ? document.querySelectorAll(el) : [el];\n\n    // Now query selector\n    if (elements.length > 0) {\n      self.elems = elements;\n    }\n\n    // The elements don't exist\n    else {\n        throw new Error(\"The elements you're trying to select don't exist.\");\n      }\n\n    // Has a wrapper and it exists\n    if (self.options.wrapper) {\n      if (!self.options.wrapper.nodeType) {\n        var wrapper = document.querySelector(self.options.wrapper);\n\n        if (wrapper) {\n          self.options.wrapper = wrapper;\n        } else {\n          throw new Error(\"The wrapper you're trying to use don't exist.\");\n        }\n      }\n    }\n\n    // Get and cache initial position of all elements\n    var cacheBlocks = function cacheBlocks() {\n      for (var i = 0; i < self.elems.length; i++) {\n        var block = createBlock(self.elems[i]);\n        blocks.push(block);\n      }\n    };\n\n    // Let's kick this script off\n    // Build array for cached element values\n    var init = function init() {\n      for (var i = 0; i < blocks.length; i++) {\n        self.elems[i].style.cssText = blocks[i].style;\n      }\n\n      blocks = [];\n\n      screenY = window.innerHeight;\n      screenX = window.innerWidth;\n      setPosition();\n\n      cacheBlocks();\n\n      // If paused, unpause and set listener for window resizing events\n      if (pause) {\n        window.addEventListener('resize', init);\n        pause = false;\n      }\n      animate();\n    };\n\n    // We want to cache the parallax blocks'\n    // values: base, top, height, speed\n    // el: is dom object, return: el cache values\n    var createBlock = function createBlock(el) {\n      var dataPercentage = el.getAttribute('data-rellax-percentage');\n      var dataSpeed = el.getAttribute('data-rellax-speed');\n      var dataZindex = el.getAttribute('data-rellax-zindex') || 0;\n\n      // initializing at scrollY = 0 (top of browser), scrollX = 0 (left of browser)\n      // ensures elements are positioned based on HTML layout.\n      //\n      // If the element has the percentage attribute, the posY and posX needs to be\n      // the current scroll position's value, so that the elements are still positioned based on HTML layout\n      var wrapperPosY = self.options.wrapper ? self.options.wrapper.scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;\n      var posY = self.options.vertical ? dataPercentage || self.options.center ? wrapperPosY : 0 : 0;\n      var posX = self.options.horizontal ? dataPercentage || self.options.center ? window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft : 0 : 0;\n\n      var blockTop = posY + el.getBoundingClientRect().top;\n      var blockHeight = el.clientHeight || el.offsetHeight || el.scrollHeight;\n\n      var blockLeft = posX + el.getBoundingClientRect().left;\n      var blockWidth = el.clientWidth || el.offsetWidth || el.scrollWidth;\n\n      // apparently parallax equation everyone uses\n      var percentageY = dataPercentage ? dataPercentage : (posY - blockTop + screenY) / (blockHeight + screenY);\n      var percentageX = dataPercentage ? dataPercentage : (posX - blockLeft + screenX) / (blockWidth + screenX);\n      if (self.options.center) {\n        percentageX = 0.5;percentageY = 0.5;\n      }\n\n      // Optional individual block speed as data attr, otherwise global speed\n      var speed = dataSpeed ? dataSpeed : self.options.speed;\n\n      var bases = updatePosition(percentageX, percentageY, speed);\n\n      // ~~Store non-translate3d transforms~~\n      // Store inline styles and extract transforms\n      var style = el.style.cssText;\n      var transform = '';\n\n      // Check if there's an inline styled transform\n      if (style.indexOf('transform') >= 0) {\n        // Get the index of the transform\n        var index = style.indexOf('transform');\n\n        // Trim the style to the transform point and get the following semi-colon index\n        var trimmedStyle = style.slice(index);\n        var delimiter = trimmedStyle.indexOf(';');\n\n        // Remove \"transform\" string and save the attribute\n        if (delimiter) {\n          transform = \" \" + trimmedStyle.slice(11, delimiter).replace(/\\s/g, '');\n        } else {\n          transform = \" \" + trimmedStyle.slice(11).replace(/\\s/g, '');\n        }\n      }\n\n      return {\n        baseX: bases.x,\n        baseY: bases.y,\n        top: blockTop,\n        left: blockLeft,\n        height: blockHeight,\n        width: blockWidth,\n        speed: speed,\n        style: style,\n        transform: transform,\n        zindex: dataZindex\n      };\n    };\n\n    // set scroll position (posY, posX)\n    // side effect method is not ideal, but okay for now\n    // returns true if the scroll changed, false if nothing happened\n    var setPosition = function setPosition() {\n      var oldY = posY;\n      var oldX = posX;\n\n      posY = self.options.wrapper ? self.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;\n      posX = self.options.wrapper ? self.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset;\n\n      if (oldY != posY && self.options.vertical) {\n        // scroll changed, return true\n        return true;\n      }\n\n      if (oldX != posX && self.options.horizontal) {\n        // scroll changed, return true\n        return true;\n      }\n\n      // scroll did not change\n      return false;\n    };\n\n    // Ahh a pure function, gets new transform value\n    // based on scrollPosition and speed\n    // Allow for decimal pixel values\n    var updatePosition = function updatePosition(percentageX, percentageY, speed) {\n      var result = {};\n      var valueX = speed * (100 * (1 - percentageX));\n      var valueY = speed * (100 * (1 - percentageY));\n\n      result.x = self.options.round ? Math.round(valueX) : Math.round(valueX * 100) / 100;\n      result.y = self.options.round ? Math.round(valueY) : Math.round(valueY * 100) / 100;\n\n      return result;\n    };\n\n    // Loop\n    var update = function update() {\n      if (setPosition() && pause === false) {\n        animate();\n      }\n\n      // loop again\n      loop(update);\n    };\n\n    // Transform3d on parallax element\n    var animate = function animate() {\n      var positions;\n      for (var i = 0; i < self.elems.length; i++) {\n        var percentageY = (posY - blocks[i].top + screenY) / (blocks[i].height + screenY);\n        var percentageX = (posX - blocks[i].left + screenX) / (blocks[i].width + screenX);\n\n        // Subtracting initialize value, so element stays in same spot as HTML\n        positions = updatePosition(percentageX, percentageY, blocks[i].speed); // - blocks[i].baseX;\n        var positionY = positions.y - blocks[i].baseY;\n        var positionX = positions.x - blocks[i].baseX;\n\n        var zindex = blocks[i].zindex;\n\n        // Move that element\n        // (Set the new translation and append initial inline transforms.)\n        var translate = 'translate3d(' + (self.options.horizontal ? positionX : '0') + 'px,' + (self.options.vertical ? positionY : '0') + 'px,' + zindex + 'px) ' + blocks[i].transform;\n        self.elems[i].style[transformProp] = translate;\n      }\n      self.options.callback(positions);\n    };\n\n    self.destroy = function () {\n      for (var i = 0; i < self.elems.length; i++) {\n        self.elems[i].style.cssText = blocks[i].style;\n      }\n\n      // Remove resize event listener if not pause, and pause\n      if (!pause) {\n        window.removeEventListener('resize', init);\n        pause = true;\n      }\n    };\n\n    // Init\n    init();\n\n    // Start the loop\n    update();\n\n    // Allow to recalculate the initial values whenever we want\n    self.refresh = init;\n\n    return self;\n  };\n  return Rellax;\n});\n\n//# sourceURL=webpack:///./node_modules/rellax/rellax.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rellax */ \"./node_modules/rellax/rellax.js\");\n/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar rellax = new rellax__WEBPACK_IMPORTED_MODULE_0___default.a('.rellax', {\n\tcenter: true\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });
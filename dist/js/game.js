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
/******/ 	__webpack_require__.p = "../";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/game.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/game.css":
/*!**************************!*\
  !*** ./src/css/game.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_game_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/game.css */ "./src/css/game.css");
/* harmony import */ var _css_game_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_game_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_AudioController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/AudioController */ "./src/js/modules/AudioController.mjs");
/* harmony import */ var _modules_ThemeController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/ThemeController */ "./src/js/modules/ThemeController.mjs");
/* harmony import */ var _modules_LevelController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/LevelController */ "./src/js/modules/LevelController.mjs");
/* harmony import */ var _modules_GameController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/GameController */ "./src/js/modules/GameController.mjs");
/* harmony import */ var _modules_OverlayController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/OverlayController */ "./src/js/modules/OverlayController.mjs");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }








(function startGame() {
  if (!/Google Inc/.test(navigator.vendor)) {
    document.body.innerHTML = '<h1 class="not-chrome">Please use Google Chrome</h1>';
    return;
  }

  var overlay = new _modules_OverlayController__WEBPACK_IMPORTED_MODULE_5__["default"]();
  var game = new _modules_GameController__WEBPACK_IMPORTED_MODULE_4__["default"]();
  var buttons = document.querySelectorAll('.btn, .control-themes span, .about-the-game span');
  var startBtn = document.querySelector('.overlay .btn');
  var themeBtns = document.querySelectorAll('.control-themes span');
  var aboutBtn = document.querySelector('.about-the-game span');
  var canInfoBeshowed = true;
  document.body.classList = _modules_ThemeController__WEBPACK_IMPORTED_MODULE_2__["default"].getTheme();

  _toConsumableArray(themeBtns).filter(function (btn) {
    return btn.classList[0] === _modules_ThemeController__WEBPACK_IMPORTED_MODULE_2__["default"].getTheme();
  })[0].classList.add('active');

  document.querySelector('.level strong').innerText = _modules_LevelController__WEBPACK_IMPORTED_MODULE_3__["default"].getLevel();
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      _modules_AudioController__WEBPACK_IMPORTED_MODULE_1__["default"].buttonAudio();
    });
  });
  themeBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      _modules_ThemeController__WEBPACK_IMPORTED_MODULE_2__["default"].change(btn, themeBtns);
    });
  });

  startBtn.onclick = function () {
    canInfoBeshowed = true;
    if (!game.gameStarted || game.gameFinished) return game.start();
    game.replay();
  };

  aboutBtn.onclick = function () {
    if (!canInfoBeshowed) return; // Texts here is just temporary

    var btn = 'Start';
    var title = 'About The Game';
    var msg = "\n      The Tower of Hanoi (also called the Tower of Brahma or Lucas' Tower[1] and sometimes pluralized as Towers) > is a mathematical game or puzzle.\n      It consists of three rods and a number of disks of different sizes, >which can slide onto any rod.\n      The puzzle starts with the disks in a neat stack in ascending order of size >on one rod, the smallest at the top, thus making a conical shape.\n      <br/>\n      <a href=\"https://github.com/refatalsakka/Towers-Of-Hanoi#about-the-game-wiki\" target=\"_blank\">Read the rules</a>\n      ";

    if (game.gameStarted) {
      btn = 'Replay';
      canInfoBeshowed = false;
      if (!game.pause) return game._pause({
        btn: btn,
        title: title,
        msg: msg
      });
    }

    if (overlay.isSlideIn) {
      overlay.slideOut(function () {
        return overlay.slideIn({
          btn: btn,
          title: title,
          msg: msg
        });
      });
      canInfoBeshowed = false;
      return;
    }

    canInfoBeshowed = true;
  };

  return false;
})();

/***/ }),

/***/ "./src/js/modules/AudioController.mjs":
/*!********************************************!*\
  !*** ./src/js/modules/AudioController.mjs ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AudioController; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AudioController = /*#__PURE__*/function () {
  function AudioController() {
    _classCallCheck(this, AudioController);
  }

  _createClass(AudioController, null, [{
    key: "buttonAudio",
    value: function buttonAudio() {
      new Audio('sounds/button.wav').play();
    }
  }, {
    key: "borderAudio",
    value: function borderAudio() {
      new Audio('sounds/border.wav').play();
    }
  }, {
    key: "buildAudio",
    value: function buildAudio() {
      new Audio('sounds/build.wav').play();
    }
  }, {
    key: "loseAudio",
    value: function loseAudio() {
      new Audio('sounds/lose.wav').play();
    }
  }, {
    key: "readyToStartAudio",
    value: function readyToStartAudio() {
      new Audio('sounds/ready_to_start.wav').play();
    }
  }, {
    key: "levelUpAudio",
    value: function levelUpAudio() {
      new Audio('sounds/levelUp.wav').play();
    }
  }, {
    key: "victoryAudio",
    value: function victoryAudio() {
      new Audio('sounds/victory.mp3').play();
    }
  }]);

  return AudioController;
}();



/***/ }),

/***/ "./src/js/modules/CookieController.mjs":
/*!*********************************************!*\
  !*** ./src/js/modules/CookieController.mjs ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CookieController; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CookieController = /*#__PURE__*/function () {
  function CookieController() {
    _classCallCheck(this, CookieController);
  }

  _createClass(CookieController, null, [{
    key: "setCoockie",
    value: function setCoockie(name, value) {
      var exdays = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 7;
      var date = new Date();
      date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000);
      var expires = "expires=".concat(date.toUTCString());
      document.cookie = "".concat(name, "=").concat(value, ";").concat(expires);
    }
  }, {
    key: "getCoockie",
    value: function getCoockie(name) {
      var cookies = document.cookie.split(';');
      var array = cookies.filter(function (cookie) {
        return cookie.includes(name);
      });
      return array.length ? array[0].split('=')[1] : null;
    }
  }, {
    key: "removeCoockie",
    value: function removeCoockie(name) {
      document.cookie = "".concat(name, "=;expires=Thu, 01 Jan 1970 00:00:01 GMT");
    }
  }, {
    key: "pullCoockie",
    value: function pullCoockie(name) {
      var pull = this.getCoockie(name);
      this.removeCoockie(name);
      return pull;
    }
  }]);

  return CookieController;
}();



/***/ }),

/***/ "./src/js/modules/CountdownController.mjs":
/*!************************************************!*\
  !*** ./src/js/modules/CountdownController.mjs ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CountdownController; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable no-throw-literal */
// eslint-disable-next-line max-classes-per-file
var FormatCountdown = /*#__PURE__*/function () {
  function FormatCountdown() {
    _classCallCheck(this, FormatCountdown);

    this.second = 0;
    this.minutes = 0;
  }

  _createClass(FormatCountdown, [{
    key: "format",
    value: function format(countdown) {
      this.minutes = Math.floor(countdown / 60);
      this.second = countdown % 60;
      if (this.second < 10) this.second = "0".concat(this.second);
      if (this.minutes < 10) this.minutes = "0".concat(this.minutes);
      return "".concat(this.minutes, ":").concat(this.second);
    }
  }]);

  return FormatCountdown;
}();

var CountdownController = /*#__PURE__*/function () {
  function CountdownController(countdown) {
    _classCallCheck(this, CountdownController);

    this.countdown = countdown;
  }

  _createClass(CountdownController, [{
    key: "start",
    value: function start(fun) {
      var _this = this;

      if (this.interval) throw 'timer is already there';
      var formatCountdown = new FormatCountdown();
      this.interval = window.setInterval(function () {
        if (!_this.isPause) {
          if (_this.countdown === 0) return _this.clear();
          _this.countdown -= 1;
          fun(formatCountdown.format(_this.countdown));
        }
      }, 1000);
    }
  }, {
    key: "replay",
    value: function replay() {
      if (!this.isPause) return;
      this.isPause = false;
    }
  }, {
    key: "clear",
    value: function clear() {
      if (this.interval) return clearInterval(this.interval);
    }
  }, {
    key: "pause",
    value: function pause() {
      if (this.interval) this.isPause = true;
    }
  }]);

  return CountdownController;
}();



/***/ }),

/***/ "./src/js/modules/GameController.mjs":
/*!*******************************************!*\
  !*** ./src/js/modules/GameController.mjs ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameController; });
/* harmony import */ var _HelpersController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HelpersController */ "./src/js/modules/HelpersController.mjs");
/* harmony import */ var _LevelController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LevelController */ "./src/js/modules/LevelController.mjs");
/* harmony import */ var _MoveController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MoveController */ "./src/js/modules/MoveController.mjs");
/* harmony import */ var _AudioController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AudioController */ "./src/js/modules/AudioController.mjs");
/* harmony import */ var _OverlayController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OverlayController */ "./src/js/modules/OverlayController.mjs");
/* harmony import */ var _CountdownController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CountdownController */ "./src/js/modules/CountdownController.mjs");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var GameController = /*#__PURE__*/function () {
  function GameController() {
    _classCallCheck(this, GameController);

    this.moves = new _MoveController__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.overlay = new _OverlayController__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this.config = {};
    this.msgs = ['You paased the first level', 'Good, up to the next level', 'You did it, next level is waitng', 'The challenge will be harder', 'Great! let\'s play to finish the Game', 'WOW!!! You surprise me', 'You won the Game'];
    this.borders = [];
    this.boxesContainer = document.querySelector('.boxes');
    this.boxes = _toConsumableArray(document.querySelectorAll('.boxes .box'));
    this.bordersContainer = document.querySelector('.borders-container');
    this.borderOuting = null;
    this.gameStarted = false;
    this.gameFinished = false;
    this.countdown = null;
    this.pause = false;
    this.columnsAnimated = false;
  }

  _createClass(GameController, [{
    key: "start",
    value: function start() {
      var _this = this;

      this.config = {
        max_level: 7,
        borders_length: Number(_LevelController__WEBPACK_IMPORTED_MODULE_1__["default"].getLevel()) + 3,
        countdown: Number(_LevelController__WEBPACK_IMPORTED_MODULE_1__["default"].getLevel()) * 35,
        win_status: [[0, 0, Number(_LevelController__WEBPACK_IMPORTED_MODULE_1__["default"].getLevel()) + 3], [0, Number(_LevelController__WEBPACK_IMPORTED_MODULE_1__["default"].getLevel()) + 3, 0]]
      };
      this.gameFinished = false;
      if (Number(_LevelController__WEBPACK_IMPORTED_MODULE_1__["default"].getLevel()) > this.config.max_level) return;

      if (!this.gameStarted) {
        this.boxesEvents();
        this.btnsEvents();
      }

      if (this.overlay.isSlideIn) return this.overlay.slideOut(function () {
        return _this.restart();
      });
      this.restart();
    }
  }, {
    key: "restart",
    value: function restart() {
      var _this2 = this;

      if (this.borders.length) this.removeBorders();
      document.querySelector('.level strong').innerText = _LevelController__WEBPACK_IMPORTED_MODULE_1__["default"].getLevel();
      if (!this.columnsAnimated) return this.animateColumns(function () {
        return _this2.onEachStart();
      });
      this.onEachStart();
    }
  }, {
    key: "onEachStart",
    value: function onEachStart() {
      this.generateBorders();

      this._countdown();

      this._moves();

      this.allowBtnsClick();
    }
  }, {
    key: "animateColumns",
    value: function animateColumns(callback) {
      var _this3 = this;

      this.columnsAnimated = true;
      this.boxesContainer.classList.add('animate');
      this.boxesContainer.classList.add('active');
      _AudioController__WEBPACK_IMPORTED_MODULE_3__["default"].buildAudio();
      setTimeout(function () {
        _this3.boxesContainer.classList.remove('animate');

        callback();
      }, 2000);
    }
  }, {
    key: "generateBorders",
    value: function generateBorders() {
      for (var i = 1; i <= this.config.borders_length; i += 1) {
        var div = document.createElement('div');
        div.classList = "border border-".concat(i);
        div.setAttribute('data-index', i);
        this.borders.push(div);
      }

      this.bordersEvents();
    }
  }, {
    key: "removeBorders",
    value: function removeBorders() {
      for (var i = 0; i < this.borders.length; i += 1) {
        this.borderOut(this.borders[i], i + 1);
      }

      this.borders = [];
    }
  }, {
    key: "bordersEvents",
    value: function bordersEvents() {
      var _this4 = this;

      this.borders.forEach(function (border, index) {
        _this4.borderInAfterOut(border, index);

        border.addEventListener('dragstart', function (e) {
          return _this4.drag(e);
        });
        border.addEventListener('mouseover', function (e) {
          if (_this4.isBorderAllowToDrag(e) && !_this4.pause) {
            return _this4.whenAllowToDrag(e);
          }

          return _this4.whenNotAllowToDrag(e);
        });
        border.addEventListener('mouseout', function () {
          return _this4.resetBorderStyle(border);
        });
      });
    }
  }, {
    key: "borderIn",
    value: function borderIn(border, index) {
      this.bordersContainer.appendChild(border);
      border.style.animation = "borderIn .5s ".concat(index / 10, "s ease forwards");
      _AudioController__WEBPACK_IMPORTED_MODULE_3__["default"].borderAudio();
    }
  }, {
    key: "borderOut",
    value: function borderOut(border, index) {
      border.style.left = 0;
      border.style.animation = "borderOut .5s ".concat(index / 10, "s ease forwards");
      border.addEventListener('animationend', function () {
        border.parentNode.removeChild(border);
      }, {
        once: true
      });
      this.borderOuting = border;
    }
  }, {
    key: "borderInAfterOut",
    value: function borderInAfterOut(border, index) {
      var _this5 = this;

      if (this.borderOuting) {
        this.borderOuting.addEventListener('animationend', function () {
          _this5.borderIn(border, index);
        }, {
          once: true
        });
      } else {
        this.borderIn(border, index);
      }
    }
  }, {
    key: "isBorderAllowToDrop",
    value: function isBorderAllowToDrop(border1, border2) {
      return border2 === null || border1.dataset.index < border2.dataset.index;
    }
  }, {
    key: "isBorderAllowToDrag",
    value: function isBorderAllowToDrag(e) {
      return e.target.dataset.index === e.target.parentElement.firstChild.dataset.index;
    }
  }, {
    key: "resetBorderStyle",
    value: function resetBorderStyle(e) {
      e.classList.remove('on-transfer');
      e.style.animation = '';
      e.style.left = '0';
    }
  }, {
    key: "allowBtnsClick",
    value: function allowBtnsClick() {
      document.querySelectorAll('button').forEach(function (btn) {
        return btn.classList.remove('not-clickable');
      });
    }
  }, {
    key: "disableBtnsClick",
    value: function disableBtnsClick() {
      document.querySelectorAll('button').forEach(function (btn) {
        return btn.classList.add('not-clickable');
      });
    }
  }, {
    key: "btnsEvents",
    value: function btnsEvents() {
      var _this6 = this;

      document.querySelector('.control-btns .pause').addEventListener('click', function () {
        return _this6._pause();
      });
      document.querySelector('.control-btns .new').addEventListener('click', function () {
        _this6._finish(null);

        _this6.start();
      });
    }
  }, {
    key: "boxesEvents",
    value: function boxesEvents() {
      var _this7 = this;

      this.boxes.forEach(function (box) {
        box.addEventListener('dragenter', function (e) {
          return _this7.whenInterToBox(e);
        });
        box.addEventListener('dragleave', function (e) {
          return _this7.whenLeaveBox(e);
        });
        box.addEventListener('dragover', function (e) {
          return _this7.dragover(e);
        });
        box.addEventListener('drop', function (e) {
          return _this7.drop(e);
        });
      });
    }
  }, {
    key: "whenInterToBox",
    value: function whenInterToBox(e) {
      e.target.closest('.box').classList.add('hover');
    }
  }, {
    key: "whenLeaveBox",
    value: function whenLeaveBox(e) {
      e.target.closest('.box').classList.remove('hover');
    }
  }, {
    key: "dragover",
    value: function dragover(e) {
      e.preventDefault();
    }
  }, {
    key: "drag",
    value: function drag(e) {
      if (this.pause) return;
      if (!this.isBorderAllowToDrag(e)) return;
      var border = document.querySelector("div[data-index='".concat(e.target.dataset.index, "']"));
      e.dataTransfer.setData('text', e.target.dataset.index);
      border.classList.add('on-transfer');
    }
  }, {
    key: "drop",
    value: function drop(e) {
      e.preventDefault();
      var box = e.composedPath().find(function (elm) {
        return elm.classList[0] === 'box';
      });
      var container = box.querySelector('.borders-container');
      var data = e.dataTransfer.getData('text');
      var border = document.querySelector("div[data-index='".concat(data, "']"));
      box.classList.remove('hover');
      this.resetBorderStyle(border);
      if (!this.isBorderAllowToDrop(border, container.firstChild)) return;
      container.insertBefore(border, container.firstChild);
      _AudioController__WEBPACK_IMPORTED_MODULE_3__["default"].buttonAudio();
      this.moves.up();

      this._moves();

      if (this.isWin()) this.won();
    }
  }, {
    key: "whenAllowToDrag",
    value: function whenAllowToDrag(e) {
      e.target.setAttribute('draggable', true);
    }
  }, {
    key: "whenNotAllowToDrag",
    value: function whenNotAllowToDrag(e) {
      e.target.setAttribute('draggable', false);
    }
  }, {
    key: "isWin",
    value: function isWin() {
      var currentStatus = this.boxes.map(function (box) {
        return box.querySelector('.borders-container').childElementCount;
      });

      for (var i = 0; i < this.config.win_status.length; i += 1) {
        if (_HelpersController__WEBPACK_IMPORTED_MODULE_0__["default"].areArraysEqual(this.config.win_status[i], currentStatus)) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "won",
    value: function won() {
      if (this.isWinTheHoleGame()) return this.wonTheHoleGame();
      _LevelController__WEBPACK_IMPORTED_MODULE_1__["default"].animate();
      _AudioController__WEBPACK_IMPORTED_MODULE_3__["default"].levelUpAudio();

      this._finish("Got to the level ".concat(_LevelController__WEBPACK_IMPORTED_MODULE_1__["default"].getLevel()));
    }
  }, {
    key: "isWinTheHoleGame",
    value: function isWinTheHoleGame() {
      return this.config.max_level === Number(_LevelController__WEBPACK_IMPORTED_MODULE_1__["default"].getLevel());
    }
  }, {
    key: "wonTheHoleGame",
    value: function wonTheHoleGame() {
      _AudioController__WEBPACK_IMPORTED_MODULE_3__["default"].victoryAudio();

      this._finish('Restart the Game');

      _LevelController__WEBPACK_IMPORTED_MODULE_1__["default"].setLevel(1);
    }
  }, {
    key: "losed",
    value: function losed() {
      this._finish('Try Again', 'Ohh, Good luck next Game');

      _AudioController__WEBPACK_IMPORTED_MODULE_3__["default"].loseAudio();
    }
  }, {
    key: "_finish",
    value: function _finish(btn) {
      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.msgs[_LevelController__WEBPACK_IMPORTED_MODULE_1__["default"].getLevel() - 1];
      this.gameFinished = true;
      this.pause = false;
      document.querySelector('.control-btns .pause').innerText = 'Pause';

      if (btn) {
        this.overlay.slideIn({
          btn: btn,
          title: title,
          msg: "Your Moves are ".concat(this.moves.getMoves(), ", You took ").concat(this.config.countdown - this.countdown.countdown, " Seconds")
        });
      }

      this.countdown.clear();
      this.moves.clear();
      this.disableBtnsClick();
    }
  }, {
    key: "_countdown",
    value: function _countdown() {
      var _this8 = this;

      this.gameStarted = true;
      this.countdown = new _CountdownController__WEBPACK_IMPORTED_MODULE_5__["default"](this.config.countdown);
      var coutdouwnSpan = document.querySelector('.moves-countdown .countdown span');
      coutdouwnSpan.innerText = '00:00';
      this.countdown.start(function (countdown) {
        coutdouwnSpan.innerText = countdown;
        if (countdown === '00:00') return _this8.losed();
      });
    }
  }, {
    key: "_moves",
    value: function _moves() {
      document.querySelector('.moves-countdown .moves span').innerText = this.moves.getMoves();
    }
  }, {
    key: "_pause",
    value: function _pause() {
      var msgs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (!this.gameStarted) return false;
      this.pause = true;
      var btn = 'Replay';
      var title = 'You paused the Game';
      var msg = 'Click Replay to continue';

      if (msgs != null) {
        btn = msgs.btn;
        title = msgs.title;
        msg = msgs.msg;
      }

      this.overlay.slideIn({
        btn: btn,
        title: title,
        msg: msg
      });
      this.countdown.pause();
    }
  }, {
    key: "replay",
    value: function replay() {
      var _this9 = this;

      if (!this.gameStarted) return false;
      this.pause = false;
      this.overlay.slideOut(function () {
        _this9.countdown.replay();
      });
    }
  }]);

  return GameController;
}();



/***/ }),

/***/ "./src/js/modules/HelpersController.mjs":
/*!**********************************************!*\
  !*** ./src/js/modules/HelpersController.mjs ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HelpersController; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HelpersController = /*#__PURE__*/function () {
  function HelpersController() {
    _classCallCheck(this, HelpersController);
  }

  _createClass(HelpersController, null, [{
    key: "areArraysEqual",
    value: function areArraysEqual(arr1, arr2) {
      if (arr1.length !== arr2.length) return false;

      for (var i = 0; i < arr1.length; i += 1) {
        if (arr1[i] !== arr2[i]) return false;
      }

      return true;
    }
  }]);

  return HelpersController;
}();



/***/ }),

/***/ "./src/js/modules/LevelController.mjs":
/*!********************************************!*\
  !*** ./src/js/modules/LevelController.mjs ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LevelController; });
/* harmony import */ var _CookieController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CookieController */ "./src/js/modules/CookieController.mjs");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var LevelController = /*#__PURE__*/function () {
  function LevelController() {
    _classCallCheck(this, LevelController);
  }

  _createClass(LevelController, null, [{
    key: "setLevel",
    value: function setLevel(level) {
      _CookieController__WEBPACK_IMPORTED_MODULE_0__["default"].setCoockie('level', level);
    }
  }, {
    key: "getLevel",
    value: function getLevel() {
      return _CookieController__WEBPACK_IMPORTED_MODULE_0__["default"].getCoockie('level') ? _CookieController__WEBPACK_IMPORTED_MODULE_0__["default"].getCoockie('level') : 1;
    }
  }, {
    key: "up",
    value: function up() {
      this.setLevel(Number(this.getLevel()) + 1);
    }
  }, {
    key: "animate",
    value: function animate() {
      var _this = this;

      var level = document.querySelector('.level strong');
      level.classList.add('up');
      this.up();
      level.addEventListener('animationend', function () {
        level.innerText = Number(_this.getLevel());
        level.classList.remove('up');
      }, {
        once: true
      });
    }
  }]);

  return LevelController;
}();



/***/ }),

/***/ "./src/js/modules/MoveController.mjs":
/*!*******************************************!*\
  !*** ./src/js/modules/MoveController.mjs ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MoveController; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MoveController = /*#__PURE__*/function () {
  function MoveController() {
    _classCallCheck(this, MoveController);

    this.moves = 0;
  }

  _createClass(MoveController, [{
    key: "up",
    value: function up() {
      this.moves += 1;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.moves = 0;
    }
  }, {
    key: "getMoves",
    value: function getMoves() {
      return this.moves;
    }
  }]);

  return MoveController;
}();



/***/ }),

/***/ "./src/js/modules/OverlayController.mjs":
/*!**********************************************!*\
  !*** ./src/js/modules/OverlayController.mjs ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OverlayController; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var OverlayController = /*#__PURE__*/function () {
  function OverlayController() {
    _classCallCheck(this, OverlayController);

    if (OverlayController.instance) return OverlayController.instance;
    OverlayController.instance = this;
    this.overlay = document.querySelector('.overlay');
    this.container = document.querySelector('.overlay .container');
    this.btn = document.querySelector('.overlay .btn');
    this.title = document.querySelector('.overlay h1');
    this.text = document.querySelector('.info-box p.info-text');
    this.isSlideIn = true;
  }

  _createClass(OverlayController, [{
    key: "slideIn",
    value: function slideIn(text, callback) {
      var _this = this;

      this.isSlideIn = true;
      this.btn.innerHTML = text.btn;
      this.title.innerHTML = text.title;
      this.text.innerHTML = text.msg;
      this.overlay.classList.remove('disable');
      this.overlay.classList.remove('out');
      this.overlay.classList.add('in');
      document.body.classList.add('not-clickable');
      this.container.addEventListener('animationend', function () {
        _this.btn.classList.remove('not-clickable');

        document.body.classList.remove('not-clickable');
        if (typeof callback === 'function') callback();
      }, {
        once: true
      });
    }
  }, {
    key: "slideOut",
    value: function slideOut(callback) {
      var _this2 = this;

      this.isSlideIn = false;
      this.overlay.classList.add('out');
      this.overlay.classList.remove('in');
      document.body.classList.add('not-clickable');
      this.container.addEventListener('animationend', function () {
        _this2.overlay.classList.add('disable');

        document.body.classList.remove('not-clickable');
        if (typeof callback === 'function') callback();
      }, {
        once: true
      });
    }
  }]);

  return OverlayController;
}();



/***/ }),

/***/ "./src/js/modules/ThemeController.mjs":
/*!********************************************!*\
  !*** ./src/js/modules/ThemeController.mjs ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ThemeController; });
/* harmony import */ var _CookieController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CookieController */ "./src/js/modules/CookieController.mjs");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var ThemeController = /*#__PURE__*/function () {
  function ThemeController() {
    _classCallCheck(this, ThemeController);
  }

  _createClass(ThemeController, null, [{
    key: "deactivate",
    value: function deactivate(btns) {
      btns.forEach(function (btn) {
        btn.classList.remove('active');
      });
    }
  }, {
    key: "active",
    value: function active(btn) {
      btn.classList.add('active');
    }
  }, {
    key: "change",
    value: function change(btn, btns) {
      this.deactivate(btns);
      _CookieController__WEBPACK_IMPORTED_MODULE_0__["default"].setCoockie('theme', btn.className);
      document.body.className = btn.className;
      this.active(btn);
    }
  }, {
    key: "getTheme",
    value: function getTheme() {
      return _CookieController__WEBPACK_IMPORTED_MODULE_0__["default"].getCoockie('theme') ? _CookieController__WEBPACK_IMPORTED_MODULE_0__["default"].getCoockie('theme') : 'green-red-gray';
    }
  }]);

  return ThemeController;
}();



/***/ })

/******/ });
//# sourceMappingURL=game.js.map
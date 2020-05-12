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

  var audio = new _modules_AudioController__WEBPACK_IMPORTED_MODULE_1__["default"]();
  var theme = new _modules_ThemeController__WEBPACK_IMPORTED_MODULE_2__["default"]();
  var level = new _modules_LevelController__WEBPACK_IMPORTED_MODULE_3__["default"]();
  var overlay = new _modules_OverlayController__WEBPACK_IMPORTED_MODULE_5__["default"]();
  var game = new _modules_GameController__WEBPACK_IMPORTED_MODULE_4__["default"]();
  var buttons = document.querySelectorAll('.btn, .control-themes span, .about-the-game span');
  var startBtn = document.querySelector('.overlay .btn');
  var themeBtns = document.querySelectorAll('.control-themes span');
  var aboutBtn = document.querySelector('.about-the-game span');
  var canInfoBeshowed = true;
  document.body.classList = theme.getTheme();

  _toConsumableArray(themeBtns).filter(function (btn) {
    return btn.classList[0] === theme.getTheme();
  })[0].classList.add('active');

  document.querySelector('.level strong').innerText = level.getLevel();
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      audio.buttonAudio();
    });
  });
  themeBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      theme.change(btn, themeBtns);
    });
  });

  startBtn.onclick = function () {
    canInfoBeshowed = true;
    if (!game.gameStarted) return game.start();
    game.replay();
  };

  aboutBtn.onclick = function () {
    if (!canInfoBeshowed) return;
    canInfoBeshowed = false;
    var btn = 'Start';
    var title = 'About The Game';
    var msg = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ulabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Atvero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';

    if (game.gameStarted) {
      btn = 'Replay';

      if (!game.pause) {
        return game._pause({
          btn: btn,
          title: title,
          msg: msg
        });
      }
    }

    overlay.slideOut(function () {
      overlay.slideIn({
        btn: btn,
        title: title,
        msg: msg
      });
    });
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

    this.button = new Audio('sounds/button.wav');
    this.border = new Audio('sounds/border.wav');
    this.build = new Audio('sounds/build.wav');
    this.lose = new Audio('sounds/lose.wav');
    this.readyToStart = new Audio('sounds/ready_to_start.wav');
    this.levelUp = new Audio('sounds/levelUp.wav');
    this.victory = new Audio('sounds/victory.mp3');
  }

  _createClass(AudioController, [{
    key: "buttonAudio",
    value: function buttonAudio() {
      this.button.currentTime = 0;
      this.button.play();
    }
  }, {
    key: "borderAudio",
    value: function borderAudio() {
      this.border.currentTime = 0;
      this.border.play();
    }
  }, {
    key: "buildAudio",
    value: function buildAudio() {
      this.build.play();
    }
  }, {
    key: "loseAudio",
    value: function loseAudio() {
      this.lose.play();
    }
  }, {
    key: "readyToStartAudio",
    value: function readyToStartAudio() {
      this.readyToStart.play();
    }
  }, {
    key: "levelUpAudio",
    value: function levelUpAudio() {
      this.levelUp.play();
    }
  }, {
    key: "victoryAudio",
    value: function victoryAudio() {
      this.victory.play();
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

  _createClass(CookieController, [{
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
      if (!this.isPause) throw 'Timer is not paused';
      this.isPause = false;
    }
  }, {
    key: "clear",
    value: function clear() {
      if (this.interval) return clearInterval(this.interval);
      throw 'There is no Timer';
    }
  }, {
    key: "pause",
    value: function pause() {
      if (this.interval) {
        this.isPause = true;
        return;
      }

      throw 'There is no Timer';
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
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








var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    this.helpers = new _HelpersController__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.level = new _LevelController__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.moves = new _MoveController__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.audio = new _AudioController__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.overlay = new _OverlayController__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this.config = {};
    this.msgs = ['You paased the first level', 'Good, up to the next level', 'You did it, next level is waitng', 'The challenge will be harder', 'Great! let\'s play to finish the Game', 'WOW!!! You surprise me', 'You won the Game'];
    this.borders = [];
    this.boxesContainer = document.querySelector('.boxes');
    this.boxes = _toConsumableArray(document.querySelectorAll('.boxes .box'));
    this.bordersContainer = document.querySelector('.borders-container');
    this.borderOuting = null;
    this.gameStarted = false;
    this.countdown = null;
    this.pause = false;
    this.columnsAnimated = false;
  }

  _createClass(Game, [{
    key: "start",
    value: function start() {
      var _this = this;

      this.config = {
        max_level: 7,
        borders_length: Number(this.level.getLevel()) + 3,
        countdown: Number(this.level.getLevel()) * 35,
        win_status: [[0, 0, Number(this.level.getLevel()) + 3], [0, Number(this.level.getLevel()) + 3, 0]]
      };
      if (Number(this.level.getLevel()) > this.config.max_level) return;

      if (this.overlay.isSlideIn) {
        this.overlay.slideOut(function () {
          _this.restart();
        });
        return;
      }

      this.restart();
    }
  }, {
    key: "restart",
    value: function restart() {
      if (!this.columnsAnimated) this.animateColumns();
      if (this.borders.length) this.removeBorders();
      this.generateBorders();

      this._countdown();

      this._moves();

      this.allowBtnsClick();
      document.querySelector('.level strong').innerText = this.level.getLevel();
      if (this.gameStarted) return;
      this.gameStarted = true;
      this.boxesEvents();
      this.btnsEvents();
    }
  }, {
    key: "animateColumns",
    value: function animateColumns() {
      var _this2 = this;

      this.columnsAnimated = true;
      this.boxesContainer.classList.add('animate');
      this.boxesContainer.classList.add('active');
      this.audio.buildAudio();
      setTimeout(function () {
        _this2.boxesContainer.classList.remove('animate');
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
      var _this3 = this;

      this.borders.forEach(function (border, index) {
        _this3.borderInAfterOut(border, index);

        border.addEventListener('dragstart', function (e) {
          return _this3.drag(e);
        });
        border.addEventListener('mouseover', function (e) {
          if (_this3.isBorderAllowToDrag(e) && !_this3.pause) {
            return _this3.whenAllowToDrag(e);
          }

          return _this3.whenNotAllowToDrag(e);
        });
        border.addEventListener('mouseout', function () {
          return _this3.resetBorderStyle(border);
        });
      });
    }
  }, {
    key: "borderIn",
    value: function borderIn(border, index) {
      this.bordersContainer.appendChild(border);
      border.style.animation = "borderIn .5s ".concat(index / 10, "s ease forwards");
      this.audio.borderAudio();
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
      var _this4 = this;

      if (this.borderOuting) {
        this.borderOuting.addEventListener('animationend', function () {
          _this4.borderIn(border, index);
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
      var _this5 = this;

      document.querySelector('.control-btns .pause').addEventListener('click', function () {
        return _this5._pause();
      });
      document.querySelector('.control-btns .new').addEventListener('click', function () {
        _this5._finish(null);

        _this5.start();
      });
    }
  }, {
    key: "boxesEvents",
    value: function boxesEvents() {
      var _this6 = this;

      this.boxes.forEach(function (box) {
        box.addEventListener('dragenter', function (e) {
          return _this6.whenInterToBox(e);
        });
        box.addEventListener('dragleave', function (e) {
          return _this6.whenLeaveBox(e);
        });
        box.addEventListener('dragover', function (e) {
          return _this6.dragover(e);
        });
        box.addEventListener('drop', function (e) {
          return _this6.drop(e);
        });
      });
    }
  }, {
    key: "whenInterToBox",
    value: function whenInterToBox(e) {
      e.path.find(function (elm) {
        return elm.classList[0] === 'box';
      }).classList.add('hover');
    }
  }, {
    key: "whenLeaveBox",
    value: function whenLeaveBox(e) {
      e.path.find(function (elm) {
        return elm.classList[0] === 'box';
      }).classList.remove('hover');
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
      var box = e.path.find(function (elm) {
        return elm.classList[0] === 'box';
      });
      var container = box.querySelector('.borders-container');
      var data = e.dataTransfer.getData('text');
      var border = document.querySelector("div[data-index='".concat(data, "']"));
      box.classList.remove('hover');
      this.resetBorderStyle(border);
      if (!this.isBorderAllowToDrop(border, container.firstChild)) return;
      container.insertBefore(border, container.firstChild);
      this.audio.buttonAudio();
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
        if (this.helpers.areArraysEqual(this.config.win_status[i], currentStatus)) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "won",
    value: function won() {
      if (this.isWinTheHoleGame()) return this.wonTheHoleGame();
      this.level.animate();

      this._finish("Got to the level ".concat(this.level.getLevel()));
    }
  }, {
    key: "isWinTheHoleGame",
    value: function isWinTheHoleGame() {
      return this.config.max_level === Number(this.level.getLevel());
    }
  }, {
    key: "wonTheHoleGame",
    value: function wonTheHoleGame() {
      this.audio.victoryAudio();

      this._finish('Restart the Game');

      this.level.setLevel(1);
    }
  }, {
    key: "losed",
    value: function losed() {
      this._finish('Try Again', 'Ohh, Good luck next Game');

      this.audio.loseAudio();
    }
  }, {
    key: "_finish",
    value: function _finish(btn) {
      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.msgs[this.level.getLevel() - 1];
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
      var _this7 = this;

      this.countdown = new _CountdownController__WEBPACK_IMPORTED_MODULE_5__["default"](this.config.countdown);
      var coutdouwnSpan = document.querySelector('.moves-countdown .countdown span');
      coutdouwnSpan.innerText = '00:00';
      this.countdown.start(function (countdown) {
        coutdouwnSpan.innerText = countdown;
        if (countdown === '00:00') return _this7.losed();
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
      var _this8 = this;

      if (!this.gameStarted) return false;
      this.pause = false;
      this.overlay.slideOut(function () {
        _this8.countdown.replay();
      });
    }
  }]);

  return Game;
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

  _createClass(HelpersController, [{
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
/* harmony import */ var _AudioController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AudioController */ "./src/js/modules/AudioController.mjs");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var LevelController = /*#__PURE__*/function () {
  function LevelController() {
    _classCallCheck(this, LevelController);

    this.coockie = new _CookieController__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.audio = new _AudioController__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }

  _createClass(LevelController, [{
    key: "setLevel",
    value: function setLevel(level) {
      this.coockie.setCoockie('level', level);
    }
  }, {
    key: "getLevel",
    value: function getLevel() {
      return this.coockie.getCoockie('level') ? this.coockie.getCoockie('level') : 1;
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
      this.audio.levelUpAudio();
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

    this.overlay = document.querySelector('.overlay');
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
      this.btn.innerText = text.btn;
      this.title.innerText = text.title;
      this.text.innerText = text.msg;
      this.overlay.classList.remove('disable');
      this.overlay.classList.remove('out');
      this.overlay.classList.add('in');
      this.btn.addEventListener('animationend', function () {
        _this.btn.classList.remove('not-clickable');

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
      this.btn.addEventListener('animationend', function () {
        _this2.overlay.classList.add('disable');

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

    this.coockie = new _CookieController__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  _createClass(ThemeController, [{
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
      this.coockie.setCoockie('theme', btn.className);
      document.body.className = btn.className;
      this.active(btn);
    }
  }, {
    key: "getTheme",
    value: function getTheme() {
      return this.coockie.getCoockie('theme') ? this.coockie.getCoockie('theme') : 'green-red-gray';
    }
  }]);

  return ThemeController;
}();



/***/ })

/******/ });
//# sourceMappingURL=game.js.map
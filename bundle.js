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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _beat = __webpack_require__(1);

var _beat2 = _interopRequireDefault(_beat);

var _beat_column = __webpack_require__(2);

var _beat_column2 = _interopRequireDefault(_beat_column);

var _songs = __webpack_require__(3);

var Song = _interopRequireWildcard(_songs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  var canvas = document.getElementById('board');
  var ctx = canvas.getContext('2d');
  drawBorder();
  var firedKeys = {
    f: false,
    g: false,
    h: false,
    j: false
  };
  function drawBorder() {
    ctx.fillStyle = 'rgba(255, 215, 0, .6)';
    var timingBar = ctx.fillRect(0, canvas.height * .75, canvas.width, canvas.height * .1);
    ctx.fillStyle = 'black';
    for (var x = canvas.width / 4; x < canvas.width; x += canvas.width / 4) {
      ctx.fillRect(x, 0, 5, 700);
      ctx.font = '20px serif';
      ctx.fillText('f', canvas.width * .11, canvas.height * .81);
      ctx.fillText('g', canvas.width * .36, canvas.height * .81);
      ctx.fillText('h', canvas.width * .61, canvas.height * .81);
      ctx.fillText('j', canvas.width * .86, canvas.height * .81);
    }
  }

  function keyHit(num, key) {
    if (firedKeys[key] === false) {
      firedKeys[key] = true;
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = 'rgba(0, 0, 255, .6)';
      ctx.fillRect(canvas.width * .25 * num, canvas.height * .75, canvas.width * .25, canvas.height * .1);
      //checkNote(), make sure to use the firedKeys object to check for all notes
    }
  }

  function keyUp(num, key) {
    firedKeys[key] = false;
    if (firedKeys["f"] === false && firedKeys["g"] === false && firedKeys["h"] === false && firedKeys["j"] === false) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBorder();
    } else {
      ctx.clearRect(canvas.width * .25 * num, canvas.height * .75, canvas.width * .25, canvas.height * .1);
      drawBorder();
    }
  }

  window.addEventListener('keydown', function (event) {
    // console.log(event.keyCode);
    switch (event.keyCode) {
      // case 32:
      // console.log("space");
      // //both space and enter count for same thing
      // break;
      // case 13:
      // console.log("enter");
      // //both space and enter count for same thing
      // break;
      // case 87:
      //   console.log("w");
      //   //navigate up menu
      //   break;
      // case 65:
      //   console.log("a");
      //   //navigate left menu?
      //   break;
      // case 83:
      //   console.log("s");
      //   //navigate down menu
      //   break;
      // case 68:
      //   console.log("d");
      //   //navigate right menu?
      //   break;
      case 70:
        console.log("f");
        keyHit(0, "f");
        //press key 1
        break;
      case 71:
        console.log("g");
        keyHit(1, "g");
        //press key 2
        break;
      case 72:
        console.log("h");
        keyHit(2, "h");
        //press key 3
        break;
      case 74:
        console.log("j");
        keyHit(3, "j");
        //press key 4
        break;
      default:
    }
  });

  window.addEventListener('keyup', function (event) {
    // console.log(event.keyCode);
    switch (event.keyCode) {
      case 70:
        console.log("f up");
        keyUp(0, "f");
        //press key 1
        break;
      case 71:
        console.log("g up");
        keyUp(1, "g");
        //press key 2
        break;
      case 72:
        console.log("h up");
        keyUp(2, "h");
        //press key 3
        break;
      case 74:
        console.log("j up");
        keyUp(3, "j");
        //press key 4
        break;
      default:
    }
  });

  var col0 = new _beat_column2.default(0);
  var col1 = new _beat_column2.default(1);
  var col2 = new _beat_column2.default(2);
  var col3 = new _beat_column2.default(3);
  var testTimer = 0;
  setInterval(function () {
    return col0.addBeat();
  }, 1000);
  setInterval(function () {
    return col1.addBeat();
  }, 2000);
  setInterval(function () {
    return col2.addBeat();
  }, 3000);
  setInterval(function () {
    return col3.addBeat();
  }, 4000);
  setInterval(function () {
    debugger;
    col0.drawBeats();
    col1.drawBeats();
    col2.drawBeats();
    col3.drawBeats();
    testTimer++;
  }, 1);
  Song.playSong('fd');
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Beat = function () {
  function Beat(col) {
    _classCallCheck(this, Beat);

    this.col = col;
    this.inTimingBar = false;
    this.hit = false;
    this.canvas = document.getElementById('' + this.col);
    this.ctx = this.canvas.getContext("2d");
    this.posX = 0;
    this.posY = -this.canvas.height * .08;
    this.drawBeat = this.drawBeat.bind(this);
    this.handleTimingBar = this.handleTimingBar.bind(this);
    this.handleHit = this.handleHit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  _createClass(Beat, [{
    key: 'drawBeat',
    value: function drawBeat() {
      this.col > 0 && this.col < 3 ? this.ctx.fillStyle = 'rgba(0, 210, 255, .7)' : this.ctx.fillStyle = 'rgba(155, 255, 0, .7 )';
      this.ctx.strokeStyle = 'black';

      this.col === 0 ? this.ctx.fillRect(this.canvas.width * .25 * this.col, this.posY, this.canvas.width * .25, this.canvas.height * .08) : this.ctx.fillRect(this.canvas.width * .25 * this.col + 5, this.posY, this.canvas.width * .25 - 5, this.canvas.height * .08);

      this.col === 0 ? this.ctx.strokeRect(this.canvas.width * .25 * this.col, this.posY, this.canvas.width * .25, this.canvas.height * .08) : this.ctx.strokeRect(this.canvas.width * .25 * this.col + 5, this.posY, this.canvas.width * .25 - 5, this.canvas.height * .08);
    }
  }, {
    key: 'handleTimingBar',
    value: function handleTimingBar() {
      this.inTimingBar = true;
    }
  }, {
    key: 'handleHit',
    value: function handleHit() {
      this.hit = true;
    }
  }, {
    key: 'handleRemove',
    value: function handleRemove() {
      if (this.hit === true && this.inTimingBar === true) {
        //remove block
      }
    }
  }]);

  return Beat;
}();

exports.default = Beat;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _beat = __webpack_require__(1);

var _beat2 = _interopRequireDefault(_beat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BeatColumn = function () {
  function BeatColumn(col) {
    _classCallCheck(this, BeatColumn);

    this.col = col;
    this.canvas = document.getElementById("" + this.col);
    this.ctx = this.canvas.getContext("2d");
    this.beats = [];
    this.addBeat = this.addBeat.bind(this);
    this.drawBeats = this.drawBeats.bind(this);
    this.removeBeats = this.removeBeats.bind(this);
    this.handleScoring = this.handleScoring.bind(this);
  }

  _createClass(BeatColumn, [{
    key: "addBeat",
    value: function addBeat() {
      var beat = new _beat2.default(this.col);
      this.beats.push(beat);
    }
  }, {
    key: "drawBeats",
    value: function drawBeats() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      // this.ctx.save();
      if (this.beats.length > 0) {
        this.beats.forEach(function (beat) {
          beat.posY += 1;
          beat.drawBeat();
        });
      }
    }
  }, {
    key: "removeBeats",
    value: function removeBeats() {
      var _this = this;

      if (this.beats.length > 0) {
        this.beats.forEach(function (beat, idx) {
          if (beat.hit === true && beat.inTimingBar === true) {
            _this.handleScoring(beat);
            beat.handleRemove();
            _this.beats.splice(idx, 1);
          }
        });
      }
    }
  }, {
    key: "handleScoring",
    value: function handleScoring(beat) {}
  }]);

  return BeatColumn;
}();

exports.default = BeatColumn;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.playSong = playSong;
exports.pauseSong = pauseSong;
exports.stopSong = stopSong;
exports.resetSong = resetSong;

var _beat = __webpack_require__(1);

var _beat2 = _interopRequireDefault(_beat);

var _beat_column = __webpack_require__(2);

var _beat_column2 = _interopRequireDefault(_beat_column);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function playSong(songFile) {
  var song = document.getElementById('' + songFile);
  song.play();
  //start notes
}

function pauseSong(songFile) {
  var song = document.getElementById('' + songFile);
  song.pause();
}

function stopSong(songFile) {
  var song = document.getElementById('' + songFile);
  song.pause();
  song.currentTime = 0;
}

function resetSong(songFile) {
  var song = document.getElementById('' + songFile);
  song.pause();
  song.currentTime = 0;
  song.play();
}

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
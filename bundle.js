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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
    this.awesomeScore = this.awesomeScore.bind(this);
    this.greatScore = this.greatScore.bind(this);
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
  }, {
    key: 'awesomeScore',
    value: function awesomeScore() {
      return this.posY >= this.canvas.height * .71 && this.posY <= this.canvas.height * .81;
    }
  }, {
    key: 'greatScore',
    value: function greatScore() {
      return this.posY >= this.canvas.height * .69 && this.posY <= this.canvas.height * .83;
    }
  }]);

  return Beat;
}();

exports.default = Beat;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _beat = __webpack_require__(0);

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
          beat.posY += 2;
          beat.drawBeat();
        });
      }
    }
  }, {
    key: "removeBeats",
    value: function removeBeats(score) {
      var _this = this;

      var pastBeats = 0;
      if (this.beats.length > 0) {
        this.beats.forEach(function (beat, idx) {
          if (beat.posY >= _this.canvas.height * .75 - _this.canvas.height * .08) {
            pastBeats++;
            score += _this.handleScoring(beat);
            beat.handleRemove();
            return score;
          }
        });
      }
      this.beats.splice(0, pastBeats);
    }
  }, {
    key: "handleScoring",
    value: function handleScoring(beat) {
      if (beat.awesomeScore()) {
        console.log("AWESOME!");
        return 10;
      } else if (beat.greatScore()) {
        console.log("Great!");
        return 5;
      } else {
        console.log("Miss :(");
        return 0;
      }
    }
  }]);

  return BeatColumn;
}();

exports.default = BeatColumn;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _beat = __webpack_require__(0);

var _beat2 = _interopRequireDefault(_beat);

var _beat_column = __webpack_require__(1);

var _beat_column2 = _interopRequireDefault(_beat_column);

var _songs = __webpack_require__(5);

var Song = _interopRequireWildcard(_songs);

var _beatmap = __webpack_require__(4);

var _beatmap2 = _interopRequireDefault(_beatmap);

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
        keyHit(0, "f");
        cyfBeatMap.keyHit(0);
        //press key 1
        break;
      case 71:
        keyHit(1, "g");
        cyfBeatMap.keyHit(1);
        //press key 2
        break;
      case 72:
        keyHit(2, "h");
        cyfBeatMap.keyHit(2);
        //press key 3
        break;
      case 74:
        keyHit(3, "j");
        cyfBeatMap.keyHit(3);
        //press key 4
        break;
      default:
    }
  });

  window.addEventListener('keyup', function (event) {
    switch (event.keyCode) {
      case 70:
        keyUp(0, "f");
        //press key 1
        break;
      case 71:
        keyUp(1, "g");
        //press key 2
        break;
      case 72:
        keyUp(2, "h");
        //press key 3
        break;
      case 74:
        keyUp(3, "j");
        //press key 4
        break;
      default:
    }
  });

  var cyfNotes0 = [400, 950, 1760, 2000, 2220];
  var cyfNotes1 = [800, 850, 950, 1100, 1625, 1745, 1910, 1970, 2120, 2350, 2430];
  var cyfNotes2 = [800, 850, 1100, 1200, 1400, 1460, 1600, 1720, 1880, 2220];
  var cyfNotes3 = [400, 1200, 1430, 1575, 1850, 1940, 2120, 2350, 2430];

  var cyfBeatMap = new _beatmap2.default(cyfNotes0, cyfNotes1, cyfNotes2, cyfNotes3);
  setInterval(function () {
    cyfBeatMap.addNotes(0);
    cyfBeatMap.addNotes(1);
    cyfBeatMap.addNotes(2);
    cyfBeatMap.addNotes(3);
    cyfBeatMap.drawBeatMap();
  }, 1);
  setTimeout(function () {
    return Song.playSong('cyf');
  }, 1000);
});

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _beat = __webpack_require__(0);

var _beat2 = _interopRequireDefault(_beat);

var _beat_column = __webpack_require__(1);

var _beat_column2 = _interopRequireDefault(_beat_column);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BeatMap = function () {
  function BeatMap(notes0, notes1, notes2, notes3) {
    _classCallCheck(this, BeatMap);

    this.time = 0;
    //notes are arrays with time integers (in ms) to see when it needs to be added to respective BeatColumn
    this.notes = {
      0: notes0,
      1: notes1,
      2: notes2,
      3: notes3
    };

    this.cols = {
      0: new _beat_column2.default(0),
      1: new _beat_column2.default(1),
      2: new _beat_column2.default(2),
      3: new _beat_column2.default(3)
    };
    this.score = 0;
    this.addNotes = this.addNotes.bind(this);
    this.keyHit = this.keyHit.bind(this);
  }

  _createClass(BeatMap, [{
    key: 'addNotes',
    value: function addNotes(colNum) {
      if (this.notes[colNum][0] <= this.time) {
        this.cols[colNum].addBeat(colNum);
        this.notes[colNum].shift();
      }
    }
  }, {
    key: 'drawBeatMap',
    value: function drawBeatMap() {
      this.cols[0].drawBeats();
      this.cols[1].drawBeats();
      this.cols[2].drawBeats();
      this.cols[3].drawBeats();
      this.time += 1;
    }
  }, {
    key: 'keyHit',
    value: function keyHit(colNum) {
      this.cols[colNum].removeBeats(this.score);
    }
  }]);

  return BeatMap;
}();

// let testNotes0 = [0,1000,1500,2000,5000];
// let testNotes1 = [500,1000,1500,2000,5000];
// let testNotes2 = [500,1000,1200,1400,1600,1800,2000];
// let testNotes3 = [0,5000,10000,11000,12000];
//
// let testBeatMap = new BeatMap(testNotes0, testNotes1, testNotes2, testNotes3);

exports.default = BeatMap;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.playSong = playSong;
exports.pauseSong = pauseSong;
exports.stopSong = stopSong;
exports.resetSong = resetSong;
function playSong(songFile) {
  var song = document.getElementById("" + songFile);
  song.play();
  //start notes
}

function pauseSong(songFile) {
  var song = document.getElementById("" + songFile);
  song.pause();
}

function stopSong(songFile) {
  var song = document.getElementById("" + songFile);
  song.pause();
  song.currentTime = 0;
}

function resetSong(songFile) {
  var song = document.getElementById("" + songFile);
  song.pause();
  song.currentTime = 0;
  song.play();
}

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
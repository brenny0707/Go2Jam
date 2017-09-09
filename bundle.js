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

    //these handles irrelevant???

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
    value: function removeBeats(comboCounter) {
      var _this = this;

      var scoring = { beatPoints: 0, combo: comboCounter };
      var pastBeats = 0;
      if (this.beats.length > 0) {
        this.beats.forEach(function (beat, idx) {
          if (beat.posY >= _this.canvas.height * .75 - _this.canvas.height * .08) {
            pastBeats++;
            var hitResult = _this.handleScoring(beat, comboCounter);
            beat.handleRemove();
            scoring.beatPoints += hitResult.points;
            hitResult.success === false ? scoring.combo = 0 : scoring.combo++;
          }
        });
      }
      this.beats.splice(0, pastBeats);
      return scoring;
    }
  }, {
    key: "handleScoring",
    value: function handleScoring(beat, combo) {
      var hitResult = { points: null, success: true };
      if (beat.awesomeScore()) {
        // console.log("AWESOME!");
        combo === 0 ? hitResult.points = 10 : hitResult.points = 10 * combo;
      } else if (beat.greatScore()) {
        // console.log("Great!");
        combo === 0 ? hitResult.points = 10 : hitResult.points = 5 * combo;
      } else {
        // console.log("Miss :(");
        hitResult.points = 0;
        hitResult.success = false;
      }
      return hitResult;
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

var _song_list = __webpack_require__(6);

var _song_list2 = _interopRequireDefault(_song_list);

var _game = __webpack_require__(8);

var _game2 = _interopRequireDefault(_game);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {

  var game = new _game2.default();
  game.drawBorder();

  document.addEventListener("click", function (event) {
    if (event.target.type === "button") {
      game.closeIntroModal();
      var songChoice = event.target.name;
      var BMDifficulty = event.target.value;
      var currentSong = _song_list2.default[songChoice];
      var currentBeatMap = currentSong[BMDifficulty];
      game.playCurrentSong(songChoice, BMDifficulty);
    }
  });
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
    this.comboCounter = 0;
    this.addNotes = this.addNotes.bind(this);
    this.keyHit = this.keyHit.bind(this);

    //ONLY TO BEATMAP
    this.beatLogger = {
      0: [],
      1: [],
      2: [],
      3: []
    };
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
      var hitResult = this.cols[colNum].removeBeats(this.comboCounter);
      this.score += hitResult.beatPoints;
      this.comboCounter = hitResult.combo;
      // console.log(this.score);
      this.beatLogger[colNum].push(Math.round(this.time / 10) * 10 - 300);
      console.log('' + colNum, '' + (Math.round(this.time / 10) * 10 - 300)); //BEATLOGGER, DO NOT DELETE!!!
      console.log(this.beatLogger);
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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cyf = __webpack_require__(7);

var _cyf2 = _interopRequireDefault(_cyf);

var _ba = __webpack_require__(9);

var _ba2 = _interopRequireDefault(_ba);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SongList = {
  cyf: _cyf2.default,
  ba: _ba2.default
};

exports.default = SongList;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _beatmap = __webpack_require__(4);

var _beatmap2 = _interopRequireDefault(_beatmap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cyfEasy0 = [400, 950, 1950, 2600, 4140];
var cyfEasy1 = [800, 850, 1100, 1850, 2900, 3290, 3860, 4280, 5480, 5620, 5720, 5820, 5960, 6100];
var cyfEasy2 = [1200, 1400, 1700, 2230, 3150, 3580, 4000, 4420, 4560, 4700, 4840, 4980, 5120, 5260, 5410, 5550, 5650, 5750, 5890, 6020, 6140];
var cyfEasy3 = [1550, 2130, 2330, 2430, 3430, 3720, 6210];

var cyfHard0 = [400, 950, 1760, 2000, 2220];
var cyfHard1 = [800, 850, 950, 1100, 1625, 1745, 1910, 1970, 2120, 2350, 2430];
var cyfHard2 = [800, 850, 1100, 1200, 1400, 1460, 1600, 1720, 1880, 2220];
var cyfHard3 = [400, 1200, 1430, 1575, 1850, 1940, 2120, 2350, 2430];

var cyfEasy = new _beatmap2.default(cyfEasy0, cyfEasy1, cyfEasy2, cyfEasy3);
var cyfHard = new _beatmap2.default(cyfHard0, cyfHard1, cyfHard2, cyfHard3);

var music = {
  title: "Can You Feel",
  songTag: "cyf",
  songOffset: 1000,
  easy: cyfEasy,
  hard: cyfHard
};

exports.default = music;

/***/ }),
/* 8 */
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

var _songs = __webpack_require__(5);

var Song = _interopRequireWildcard(_songs);

var _beatmap = __webpack_require__(4);

var _beatmap2 = _interopRequireDefault(_beatmap);

var _song_list = __webpack_require__(6);

var _song_list2 = _interopRequireDefault(_song_list);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    this.canvas = document.getElementById('board');
    this.ctx = this.canvas.getContext('2d');
    this.firedKeys = {
      f: false,
      g: false,
      h: false,
      j: false
    };
    this.drawBorder = this.drawBorder.bind(this);
    this.keyHit = this.keyHit.bind(this);
    this.keyUp = this.keyUp.bind(this);
    this.playCurrentSong = this.playCurrentSong.bind(this);
    this.closeIntroModal = this.closeIntroModal.bind(this);
  }

  _createClass(Game, [{
    key: 'drawBorder',
    value: function drawBorder() {
      this.ctx.fillStyle = 'rgba(255, 215, 0, .6)';
      var timingBar = this.ctx.fillRect(0, this.canvas.height * .75, this.canvas.width, this.canvas.height * .1);
      this.ctx.fillStyle = 'black';
      for (var x = this.canvas.width / 4; x < this.canvas.width; x += this.canvas.width / 4) {
        this.ctx.fillRect(x, 0, 5, 700);
        this.ctx.font = '20px serif';
        this.ctx.fillText('F', this.canvas.width * .11, this.canvas.height * .81);
        this.ctx.fillText('G', this.canvas.width * .36, this.canvas.height * .81);
        this.ctx.fillText('H', this.canvas.width * .61, this.canvas.height * .81);
        this.ctx.fillText('J', this.canvas.width * .86, this.canvas.height * .81);
      }
    }
  }, {
    key: 'closeIntroModal',
    value: function closeIntroModal() {
      var modal = document.getElementById('intro-modal');
      var modalContainer = document.getElementById('modal-container');
      modalContainer.className = 'hidden';
      modal.className = 'hidden';
    }
  }, {
    key: 'keyHit',
    value: function keyHit(num, key) {
      if (this.firedKeys[key] === false) {
        this.firedKeys[key] = true;
        this.ctx.globalCompositeOperation = 'source-over';
        this.ctx.fillStyle = 'rgba(0, 0, 255, .6)';
        this.ctx.fillRect(this.canvas.width * .25 * num, this.canvas.height * .75, this.canvas.width * .25, this.canvas.height * .1);
      }
    }
  }, {
    key: 'keyUp',
    value: function keyUp(num, key) {
      this.firedKeys[key] = false;
      if (this.firedKeys["f"] === false && this.firedKeys["g"] === false && this.firedKeys["h"] === false && this.firedKeys["j"] === false) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawBorder();
      } else {
        this.ctx.clearRect(this.canvas.width * .25 * num, this.canvas.height * .75, this.canvas.width * .25, this.canvas.height * .1);
        this.drawBorder();
      }
    }
  }, {
    key: 'playCurrentSong',
    value: function playCurrentSong(songTag, difficulty) {
      var selectedSong = _song_list2.default[songTag];
      var selectedBeatMap = selectedSong[difficulty];
      setInterval(function () {
        selectedBeatMap.addNotes(0);
        selectedBeatMap.addNotes(1);
        selectedBeatMap.addNotes(2);
        selectedBeatMap.addNotes(3);
        selectedBeatMap.drawBeatMap();
      }, 1);
      setTimeout(function () {
        return Song.playSong(selectedSong.songTag);
      }, selectedSong.songOffset);
      window.addEventListener('keydown', function (event) {
        switch (event.keyCode) {
          case 70:
            this.keyHit(0, "f");
            selectedBeatMap.keyHit(0);
            break;
          case 71:
            this.keyHit(1, "g");
            selectedBeatMap.keyHit(1);
            break;
          case 72:
            this.keyHit(2, "h");
            selectedBeatMap.keyHit(2);
            break;
          case 74:
            this.keyHit(3, "j");
            selectedBeatMap.keyHit(3);
            break;
          default:
        }
      }.bind(this), false);

      window.addEventListener('keyup', function (event) {
        switch (event.keyCode) {
          case 70:
            this.keyUp(0, "f");
            break;
          case 71:
            this.keyUp(1, "g");
            break;
          case 72:
            this.keyUp(2, "h");
            break;
          case 74:
            this.keyUp(3, "j");
            break;
          default:
        }
      }.bind(this), false);
    }
  }]);

  return Game;
}();

exports.default = Game;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _beatmap = __webpack_require__(4);

var _beatmap2 = _interopRequireDefault(_beatmap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baEasy0 = [400, 950];
var baEasy1 = [800, 850, 1100];
var baEasy2 = [1200];
var baEasy3 = [];

var baHard0 = [400, 950, 1760, 2000, 2220];
var baHard1 = [800, 850, 950, 1100, 1625, 1745, 1910, 1970, 2120, 2350, 2430];
var baHard2 = [800, 850, 1100, 1200, 1400, 1460, 1600, 1720, 1880, 2220];
var baHard3 = [400, 1200, 1430, 1575, 1850, 1940, 2120, 2350, 2430];

var baEasy = new _beatmap2.default(baEasy0, baEasy1, baEasy2, baEasy3);
var baHard = new _beatmap2.default(baHard0, baHard1, baHard2, baHard3);

var music = {
  title: "Bach Alive",
  songTag: "ba",
  songOffset: 1000,
  easy: baEasy,
  hard: baHard
};

exports.default = music;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
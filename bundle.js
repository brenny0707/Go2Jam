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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

var _beat_column = __webpack_require__(2);

var _beat_column2 = _interopRequireDefault(_beat_column);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BeatMap = function () {
  function BeatMap(notes0, notes1, notes2, notes3, speed) {
    _classCallCheck(this, BeatMap);

    // this.time = 0;
    this.startTime = 0;
    this.currentTime = 0;
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
    this.speed = speed;
    this.addNotes = this.addNotes.bind(this);
    this.keyHit = this.keyHit.bind(this);
    this.displayScore = this.displayScore.bind(this);
    this.scoreCanvas = document.getElementById("outer-canvas");
    this.ctx = this.scoreCanvas.getContext("2d");

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
      if (this.notes[colNum][0] <= this.currentTime - this.startTime) {
        this.cols[colNum].addBeat(colNum);
        this.notes[colNum].shift();
      }
    }
  }, {
    key: 'drawBeatMap',
    value: function drawBeatMap() {
      var missedNotes0 = this.cols[0].drawBeats(this.comboCounter, this.speed);
      var missedNotes1 = this.cols[1].drawBeats(this.comboCounter, this.speed);
      var missedNotes2 = this.cols[2].drawBeats(this.comboCounter, this.speed);
      var missedNotes3 = this.cols[3].drawBeats(this.comboCounter, this.speed);
      // this.comboCounter = missedNotes0.combo;
      // this.comboCounter = missedNotes1.combo;
      // this.comboCounter = missedNotes2.combo;
      // this.comboCounter = missedNotes3.combo;
      if (missedNotes0.combo === 0 || missedNotes1.combo === 0 || missedNotes2.combo === 0 || missedNotes3.combo === 0) {
        this.comboCounter = 0;
      }
      this.currentTime = new Date().getTime();
      this.displayScore();
    }
  }, {
    key: 'displayScore',
    value: function displayScore() {
      this.ctx.clearRect(0, 0, this.scoreCanvas.width, this.scoreCanvas.height);
      this.ctx.font = '24px serif';
      this.ctx.fillText('Score: ' + this.score, this.scoreCanvas.width * .05, this.scoreCanvas.height * .2);
      this.ctx.fillText('Combo: ' + this.comboCounter, this.scoreCanvas.width * .05, this.scoreCanvas.height * .4);
    }
  }, {
    key: 'keyHit',
    value: function keyHit(colNum) {
      var hitResult = this.cols[colNum].removeBeats(this.comboCounter);
      this.score += hitResult.beatPoints;
      this.comboCounter = hitResult.combo;
      // console.log(this.score);
      // console.log(this.comboCounter);
      this.beatLogger[colNum].push(Math.round((this.currentTime - this.startTime) / 10) * 10 - 380 * this.speed);
      //BEATLOGGER, DO NOT DELETE!!!
      console.log(this.beatLogger);
      //BEATLOGGER, DO NOT DELETE!!!
    }
  }]);

  return BeatMap;
}();

exports.default = BeatMap;

/***/ }),
/* 2 */
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
    this.handleMissedBeats = this.handleMissedBeats.bind(this);
  }

  _createClass(BeatColumn, [{
    key: "addBeat",
    value: function addBeat() {
      var beat = new _beat2.default(this.col);
      this.beats.push(beat);
    }
  }, {
    key: "drawBeats",
    value: function drawBeats(comboCounter, speed) {
      var missedBeatScore = { combo: comboCounter };
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      // this.ctx.save();
      if (this.beats.length > 0) {
        if (this.beats[0].posY > this.canvas.height) {
          missedBeatScore = this.handleMissedBeats(comboCounter);
        }
        this.beats.forEach(function (beat) {
          beat.posY += speed;
          beat.drawBeat();
        });
      }
      return missedBeatScore;
    }
  }, {
    key: "handleMissedBeats",
    value: function handleMissedBeats(comboCounter) {
      var scoring = { beatPoints: 0, combo: comboCounter };
      var hitResult = this.handleScoring(this.beats[0], comboCounter);
      scoring.beatPoints += hitResult.points;
      hitResult.success === false ? scoring.combo = 0 : scoring.combo++;
      this.beats.splice(0, 1);
      // console.log(scoring.combo);
      return scoring;
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
        // console.log("Miss");
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cyf = __webpack_require__(6);

var _cyf2 = _interopRequireDefault(_cyf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SongList = {
  cyf: _cyf2.default
};

exports.default = SongList;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _beat = __webpack_require__(0);

var _beat2 = _interopRequireDefault(_beat);

var _beat_column = __webpack_require__(2);

var _beat_column2 = _interopRequireDefault(_beat_column);

var _songs = __webpack_require__(3);

var Song = _interopRequireWildcard(_songs);

var _beatmap = __webpack_require__(1);

var _beatmap2 = _interopRequireDefault(_beatmap);

var _song_list = __webpack_require__(4);

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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _beatmap = __webpack_require__(1);

var _beatmap2 = _interopRequireDefault(_beatmap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//compensate = 920-940?
// const cyfEasyo0 =
// [400, 950, 1950, 2600, 4140, 4700, 6510, 7050, 8010, 8740, 9160, 9290, 10210, 10460, 10810, 11220, 11790, 12320, 12750, 13020, 13320, 13990, 14550, 15230, 16220, 16780, 17450, 18170, 19160,
//
//   20110, 20370, 20920, 21480, 22090, 22220, 22600, 23150, 23700, 24310, 24430, 24690, 25060];
// [2570 - 920];
var cyfEasy0 = [1620, 7830, 13790, 16030, 18230, 19310, 19550, 20130];

var cyfEasy1 =
// [800, 850, 1100, 1850, 2900, 3290, 3860, 4280, 4980, 5550, 5820, 6100, 6780, 7050, 7340, 7870, 8420, 8870, 9290, 9570, 10080, 10580, 11510, 12060, 12610, 12890, 13160, 13720, 14290, 15090, 15810, 15970, 16500, 17320, 18090, 18300, 19060,
//
//   19850, 20640, 21190, 21760, 22330, 22870, 23430, 23970, 24560, 24770];
[3880, 7410, 11660, 12720, 14930, 17120, 19860, 20480, 20860];
var cyfEasy2 =
// [1200, 1400, 1700, 2230, 3150, 3580, 4000, 4420, 4560, 5120, 5260, 5410, 5650, 5960, 6510, 6910, 7180, 7750, 8300, 9020, 9440, 9690, 9970, 10700, 11090, 11650, 12190, 12610, 12890, 13160, 13590, 13870, 14160, 14670, 14970, 15520, 16090, 16380, 16930, 17190, 17750, 18000, 18410, 18620, 18920, 19440,

// 19850, 20510, 21060, 21620, 22330, 22740, 23290, 23840, 24560, 24830];
[3270, 3550, 4370, 5720, 6880, 8950, 10390, 14320, 16580, 18780, 19870, 20490, 20870];
var cyfEasy3 =
// [1550, 2130, 2330, 2430, 3430, 3720, 4840, 6210, 6640, 7480, 8530, 8630, 8740, 11370, 11920, 12470, 12750, 13020, 13460, 14420, 15660, 16640, 17880, 18780, 19340, 19550, 19650,
//
//   20110, 20770, 21330, 21890, 22090, 22220, 23000, 23560, 24110, 24300, 24430, 24950, 25060];
[4780, 6290, 8530, 9350, 9770, 13250, 15480, 17690, 19330, 19560, 20150];
//240
var cyfHard0 = [1750, 4170, 7470, 8410, 8880, 9660, 10090, 11890, 13550, 14540, 15050, 15810, 16770, 17740, 18030, 18970, 19700, 19950, 20220, 20780, 21170, 26350, 26550, 28510, 29630, 30560, 31970, 35220, 37400, 38260, 39180, 41270, 42080, 43670];

// 22740, 23560, 24660, 25080, 26340, 26550, 28510, 29630, 30560, 31970, 35220, 35990, 37440, 38780, 39880, 40910, 42970, 44890, 45810, 47160, 49190, 51920, 52170, 52440, 52690, 52940, 54670, 55890, 56440, 57420, 58430, 58770, 60360, 61450, 62990, 63160, 63710, 64390, 64760, 65740, 66310, 66900, 67330, 67680, 69950, 72190, 73020, 75870, 76840, 77810, 80140, 81130, 81920, 82850, 83820, 85390, 86220, 87160, 88120, 90780, 91780, 92700, 93850, 95110, 96050, 97040, 98680, 100240, 100600];
var cyfHard1 = [3480, 3760, 4170, 4690, 6860, 7370, 7950, 8260, 9260, 10570, 13300, 14100, 15510, 16340, 17450, 18590, 19700, 19950, 20500, 20780, 21170, 22190, 22760, 23260, 23830, 24360, 24800, 26350, 26550, 27450, 27750, 28510, 28990, 30070, 31470, 32580, 33740, 35590, 36310, 36560, 37850, 38800, 40870, 41460, 42510, 43550];

// 22190, 23160, 24120, 26350, 26560, 27450, 27750, 28510, 28990, 30070, 31470, 32580, 33740, 35590, 37090, 38280, 39220, 40390, 42170, 43690, 44720, 46600, 46900, 47990, 49120, 50790, 51040, 51370, 51630, 54660, 55490, 56930, 57990, 59400, 60860, 63340, 64380, 64760, 65320, 66310, 66890, 68290, 69370, 71840, 72000, 73580, 75790, 76490, 77150, 79720, 80830, 81300, 82440, 83380, 84380, 85910, 86650, 87570, 89790, 90290, 91380, 92310, 93300, 94280, 95490, 96520, 99680, 100600];
var cyfHard2 = [3480, 3760, 4690, 5130, 6030, 6290, 6740, 7200, 7840, 9260, 10480, 10760, 12760, 13550, 14530, 15210, 16340, 17150, 17300, 18590, 19380, 19520, 19700, 19950, 20500, 20780, 21170, 21950, 22470, 22870, 23160, 23550, 24110, 24680, 25100, 26850, 27450, 27750, 28230, 28910, 29970, 31060, 31340, 32270, 34010, 34400, 34840, 35470, 36310, 36560, 37730, 38540, 39310, 39920, 40170, 40580, 43020];

// 21980, 22470, 22860, 23820, 24740, 26850, 27460, 27760, 28230, 28910, 29970, 31060, 31340, 32270, 34010, 34400, 34840, 35470, 36350, 36620, 37100, 38010, 38990, 40230, 41220, 41510, 42580, 43580, 44420, 46100, 47020, 48240, 48770, 49940, 50500, 50800, 51050, 51360, 51620, 53540, 54100, 55220, 56150, 57110, 58170, 59110, 59890, 60210, 60580, 62090, 62250, 62410, 63340, 64090, 64630, 65040, 65950, 66600, 67050, 67580, 68840, 69060, 70440, 71040, 71180, 71350, 72570, 73010, 74000, 74820, 75060, 75660, 76230, 76620, 77260, 77820, 78200, 78550, 79000, 79540, 80530, 81210, 82190, 83150, 84130, 85680, 86370, 87270, 88300, 88770, 88920, 89170, 89320, 91090, 92070, 92990, 93980, 95230, 96210, 97180, 97640, 97800, 98040, 98190, 99060, 99660,100600];
var cyfHard3 = [1750, 5130, 6160, 6640, 7740, 8140, 8870, 9670, 10100, 12370, 13300, 14110, 14930, 15820, 16770, 18040, 18970, 19700, 19950, 20210, 20780, 21170, 25100, 26850, 28230, 29340, 30180, 31720, 33240, 33370, 33520, 34400, 34840, 35700, 37140, 38040, 38950, 40300, 43350];

// 23260, 24370, 25070, 26840, 28230, 29340, 30180, 31720, 33240, 33370, 33520, 34400, 34840, 35700, 37430, 38580, 39530, 40640, 41210, 41500, 43280, 44580, 45520, 46720, 47610, 47750, 48920, 50220, 51900, 52170, 52440, 52670, 52940, 54100, 55740, 56540, 57700, 58670, 59890, 60210, 61170, 62570, 63000, 63150, 64090, 64630, 65390, 66610, 68020, 68830, 69040, 71470, 73570, 74000, 74970, 76090, 76950, 77810, 78210, 79420, 81040, 81620, 82710, 83720, 84700, 84970, 85110, 86050, 86900, 87890, 88770, 88890, 89170, 89310, 91640, 92620, 93610, 94520, 94810, 94930, 95780, 96730, 97640, 97780, 98040, 98180, 99370, 100240, 100600];


var cyfEasy = new _beatmap2.default(cyfEasy0, cyfEasy1, cyfEasy2, cyfEasy3, 2);
var cyfHard = new _beatmap2.default(cyfHard0, cyfHard1, cyfHard2, cyfHard3, 2.5);

var music = {
  title: "Can You Feel",
  songTag: "cyf",
  songOffset: 1000,
  easy: cyfEasy,
  hard: cyfHard
};

exports.default = music;

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _beat = __webpack_require__(0);

var _beat2 = _interopRequireDefault(_beat);

var _beat_column = __webpack_require__(2);

var _beat_column2 = _interopRequireDefault(_beat_column);

var _songs = __webpack_require__(3);

var Song = _interopRequireWildcard(_songs);

var _beatmap = __webpack_require__(1);

var _beatmap2 = _interopRequireDefault(_beatmap);

var _song_list = __webpack_require__(4);

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
      selectedBeatMap.startTime = new Date().getTime();
      selectedBeatMap.currentTime = new Date().getTime();
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

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
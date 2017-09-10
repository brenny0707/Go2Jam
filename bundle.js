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
      // this.beatLogger[colNum].push(Math.round((this.currentTime - this.startTime)/10)*10 - (380 * this.speed));

      this.beatLogger[colNum].push(Math.round((this.currentTime - this.startTime) / 10) * 10 - 380 * 3 - 80);
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

var cyfEasy0 = [1660, 3850, 7850, 12730, 14900, 17100, 19310, 28240, 32000, 37680, 40890, 45470, 50450, 51000, 53320, 55520, 58760, 60910, 64890, 69780, 72800, 76740, 80500, 81590, 85990, 88310, 88900, 90470, 94850, 97240, 97800, 100360];

var cyfEasy1 = [4360, 5660, 7410, 10550, 13790, 16010, 18220, 20490, 20950, 22150, 23210, 24350, 26590, 29360, 31460, 33660, 35460, 37100, 40360, 41780, 44400, 47660, 49880, 51560, 52090, 52630, 54890, 56550, 58160, 60370, 63810, 67640, 68770, 73290, 74600, 76310, 79390, 82600, 83760, 87110, 89410, 91530, 92690, 95960, 98390, 99440];

var cyfEasy2 = [4790, 6850, 8970, 11550, 13250, 15460, 17660, 19870, 21620, 22650, 23770, 25990, 27140, 27720, 28850, 29890, 31020, 33140, 34950, 36000, 36580, 38230, 39850, 42280, 43210, 44870, 46060, 47130, 48200, 49300, 51560, 52090, 54340, 55970, 57650, 59870, 62090, 63170, 64350, 65970, 67050, 69230, 70970, 72040, 73730, 75780, 77840, 79390, 83120, 84810, 87610, 89410, 92060, 93740, 96490, 98790, 99950];

var cyfEasy3 = [6340, 8570, 9400, 14280, 16510, 18720, 19310, 24750, 34090, 38750, 42690, 46590, 48740, 50450, 51000, 53790, 57100, 62620, 65430, 66540, 71500, 75200, 77390, 78290, 80500, 82090, 84290, 85370, 86550, 88310, 88890, 91010, 93210, 94270, 95430, 97220, 97800, 99110, 100360];

var cyfHard0 = [1750, 4170, 7470, 8410, 8880, 9660, 10090, 11890, 13550, 14540, 15050, 15810, 16770, 17740, 18030, 18970, 19700, 19950, 20220, 20780, 21170, 26350, 26550, 28510, 29630, 30560, 31970, 35220, 37400, 38260, 39180, 41270, 42080, 43670, 46620, 50760, 51060, 51310, 51580, 53570, 55220, 57400, 61190, 64140, 66320, 70090, 73110, 76260, 77290, 77770, 78530, 78920, 80790, 81900, 82690, 83350, 84080, 84910, 86290, 87130, 87860, 88670, 88800, 89210, 89330, 90800, 91590, 92270, 92990, 93810, 95210, 96020, 96680, 97770, 97910, 98140, 98290, 98650, 100190, 100590];

var cyfHard1 = [3480, 3760, 4170, 4690, 6030, 6290, 6860, 7370, 7950, 8260, 9260, 10570, 13300, 14100, 15510, 16340, 17450, 18590, 19700, 19950, 20500, 20780, 21170, 22190, 22760, 23260, 23830, 24360, 24800, 26350, 26550, 27450, 27750, 28510, 28990, 30070, 31470, 32580, 33740, 35590, 36310, 36560, 37850, 38800, 40870, 41460, 42510, 43550, 44380, 45480, 46020, 46720, 48870, 49880, 50470, 51900, 52150, 52430, 52700, 52980, 55760, 56180, 57970, 60900, 61450, 62180, 62330, 62490, 63680, 64640, 65080, 65770, 66860, 69820, 70370, 71050, 71210, 71350, 72620, 73110, 73550, 74840, 75080, 75720, 76160, 76890, 77180, 78120, 79430, 79670, 81370, 81650, 82160, 83670, 84370, 85040, 86150, 86610, 88150, 89740, 91070, 92620, 93260, 93910, 95090, 95470, 96990, 99060, 99650, 100590];

var cyfHard2 = [3480, 3760, 4690, 5130, 6160, 6740, 7200, 7840, 9260, 10480, 10760, 12760, 13550, 14530, 15210, 16340, 17150, 17300, 18590, 19380, 19520, 19700, 19950, 20500, 20780, 21170, 21950, 22470, 22870, 23160, 23550, 24110, 24680, 25100, 26850, 27450, 27750, 28230, 28910, 29970, 31060, 31340, 32270, 34010, 34400, 34840, 35470, 36310, 36560, 37730, 38540, 39310, 39920, 40170, 40580, 43020, 44530, 44830, 45800, 46860, 47130, 47680, 47810, 48230, 48980, 49210, 50210, 51900, 52150, 52430, 52700, 52980, 54690, 55850, 56900, 58120, 58720, 59120, 59960, 60180, 60620, 62630, 63360, 64760, 65890, 66990, 67590, 68010, 68930, 69100, 69520, 71470, 72280, 73550, 73990, 74950, 75590, 76050, 76760, 78120, 79540, 81370, 81650, 82430, 82810, 83810, 84660, 85360, 85630, 86030, 86870, 87310, 88290, 89740, 91330, 91710, 92740, 93540, 94190, 94490, 94930, 95770, 96150, 97170, 99360, 99650, 100590];

var cyfHard3 = [1750, 5130, 6640, 7740, 8140, 8870, 9670, 10100, 12370, 13300, 14110, 14930, 15820, 16770, 18040, 18970, 19700, 19950, 20210, 20780, 21170, 25100, 26850, 28230, 29340, 30180, 31720, 33240, 33370, 33520, 34400, 34840, 35700, 37140, 38040, 38950, 40300, 43350, 44680, 47010, 47250, 47990, 49100, 50760, 51040, 51330, 51580, 54120, 55460, 56590, 57040, 57670, 58450, 58820, 59400, 60310, 63000, 63150, 64380, 65440, 66580, 67330, 67760, 68280, 69260, 71960, 72130, 73990, 75440, 76650, 77030, 77770, 78530, 78930, 80790, 83080, 85900, 87590, 88670, 88800, 89210, 89330, 90800, 92000, 92990, 94780, 95210, 96430, 97780, 97910, 98140, 98270, 100190, 100590];

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
import Beat from './beat.js';
import BeatColumn from './beat_column.js';

class BeatMap {
  constructor(notes0, notes1, notes2, notes3) {
    this.time = 0;
    //notes are arrays with time integers (in ms) to see when it needs to be added to respective BeatColumn
    this.notes = {
      0: notes0,
      1: notes1,
      2: notes2,
      3: notes3,
    };

    this.cols = {
      0: new BeatColumn(0),
      1: new BeatColumn(1),
      2: new BeatColumn(2),
      3: new BeatColumn(3),
    };
    this.score = 0;
    this.comboCounter = 0;
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
      3: [],
    };
  }
  addNotes(colNum) {
    if(this.notes[colNum][0] <= this.time) {
      this.cols[colNum].addBeat(colNum);
      this.notes[colNum].shift();
    }
  }

  drawBeatMap() {
      let missedNotes0 = this.cols[0].drawBeats(this.comboCounter);
      let missedNotes1 =this.cols[1].drawBeats(this.comboCounter);
      let missedNotes2 =this.cols[2].drawBeats(this.comboCounter);
      let missedNotes3 =this.cols[3].drawBeats(this.comboCounter);
      // this.comboCounter = missedNotes0.combo;
      // this.comboCounter = missedNotes1.combo;
      // this.comboCounter = missedNotes2.combo;
      // this.comboCounter = missedNotes3.combo;
      if (missedNotes0.combo === 0 || missedNotes1.combo === 0 || missedNotes2.combo === 0 || missedNotes3.combo === 0) {
        this.comboCounter = 0;
      }
      this.time += 1;
      this.displayScore();
  }

  displayScore() {
    this.ctx.clearRect(0,0,this.scoreCanvas.width, this.scoreCanvas.height);
    this.ctx.font = '24px serif';
    this.ctx.fillText(`Score: ${this.score}`, this.scoreCanvas.width * .05, this.scoreCanvas.height * .2);
    this.ctx.fillText(`Combo: ${this.comboCounter}`, this.scoreCanvas.width * .05, this.scoreCanvas.height * .4);
  }
  keyHit(colNum) {
    let hitResult = this.cols[colNum].removeBeats(this.comboCounter);
    this.score += hitResult.beatPoints;
    this.comboCounter = hitResult.combo;
    // console.log(this.score);
    // console.log(this.comboCounter);
    this.beatLogger[colNum].push(Math.round((this.time)/10)*10 - 300);
    //BEATLOGGER, DO NOT DELETE!!!
    console.log(this.beatLogger);
    //BEATLOGGER, DO NOT DELETE!!!
  }
}

export default BeatMap;

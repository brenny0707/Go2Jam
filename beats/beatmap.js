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
  }
  addNotes(colNum) {
    if(this.notes[colNum][0] <= this.time) {
      this.cols[colNum].addBeat(colNum);
      this.notes[colNum].shift();
    }
  }

  drawBeatMap() {
      this.cols[0].drawBeats();
      this.cols[1].drawBeats();
      this.cols[2].drawBeats();
      this.cols[3].drawBeats();
      this.time += 1;
  }

  keyHit(colNum) {
    let hitResult = this.cols[colNum].removeBeats(this.comboCounter);
    this.score += hitResult.beatPoints;
    this.comboCounter = hitResult.combo;
    console.log(this.score);
  }
}

// let testNotes0 = [0,1000,1500,2000,5000];
// let testNotes1 = [500,1000,1500,2000,5000];
// let testNotes2 = [500,1000,1200,1400,1600,1800,2000];
// let testNotes3 = [0,5000,10000,11000,12000];
//
// let testBeatMap = new BeatMap(testNotes0, testNotes1, testNotes2, testNotes3);

export default BeatMap;

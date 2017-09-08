import Beat from './beat.js';
class BeatColumn {
  constructor(col) {
    this.col = col;
    this.canvas = document.getElementById(`${this.col}`);
    this.ctx = this.canvas.getContext("2d");
    this.beats = [];
    this.addBeat = this.addBeat.bind(this);
    this.drawBeats = this.drawBeats.bind(this);
    this.removeBeats = this.removeBeats.bind(this);
    this.handleScoring = this.handleScoring.bind(this);
  }

  addBeat() {
    const beat = new Beat(this.col);
    this.beats.push(beat);
  }

  drawBeats() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // this.ctx.save();
    if (this.beats.length > 0) {
      this.beats.forEach( (beat) => {
        beat.posY += 2;
        beat.drawBeat();
      });
    }
  }

  removeBeats(score) {
    let pastBeats = 0;
    if (this.beats.length > 0) {
      this.beats.forEach( (beat, idx) => {
        if (beat.posY >= this.canvas.height * .75 - this.canvas.height * .08 ) {
          pastBeats ++;
          score += this.handleScoring(beat);
          beat.handleRemove();
          return score;
        }
      });
    }
    this.beats.splice(0, pastBeats);
  }


  handleScoring(beat) {
    if (beat.awesomeScore()) {
      console.log("AWESOME!");
      return 10;
    }
    else if (beat.greatScore()) {
      console.log("Great!");
      return 5;
    }
    else {
      console.log("Miss :(");
      return 0;
    }

  }
}

export default BeatColumn;

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

  removeBeats(comboCounter) {
    let scoring = {beatPoints: 0, combo: comboCounter};
    let pastBeats = 0;
    if (this.beats.length > 0) {
      this.beats.forEach( (beat, idx) => {
        if (beat.posY >= this.canvas.height * .75 - this.canvas.height * .08 ) {
          pastBeats ++;
          let hitResult = this.handleScoring(beat, comboCounter);
          beat.handleRemove();
          scoring.beatPoints += hitResult.points;
          hitResult.success === false ? scoring.combo = 0 : scoring.combo ++;
        }
      });
    }
    this.beats.splice(0, pastBeats);
    return scoring;
  }


  handleScoring(beat, combo) {
    let hitResult = { points: null, success: true };
    if (beat.awesomeScore()) {
      // console.log("AWESOME!");
      combo === 0 ? hitResult.points = 10:
      hitResult.points = 10 * combo;
    }
    else if (beat.greatScore()) {
      // console.log("Great!");
      combo === 0 ? hitResult.points = 10:
      hitResult.points = 5 * combo;
    }
    else {
      // console.log("Miss :(");
      hitResult.points = 0;
      hitResult.success = false;
    }
    return hitResult;
  }
}

export default BeatColumn;

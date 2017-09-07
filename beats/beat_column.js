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

  removeBeats() {
    if (this.beats.length > 0) {
      this.beats.forEach( (beat, idx) => {
        if (beat.hit === true && beat.inTimingBar === true) {
          this.handleScoring(beat);
          beat.handleRemove();
          this.beats.splice(idx, 1);
        }
      });
    }
  }

  handleScoring(beat) {

  }
}

export default BeatColumn;

import Beat from './beat.js';

class BeatColumn {
  constructor(col) {
    this.col = col;
    this.canvas = document.getElementById(`${this.col}`);
    this.ctx = this.canvas.getContext("2d");
    this.beats = [];
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
        beat.pos += 1;
        beat.drawBeat();
      });
    }

  }
  removeBeat() {
    //code with checking timingBar
  }
}

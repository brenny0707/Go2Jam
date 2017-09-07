class Beat {
  constructor(col) {
    this.pos = 0;
    this.col = col;
    this.inTimingBar = false;
    this.hit = false;
    this.canvas = document.getElementById(`${this.col}`);
    this.ctx = this.canvas.getContext("2d");
    this.drawBeat = this.drawBeat.bind(this);
  }

  drawBeat() {
    this.col > 0 && this.col < 3 ?
    this.ctx.fillStyle = 'rgba(0, 210, 255, 1)':
    this.ctx.fillStyle = 'rgba(155, 255, 0, 1 )';

    this.ctx.fillRect(this.canvas.width * .25 * this.col, this.pos, this.canvas.width, this.canvas.height * .08);
  }
}

export default Beat;

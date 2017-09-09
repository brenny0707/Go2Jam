import Beat from './beats/beat.js';
import BeatColumn from './beats/beat_column.js';
import * as Song from './songs/songs.js';
import BeatMap from './beats/beatmap.js';
import SongList from './songs/song_list.js';


class Game {
  constructor() {
    this.canvas = document.getElementById('board');
    this.ctx = this.canvas.getContext('2d');
    this.firedKeys = {
      f: false,
      g: false,
      h: false,
      j: false,
    };
    this.drawBorder = this.drawBorder.bind(this);
    this.keyHit = this.keyHit.bind(this);
    this.keyUp = this.keyUp.bind(this);
    this.playCurrentSong = this.playCurrentSong.bind(this);
    this.closeIntroModal = this.closeIntroModal.bind(this);
  }
  drawBorder() {
    this.ctx.fillStyle = 'rgba(255, 215, 0, .6)';
    let timingBar = this.ctx.fillRect(0, this.canvas.height * .75, this.canvas.width, this.canvas.height * .1);
    this.ctx.fillStyle = 'black';
    for (let x = this.canvas.width / 4; x < this.canvas.width; x += this.canvas.width / 4) {
      this.ctx.fillRect(x, 0, 5, 700);
      this.ctx.font = '20px serif';
      this.ctx.fillText('F', this.canvas.width * .11, this.canvas.height * .81);
      this.ctx.fillText('G', this.canvas.width * .36, this.canvas.height * .81);
      this.ctx.fillText('H', this.canvas.width * .61, this.canvas.height * .81);
      this.ctx.fillText('J', this.canvas.width * .86, this.canvas.height * .81);
    }
  }
  closeIntroModal() {
    const modal = document.getElementById('intro-modal');
    const modalContainer = document.getElementById('modal-container');
    modalContainer.className = 'hidden';
    modal.className = 'hidden';

  }
  keyHit(num, key) {
    if (this.firedKeys[key] === false) {
      this.firedKeys[key] = true;
      this.ctx.globalCompositeOperation = 'source-over';
      this.ctx.fillStyle = 'rgba(0, 0, 255, .6)';
      this.ctx.fillRect(this.canvas.width * .25 * num, this.canvas.height * .75, this.canvas.width * .25, this.canvas.height * .1);
    }

  }

  keyUp(num, key) {
    this.firedKeys[key] = false;
    if(this.firedKeys["f"] === false && this.firedKeys["g"] === false && this.firedKeys["h"] === false && this.firedKeys["j"] === false) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.drawBorder();
    }
    else {
      this.ctx.clearRect(this.canvas.width * .25 * num, this.canvas.height * .75, this.canvas.width * .25, this.canvas.height * .1);
      this.drawBorder();
    }

  }
  playCurrentSong(songTag, difficulty) {
    let selectedSong = SongList[songTag];
    let selectedBeatMap = selectedSong[difficulty];
    setInterval( () => {
      selectedBeatMap.addNotes(0);
      selectedBeatMap.addNotes(1);
      selectedBeatMap.addNotes(2);
      selectedBeatMap.addNotes(3);
      selectedBeatMap.drawBeatMap();
    }, 1);
    setTimeout( () => Song.playSong(selectedSong.songTag), selectedSong.songOffset);
    window.addEventListener('keydown', function(event) {
      switch(event.keyCode) {
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

    window.addEventListener('keyup', function(event) {
      switch(event.keyCode) {
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
}

export default Game;

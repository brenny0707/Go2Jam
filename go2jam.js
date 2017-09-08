import Beat from './beats/beat.js';
import BeatColumn from './beats/beat_column.js';
import * as Song from './songs/songs.js';
import BeatMap from './beats/beatmap.js';
import SongList from './songs/song_list.js';

document.addEventListener('DOMContentLoaded', () => {
    let canvas = document.getElementById('board');
    let ctx = canvas.getContext('2d');
    drawBorder();
    let firedKeys = {
      f: false,
      g: false,
      h: false,
      j: false,
    };
    function drawBorder() {
      ctx.fillStyle = 'rgba(255, 215, 0, .6)';
      let timingBar = ctx.fillRect(0, canvas.height * .75, canvas.width, canvas.height * .1);
      ctx.fillStyle = 'black';
      for (let x = canvas.width / 4; x < canvas.width; x += canvas.width / 4) {
        ctx.fillRect(x, 0, 5, 700);
        ctx.font = '20px serif';
        ctx.fillText('f', canvas.width * .11, canvas.height * .81);
        ctx.fillText('g', canvas.width * .36, canvas.height * .81);
        ctx.fillText('h', canvas.width * .61, canvas.height * .81);
        ctx.fillText('j', canvas.width * .86, canvas.height * .81);
      }
    }

    function keyHit(num, key) {
      if (firedKeys[key] === false) {
        firedKeys[key] = true;
        ctx.globalCompositeOperation = 'source-over';
        ctx.fillStyle = 'rgba(0, 0, 255, .6)';
        ctx.fillRect(canvas.width * .25 * num, canvas.height * .75, canvas.width * .25, canvas.height * .1);
      }

    }

    function keyUp(num, key) {
      firedKeys[key] = false;
      if(firedKeys["f"] === false && firedKeys["g"] === false && firedKeys["h"] === false && firedKeys["j"] === false) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBorder();
      }
      else {
        ctx.clearRect(canvas.width * .25 * num, canvas.height * .75, canvas.width * .25, canvas.height * .1);
        drawBorder();
      }

    }
    let songChoice = "cyf";
    let BMDifficulty = "hardBM";
    let currentSong = SongList[songChoice];
    let currentBeatMap = currentSong[BMDifficulty];
    // debugger


    function playCurrentSong(songTag, difficulty) {
      // debugger
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
            keyHit(0, "f");
            selectedBeatMap.keyHit(0);
            break;
          case 71:
            keyHit(1, "g");
            selectedBeatMap.keyHit(1);
            break;
          case 72:
            keyHit(2, "h");
            selectedBeatMap.keyHit(2);
            break;
          case 74:
            keyHit(3, "j");
            selectedBeatMap.keyHit(3);
            break;
          default:
        }
      });

      window.addEventListener('keyup', function(event) {
        switch(event.keyCode) {
          case 70:
            keyUp(0, "f");
            break;
          case 71:
            keyUp(1, "g");
            break;
          case 72:
            keyUp(2, "h");
            break;
          case 74:
            keyUp(3, "j");
            break;
          default:
        }
      });
    }
    playCurrentSong(songChoice, BMDifficulty);
});

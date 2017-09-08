import Beat from './beats/beat.js';
import BeatColumn from './beats/beat_column.js';
import * as Song from './songs/songs.js';
import BeatMap from './beats/beatmap.js';
import SongList from './songs/song_list.js';
import Game from './game.js';

document.addEventListener('DOMContentLoaded', () => {

    let game = new Game();
    game.drawBorder();

    let songChoice = "ba";
    let BMDifficulty = "easyBM";
    let currentSong = SongList[songChoice];
    let currentBeatMap = currentSong[BMDifficulty];

    game.playCurrentSong(songChoice, BMDifficulty);
});

function playSong(songFile) {
  let song = document.getElementById(`${songFile}`);
  song.play();
  //start notes
}

function pauseSong(songFile) {
  let song = document.getElementById(`${songFile}`);
    song.pause();
}

function stopSong(songFile) {
  let song = document.getElementById(`${songFile}`);
  song.pause();
  song.currentTime = 0;
}

function resetSong(songFile) {
  let song = document.getElementById(`${songFile}`);
  song.pause();
  song.currentTime = 0;
  song.play();
}

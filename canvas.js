
function playAudio(songFile) {
  let x = document.getElementById(`${songFile}`);
  debugger
  x.play();
}

function pauseAudio() {

    x.pause();
}

  document.addEventListener("DOMContentLoaded", function(event) {
    debugger
    playAudio("fd");
    let canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    window.addEventListener('keydown', function(event) {
      // console.log(event.keyCode);
      switch(event.keyCode) {
        case 32:
        console.log("space");
        break;
        case 13:
        console.log("enter");
        break;
        case 87:
          console.log("w");
          break;
        case 65:
          console.log("a");
          break;
        case 83:
          console.log("s");
          break;
        case 68:
          console.log("d");
          break;
        case 70:
          console.log("f");
          break;
        case 71:
          console.log("g");
          break;
        case 72:
          console.log("h");
          break;
        case 74:
          console.log("j");
          break;
      }
    });

  });

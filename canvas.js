  document.addEventListener("DOMContentLoaded", function(event) {
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
        //checkNote(), make sure to use the firedKeys object to check for all notes
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

    window.addEventListener('keydown', function(event) {
      // console.log(event.keyCode);
      switch(event.keyCode) {
        // case 32:
        // console.log("space");
        // //both space and enter count for same thing
        // break;
        // case 13:
        // console.log("enter");
        // //both space and enter count for same thing
        // break;
        // case 87:
        //   console.log("w");
        //   //navigate up menu
        //   break;
        // case 65:
        //   console.log("a");
        //   //navigate left menu?
        //   break;
        // case 83:
        //   console.log("s");
        //   //navigate down menu
        //   break;
        // case 68:
        //   console.log("d");
        //   //navigate right menu?
        //   break;
        case 70:
          console.log("f");
          keyHit(0, "f");
          //press key 1
          break;
        case 71:
          console.log("g");
          keyHit(1, "g");
          //press key 2
          break;
        case 72:
          console.log("h");
          keyHit(2, "h");
          //press key 3
          break;
        case 74:
          console.log("j");
          keyHit(3, "j");
          //press key 4
          break;
        default:
      }
    });

    window.addEventListener('keyup', function(event) {
      // console.log(event.keyCode);
      switch(event.keyCode) {
        case 70:
          console.log("f up");
          keyUp(0, "f");
          //press key 1
          break;
        case 71:
          console.log("g up");
          keyUp(1, "g");
          //press key 2
          break;
        case 72:
          console.log("h up");
          keyUp(2, "h");
          //press key 3
          break;
        case 74:
          console.log("j up");
          keyUp(3, "j");
          //press key 4
          break;
        default:
      }
    });

  });

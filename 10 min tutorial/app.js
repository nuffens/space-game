var ship = document.getElementById("ship");
var game = document.getElementById("game");
//var right = parseInt(windowgetComputedStyle(ship).getPropertyValue("right"));

window.addEventListener("keydown", (e) => {
  var left = parseInt(window.getComputedStyle(ship).getPropertyValue("left"));
    if (e.key == "ArrowLeft" && left > 0) {
      ship.style.left = left - 10 + "px";
    } else if(e.key == "ArrowRight" && left <= 460){
      ship.style.left = left + 10 + "px";
    }
    if((e.key == "ArrowUp" || e.keyCode == 32)) {
      var bullet = document.createElement("div");
      bullet.classList.add("bullets");
      game.appendChild(bullet);

    var movebullet = setInterval(() => {
      var rocks = document.getElementsByClassName("rocks");

      for (var i = 0; i < rocks.length; i++) {
        var rock = rocks[i];
        if (rock != undefined) {
          var rockbound = rock.getBoundingClientRect();
          var bulletbound = bullet.getBoundingClientRect();
          if (
            bulletbound.left >= rockbound.left &&
            bulletbound.right <= rockbound.right &&
            bulletbound.top <= rockbound.top &&
            bulletbound.bottom <= rockbound.bottom
          ) {
            rock.parentElement.removeChild(rock); //Just removing that particular rock;
            //Scoreboard
            document.getElementById("points").innerHTML =
              parseInt(document.getElementById("points").innerHTML) + 1;
          }
        }
      }
        var bulletbottom = parseInt(window.getComputedStyle(bullet).getPropertyValue("bottom"));
        bullet.style.left = left + "px";
        bullet.style.bottom = bulletbottom + 3 + "px";

      }, 2);
    }
  });

  var generateRocks = setInterval(()=>{

    var rock = document.createElement("div");
    rock.classList.add("rocks");
    var rockleft = parseInt(window.getComputedStyle(rock).getPropertyValue("left"));
    rock.style.left = Math.floor(Math.random()*450) + "px";
    game.appendChild(rock);
  }, 1000);

  var moverocks = setInterval(()=>{
    var rocks = document.getElementsByClassName("rocks");

    if(rocks!=undefined){
      for(var i=0;i<rocks.length;i++){
        var rock = rocks[i]; //getting each rock
        var rocktop = parseInt(
          window.getComputedStyle(rock).getPropertyValue("top"));
       
      if(rocktop >= 475){
          alert("Game Over. Refresh this page.");
          clearInterval(moverocks);
          window.location.reload();
      }
       
          rock.style.top = rocktop + 20 + "px";       



      }
    }
  }, 450);
/////////////////////////////////////////////////////////////////////////////////////
// Create random color in hex value - example #ff00ff;

var bgColor = document.querySelector("#bgColor");
bgColor.addEventListener("click", function () {
   document.body.style.backgroundColor = ranColor();
});

function ranColor() {
   return "#" + Math.random().toString(16).substr(-6);
}

///////////////////////////////////////////////////////////////////////////////////////
// JavaScript DOMContentLoaded
window.addEventListener("DOMContentLoaded", function (event) {
   console.log("DOM fully loaded and parsed");
});

///////////////////////////////////////////////////////////////////////////////////
// Element Mover App

// Setup a new player object
var player = {
   speed: 100,
   x: 100,
   y: 100
}

// build the square box when DOMContent full loaded
document.addEventListener("DOMContentLoaded", build);

// Setup keydown event listener
document.addEventListener("keydown", function (e) {
   var el = document.querySelector("#squarebox");
   var key = e.keyCode;
   if (key === 37) {
      player.x -= player.speed;
   }
   if (key === 39) {
      player.x += player.speed;
   }
   if (key === 40) {
      player.y += player.speed;
   }
   if (key === 38) {
      player.y -= player.speed;
   }
   player.el.style.left = player.x + "px";
   player.el.style.top = player.y + "px";
});

// Build the square box on body 
function build() {
   player.el = document.createElement("div");
   player.x = 100;
   player.y = 100;
   player.el.style.position = "absolute";
   player.el.style.width = "100px";
   player.el.style.height = "100px";
   player.el.style.backgroundColor = "red";
   player.el.style.color = "white";
   player.el.style.top = player.y + "px";
   player.el.style.left = player.x + "px";
   document.body.appendChild(player.el);
}






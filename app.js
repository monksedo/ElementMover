/*
var myNum1 = 1000.323498445;
myNum1 = myNum1.toFixed(2);
var myNum2 = "100";
var num2 = Number(myNum2);
console.log(myNum1);
console.log(myNum2);
console.log("myNum2 is now converted to number using Number() method: " + num2);

var myStr = " Hello world JavaScript 123 this works, I love JavaScript ";

console.log(myStr);
console.log(myStr[9]);
console.log(myStr[7]);
console.log(myStr.slice(7, 12));
console.log(myStr.substring(7, 17));
console.log(myStr.substr(7, 12));

//////////////////////////////////
var newArr = [];
console.log(myStr.replace("Java", "Coffee"));
var strArr = myStr.split(" ");
console.log(strArr);
for (var i = 0; i < strArr.length; i++) {
   var temp = strArr[i].replace("Java", "Coffee");
   // strArr.replace("Java", "Coffee");
   newArr.push(temp);
}
console.log(newArr);
*/


/*
console.log(myStr.length);
console.log(myStr);
console.log(myStr.trim());
console.log(myStr.toLowerCase().trim());
console.log(myStr.toUpperCase());

console.log(myStr.split(" ")); // Array
console.log(myStr.split(",")); // Array
console.log(myStr.split("a")); // Array
console.log(myStr.charAt(9));
*/

/////////////////////////////////////////////////////
// Get random number from min to max
/*
function getRan(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   var num = Math.floor(Math.random() * (max - min + 1)) + min;
   return exclude.includes(num) ? getRan(min, max) : num;
}
*/

////////////////////////////////////////////////////////////////////
// Get random number from 1 to 20 and exclude 10, 15, 7, 1, 2, 4, 5
/*
var include = [];
var exclude = [15, 10, 7, 5, 4, 2, 1];

for (var i = 0; i < 50; i++) {
   var temp = getRan(1, 20);
   if (temp === 10 || temp === 15 || temp === 7 || temp === 1 || temp === 2 || temp === 4 || temp === 5) {
      exclude.push(temp);
   } else {
      include.push(temp);
   }
}

*/
/*
for (var i = 0; i < 50; i++) {
   var temp = getRan(1, 20);
   var num = M
      exclude.push(temp);
   } else {
      include.push(temp);
   }
}
*/
/*
for (var i = 0; i < 50; i++) {
   var min = 1; var max = 20
   var temp = getRan(min, max);
   include.push(temp);
}
console.log(exclude);
console.log(include);
*/

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

//////////////////////////////////////////////////////////////////////////////////////
// Track keypress and show the key vs keyCode
/*
window.addEventListener("keydown", function (e) {
   var key = e.key;
   var keyCode = e.keyCode;
   console.log(key + " = " + keyCode);
});
*/

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






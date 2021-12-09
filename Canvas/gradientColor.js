let canvas = document.getElementById("path2dcanvas");
let ctx = canvas.getContext("2d");

let linearGra = ctx.createLinearGradient(10, 0, 100, 0);
ctx.globalAlpha = 0.7;
linearGra.addColorStop(0, "white");
linearGra.addColorStop(1, "blue");
linearGra.addColorStop(0.5, "green");
linearGra.addColorStop(1, "yellow");
linearGra.addColorStop(0.5, "white");

ctx.fillStyle = linearGra;
ctx.fillRect(0, 0, 200, 200);
/*****
 * *addColorStop(number,colorstring), the number between 0,1.0 defines the relative position of color
 * !createLinearGradient(x1,y1,x2,y2); starting and end point
 * */

/****************Radial Gradient*********/
/******
 * *createRadialGradient(x1,y1,r1,x2,y2,r2);
 */

var radgrad = ctx.createRadialGradient(280, 100, 10, 280, 100, 30);
radgrad.addColorStop(0, "#A7D30C");
radgrad.addColorStop(0.9, "#019F62");
radgrad.addColorStop(1, "rgba(1, 159, 98, 0.5)");
ctx.fillStyle = radgrad;
ctx.fillRect(220, 30, 150, 150);

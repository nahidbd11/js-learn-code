let canvas = document.createElement("canvas");
canvas.setAttribute("id", "ca");
canvas.setAttribute("width", "400");
canvas.setAttribute("height", "300");
document.body.appendChild(canvas);

let ctx = canvas.getContext("2d");

ctx.fillStyle = "red";
ctx.fillRect(15, 15, 75, 75);
ctx.fill();

ctx.fillStyle = "green";
ctx.fillRect(90, 15, 75, 75);
ctx.fill();

ctx.fillStyle = "blue";
ctx.fillRect(15, 90, 75, 75);
ctx.fill();

ctx.fillStyle = "yellow";
ctx.fillRect(90, 90, 75, 75);
ctx.fill();

//!set globalAlpha for all drwaing below the globalalpha defination
ctx.globalAlpha = 0.3;

for (let i = 0; i < 3; i++) {
  ctx.beginPath();
  ctx.arc(90, 90, 15 + 15 * i, 0, Math.PI * 2, true);
  ctx.fill();
}

//---------------lineWidth and lineCap-----------------------------------
let canvas2 = document.createElement("canvas");
canvas2.setAttribute("id", "linewidth");
canvas2.setAttribute("width", "400");
canvas2.setAttribute("height", "300");
document.body.appendChild(canvas2);

let ctx2 = canvas2.getContext("2d");
// let Xo = 20;
// let Yo = 20;
// let Y = 80;
// let lineCap = ["butt", "round", "square"];
// for (let i = 1; i <= 4; i++) {
//   ctx2.beginPath();
//   ctx2.lineWidth = i * 2; //!set the width of the line
//   ctx2.lineCap = lineCap[Math.floor(Math.random() * 3)]; //!set random cap to the line
//   ctx2.strokeStyle = getRandomColor();
//   ctx2.moveTo(Xo, Yo);
//   ctx2.lineTo(Xo, Y);
//   ctx2.stroke();
//   Xo += 10;
// }

// function getRandomColor() {
//   var letters = "0123456789ABCDEF";
//   var color = "#";
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// --------------lineJoin-------------

// function linejoinStyle(style) {
//   ctx2.beginPath();
//   ctx2.lineJoin = style;
//   ctx2.miterLimit = 10;
//   ctx2.moveTo(100, 100);
//   ctx2.lineTo(100, 200);
//   ctx2.lineTo(100, 100);
//   ctx2.lineTo(200, 200);
//   ctx2.lineTo(200, 100);
//   ctx2.stroke();
// }

// linejoinStyle("miter"); //bevel,miter
//---------Dashed line----------//
// ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
// ctx2.beginPath();
// ctx2.setLineDash([8, 6]); /*dashes are 8px and spaces are 6px*/
// ctx2.moveTo(0, 10);
// ctx2.lineTo(200, 10);
// ctx2.stroke();

// ctx2.beginPath();
// ctx2.lineDashOffset = 100;
// ctx2.moveTo(0, 50);
// ctx2.lineTo(200, 50);
// ctx2.stroke();

/**------------------Marching ant------------ */
let offset = 0;
function drawDashedLine() {
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
  ctx2.setLineDash([4, 4]);
  ctx2.lineDashOffset = -offset; //minus sign for clockwise move
  ctx2.strokeRect(10, 10, 80, 80);
  // offset++; //! when using  setinterval this code will use
}
// setInterval(drawDashedLine, 20);

/**---------using setTimeout--------------- */
function marching() {
  offset++;
  if (offset > 16) {
    offset = 0;
  }
  drawDashedLine();
  setTimeout(marching, 20);
}

marching();

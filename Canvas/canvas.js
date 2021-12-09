let canvas = document.getElementById("rect");
console.log(canvas);
//!check if the browser support canvas
if (canvas.getContext) {
  let ctx = canvas.getContext("2d");
  console.log(ctx);
  ctx.fillStyle = "rgb(200,0,0)"; //fill the rectangle with that color
  ctx.fillRect(10, 10, 50, 50); //!Draws a filled rectangle.

  ctx.strokeStyle = "red"; //draw outline color
  ctx.strokeRect(30, 30, 50, 50); //!Draws a rectangular outline.

  ctx.fillStyle = "rgba(0,0,200,0.50)";
  ctx.fillRect(50, 50, 50, 50);

  ctx.fillStyle = "rgba(100,0,200,0.25)";
  ctx.fillRect(70, 70, 50, 50);

  ctx.clearRect(10, 10, 50, 50); //!Clears the specified rectangular area, making it fully transparent.

  /**TODO:
   * first->fill rect
   * then clear a certain portion of filled rect
   * then draw stroke to that clear area
   */

  ctx.fillRect(130, 25, 100, 100);
  ctx.clearRect(150, 45, 60, 60);
  ctx.strokeRect(155, 50, 50, 50);
} else {
  console.log("%c%s", "color:red", "your browser doesnt support canvas");
}

/******!NOTE:Draw path
 *!beginPath()
 *!pathMethod
 *!closePath()
 *!stroke()
 *!fill()
 ******/

//----Drawing a stroke triangle------//

let canvas2 = document.getElementById("path");
let ctx2 = canvas2.getContext("2d");

ctx2.beginPath();
ctx2.moveTo(75, 70);
ctx2.lineTo(120, 70);
ctx2.lineTo(97.5, 25);
ctx2.closePath(); //when using close path then use stroke to visualized the shape
ctx2.stroke();
//----Draw a fill rectangle---//
ctx2.beginPath();
ctx2.moveTo(140, 70);
ctx2.lineTo(180, 70);
ctx2.lineTo(160, 25);
ctx2.fillStyle = "green";
ctx2.fill();

//--------draw a reactangle using path-----//
ctx2.beginPath();
ctx2.lineCap = "round";
ctx2.moveTo(190, 10);
ctx2.lineTo(250, 10);
ctx2.lineTo(250, 50);
ctx2.lineTo(190, 50);
ctx2.closePath();
ctx2.strokeStyle = "violet";
ctx2.stroke();

//--------Draw a house with path--------//
ctx2.beginPath();
ctx2.moveTo(20, 30);
ctx2.lineTo(40, 5);
ctx2.lineTo(60, 30);
// ctx2.closePath();
// ctx2.stroke();
ctx2.fill();
// ctx2.moveTo(20,30);
ctx2.beginPath();
ctx2.moveTo(60, 30);
ctx2.lineTo(60, 80);
ctx2.lineTo(20, 80);
ctx2.lineTo(20, 30);
ctx2.fillStyle = "black";
ctx2.fill();

ctx2.beginPath();

ctx2.moveTo(30, 50);
ctx2.lineTo(30, 80);
ctx2.lineTo(50, 80);
ctx2.lineTo(50, 50);

ctx2.closePath();
ctx2.strokeStyle = "black";
ctx2.stroke();

ctx2.clearRect(30, 50, 20, 30);

//---------Draw Arc-----------------//

let arcCanvas = document.getElementById("arc");
let ctxArc = arcCanvas.getContext("2d");

ctxArc.beginPath();
ctxArc.lineWidth = "10";
ctxArc.moveTo(50, 50);
ctxArc.lineTo(150, 10);
ctxArc.lineTo(170, 90);
ctxArc.strokeStyle = "green";
ctxArc.stroke();

ctxArc.beginPath();
ctxArc.lineWidth = 1;
ctxArc.moveTo(50, 50);
ctxArc.arcTo(150, 10, 170, 90, 40);
ctxArc.strokeStyle = "red";
ctxArc.stroke();

//-----Draw emoji with circle-----//

ctxArc.beginPath();
ctxArc.arc(150, 70, 35, 0, Math.PI * 2, true);
ctxArc.stroke();

ctxArc.beginPath();
ctxArc.moveTo(135, 60); //Starating point for next arc... move the Pen to that point and start drawing
ctxArc.arc(130, 60, 5, 0, Math.PI * 2, true);
ctxArc.fill();

ctxArc.moveTo(175, 60);
ctxArc.arc(170, 60, 5, 0, Math.PI * 2, true);

ctxArc.moveTo(160, 75);
ctxArc.arc(150, 75, 10, 0, Math.PI, false); //!false means clockwise by default true means anti clockwise
ctxArc.stroke();

let cirCanvas = document.getElementById("cir");
let cirCtx = cirCanvas.getContext("2d");

function drawCircle(ctx) {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      ctx.beginPath(); //!every time we will start new Path.. you can comment this line of code and see the result
      let x = 25 + j * 100;
      let y = 25 + i * 30;
      let radius = 10;
      let endAngle = Math.PI + (Math.PI * j) / 2;
      let antiClockwise = i % 2 !== 0;
      ctx.arc(x, y, radius, 0, endAngle, antiClockwise);
      if (i > 1) {
        ctx.fill();
      } else {
        ctx.stroke();
      }
    }
  }
}

drawCircle(cirCtx);

let arc2canvas = document.getElementById("arcto");
let arc2context = arc2canvas.getContext("2d");

arc2context.beginPath();
arc2context.arc(25, 25, 15, 0, Math.PI * 2, true);
arc2context.stroke();

arc2context.beginPath(); //beginPath create new path and disconnect previous path just like moveTo
arc2context.arc(50, 50, 15, 0, Math.PI * 2, true);
arc2context.stroke();

arc2context.beginPath();
arc2context.moveTo(150, 100);
arc2context.arcTo(150, 50, 120, 100, 15);
arc2context.stroke();

//____________TODO:DRAW Bezier curve------------//

let beziCanvas = document.getElementById("bezierCurve");
let beziCtx = beziCanvas.getContext("2d");

/*******draw bezier quadratic curve *********/
beziCtx.beginPath();
beziCtx.moveTo(80, 100); //!starting point
beziCtx.quadraticCurveTo(100, 20, 110, 100); //!@param(cpx,cpy,x,y)
beziCtx.strokeStyle = "green";
beziCtx.stroke();

/*******Draw starting and end point *****/

beziCtx.beginPath();
beziCtx.arc(80, 100, 5, 0, Math.PI * 2, true);

beziCtx.moveTo(110, 100);
beziCtx.arc(110, 100, 5, 0, Math.PI * 2, true);

beziCtx.fillStyle = "black";
beziCtx.fill();

/**********Draw control point*******/

beziCtx.beginPath();
beziCtx.moveTo(100, 20);
beziCtx.arc(100, 20, 5, 0, Math.PI * 2, true);
beziCtx.fillStyle = "red";
beziCtx.fill();

//----------------!TODO:Practice quadraticCurve----------------//
let bpCanvas = document.getElementById("bezcurPractice");
let bpCtx = bpCanvas.getContext("2d");

function rand(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

console.log(rand(1, 10));

function drawRandCurve(ctx) {
  ctx.clearRect(0, 0, 400, 300);
  let canvasWidth = 400;
  let canvasHeight = 300;
  let Xo = 5;
  let Yo = 150;
  let x, y;
  for (let i = 0; i < canvasWidth; i++) {
    x = Xo + (20 + i * 2);
    y = Yo;
    ctx.beginPath();
    ctx.moveTo(Xo, Yo);
    ctx.quadraticCurveTo((x + Xo) / 2, rand(300, 2), x, y);
    ctx.fillStyle = getRandomColor();
    ctx.fill();
    Xo = x;
    Yo = y;
  }

  ctx.beginPath();
  ctx.moveTo(5, 150);
  ctx.lineTo(x, y);
  ctx.stroke();

  // requestAnimationFrame(drawRandCurve(bpCtx));
}
drawRandCurve(bpCtx);

// setInterval(drawRandCurve, 2000, bpCtx);

//-----------NOTE:bezierCurveTo(cubic bezier curve)---------//

let _cubicBeziCanvas = document.getElementById("cubicBezCurv");
let cubicCtx = _cubicBeziCanvas.getContext("2d");

cubicCtx.beginPath();
cubicCtx.moveTo(10, 60);
cubicCtx.bezierCurveTo(30, 10, 50, 20, 100, 60);
cubicCtx.stroke();

//----draw control line---------//
cubicCtx.beginPath();
cubicCtx.moveTo(10, 60);
cubicCtx.lineTo(30, 10);
cubicCtx.lineTo(50, 20);
cubicCtx.lineTo(100, 60);
cubicCtx.stroke();

//--------draw control point----------//
cubicCtx.beginPath();
cubicCtx.moveTo(10, 60);
cubicCtx.arc(10, 60, 5, 0, Math.PI * 2, true);

cubicCtx.moveTo(30, 10);
cubicCtx.arc(30, 10, 5, 0, Math.PI * 2, true);

cubicCtx.moveTo(50, 20);
cubicCtx.arc(50, 20, 5, 0, Math.PI * 2, true);

cubicCtx.moveTo(100, 60);
cubicCtx.arc(100, 60, 5, 0, Math.PI * 2, true);

cubicCtx.fillStyle = "red";
cubicCtx.fill();

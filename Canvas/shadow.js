let canvas = document.getElementById("path2dcanvas");
let ctx = canvas.getContext("2d");

ctx.font = "20px Times New Roman";
ctx.fillStyle = "black";
ctx.shadowOffsetX = 3;
ctx.shadowOffsetY = 3;
ctx.shadowBlur = 0.5;
ctx.shadowColor = "orange";
ctx.fillText("NAHIDUL ISLAM", 155, 130);

/******
 * shadowOffsetX=floatnumber(positive/negative number)
 * shadowOffsetY=float
 * shadowBlur=float(default 0)
 * shadowColor=css color
 *
 */

 

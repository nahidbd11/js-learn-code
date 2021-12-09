let path2dCanvas = document.getElementById("path2dcanvas");
let ctx = path2dCanvas.getContext("2d");
let rectangle = new Path2D();
rectangle.rect(20, 20, 80, 80);
// ctx.stroke(rectangle);
ctx.fill(rectangle);

let circle = new Path2D();
circle.arc(200, 100, 20, 0, Math.PI * 2, true);
ctx.stroke(circle);

let arc2 = new Path2D(circle); //copy path of circle
console.log(arc2);
// arc2.moveTo(250, 150);
arc2.arcTo(300, 100, 300, 200, 25);
ctx.stroke(arc2);
ctx.lineWidth = 10;
ctx.lineCap = "round"; //line style
ctx.moveTo(50, 150);
ctx.lineTo(50, 250);
ctx.stroke();

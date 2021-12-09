let canvas = document.getElementById("path2dcanvas");
let ctx = canvas.getContext("2d");
ctx.save();
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.save();

ctx.fillStyle = "red";
ctx.rotate((Math.PI / 180) * 30); //!must be in radian
ctx.translate(150, 10);
ctx.fillRect(30, 0, 50, 50);

ctx.restore();
ctx.fillStyle = "yellow";
ctx.fillRect(70, 0, 75, 75);

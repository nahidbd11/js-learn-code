let canvas = document.getElementById("path2dcanvas");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "grey";
ctx.fillRect(10, 10, 50, 50);
ctx.save();

// ctx.scale(-1, 1); //for horizontal mirror
// ctx.fillStyle = "green";
// ctx.fillText("Nahid", -100, 10); // the horizontal co-ordinate should be minus for horizontal mirror

// ctx.restore();
// ctx.scale(2, -2); //for vertical mirror
// ctx.fillStyle = "red";
// ctx.fillText("Nahid is a good boy", 0, -10); // vertical co-ordinate is  negative for vertical mirror
// ctx.save();

ctx.scale(-2, -2);
ctx.fillStyle = "blue";
ctx.fillText("shapla", -50, -125);

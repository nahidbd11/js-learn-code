let canvas = document.getElementById("path2dcanvas");
let ctx = canvas.getContext("2d");

// ctx.fillRect(5, 5, 75, 75);
// ctx.save();
// ctx.fillStyle = "blue";
// ctx.translate(100, 25);
// ctx.fillRect(0, 0, 50, 50);

// ctx.restore(); // back to default state of canvas  all style and translate

/******************************* */

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    ctx.save();
    ctx.fillStyle = "rgb(" + 51 * i + ", " + (255 - 51 * i) + ", 255)";
    ctx.translate(5 + j * 30, 10 + i * 30);
    ctx.fillRect(0, 0, 25, 25);
    ctx.restore();
  }
}

let canvas = document.getElementById("path2dcanvas");
let ctx = canvas.getContext("2d");
canvas.style.border = "10px solid blue";
ctx.save();

let canvas2 = document.createElement("canvas");
canvas2.id = "canvas2";
document.body.appendChild(canvas2);
let ctx2 = canvas2.getContext("2d");

let img = new Image();
img.src = "../Resources/189416.jpg";

img.onload = function () {
  ctx.drawImage(img, 0, 0, canvas.clientWidth, canvas.height);
};

//draw zoomed image to the second canvas
ctx2.imageSmoothingEnabled = true; //!if you make all value false you will get every zoomed pixelDetails
ctx2.mozImageSmoothingEnabled = true;
ctx2.webkitImageSmoothingEnabled = true;
ctx2.msImageSmoothingEnabled = true;

canvas.addEventListener("mousemove", function (e) {
  let x = e.layerX;
  let y = e.layerY;
  console.log(x);
  console.log(y);
  zoomIn(ctx2, x, y);
});
function zoomIn(ctx, x, y) {
  ctx.drawImage(
    canvas,
    x - 12,
    y - 12,
    10,
    10,
    0,
    0,
    canvas2.width,
    canvas2.height
  );
}

let canvas = document.getElementById("path2dcanvas");
let ctx = canvas.getContext("2d");

ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.save();

let counter = 0;
function draw() {
  counter++;
  if (counter == 1) {
    ctx.fillStyle = "yellow";
    ctx.setTransform(1, 0.5, 0, 1, 25, 25);
    ctx.fillRect(5, 5, 75, 75);
  } else {
    ctx.fillStyle = "green";
    ctx.setTransform(1, 0.5, 0.2, 1, 25, 25);
    ctx.fillRect(5, 5, 75, 75);
    counter = 0;
  }
}
setInterval(draw, 3000);
/*****
 * @param(hScale,hSkew,vSkew,vScale,translateX,translateY);
 */

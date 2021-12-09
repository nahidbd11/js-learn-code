let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
canvas.width = canvas.height = 500;

//ctx.fillStyle = "green";
// ctx.arc(250, 250, 25, 0, Math.PI / 2, false);
// ctx.fill();
let i = 0;
let g = (r = b = 0);
let j = (k = l = 20);
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.save();

  j = 20 + g * 2;
  k = 20 + r * 3;
  l = 20 + b * 2.5;
  if (j > canvas.width) {
    g = 0;
  } else {
    ctx.fillStyle = "green";
    ctx.fillRect(j, 20, 60, 60);
    g++;
  }
  if (k > canvas.width) {
    r = 0;
  } else {
    ctx.fillStyle = "red";
    ctx.fillRect(k, 100, 60, 60);
    r++;
  }
  if (l > canvas.width) {
    b = 0;
  } else {
    ctx.fillStyle = "blue";
    ctx.fillRect(l, 180, 60, 60);
    b++;
  }

  if (i >= 200) {
    i = 0;
  }

  requestAnimationFrame(draw);
}
draw();

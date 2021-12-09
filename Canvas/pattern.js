let canvas = document.getElementById("path2dcanvas");
let ctx = canvas.getContext("2d");

// // ctx.fillStyle = ptn

let drawPattern = function (src, patternStyle) {
  let img = new Image(60, 60);
  img.src = "../Resources/" + src;
  img.onload = () => {
    let ptn = ctx.createPattern(img, patternStyle);
    ctx.fillStyle = ptn;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };
  console.log(rand(0, 1));
  console.log("working");
};

// drawPattern("messiR.jpg", "repeat");
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let imgsrc = ["diegoR.jpg", "messiR.jpg"];
setInterval(() => {
  drawPattern(imgsrc[rand(0, 1)], "repeat-x");
}, 500);

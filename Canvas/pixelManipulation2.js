let canvas = document.getElementById("path2dcanvas");
let ctx = canvas.getContext("2d");
canvas.style.border = "10px solid blue";
ctx.save();

let cd = ctx.createImageData(150, 150); //create transparent black imageData

console.log(cd.data.length);

for (let i = 0; i < cd.data.length; i += 4) {
  //now modifing the transparent black imageData
  cd.data[i + 0] = 100; // R value
  cd.data[i + 1] = 155; // G value
  cd.data[i + 2] = 200; // B value
  cd.data[i + 3] = 255; // A value
}

ctx.putImageData(cd, 0, 0);
// ctx.putImageData(cd, 100, 10, 0, 0, 150, 150); //put that imageData to the Canvas

let gd = ctx.getImageData(0, 0, cd.width, cd.height); //get imageData from the canvas source
console.log(cd);
console.log(gd);
for (let i = 0; i < gd.data.length; i += 4) {
  //modifing image data
  gd.data[i] = 255 - gd.data[i];
  gd.data[i + 1] = 255 - gd.data[i + 1];
  gd.data[i + 2] = 255 - gd.data[i + 2];
  gd.data[i + 3] = 255;
}

ctx.putImageData(gd, 160, 100); //putting image data to the canvas

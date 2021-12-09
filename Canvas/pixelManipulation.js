let canvas = document.getElementById("path2dcanvas");
let ctx = canvas.getContext("2d");
canvas.style.border = "10px solid blue";
ctx.save();

let img = new Image();
img.src = "../Resources/nature.jpg";
img.width = canvas.width;
img.height = canvas.height;
document.body.appendChild(img);

console.log("working inside");

const drawImage = function () {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};

img.onload = function () {
  drawImage();
};

function invertedImage(pdata, i) {
  pdata[i] = 255 - pdata[i];
  pdata[i + 1] = 255 - pdata[i + 1];
  pdata[i + 2] = 255 - pdata[i + 2];
}

function grayScaledImage(pdata, i) {
  const total = pdata[i] + pdata[i + 1] + pdata[i + 2];
  const avg = total / 3;
  pdata[i] = avg;
  pdata[i + 1] = avg;
  pdata[i + 2] = avg;
}

buttonCreate("original");
buttonCreate("gray");
buttonCreate("invert");

//draw invert onclick
document.querySelector("button#invert").onclick = function () {
  let pixelData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < pixelData.data.length; i += 4) {
    invertedImage(pixelData.data, i);
  }
  ctx.putImageData(pixelData, 0, 0);
};

//draw gray image onclick
document.querySelector("button#gray").onclick = function () {
  let pixelData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  console.log(pixelData);

  for (let i = 0; i < pixelData.data.length; i += 4) {
    grayScaledImage(pixelData.data, i);
  }
  ctx.putImageData(pixelData, 0, 0);
};
//draw original image onclick
document.querySelector("button#original").onclick = function () {
  drawImage();
};

//create different filter button
function buttonCreate(id) {
  let btn = document.createElement("BUTTON");
  btn.id = id;
  btn.innerHTML = id;
  return document.body.appendChild(btn);
}

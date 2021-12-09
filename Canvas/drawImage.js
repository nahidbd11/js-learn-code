let canvas = document.getElementById("path2dcanvas");
let ctx = canvas.getContext("2d");

// let img = new Image();
// img.src = "https://picsum.photos/200";
// img.onload = function () {
//   console.log("image loading...");
//   ctx.drawImage(img, 50, 50, 100, 100);
//   console.log("image loaded successfully");
// };

/**************Use video as image source*******/
// function myVideo() {
//   if (ctx) {
//     return document.getElementById("myvideo");
//   }
// }
// console.log(myVideo());
// myVideo().onplay = function () {
//   console.log("working");
//   ctx.drawImage(this, 0, 0, canvas.width, canvas.height); //!onplay the video the frame of the video will draw to the canvas
// };

/**********A simple line graph *********/

let img = new Image();
img.src = "https://mdn.mozillademos.org/files/5395/backdrop.png";
img.onload = function () {
  ctx.drawImage(img, 0, 0);
  ctx.beginPath();
  ctx.moveTo(30, 96);
  ctx.lineTo(50, 50);
  ctx.lineTo(70, 60);
  ctx.lineTo(100, 10);
  ctx.stroke();
};

let canvas = document.getElementById("path2dcanvas");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = "red";
ctx.font = "30px Arial";
ctx.strokeText("Hello World", 10, 50);

/************* toDataURL() *************/
let data = canvas.toDataURL(); /**
@param(type,quality)
*/
console.log(data);

let btn = document.createElement("button");
btn.innerHTML = "make Canvas to html image";
document.body.appendChild(btn);

btn.addEventListener("click", function (e) {
  let img = document.createElement("img");
  img.src = data;
  document.body.appendChild(img);
});

/**********save an image as blob object in local computer*************/

canvas.toBlob(
  function (blob) {
    console.log(blob);
    let url = URL.createObjectURL(blob);
    let link = document.createElement("a");
    link.textContent = "download";
    link.href = url;
    link.download = "hello";
    document.body.appendChild(link);
  },
  "image/jpeg",
  0.92
);

/****
 * @param(callback,type,quality);
 */

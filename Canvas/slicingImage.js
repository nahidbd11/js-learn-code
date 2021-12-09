let canvas = document.getElementById("path2dcanvas");
let img = new Image();
img.src = "../Resources/189416.jpg";
let ctx = canvas.getContext("2d");
img.onload = function () {
  ctx.drawImage(img, 0, 0, 50, 50, 120, 130, 100, 100); //!slicing the image
};

/***********
 *@param ctx.drawImage(source,sx,sy,swidth,sheight,dx,dy,dwidth,dheight);
 *
 */

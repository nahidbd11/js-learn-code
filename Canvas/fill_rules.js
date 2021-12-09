let ctx = document.getElementById("path2dcanvas").getContext("2d");
ctx.arc(150, 150, 50, 0, Math.PI * 2, true);
ctx.arc(150, 150, 20, 0, Math.PI * 2, true);
ctx.fill("evenodd");
//ctx.fill(); //!default is "nonzero" rule

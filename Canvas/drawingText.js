let ctx = document.getElementById("path2dcanvas").getContext("2d");

ctx.font = "40px san-serif";
ctx.textAlign = "start";
ctx.textBaseline = "ideographic";
ctx.direction = "inherit";
ctx.fillText("my name is nahid", 10, 50);
ctx.strokeText("my name is nahid", 30, 100);

let txt = ctx.measureText("hello nahid");

console.log(txt);
console.log(txt.width);

/****
 * se mozila developers for details
 */

let canvas = document.getElementById("path2dcanvas");
let ctx = canvas.getContext("2d");

ctx.fillRect(5, 5, 100, 100);
ctx.save(); //Save default setting

ctx.fillStyle = "green";
ctx.fillRect(15, 155, 75, 75);
ctx.save(); //save green setting

ctx.restore(); //restore the green setting
ctx.fillRect(130, 130, 50, 50);

ctx.restore(); // restore default setting
ctx.fillRect(130, 10, 50, 50);

/***********
 *  save the the settings to the stack
 * !last Save first Restore
 *
 */

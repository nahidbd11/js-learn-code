function clock() {
  let now = new Date();
  let canvas = document.getElementById("path2dcanvas");
  let ctx = canvas.getContext("2d");
  ctx.save(); //default state

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.translate(150, 120);
  ctx.scale(0.5, 0.5);
  ctx.rotate(-Math.PI / 2);
  ctx.lineWidth = 8;
  ctx.lineCap = "round";
  ctx.strokeStyle = "black";
  ctx.fillStyle = "white";
  ctx.save(); //basic state

  //write hours
  for (let i = 0; i < 12; i++) {
    ctx.beginPath();

    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.rotate(Math.PI / 6);
    ctx.stroke();
  }

  ctx.restore(); //basic state restore
  ctx.save(); //save basic state before change anything

  //write minutes
  ctx.lineWidth = 4;
  for (let i = 0; i < 60; i++) {
    if (i % 5 != 0) {
      ctx.beginPath();
      ctx.moveTo(117, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();
  ctx.save();
  //get current time
  let hrs = now.getHours();
  let mins = now.getMinutes();
  let sec = now.getSeconds();
  hrs = hrs >= 12 ? hrs - 12 : hrs;
  console.log(now.__proto__);
  console.log(hrs);
  //draw hours stick
  ctx.lineWidth = 14;
  ctx.strokeStyle = "blue";
  ctx.rotate(
    hrs * (Math.PI / 6) + mins * (Math.PI / 360) + sec * (Math.PI / 21600)
  );
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();

  ctx.restore();
  ctx.save();

  //Draw minutes stick
  ctx.lineWidth = 8;
  ctx.strokeStyle = "green";
  ctx.rotate(mins * (Math.PI / 30) + sec * (Math.PI / 1800));
  ctx.beginPath();
  ctx.moveTo(-30, 0);
  ctx.lineTo(110, 0);
  ctx.stroke();

  ctx.restore();
  ctx.save();

  //draw seconds stick
  ctx.strokeStyle = "red";
  ctx.fillStyle = "grey";
  ctx.rotate(sec * (Math.PI / 30));
  ctx.beginPath();
  ctx.moveTo(-30, 0);
  ctx.lineTo(90, 0);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, Math.PI * 2, true); //draw center mini circle
  ctx.fill();

  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(95, 0, 10, 0, Math.PI * 2, true); //draw circle on tip of second stick
  ctx.fill();

  ctx.restore();
  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = "#D40000";
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true); //draw main outer circle
  ctx.stroke();

  ctx.restore(); //restore default
  requestAnimationFrame(clock); //update animation
}

clock(); // call funtion to run

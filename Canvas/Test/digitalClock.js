function draw() {
  let canvas = document.querySelector("canvas");
  let ctx = canvas.getContext("2d");
  canvas.width = canvas.height = 500;
  let now = new Date();
  ctx.fillStyle = "black";
  ctx.save();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.translate(200, 200);
  // ctx.rotate(-Math.PI / 2);
  ctx.fillStyle = "white";
  ctx.strokeStyle = "white";
  ctx.lineWidth = 10;
  ctx.lineCap = "round";
  ctx.rotate(-Math.PI / 2);
  ctx.save();

  ctx.restore();
  ctx.save();

  //for hour
  ctx.strokeStyle = "orange";
  for (let i = 0; i < 12; i++) {
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }

  //for minute
  ctx.restore();
  ctx.save();

  ctx.strokeStyle = "red";
  ctx.lineWidth = 2;
  for (let i = 0; i <= 60; i++) {
    if (i % 5 !== 0) {
      ctx.moveTo(100, 0);
      ctx.moveTo(100, 0);
      ctx.lineTo(110, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }

  ctx.restore();
  ctx.save();

  //for hour marks;

  let hr = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  hr = hr > 12 ? hr - 12 : hr;

  ctx.rotate(
    hr * (Math.PI / 6) + min * (Math.PI / 360) + sec * (Math.PI / 21600)
  );
  ctx.beginPath();
  ctx.moveTo(-10, 0);
  ctx.lineTo(62, 0);
  ctx.stroke();

  ctx.restore();
  ctx.save();

  //for minutes mark
  ctx.lineWidth = 8;
  ctx.rotate(min * (Math.PI / 30) + sec * (Math.PI / 1800));
  ctx.beginPath();
  ctx.moveTo(-10, 0);
  ctx.lineTo(85, 0);
  ctx.stroke();

  ctx.restore();
  ctx.save();
  //for second mark
  ctx.lineWidth = 4;
  ctx.rotate(sec * (Math.PI / 30));
  ctx.beginPath();
  ctx.moveTo(-10, 0);
  ctx.lineTo(90, 0);
  ctx.stroke();
  //outer cirle of clock
  ctx.restore();
  ctx.save();
  ctx.beginPath();
  ctx.arc(0, 0, 130, 0, Math.PI * 2);
  ctx.stroke();

  ctx.restore();
  for (let i = 0; i < 12; i++) {
    ctx.rotate(Math.PI / 6);
    ctx.fillText(Math.floor(i + 13 / 12), 80, 0);
  }
  requestAnimationFrame(draw); //animate
}
window.requestAnimationFrame(draw);

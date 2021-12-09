let canvas = document.getElementById("path2dcanvas");
let ctx = canvas.getContext("2d");
ctx.save();
let raf;
let rightPressed = false;
let leftPressed = false;
let score = 0;
let ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  r: 10,
  vx: 5,
  vy: 2,
  color: "red",
  draw: function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    (ctx.fillStyle = this.color), ctx.fill();
  },
};
//draw paddle
let paddle = {
  pwidth: 80,
  pheight: 10,
  paddleX: (400 - 80) / 2,
  paddleY: 290,
  draw: function () {
    ctx.beginPath();
    ctx.rect(this.paddleX, this.paddleY, this.pwidth, this.pheight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  },
};

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = true;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = true;
  }
  // console.log(rightPressed);
}

function keyUpHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = false;
  }
  // console.log(rightPressed);
}

function ani() {
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255, 255, 255)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  paddle.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;
  if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
    ball.vx = -ball.vx;
    ball.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
  if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
    ball.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
  if (rightPressed) {
    paddle.paddleX += 7;
    if (paddle.paddleX + paddle.pwidth > canvas.width) {
      paddle.paddleX = canvas.width - paddle.pwidth;
    }
  }

  if (leftPressed) {
    paddle.paddleX -= 7;
    if (paddle.paddleX < 0) {
      paddle.paddleX = 0;
    }
  }
  if (ball.y + ball.vy + ball.r > canvas.height - paddle.pheight) {
    if (ball.x > paddle.paddleX && ball.x < paddle.paddleX + paddle.pwidth) {
      ball.vy = -ball.vy;
      score++;
      console.log(score);
    } else {
      score = 0;
      document.location.reload();
      window.cancelAnimationFrame(raf);
    }
  }

  raf = requestAnimationFrame(ani);
}

ani();

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const enemies = Array(50)
  .fill(null)
  .map(() => {
    return {
      x: Math.floor((Math.random() * canvas.width) / 5) * 5,
      y: Math.floor((Math.random() * canvas.height) / 5) * 5,
    };
  });

const player = {
  deltas: { normal: 5 },
  x: canvas.width * 0.5,
  y: canvas.height * 0.5,
  moveUp() {
    this.y += this.deltas.normal;
  },
  moveDown() {
    this.y -= this.deltas.normal;
  },
  moveRight() {
    this.x += this.deltas.normal;
  },
  moveLeft() {
    this.x -= this.deltas.normal;
  },
};

document.addEventListener("keydown", (e) => {
  const mapping = {
    // down
    ArrowUp: "moveDown",
    KeyW: "moveDown",
    // up
    ArrowDown: "moveUp",
    KeyS: "moveUp",
    // left
    ArrowLeft: "moveLeft",
    KeyA: "moveLeft",
    // right
    ArrowRight: "moveRight",
    KeyD: "moveRight",
  };
  const methodName = mapping[e.code];

  if (undefined !== methodName) {
    player[methodName]();
  }
});

const drawEnemies = () => {
  for (const enemy of enemies) {
    // update enemy position randomly and slightly
    enemy.x += (Math.random() - 0.5) * 6;
    enemy.y += (Math.random() - 0.5) * 6;

    // draw body
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(enemy.x, enemy.y, 10, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    // draw left eye
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(enemy.x - 5, enemy.y - 5, 2.5, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    // draw left pupil
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(enemy.x - 5, enemy.y - 5, 1, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    // draw right eye
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(enemy.x + 5, enemy.y - 5, 2.5, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    // draw right pupil
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(enemy.x + 5, enemy.y - 5, 1, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    // draw flat mouth
    ctx.beginPath();
    ctx.moveTo(enemy.x - 2.5, enemy.y + 5);
    ctx.lineTo(enemy.x + 2.5, enemy.y + 5);
    ctx.stroke();
  }
};

const drawPlayer = () => {
  ctx.fillStyle = "rgba(190, 150, 50, 1)";
  ctx.font = "bold 20pt Courier";
  ctx.textAlign = "center";
  ctx.fillText("School of Code", player.x, player.y);
};

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawEnemies();
  drawPlayer();
  requestAnimationFrame(draw);
};

draw();

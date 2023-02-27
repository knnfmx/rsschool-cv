const canvas = document.querySelector('.canvas-demo');
const context = canvas.getContext('2d');
const number = 15;
const speed = 3;
const DIST = 500;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// function for add points

const points = [];
for (let q = 0; q < number; q++) {
  const point = {
    x: getRandom(0, canvas.width),
    y: getRandom(0, canvas.height),
    angle: getRandom(0, 2 * Math.PI)
  }
  points.push(point);
}

tick();

function tick() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawPoints();
  movePoints();
  drawLines();
  requestAnimationFrame(tick);
}

// angle for points 
function getRandom(min, max) {
  return min + Math.random() * (max - min + 1);
}


// function for draw points
function drawPoints() {
  for (const point of points) {
    context.beginPath();
    context.fillStyle = '#00ffb9';
    context.arc(point.x, point.y, 3, 0, Math.PI * 2);
    context.fill();
  }
}

function movePoints() {
  for (const point of points) {
    point.x = point.x + speed * Math.cos(point.angle);
    point.y = point.y + speed * Math.sin(point.angle);

    if (point.x < 0) {
      point.x = canvas.width + point.x;
    }
    if (point.x > canvas.width) {
      point.x = canvas.width - point.x;
    }
    if (point.y < 0) {
      point.y = canvas.height + point.y;
    }
    if (point.y > canvas.height) {
      point.y = canvas.height - point.y;
    }
  }
}

function getDist(a, b) {
  return ((a.x - b.x) ** 2 + (a.y - b.y) ** 2) ** 0.5;
}

function drawLines() {
  for (let i = 0; i < number - 1; i++) {
    for (let j = i + 1; j < number; j++) {
      const pointA = points[i];
      const pointB = points[j];
      const dist = getDist(pointA, pointB);
      if (dist <= DIST) {
        context.beginPath();
        context.strokeStyle = '#00bbb8';
        context.lineWidth = (1 - dist / DIST) ** 1.5;
        context.moveTo(pointA.x, pointA.y);
        context.lineTo(pointB.x, pointB.y);
        context.stroke();
      }
    }
  }
}
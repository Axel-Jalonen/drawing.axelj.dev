const canvas = document.getElementById("main-canvas");
const ctx = canvas.getContext("2d");

const brushSizeElement = document.getElementById("pixel-sizer");

const debugArea = document.getElementById("debug-area");

var displayWidth = 1280;
var displayHeight = 739;
var scale = 1;
canvas.style.width = displayWidth + "px";
canvas.style.height = displayHeight + "px";
canvas.width = displayWidth * scale;
canvas.height = displayHeight * scale;

brushSizeElement.addEventListener("input", (e) => {
  ctx.lineWidth = e.target.value;
  debugArea.innerText = e.target.value;
});

const MouseStates = {
  off: false,
  on: true,
};

ctx.lineWidth = 5;

let mouseState = MouseStates.off;

document.addEventListener("mousemove", handleMouseMove);

document.addEventListener("mousedown", () => (mouseState = MouseStates.on));
document.addEventListener("mouseup", () => (mouseState = MouseStates.off));

let mouseStarted = false;

class Shape {
  listxy = [];
  constructor(x, y) {
    this.lxy.push(x);
    this.lxy.push(y);
  }
}

function handleMouseMove(mouseEvent) {
  if (mouseState) {
    const x = mouseEvent.x;
    const y = mouseEvent.y;
    if (!mouseStarted) {
      ctx.beginPath();
      ctx.moveTo(x, y);

      mouseStarted = true;
    } else {
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  } else {
    mouseStarted = false;
  }
}

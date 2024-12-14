const canvas = document.getElementById("main-canvas");
const ctx = canvas.getContext("2d");

const brushSizeInputElement = document.getElementById("pixel-sizer");

const SCALE = 2;
let scaledScreenWidth;
let scaledScreenHeight;
let lineWidth = 10;

const MouseState = {
  off: false,
  on: true,
};

function initCanvasSize() {
  scaledScreenWidth = window.innerWidth * SCALE;
  scaledScreenHeight = window.innerHeight * SCALE;
  canvas.width = scaledScreenWidth;
  canvas.height = scaledScreenHeight;
}

initCanvasSize();

window.addEventListener("resize", initCanvasSize);

let mouseState = MouseState.off;
let mouseStarted = false;

function handleMouseMove(mouseEvent) {
  ctx.lineWidth = lineWidth;
  if (mouseState) {
    const x = mouseEvent.x * 2;
    const y = mouseEvent.y * 2;
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

document.addEventListener("mousemove", handleMouseMove);
document.addEventListener("mousedown", () => (mouseState = MouseState.on));
document.addEventListener("mouseup", () => (mouseState = MouseState.off));
brushSizeInputElement.addEventListener("input", (e) => {
  lineWidth = e.target.value;
});

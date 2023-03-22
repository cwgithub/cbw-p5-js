let dim = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // set background color
  background("pink");

  if (touches.length === 1) {
    fill(255);
    noStroke();
    circle(mouseX, mouseY, dim);
  }
}

function touchStarted() {
  return false;
}

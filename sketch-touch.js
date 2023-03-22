let valueY;

function setup() {
  // Create Canvas of size 500*500
  createCanvas(500, 500);
}

function draw() {
  // set background color
  background(200);
  fill("green");
  // set text and text size
  textSize(25);
  text("Touch to change color", 30, 30);
  // fill color according to mouseMoved()
  fill(valueX, 255 - valueY, 255 - valueX);
  // draw rectangle
  rect(mouseX, mouseY, 115, 115);
  fill(valueY, 255 - valueX, 255 - valueX);

  rect(mouseX, mouseY + 115, 115, 115);
  fill(255 - valueY, 255 - valueX, 255 - valueY);

  rect(mouseX - 115, mouseY, 115, 115);
  fill(255 - valueY, 255 - valueY, 255 - valueY);

  rect(mouseX - 115, mouseY + 115, 115, 115);
}

function touchStarted() {
  valueX = mouseX % 255;
  valueY = mouseY % 255;
}

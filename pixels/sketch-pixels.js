function setup() {
  createCanvas(1000, 1000);
  background(123);

  strokeWeight(0);

  fill("red");
  quad(0, 0, 499, 0, 499, 499, 0, 499);
  fill("green");
  quad(500, 0, 999, 0, 999, 499, 500, 499);
  fill("blue");
  quad(0, 500, 499, 500, 499, 999, 0, 999);
  fill("white");
  quad(500, 500, 999, 500, 999, 999, 500, 999);
}

function draw() {}

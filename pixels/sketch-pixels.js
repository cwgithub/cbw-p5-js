function setup() {
  const size = 10;

  createCanvas(size, size);

  console.log("displayDensity : " + displayDensity());
  console.log("pixelDensity   : " + pixelDensity());

  pixelDensity(displayDensity());
  console.log("pixelDensity   : " + pixelDensity());
  pixelDensity(1);
  console.log("pixelDensity   : " + pixelDensity());
  background(123);

  strokeWeight(0);

  fill("red");
  quad(0, 0, size, 0, size, size, 0, size);

  // fill("green");
  // quad(0, size + 1, size, size + 1, size * 2, size * 2, 0, size * 2);

  // fill("white");
  // quad(size + 1, 0, size * 2, 0, size * 2, size, size + 1, size);

  // fill("blue");
  // quad(
  //   size + 1,
  //   size + 1,
  //   size * 2,
  //   size + 1,
  //   size * 2,
  //   size * 2,
  //   size + 1,
  //   size * 2
  // );

  loadPixels();

  console.log(pixels);
}

function draw() {}

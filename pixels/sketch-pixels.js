function drawShape(x, y, size) {
  const adjustment = 0;

  quad(
    x,
    y,
    x + (size - adjustment),
    y,
    x + (size - adjustment),
    y + (size - adjustment),
    x,
    y + (size - adjustment)
  );
}

function test1() {
  pixelDensity(1);

  const size = 50;

  createCanvas(size * 3, size * 3);
  background(123);

  strokeWeight(0);
  fill([0, 255, 0, 255]);
  drawShape(0, 0, size);

  fill([255, 0, 0, 255]);
  drawShape(size, 0, size);

  fill([0, 0, 255, 255]);
  drawShape(0, size, size);

  fill([255, 255, 255, 255]);
  drawShape(size, size, size);

  loadPixels();

  const ph = new PixelHelper(pixels, width, height, pixelDensity());

  console.log(ph.getPixel(1, 0));

  updatePixels();

  fill([123, 123, 123, 255]);
  drawShape(500, 500, size);
}

function test2() {
  pixelDensity(1);

  const size = 100;

  createCanvas(size * 2, size * 2);
  background("pink");

  fill([123, 123, 123, 255]);
  drawShape(50, 50, size);

  // floodFill(createVector(100, 100), [255, 255, 0, 255]);
  floodFillNoiseCBW(createVector(100, 100), [255, 255, 0, 255]);
}

function setup() {
  // test1();
  test2();
}

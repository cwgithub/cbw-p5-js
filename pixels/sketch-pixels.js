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

function setup() {
  pixelDensity(1);
  createCanvas(300, 300);
  background(123);

  strokeWeight(0);
  fill([0, 255, 0, 255]);
  drawShape(0, 0, 100);

  fill([255, 0, 0, 255]);
  drawShape(100, 0, 100);

  fill([0, 0, 255, 255]);
  drawShape(0, 100, 100);

  fill([255, 255, 255, 255]);
  drawShape(100, 100, 100);

  loadPixels();

  const ph = new PixelHelper(pixels, width, height, pixelDensity());

  console.log("Green");
  console.log(ph.getPixel(0, 0));
  console.log(ph.getPixel(99, 99));
  console.log(ph.getPixel(200, 200));

  console.log("Red");
  console.log(ph.getPixel(100, 0));
  console.log(ph.getPixel(199, 99));

  console.log("White");
  console.log(ph.getPixel(100, 100));
  console.log(ph.getPixel(199, 199));

  console.log("Blue");
  console.log(ph.getPixel(0, 100));
  console.log(ph.getPixel(99, 199));

  return;

  for (let y = 0; y < height; y++) {
    const offset = y * width * 4;
    console.log("----- offset = " + offset);
    for (let x = 0; x < width; x++) {
      let pix = offset + x * 4;
      console.log(pix + " = " + 0);
      pixels[pix] = 0;
      pix = offset + x * 4 + 1;
      console.log(pix + " = " + 255);
      pixels[pix] = 255;
      pix = offset + x * 4 + 2;
      console.log(pix + " = " + 0);
      pixels[pix] = 0;
      pix = offset + x * 4 + 3;
      console.log(pix + " = " + 255);
      pixels[pix] = 255;
    }
  }

  updatePixels();

  // pixelDensity(1);

  // strokeWeight(0);
  // fill("pink");
  // rect(10, 10, 180, 180);

  // deleteMe(createVector(100, 100));

  // floodFill(createVector(100, 100), [0, 255, 0, 255]);

  // strokeWeight(1);
  // ellipse(100, 100, 4, 4);
}

// function setup() {
//   const size = 10;

//   createCanvas(size, size);

//   console.log("displayDensity : " + displayDensity());
//   console.log("pixelDensity   : " + pixelDensity());

//   pixelDensity(displayDensity());
//   console.log("pixelDensity   : " + pixelDensity());
//   pixelDensity(1);
//   console.log("pixelDensity   : " + pixelDensity());
//   background(123);

//   strokeWeight(0);

//   fill("red");
//   quad(0, 0, size, 0, size, size, 0, size);

//   // fill("green");
//   // quad(0, size + 1, size, size + 1, size * 2, size * 2, 0, size * 2);

//   // fill("white");
//   // quad(size + 1, 0, size * 2, 0, size * 2, size, size + 1, size);

//   // fill("blue");
//   // quad(
//   //   size + 1,
//   //   size + 1,
//   //   size * 2,
//   //   size + 1,
//   //   size * 2,
//   //   size * 2,
//   //   size + 1,
//   //   size * 2
//   // );

//   loadPixels();

//   console.log(pixels);
// }

// function draw() {}

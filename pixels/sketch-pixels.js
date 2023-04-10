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
  // pixelDensity(1);

  const size = 1;

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

  console.log(ph.getPixel(0, 0));

  // console.log("Background");
  // console.log(ph.getPixel(size * 2, 0));
  // console.log(ph.getPixel(size * 2, size * 2));
  // console.log(ph.getPixel(0, size * 2));

  // console.log("Green");
  // console.log(ph.getPixel(0, 0));
  // console.log(ph.getPixel(size - 1, size - 1));

  // console.log("Red");
  // console.log(ph.getPixel(size, 0));
  // console.log(ph.getPixel(size * 2 - 1, size - 1));

  // console.log("White");
  // console.log(ph.getPixel(size, size));
  // console.log(ph.getPixel(size * 2 - 1, size * 2 - 1));

  // console.log("Blue");
  // console.log(ph.getPixel(0, size));
  // console.log(ph.getPixel(size - 1, size * 2 - 1));

  // for (let y = 0; y < height; y++) {
  //   const offset = y * width * 4;
  //   console.log("----- offset = " + offset);
  //   for (let x = 0; x < width; x++) {
  //     let pix = offset + x * 4;
  //     console.log(pix + " = " + 0);
  //     pixels[pix] = 0;
  //     pix = offset + x * 4 + 1;
  //     console.log(pix + " = " + 255);
  //     pixels[pix] = 255;
  //     pix = offset + x * 4 + 2;
  //     console.log(pix + " = " + 0);
  //     pixels[pix] = 0;
  //     pix = offset + x * 4 + 3;
  //     console.log(pix + " = " + 255);
  //     pixels[pix] = 255;
  //   }
  // }

  updatePixels();
}

class pixel {
  r;
  g;
  b;
  alpha;

  constructor(r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.alpha = a;
  }
}

class PixelHelper {
  _pixelsMatrix;
  _imageWidth;
  _imageHeight;
  _pxDensity;

  constructor(pixelsMatrix, imageWidth, imageHeight, pxDensity = 1) {
    this._pixelsMatrix = pixelsMatrix;
    this._imageWidth = imageWidth;
    this._imageHeight = imageHeight;
    this._pxDensity = pxDensity;

    console.log("======================================");
    console.log(
      "_pixelsMatrix  : " +
        this._pixelsMatrix.length +
        " (pixels : " +
        this._pixelsMatrix.length / 4 +
        ")"
    );
    console.log("_imageWidth    : " + this._imageWidth);
    console.log("_imageHeight   : " + this._imageHeight);
    console.log("_pxDensity     : " + this._pxDensity);
    console.log("======================================");
  }

  getPixel(x, y) {
    let r, g, b, a;

    for (let i = 0; i < this._pxDensity; i++) {
      for (let j = 0; j < this._pxDensity; j++) {
        const index =
          4 *
          ((y * this._pxDensity + j) * width * this._pxDensity +
            (x * this._pxDensity + i));
        r = this._pixelsMatrix[index];
        g = this._pixelsMatrix[index + 1];
        b = this._pixelsMatrix[index + 2];
        a = this._pixelsMatrix[index + 3];
        console.log(
          `-- ${x}, ${y} ----- ${i}, ${j} ------------------------------------`
        );
        console.log(`${index} r = ${r}`);
        console.log(`${index + 1} r = ${g}`);
        console.log(`${index + 2} r = ${b}`);
        console.log(`${index + 3} r = ${a}`);
      }
    }

    return new pixel(r, g, b, a);

    // const yOffset = 4 * (y * this._pxDensity) * this._imageWidth;
    // const pixelStart = yOffset + x * this._pxDensity * 4;

    // return new pixel(
    //   this._pixelsMatrix[pixelStart + 0],
    //   this._pixelsMatrix[pixelStart + 1],
    //   this._pixelsMatrix[pixelStart + 2],
    //   this._pixelsMatrix[pixelStart + 3]
    // );
  }
}

// let img;
// function preload() {
//   img = loadImage("assets/rockies.jpg");
// }

// function setup() {
//   image(img, 0, 0, width, height);
//   let d = pixelDensity();
//   let halfImage = 4 * (width * d) * ((height * d) / 2);
//   loadPixels();
//   for (let i = 0; i < halfImage; i++) {
//     pixels[i + halfImage] = pixels[i];
//   }
//   updatePixels();
// }

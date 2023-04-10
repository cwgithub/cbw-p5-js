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
  }

  getPixel(x, y) {
    const yOffset = 4 * y * this._imageWidth;
    const pixelStart = yOffset + x * 4;

    return new pixel(
      this._pixelsMatrix[pixelStart + 0],
      this._pixelsMatrix[pixelStart + 1],
      this._pixelsMatrix[pixelStart + 2],
      this._pixelsMatrix[pixelStart + 3]
    );
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

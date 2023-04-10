/* By Steve's Makerspace
   Video: https://youtu.be/nqHeasOCwfU
   Version coded during the video.  It's not perfect.  See the other Quad maker.
   Color palettes from coolers.co.
*/

let space = 150;
let frame = 0; // 30;
let noiseTime = 0;
let noiseIncrement = 10000; // 0 or 10000
let points = [];
let vary = 8;
let buff = 0.2;
let palette, pos;

function preload() {
  table = loadTable("colors.csv", "csv", "header");
}

function pointRandomiser(x, y) {
  return createVector(x, y);
  //  return  createVector(x + random(-vary, vary), y + random(-vary, vary));
}

function setup() {
  createCanvas(601, 601);
  background(123);
  strokeWeight(1);

  console.log("displayDensity : " + displayDensity());
  console.log("pixelDensity   : " + pixelDensity());

  pixelDensity(displayDensity());
  console.log("pixelDensity   : " + pixelDensity());
  pixelDensity(1);
  console.log("pixelDensity   : " + pixelDensity());
  background(123);

  //colorMode(HSB,360,128,100,255);
  palette = floor(random(83));

  let buff2 = space * buff;
  let wNumb = floor((width - frame * 2) / space) + 1;
  let hNumb = floor((height - frame * 2) / space) + 1;
  let extraW = round(width - wNumb * space - frame * 2);
  let extraH = round(height - hNumb * space - frame * 2);

  // for (y = frame + extraH; y < height - frame + 1; y += space) {
  //   for (x = frame + extraW; x < width - frame; x += space) {

  for (y = frame; y < height - frame + 1; y += space) {
    for (x = frame; x < width - frame; x += space) {
      const vector = pointRandomiser(x, y);

      points.push(vector);

      if (y > space + frame + extraH && x > space + frame + extraW) {
        pos = points.length - 1;
        strokeWeight(1);

        let rgb = generateColor();

        // fill(rgb);

        fill([200, 200, 200]);

        quad(
          points[pos].x,
          points[pos].y,
          points[pos - 1].x,
          points[pos - 1].y,
          points[pos - wNumb - 1].x,
          points[pos - wNumb - 1].y,
          points[pos - wNumb].x,
          points[pos - wNumb].y
        );

        // const { red, green, blue } = getColor();

        const middleX = floor(points[pos].x - space / 2);
        const middleY = floor(points[pos].y - space / 2);

        const pxIndex = 4 * (width * middleY) + middleX;
        console.log("pxIndex: " + pxIndex);

        floodFillOrig(createVector(middleX, middleY), rgb);

        strokeWeight(1);
        fill([255, 0, 0]);
        ellipse(middleX, middleY, 10, 10);

        // noFill();
        // strokeWeight(3);
        // quad(
        //   points[pos].x,
        //   points[pos].y,
        //   points[pos - 1].x,
        //   points[pos - 1].y,
        //   points[pos - wNumb - 1].x,
        //   points[pos - wNumb - 1].y,
        //   points[pos - wNumb].x,
        //   points[pos - wNumb].y
        // );
        // let firstCol = color(r, g, b);
        // getColor();
        // let secCol = color(r, g, b);
        // if (firstCol == secCol) {
        //   getColor();
        // }
        // strokeWeight(1);
        // fill(240);
        // quad(
        //   points[pos].x - buff2,
        //   points[pos].y - buff2,
        //   points[pos - 1].x + buff2,
        //   points[pos - 1].y - buff2,
        //   points[pos - wNumb - 1].x + buff2,
        //   points[pos - wNumb - 1].y + buff2,
        //   points[pos - wNumb].x - buff2,
        //   points[pos - wNumb].y + buff2
        // );
        // getColor();
        // floodFill(
        //   createVector(
        //     round(points[pos].x - space / 2),
        //     round(points[pos].y - space / 2)
        //   ),
        //   [r, g, b, 255]
        // );
        // noFill();
        // strokeWeight(3);
        // quad(
        //   points[pos].x - buff2,
        //   points[pos].y - buff2,
        //   points[pos - 1].x + buff2,
        //   points[pos - 1].y - buff2,
        //   points[pos - wNumb - 1].x + buff2,
        //   points[pos - wNumb - 1].y + buff2,
        //   points[pos - wNumb].x - buff2,
        //   points[pos - wNumb].y + buff2
        // );
      }
    }
  }
}

function generateColor() {
  // const r = 255;
  // const g = 255;
  // const b = 0;

  let col = floor(random(5));

  huey = table.get(palette, col * 3);
  sat = table.get(palette, col * 3 + 1);
  brt = table.get(palette, col * 3 + 2);

  const k = (n) => (n + huey / 60) % 6;
  const f = (n) =>
    (brt / 100) * (1 - (sat / 128) * Math.max(0, Math.min(k(n), 4 - k(n), 1)));

  const r = 255 * f(5);
  const g = 255 * f(3);
  const b = 255 * f(1);

  // const r = 255;
  // const g = 0;
  // const b = 0;

  return [r, g, b];
}

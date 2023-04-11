let doubleFill = true; //suggest making the canvas smaller for doubleFill - it takes a while
let frame = 20;
let noiseTime = 0;
let noiseIncrement = 10000; // 0 or 10000
let firstCol, secCol, space, buff0, buff1, inner;
let points = [];
let palette;

function preload() {
  table = loadTable("colors.csv", "csv", "header");
}

function setup() {
  pixelDensity(1);

  createCanvas(windowWidth - 20, windowHeight - 50);

  space = random(50, 100); //grid size
  buff0 = random(5, 10); //randomness of quad shape: higher # = more uniform
  buff1 = random(0.1, 0.33); //inner quad boundry
  inner = floor(random(2)); //0 = no inner quad; 1 = inner quad created

  let saveButton = createButton("save jpg");
  saveButton.position(10, height + 10);
  saveButton.mousePressed(saveArt);
  background(190);
  let rows = table.getRowCount() - 1;
  palette = floor(random(rows));
  let prelWnumb = (width - frame * 2) / space;
  wNumb = floor(prelWnumb); //number of quads across
  let prelHnumb = (height - frame * 2) / space;
  hNumb = floor(prelHnumb); //number of quads down
  // add more to the frame for leftover space in canvass
  let excessW = round((width - frame * 2 - wNumb * space) / 2);
  let excessH = round((height - frame * 2 - hNumb * space) / 2);
  wFrame = frame + excessW;
  hFrame = frame + excessH;
  if (prelWnumb > wNumb) {
    wNumb++;
  }
  //Start the grid
  for (y = hFrame; y < height - hFrame / 2; y += space) {
    for (x = wFrame; x < width - wFrame / 2; x += space) {
      points.push(
        createVector(
          x + random(-space / buff0, space / buff0),
          y + random(-space / buff0, space / buff0)
        )
      );
      // start quads after first row done
      if (x > wFrame + space - 1 && y > hFrame + space - 1) {
        pos = points.length - 1;

        fill(150);

        strokeWeight(1);

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

        getRGBcolor();

        firstCol = [r, g, b];

        floodFillNoiseCBW(
          createVector(round(x - space / 2), round(y - space / 2)),
          [r, g, b, 255, noiseTime],
          noiseIncrement
        );

        // noiseTime += noiseIncrement;
        // if (inner == 1) {
        //   // make inner quad
        //   fill(150);
        //   strokeWeight(1);
        //   quad(
        //     points[pos].x - space * buff1,
        //     points[pos].y - space * buff1,
        //     points[pos - 1].x + space * buff1,
        //     points[pos - 1].y - space * buff1,
        //     points[pos - wNumb - 1].x + space * buff1,
        //     points[pos - wNumb - 1].y + space * buff1,
        //     points[pos - wNumb].x - space * buff1,
        //     points[pos - wNumb].y + space * buff1
        //   );
        //   getRGBcolor();
        //   secCol = [r, g, b];
        //   //make 1 attempt to get an inner color different from the outer quad color
        //   if (firstCol == secCol) {
        //     getRGBcolor();
        //   }
        //   floodFill(createVector(round(x - space / 2), round(y - space / 2)), [
        //     r,
        //     g,
        //     b,
        //     255,
        //   ]);
        // }
        // if (doubleFill == true) {
        //   getRGBcolor();
        //   floodFill(createVector(round(x - space / 2), round(y - space / 2)), [
        //     r,
        //     g,
        //     b,
        //     255,
        //   ]);
        // }
        // // redo quads with larger lines to cover floodfill imperfections
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
        // if (inner == 1) {
        //   quad(
        //     points[pos].x - space * buff1,
        //     points[pos].y - space * buff1,
        //     points[pos - 1].x + space * buff1,
        //     points[pos - 1].y - space * buff1,
        //     points[pos - wNumb - 1].x + space * buff1,
        //     points[pos - wNumb - 1].y + space * buff1,
        //     points[pos - wNumb].x - space * buff1,
        //     points[pos - wNumb].y + space * buff1
        //   );
        // }
      }
    }
  }
  noLoop();
  //print(millis());
}

function getRGBcolor() {
  let col = floor(random(5));
  huey = int(table.get(palette, col * 3));
  sat = int(table.get(palette, col * 3 + 1));
  brt = int(table.get(palette, col * 3 + 2));
  convert();
}

function convert() {
  colorMode(RGB);
  const k = (n) => (n + huey / 60) % 6;
  const f = (n) =>
    (brt / 100) * (1 - (sat / 128) * Math.max(0, Math.min(k(n), 4 - k(n), 1)));
  r = 255 * f(5);
  g = 255 * f(3);
  b = 255 * f(1);
}

function saveArt() {
  save(Date.now() + ".jpg");
}

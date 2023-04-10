function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

function expandToNeighbours(queue, current) {
  x = current.x;
  y = current.y;

  if (x - 1 > 0) {
    queue.push(createVector(x - 1, y));
  }

  if (x + 1 < width) {
    queue.push(createVector(x + 1, y));
  }

  if (y - 1 > 0) {
    queue.push(createVector(x, y - 1));
  }

  if (y + 1 < height) {
    queue.push(createVector(x, y + 1));
  }

  return queue;
}

function floodFill(seed, fillColor) {
  loadPixels();

  console.log(`width : ${width}`);
  console.log(`height : ${height}`);
  console.log(`seed.x : ${seed.x}`);
  console.log(`seed.y : ${seed.y}`);

  index = 4 * (width * seed.y + seed.x);
  seedColor = [
    pixels[index],
    pixels[index + 1],
    pixels[index + 2],
    pixels[index + 3],
  ];

  let queue = [];
  queue.push(seed);

  // while (queue.length) {
  //   let current = queue.shift();

  //   index = 4 * (width * current.y + current.x);

  //   let color = [
  //     pixels[index],
  //     pixels[index + 1],
  //     pixels[index + 2],
  //     pixels[index + 3],
  //   ];

  //   if (!arrayEquals(color, seedColor)) {
  //     continue;
  //   }

  //   for (let i = 0; i < 4; i++) {
  //     pixels[index + i] = fillColor[0 + i];
  //   }

  //   // queue = expandToNeighbours(queue, current);
  // }

  for (let i = 0; i < 200; i += 4) {
    pixels[index + i] = 0;
    pixels[index + i + 1] = 255;
    pixels[index + i + 2] = 0;
    pixels[index + i + 3] = 255;
  }

  updatePixels();
}

function deleteMe(seed) {
  loadPixels();

  console.log(`width : ${width}`);
  console.log(`height : ${height}`);
  console.log(`seed.x : ${seed.x}`);
  console.log(`seed.y : ${seed.y}`);

  index = 4 * (width * seed.y + seed.x);

  for (let i = 0; i < 200; i += 4) {
    pixels[index + i] = 0;
    pixels[index + i + 1] = 255;
    pixels[index + i + 2] = 0;
    pixels[index + i + 3] = 255;
  }

  updatePixels();
}

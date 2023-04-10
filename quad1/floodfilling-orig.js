function arrayEqualsOrig(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

function expandToNeighboursOrig(queue, current) {
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

function floodFillOrig(seedPoint, fillColor) {
  loadPixels();

  const pxIndex = 4 * (width * seedPoint.y) + seedPoint.x;
  console.log(pxIndex);

  seedColor = [
    pixels[pxIndex],
    pixels[pxIndex + 1],
    pixels[pxIndex + 2],
    pixels[pxIndex + 3],
  ];
  console.log(seedColor);

  let queue = [];
  queue.push(seedPoint);

  while (queue.length) {
    let current = queue.shift();
    index = 4 * (width * current.y + current.x);
    let color = [
      pixels[index],
      pixels[index + 1],
      pixels[index + 2],
      pixels[index + 3],
    ];

    if (!arrayEqualsOrig(color, seedColor)) {
      continue;
    }

    for (let i = 0; i < 4; i++) {
      pixels[index + i] = fillColor[0 + i];
    }

    queue = expandToNeighboursOrig(queue, current);
  }

  updatePixels();
}

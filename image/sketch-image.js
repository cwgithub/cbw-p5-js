function setup() {
  createCanvas(3000, 3000);

  // here we use a callback to display the image after loading
  loadImage("../assets/All I Want Is/cover 3000.jpeg", (img) => {
    image(img, 0, 0);
  });
}

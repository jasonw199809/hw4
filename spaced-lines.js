function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
stroke (255, 0, 0)
  for (var x = 10; x < width-10; x = x + 50) {
    line(x, height/2, mouseX, mouseY);
  }
}

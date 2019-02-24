function setup() {
  createCanvas(400, 400);
  colorMode(HSB, width, height, 100);
}

function draw() {
  var dots = [];
  for (z = 0; z < 100; z=z+1) {
    var dot = {
      x: random(width),
      y: random(height),
    };
    dots.push(dot);
  }
for (var z = 0; z < dots.length; z=z+1) {
    stroke(dots[z].x, dots[z].y, 100);
    point(dots[z].x, dots[z].y);
  }
}

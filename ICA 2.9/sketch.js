let inc = 0.01;
let start = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  stroke(255);
  noFill();
  beginShape();
  var xoff = start;
  for (var x = 0; x < width; x++) {
    stroke(255);
   let n = map(noise(xoff), 0, 1, 0, height);
    let s = map(sin(xoff), -1, 1, -50, 50);
    let y = s + n;
    //var y = random(height);
   let x = noise(xoff) * 100 + height / 2 + sin(xoff) * height;
    vertex(x, y);
    xoff += inc;
  }
  endShape();
  start += inc;
}
let p;
let y;

function setup() {
  createCanvas(400, 200);
  background(0);
  p = 0;
  y = 5
}

function draw() {
  background(220);
  fill(128);
  let w = 55;
  let h = 80;
  // rect(p,height/2-h/2,w,h);
  fill(120,140,162);
  strokeWeight(5);
  rect(p, height / 2 - h / 2, w, h);
  rect(y, height / 2 - h / 2, w, h);
  p = p + y;
  if (p > width)
  p = 0;
  y = y - 5
  if (y < 0)
   y = width;
}
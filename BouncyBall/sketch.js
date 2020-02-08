function setup() {
  // put setup code here
}

function draw() {
  // put drawing code here
}function setup() {
  createCanvas(400, 400);
  t = random(0, 255);
  frameRate(50);
}

function draw() {
  background(220);
  let xpos = 50;
  let ypos = 100;
  let w = 150;
  let h = 100;
  //t+=0.01;
  // xpos = random (0,width);
  // yposn = random(0,50);
  rect(xpos,ypos,w,h);
  fill(random()*255,500);
  //ll(t);
}
function mouseClicked() {
  t = random(0, 255);
}
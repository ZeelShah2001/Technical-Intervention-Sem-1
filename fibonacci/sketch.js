function setup() {
  createCanvas(400, 400);
  noFill(128,128);
  series(width);
}

function series(n) {
  print(n);
  circle(n/2,height/2,n,n);
  circle(width-2,height/2,n,n);
  circle(width/2,height/2,n,n);
  if (n > 5){
    series(n * 0.5);
  }
}
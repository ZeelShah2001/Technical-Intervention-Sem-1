function setup() {
  createCanvas(400, 400);
  noFill();
  stroke(250);
  series(500);
}

function series(n) {
  print(n);
  rect(150,150,n*2,n*5);
  
  rect(250,100,n*7,n*8);
  rect(50,100,n*1,n*4);
  if (n > 5){
    series(n * 0.5);
  }
}
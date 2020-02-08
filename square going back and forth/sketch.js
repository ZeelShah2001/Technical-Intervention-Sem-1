let p;
let y;

function setup() {
  createCanvas(400,200);
  p=0;
  y=5
}
function draw(){
  background(220);
    fill(100);
  rect(p,10,100,75);
  p = p + y;
  if(p >300){
    y=-y;}
  if(p<0){
     y=-y;}
  }
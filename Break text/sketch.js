let p1 = [];

function setup() {
  createCanvas(400, 400);
  p1 = new Particle();
  for (let i = 0; i < 100; i++) {
    p1[i] = new Particle();
  }
}

function draw() {
  //background(220);
  for (let i = 0; i < 1; i++) 
  {
    p1[i].update();
    p1[i].display();
    print(i);
  }
}

class Particle {
  constructor() {
    this.posX = random(0, width);
    this.posY = random(0, height);
    this.velX = random();
    this.velY = random();
    this.accX = 0.5;
    this.accY = 0;
  }
  update() {
    this.posX = this.posX + this.velX;
    this.posY += this.velY;
    if (this.posX > width || this.posX < 0) {
      this.velX = -this.velX;
    }
    if (this.posY < 0) {
      this.posY = height;
    }
    if (this.posY > height) {
      this.posY = 0;
    }
    this.velX += this.accX;
    this.velY += this.accY;
     function mouseClicked(){
    let p1= new Particle();
    p1.posX=mouseX;
    p1.posY=mouseY;
    swarm.push(p);   
     }
  }
  display() {
    //ellipse(this.posX, this.posY, 50, 50);
    textSize(32);
    textStyle(BOLD);
    fill(150,20,90);
    stroke(260);
    strokeWeight(10);
    text("break!", this.posX, this.posY);
  }
  functionmouseClicked(){
    let p1= new Particle();
    p1.posX=mouseX;
    p1.posY=mouseY;
    swarm.push(p);  
  }
}
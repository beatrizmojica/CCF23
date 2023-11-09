
let sphere;
let face;
let pos;
let speed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  sphere = new Ball();
  pos = createVector(width/2, height);
  speed = createVector(0, 0);
  speed.x = random(-2,2);
  speed.y = random(-2,2);
}

function draw() {
  background(200,60); // motion blur
  sphere.update();
  sphere.wallCheck();
  sphere.render();
 
}
  
class Ball {

  constructor() {

    this.diam = 180;

    this.xpos = width/2;
    this.ypos = height/2;

    this.xspeed = random(3, 10);
    this.yspeed = random(3, 10);
  }

  update(){
    this.xpos += this.xspeed
    this.ypos += this.yspeed
  }

  wallCheck(){
    if(this.xpos >= width - this.diam/2 || this.xpos <= this.diam/2){
  this.xspeed = this.xspeed * -1;
    fill(random(255), random(255), random(255));
    ellipse(this.xpos, this.ypos, this.diam+100); // ellipse flash
  }

   if(this.ypos >= height - this.diam/2 || this.ypos <= this.diam/2){
  this.yspeed = this.yspeed * -1;
     fill(random(255), random(255), random(255)); 
     ellipse(this.xpos,this.ypos, this.diam + 100); //ellipse flash
   }
  }

render(){
  strokeWeight(1);
  ellipse(this.xpos, this.ypos, this.diam);
  strokeWeight(5);
  ellipse(this.xpos-40, this.ypos-40, 10);
  ellipse(this.xpos + 40, this.ypos - 40, 10);
  bezier(this.xpos-50, this.ypos, this.xpos-40, this.ypos+60, this.xpos+40, this.ypos+60, this.xpos+50, this.ypos);
}
}

let sphere1, sphere2, sphere3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  sphere1 = new Ball();
  sphere2 = new Ball();
  sphere3 = new Ball();
}

function draw() {
  background(200,50); // motion blur
  
  sphere1.update();
  sphere1.wallCheck();
  sphere1.render();

  sphere2.update();
  sphere2.wallCheck();
  sphere2.render();

  sphere3.update();
  sphere3.wallCheck();
  sphere3.render();
}
  
class Ball {

  constructor() {
    this.diam = random(10, 200);

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
    background(random(255), random(255), random(255));
    ellipse(this.xpos, this.ypos, this.diam+100); // ellipse flash
  }
   if(this.ypos >= height - this.diam/2 || this.ypos <= this.diam/2){
  this.yspeed = this.yspeed * -1;
     fill(random(255), random(255), random(255));
     background(random(255), random(255), random(255)); 
     ellipse(this.xpos,this.ypos, this.diam + 100); //ellipse flash
   }
  }

  render(){
    ellipse(this.xpos, this.ypos, this.diam);
  }

}

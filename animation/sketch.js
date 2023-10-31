//link to site: https://beatrizmojica.github.io/CCF23/animation/

let picker; // variable for the menu
let sphere1, sphere2, sphere3;
let face;

function setup() {
  createCanvas(windowWidth, windowHeight);
  sphere1 = new Ball();
  sphere2 = new Ball();
  sphere3 = new Ball();

  picker = createSelect();
  picker.position(10, 10);
  picker.option('Happy');
  picker.option('Angry');
  picker.option('Sad');

  //callback when an item is picked
  picker.changed(pickFace);

  face = picker.value();
}

function draw() {
  background(200,60); // motion blur

  //change emotions based on menu option

  if (face === 'Sad') {
    sphere1.renderSad();
    sphere2.renderSad();
    sphere3.renderSad();
  }
if(face === 'Happy') {
  sphere1.renderHappy();
  sphere2.renderHappy();
  sphere3.renderHappy();
}

if (face === 'Angry') {
  sphere1.renderAngry();
  sphere2.renderAngry();
  sphere3.renderAngry();
}

  sphere1.update();
  sphere1.wallCheck();
  

  sphere2.update();
  sphere2.wallCheck();
  

  sphere3.update();
  sphere3.wallCheck();
 
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

  renderSad(){
    strokeWeight(1);
    ellipse(this.xpos, this.ypos, this.diam);
    strokeWeight(5);
    ellipse(this.xpos-40, this.ypos-40, 10);
    ellipse(this.xpos + 40, this.ypos - 40, 10);
    bezier(this.xpos-50, this.ypos+50, this.xpos-40, this.ypos, this.xpos+40, this.ypos, this.xpos+50, this.ypos+50);
}

renderHappy(){
  strokeWeight(1);
  ellipse(this.xpos, this.ypos, this.diam);
  strokeWeight(5);
  ellipse(this.xpos-40, this.ypos-40, 10);
  ellipse(this.xpos + 40, this.ypos - 40, 10);
  bezier(this.xpos-50, this.ypos, this.xpos-40, this.ypos+60, this.xpos+40, this.ypos+60, this.xpos+50, this.ypos);
}

renderAngry(){
  strokeWeight(1);
  ellipse(this.xpos, this.ypos, this.diam);
  strokeWeight(5);
  ellipse(this.xpos-40, this.ypos-30, 10);
  ellipse(this.xpos+40, this.ypos-30, 10);
  //brows
  line(this.xpos-45, this.ypos-60, this.xpos-20, this.ypos-40);
  line(this.xpos+45, this.ypos-60, this.xpos+20, this.ypos-40);
  //mouth
  line(this.xpos-50, this.ypos+30, this.xpos+50, this.ypos+30);
}
}

function pickFace() {
  face = picker.value();
}

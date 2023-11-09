let pos;
let speed;
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
    pos = createVector(width/2, height/2);
    speed = createVector(0, 0);
    speed.x = random(3,8);
    speed.y = random(3,8);
      }
    
   update(){
    pos.add(speed)
   }
    
   wallCheck(){
     if(pos.x >= width - 50 || pos.x <= 50){
       speed.x *= -1;
       fill(random(255), random(255), random(255));
       ellipse(pos.x, pos.y, 300); // ellipse flash
      }
        
       if(pos.y >= height - 50 || pos.y <= 50){
       speed.y *= -1;
       fill(random(255), random(255), random(255)); 
       ellipse(pos.x,pos.y, 300); //ellipse flash
        }
      }
    
 renderSad(){
   strokeWeight(1);
   ellipse(pos.x, pos.y, 200);
   strokeWeight(5);
   ellipse(pos.x-40, pos.y-40, 10);
   ellipse(pos.x + 40, pos.y - 40, 10);
   bezier(pos.x-50, pos.y+50, pos.x-40, pos.y, pos.x+40, pos.y, pos.x+50, pos.y+50);
    }
    
 renderHappy(){
   strokeWeight(1);
   ellipse(pos.x, pos.y, 200);
   strokeWeight(5);
   ellipse(pos.x-40, pos.y-40, 10);
   ellipse(pos.x + 40, pos.y - 40, 10);
   bezier(pos.x-50, pos.y, pos.x-40, pos.y+60, pos.x+40, pos.y+60, pos.x+50, pos.y);
  }
    
 renderAngry(){
   strokeWeight(1);
   ellipse(pos.x, pos.y, 200);
   strokeWeight(5);
   ellipse(pos.x-40, pos.y-30, 10);
   ellipse(pos.x+40, pos.y-30, 10);
   //brows
   line(pos.x-45, pos.y-60, pos.x-20, pos.y-40);
   line(pos.x+45, pos.y-60, pos.x+20, pos.y-40);
   //mouth
   line(pos.x-50, pos.y+30, pos.x+50, pos.y+30);
   }
 }
    
 function pickFace() {
   face = picker.value();
  }

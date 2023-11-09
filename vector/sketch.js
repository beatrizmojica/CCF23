let pos;
let speed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pos = createVector(width/2, height/2);
  speed = createVector(0, 0);
  speed.x = random(3,10);
  speed.y = random(3,10);
}

function draw() {
  background(200,60); // motion blur
  pos.add(speed);

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

  strokeWeight(1);
  ellipse(pos.x, pos.y, 200);
  strokeWeight(5);
  ellipse(pos.x-40, pos.y-40, 10);
  ellipse(pos.x + 40, pos.y - 40, 10);
  bezier(pos.x-50, pos.y, pos.x-40, pos.y+60, pos.x+40, pos.y+60, pos.x+50, pos.y);

    }

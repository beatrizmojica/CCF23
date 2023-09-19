let xPos, yPos;
let xDir, yDir;

function setup() {
  createCanvas(windowWidth, windowHeight);
  xPos = width/2;
  yPos = height/2;
  
  xDir = random(-3.0,3.0);
  yDir = random(-3.0,3.0);
  
}

function draw() {
  background(200,10); // motion blur
  ellipse(xPos, yPos,100);
 
  //update the ball position
  xPos += xDir;
  yPos += yDir;
  
  if(xPos >= width - 50 || xPos <= 50){
  xDir = xDir * -1;
    fill(random(255), random(255), random(255));
    background(random(255), random(255), random(255));
    ellipse(xPos,yPos, 300); // ellipse flash
  }
   if(yPos >= height - 50 || yPos <= 50){
  yDir = yDir * -1;
     fill(random(255), random(255), random(255));
     background(random(255), random(255), random(255)); 
     ellipse(xPos,yPos, 300); //ellipse flash
     
  }
  noStroke()
}
  

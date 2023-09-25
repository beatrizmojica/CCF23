
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
}

function draw() {
 if ((keyIsPressed == true) && (key == 'e')) {
  background(220); // press 'e' key to erase drawing
 }
 if ((keyIsPressed == true) && (key == '1')){
  strokeWeight(1); // press '1' key to make strokeWeight 1
 }
 if ((keyIsPressed == true) && (key == '2')){
  strokeWeight(5); // press '2' key to make strokeWeight 5
 }
 if ((keyIsPressed == true) && (key == '3')){
  strokeWeight(10); // press '3' key to make strokeWeight 10
 }
 if ((keyIsPressed == true) && (key == 'r')){
  stroke(200, 0, 0); // press 'r' key for red
 }
 if ((keyIsPressed == true) && (key == 'b')){
  stroke(0, 0, 200); // press 'b' key for blue
 }
 if ((keyIsPressed == true) && (key == 'g')){
  stroke(0, 200, 0); // press 'g' key for green
 }
 if ((keyIsPressed == true) && (key == 'B')){
  stroke(0); // press 'B' key for black
 }
}

function mouseDragged() {
  line(pmouseX, pmouseY, mouseX, mouseY); //click and drag to draw
}

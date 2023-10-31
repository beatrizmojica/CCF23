// link to site: https://beatrizmojica.github.io/CCF23/drawing%20machine/
// read rules below!

// rules for sketching
// click and drag your mouse to draw
// 'e' key erases or restarts your drawing
// Keys '1','2','3' change the strokeWeight
// 1 being the thinnest, 3 being the boldest
// 'r' key changes the stroke color to red
// 'g' key changes the stroke color to green
// 'b' key changes the stroke color to blue
// 'B' key changes the stroke color to black (case sensitive)

let sphere;


function setup() {
  createCanvas(windowWidth, windowHeight); 
  background(220);
  sphere = new Ball();

}

function draw() {

 if((keyIsPressed == true) && (key == 's')){
  sphere();
 } 

 if ((keyIsPressed == true) && (key == 'e')) {
  background(220); // press 'e' key to erase drawing
 }
 if ((keyIsPressed == true) && (key == '1')){
  strokeWeight(2); // press '1' key to make strokeWeight 1
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
 sphere.generativeCheck();
 sphere.render();
}

function mouseDragged() {
  line(pmouseX, pmouseY, mouseX, mouseY); //click and drag to draw

}

class Ball {
  constructor(){

    this.x = mouseX;
    this.y = mouseY;
    this.size = random(10,30);

    this.fill =(random(255), random(255), random(255));
  }
  generativeCheck(){
    if(mouseDragged == true){
  ellipse(this.x, this.y, this.size);
  ellipse(width - this.x, this.y, this.size);
    }
  
  }

  render(){
    fill(this.fill);
    ellipse(this.x, this.y, this.size);
  }
}

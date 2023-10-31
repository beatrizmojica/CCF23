let viento, amanece, venado, album;
let vientobut, amanecebut, venadobut, stopbut;


function setup() {
  createCanvas(windowWidth, windowHeight);

  // viento 
  vientobut = createButton('Viento');
  vientobut.position(width/2 - 250, height-80);
  vientobut.mousePressed()

  //amanece
  amanecebut = createButton('Amanece');
  amanecebut.position(width/2-30, height-80);

  //venado
  venadobut = createButton('Perdí Mi Ojo de Venado');
  venadobut.position(width/2+150, height-80);

  stopbut = createButton('⏸️');
  stopbut.position(width/2-10, height - 35);

// play song if button is pressed
  vientobut.mousePressed(playViento);
  amanecebut.mousePressed(playAmanece);
  venadobut.mousePressed(playVenado);

  stopbut.mousePressed(pauseSound);
}

function preload(){
  //preload sounds + image
  viento = loadSound('sounds/viento.mp3');
  amanece = loadSound('sounds/amanece.mp3');
  venado = loadSound('sounds/venado.mp3');

  album = loadImage('sounds/CaifanesAlbum.png');
}

function draw() {
  background(230, 215, 255);

  //my top 3 text
  textSize(20);
  textFont('Times New Roman');
  fill('purple');
  text("Beatriz's Top 3 from the Caifanes Album", width/2 - 170, 50);

  image(album, width/2-250, height/2-275, 500, 500);


}

function playViento() {
  console.log('vientooo');
  viento.play(0, 1, 0.25, 0.0); 
  playingVi = true
}

function playAmanece() {
  console.log('amanece!');
  amanece.play(0, 1, 0.25, 0.0);
  playingAm = true;
}

function playVenado() {
  console.log('perdi mi ojo');
  venado.play(0, 1, 0.25, 0.0);
  playingVe = true;
}

function pauseSound() {
  if(viento.isPlaying() || amanece.isPlaying() || venado.isPlaying()) {
    viento.pause();
    amanece.pause();
    venado.pause();
  }
}
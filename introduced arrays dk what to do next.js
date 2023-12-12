/*TO DO:
- fix the time elapsed/time left to make them integers instead of whatever is going on there
- have album cover icons pop up with each song [working on it]
- do restart button
- sliders and buttons for song manipulation
   - sliders: reverb, delay, speed up
   - buttons: p5.soundRecorder (next to play/pause buttons),
   p5.filter buttons (lowpass, highpass, band pass)


THINGS WE NEED HELP WITH (Office Hrs):
- download remix functions; working question mark
*/


//testing something - DIDNT WERKKKKKKK
let sodarec, lamentorec;

//Array variables
let songs = []// array to hold songs
let songButtons = []; //buttons for songs
let songTitles; // object to hold song titles
let allSongs = 15; // no. of songs

//REGION STUFF:
//variables for region icons
let northam, southam, africa, asia, europe, pausebut, resbut;
//variabls for region 
let nabut, sabut, afbut, asbut, eubut;


//ALBUM COVER STUFF:
let bigone;


//variables for album cover images
//South America
let soda, enanitos, abuelos;
//North America
let tate, nerPic, vMonet;
//Africa
let youssou, vivi, magicSys;
//Asia
let rapline, maher, skyResto;
//Europe
let sally, alicia, tayc;

//variables for song manipulation elements
let reverb, delay, playback;
let amt; //amt of reverb
let amtD; // amt of delay

//variables for sliders
let reverbSl, delaySl, playbackSl;

//saving song remix file variables, IB: https://p5js.org/examples/sound-record-save-audio.html
let recordRemix, saveRemix, recordDownload, stopRecord;

//MUSIC VARS
//total duration of the song
let songsDuration = 0;
let cTime = 0; // current time
let whatsPlaying = 20000; // set super high so it won't interfere with songs 0-14


let spinRec; // this is the object that will hold the spinning record labels
//let allSongs; // object to hold all songs, commented out bc same variable name was used for array


function preload() {

  for (let i = 0; i < allSongs; i++) {
    songs[i] = loadSound('sounds/' + i + ".mp3");
    }
    songTitles = loadStrings('songNames.txt');
  
   //preloading region images
   northam = loadImage('images/northam.png');
   southam = loadImage('images/southam.webp');
   africa = loadImage('images/africa.webp');
   asia = loadImage('images/asia.gif');
   europe = loadImage('images/europe.png')
   bigone = loadImage('images/bigone.webp');
  
  
   //spinning records
   soda = loadImage('images/0soda.png');
   enanitos = loadImage('images/1enanitos.png');
   abuelos = loadImage('images/2abuelos.png');
   youssou = loadImage('images/3youssou.png');
   vivi = loadImage('images/4viviane.png');
   magicSys = loadImage('images/5magicsystem.png');
   tate = loadImage('images/6tate.png');
   nerPic = loadImage('images/7nereyda.png');
   vMonet = loadImage('images/8jaguar.png');
   skyResto = loadImage('images/9sky.png');
   maher = loadImage('images/10mawlaya.png');
   rapline = loadImage('images/11ddaeng.png');
   alicia = loadImage('images/12alicia.png');
   tayc = loadImage('images/13tayc.png');
   sally = loadImage('images/14sally.png');
  }

function setup() {
 createCanvas(windowWidth, windowHeight);


  for (let i = 0; i < allSongs; i++) {
    songButtons[i] = createButton(songTitles[i]).mouseClicked(() => iWasClicked(i));
    songButtons[i].position(i * 100, 300);
    //220, 500, 750
    //songButtons[0, 3, 6, 9, 12].position(220,300);
    //songButtons[1, 4, 7, 10, 13].position(500,300);
    //songButtons[2, 5, 8, 11, 14].position(220,300);
  }

 //record and save functions
 recordRemix = new p5.SoundRecorder();
 saveRemix = new p5.SoundFile();
 recordRemix.setInput(songs[i]);
 recordDownload = createButton('Record Remix');
 recordDownload.position(450, 600);
 stopRecord = createButton('Stop Record & Save');
 stopRecord.position(820, 600);


 //to make the background darker
 //total time in sec
 songsDuration = songs[i].duration();


 //objects for spinning record class
 spinRec = new Record();

 //waveform
 fft = new p5.FFT();
 songs[i].amp(0.2);

 //reverb slider
 reverb = new p5.Reverb();
 reverb.process(songs[i], 5, 1);
 reverbSl = createSlider(0, 100, 0);
 reverbSl.position(800, 175);
 reverbSl.style('transform', 'rotate(270deg)');
 reverbSl.style('height', '300px');
 reverbSl.size(450);

 //deaay slider
 delay = new p5.Delay();
 delay.process(songs[i], 0.20, .8, 2300)
 delaySl = createSlider(0, 100, 0);
 delaySl.position(600, 175);
 delaySl.style('transform', 'rotate(270deg)');
 delaySl.style('height', '300px');
 delaySl.size(450);

 //playback rate slider
 playbackSl = createSlider(0, 100, 0);
 playbackSl.position(1050, 175);
 playbackSl.style('transform', 'rotate(270deg)');
 playbackSl.style('height', '300px');
 playbackSl.size(450);


 //preloading region buttons
 //south america buttons
 sabut = createButton("SouthAm")
 sabut.position(300, 220);
 sabut.mousePressed(saPlaylist)


 //africa buttons
 afbut = createButton("Africa")
 afbut.position(470, 220);
 afbut.mousePressed(africaPlaylist);

 //north american buttons
 nabut = createButton("NorthAm")
 nabut.position(160, 220);
 nabut.mousePressed(naPlaylist);

 //asia buttons
 asbut = createButton("Asia")
 asbut.position(645, 220);
 asbut.mousePressed(asiaPlaylist);

 //eur buttons
 eubut = createButton("Eur")
 eubut.position(820, 220);
 eubut.mousePressed(euPlaylist);


 //pause button
 pausebut = createButton("⏸️");
 pausebut.position(695, 600);
 pausebut.mousePressed(pause);
}

//FUNCTIONS FOR SLIDERS & BUTTONS:


 // do we need a function for each individual song? confused......
/*function downloadRemix() {
 if (recordDownload.mousePressed) {
   recordRemix.record(soda1)
   fill(10)
   textSize(20);
   text("Now Recording..", 400, 400)
 } if (stopRecord.mousePressed) {
   recordRemix.stop();
   saveSound(soda1, 'Soda Remix');
 }
}*/


//REGIONAL PLAYLISTS:

function saPlaylist() {
    //positioning all south america buttons
    songButtons[0].position(220,300)
    songButtons[1].position(500,300)
    songButtons[2].position(750,300)

    //hiding all the other buttons
    for (let i = 3; i < allSongs; i++) {
      songButtons[i].position(-100, -100);
   } 
}


function afPlaylist() {
    //positioning all africa buttons
    songButtons[3].position(220,300)
    songButtons[4].position(500,300)
    songButtons[5].position(750,300)

    //hiding all the other buttons

    for (let i = 0; i < allSongs; i++) {
      if (i !== 3 && i !== 4 && i !== 5) {
          songButtons[i].position(-100, -100);
      }
  }
   } 


function naPlaylist() {
    //positioning all north america buttons
    songButtons[6].position(220,300)
    songButtons[7].position(500,300)
    songButtons[8].position(750,300)

    //hiding all the other buttons
    for (let i = 0; i < allSongs; i++) {
      if (i !== 6 && i !== 7 && i !== 8) {
          songButtons[i].position(-100, -100);
}
    }
}

function asiaPlaylist() {
    //positioning all asia buttons
    songButtons[9].position(220,300)
    songButtons[10].position(500,300)
    songButtons[11].position(750,300)

    //hiding all the other buttons
    for (let i = 0; i < allSongs; i++) {
      if (i !== 9 && i !== 10 && i !== 11) {
          songButtons[i].position(-100, -100);
      }
  }
   } 

function euPlaylist() {

    //positioning all europe buttons
    songButtons[12].position(220,300)
    songButtons[13].position(500,300)
    songButtons[14].position(750,300)

    //hiding all the other buttons
    for (let i = 0; i < allSongs; i++) {
      if (i !== 12 && i !== 13 && i !== 14) {
          songButtons[i].position(-100, -100);
      }
  }
   } 



function draw() {
 tint(100); //
 background(bigone);
 fill(225);
 rectMode(CENTER);
 rect(width / 2, height / 2, 1200, 600, 20);
 imageMode(CORNER);

noTint();

 push();
 translate(0, 0);
 //image positions for each region
 image(northam, 150, 100, 100, 100);
 image(southam, 290, 100, 100, 100);
 image(africa, 440, 100, 100, 100);
 image(asia, 625, 100, 120, 100);
 image(europe, 800, 100, 110, 110);


 //somethings going on here.............
 //waveform of song playing
 let waveform = fft.waveform();
 noFill();
 beginShape();
 stroke(100);
 strokeWeight(2);
 for (let i = 0; i < waveform.length; i++) {
   let x = map(i, 0, waveform.length, 960, 445);
   let y = map(waveform[i], -1, 1, 200, height);
   vertex(x, y);
 }
 endShape();


 //amt of reverb applied
 amt = reverbSl.value() / 100;
 reverb.drywet(amt);


 //amt of delay applied
 amtD = delaySl.value() / 100;
 delay.drywet(amt);


 //progress line for current song
 stroke(150, 150);
 line(450, 550, 953, 550);
 if (songs[i].isPlaying()) {
   // if the song is playing,
   // get the current time of song in secs
   cTime = songs[i].currentTime();
   strokeWeight(8);
   stroke(18);
   // use lerp to figure out how long to draw the line
   let pct = lerp(450, 550, cTime / songsDuration);
   line(450, 550, pct, 550);
   // put a lil dot at the end
   strokeWeight(10);
   point(pct, 550);
   strokeWeight(1);
   //time passed in song in seconds with zero in front
   text(frontZero(songs[i].currentTime()), 450, 575);
   //time left in song
   text("-" + frontZero(songs[i].currentTime() - songsDuration), 875, 575);
 }
 pop();


 //setting up statements to play songs
 spinRec.update();
 if (songs[0].whatsPlaying.isplaying() == true) {
   spinRec.renderLabel(soda);
 } else if (songs[1].whatsPlaying.isplaying() == true) {
   spinRec.renderLabel(enanitos);
 } else if (songs[2].whatsPlaying.isplaying() == true) {
   spinRec.renderLabel(abuelos);
 } else if (songs[3].whatsPlaying.isplaying() == true) {
   spinRec.renderLabel(tate);
 }  else if (songs[4].whatsPlaying.isplaying() == true) {
   spinRec.renderLabel(nerPic);
 } else if (songs[5].whatsPlaying.isplaying() == true) {
   spinRec.renderLabel(vMonet);
 } else if (songs[6].whatsPlaying.isplaying() == true) {
   spinRec.renderLabel(youssou);
 } else if (songs[7].whatsPlaying.isplaying() == true) {
   spinRec.renderLabel(vivi);
 } else if (songs[8].whatsPlaying.isplaying() == true) {
   spinRec.renderLabel(magicSys);
 } else if (songs[9].whatsPlaying.isplaying() == true) {
   spinRec.renderLabel(rapline);
 } else if (songs[10].whatsPlaying.isplaying() == true) {
   spinRec.renderLabel(maher);
 } else if (songs[11].whatsPlaying.isplaying() == true) {
   spinRec.renderLabel(skyResto);
 } else if (songs[12].whatsPlaying.isplaying() == true) {
  spinRec.renderLabel(sally);
 } else if (songs[13].whatsPlaying.isplaying() == true) {
  spinRec.renderLabel(alicia);
 } else if (songs[14].whatsPlaying.isplaying() == true) {
  spinRec.renderLabel(tayc);
 }
 }

 
 //funtion to play songs
 function iWasClicked(val) {
  if(!songs[val].isPlaying()) {
    for (let i = 0; i < songs.length; i++) {
      if (val !=i && songs[i].isPlaying) songs[i].stop();
    }
    songs[val].play();
    songs[val].setVolume(.2);
  }
  whatsPlaying = val;
}

//function to pause songs
function pauseSong() {
  songs[whatsPlaying].pause();
}

 class Record {

   constructor() {
     this.xpos = 0;
     this.ypos = 0;
     this.rot = 0.0;
     this.pic;
   }

   update() {
     //rotate
     push();
     translate(280, 480);
     rotate(-this.rot * 4.0);
     this.rot += .01;
   }

   renderLabel(labelImage) {
     noTint();
     this.pic = labelImage;
     imageMode(CENTER);
     image(this.pic, this.xpos, this.ypos, 250, 250);
     pop();
   }
}


//adding the zero in front if number is below 9 for song duration
function frontZero(num) {
 if (num <= 9) {
   return "0" + num;
 } else {
   return num;
 }
} 

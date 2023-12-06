/*TO DO:

- hide other region song buttons (using the p5 
  hide() variable) [something weird is going on]
- fix the progress line and waveform
- have album cover icons pop up with each song [working on it]
- do restart button
- sliders and buttons for song manipulation
    - sliders: reverb, delay, speed up
    - buttons: p5.soundRecorder (next to play/pause buttons), 
    p5.filter buttons (lowpass, highpass, band pass)

THINGS WE NEED HELP WITH:
- .hide(); issue
- progress line map thingy
- spinning record labels
- how to connect function to slider
- classes for spinning record
*/

/* if(init = false){
  set all paraam
}*/


//REGION STUFF:

  //variables for region icons
  let northam, southam, africa, asia, europe, pausebut, resbut;
  //variabls for region buttons
  let nabut, sabut, afbut, asbut, eubut;

  //ALBUM COVER STUFF:
  let bigone;

  //variables for album cover images
  //South America
  let soda, abuelos, enanitos;
  //North America
  let tate, nerPic, vMonet;
  //Africa
  let youssou, vivi, magicSys;
  //Asia
  let rapline, maher, skyResto;
  //Europe
  let sally, alicia, tayc;


  //for rotatlamentoing album cover and record
  let rotme = 0.0;

  //variables for song manipulation elements
  let reverb, decay, playback;
  let amt; //amt of reverb

  //variables for sliders
  let reverbSl, decaySl, playbackSl;

//MUSIC VARS

  //total duration of the song
  let sodaDuration = 0;
  let cTime = 0; // current time

  //South America music variables
  let soda1,  sodabut;
  let playingSoda = false;
  let lamento, lamentobut; 
  let playingLamento = false;
  let milhoras, milbut;
  let playingMilHoras = false;

  //North American music variables
  let exes, exesbut;
  let playingExes = false;
  let nereyda, nerbut;
  let playingNereyda = false;
  let smoke, smokebut;
  let playingSmoke = false;

  //Asia music variables
  let sky, skybut;
  let playingSky = false;
  let mawlaya, mawlayabut;
  let playingMawlaya = false;
  let ddaeng, ddaengbut;
  let playingDdaeng = false;

  //Africa music variables
  let beCareful, beCarefulbut;
  let playingBeCarefule = false;
  let noStress, noStressbut;
  let playingNoStress = false;
  let gaou, gaoubut;
  let playingGaou = false;

  //Europe music variables
  let bettyBoop, bettyBoopbut;
  let playingBettyBoop = false;
  let nyPense, nyPensebut;
  let playingNyPense = false;
  let vrille, vrillebut;
  let playingVrille = false;


function setup() {
  createCanvas(windowWidth, windowHeight);

  //total time in sec
  sodaDuration = soda1.duration();

  //waveform
  fft = new p5.FFT();
  soda1.amp(0.2);
  lamento.amp(0.2);
  milhoras.amp(0.2);
  beCareful.amp(0.2);
  noStress.amp(0.2);
  gaou.amp(0.2);
  exes.amp(0.2);
  nereyda.amp(0.2);
  smoke.amp(0.2);
  sky.amp(0.2);
  mawlaya.amp(0.2);
  ddaeng.amp(0.2);
  bettyBoop.amp(0.2);
  nyPense.amp(0.2);
  vrille.amp(0.2);

  //reverb slider
reverb = new p5.Reverb();
reverb.process(soda1, 5, 1);
  reverbSl = createSlider(0, 100, 0);
  reverbSl.position(800, 175);
  reverbSl.style('transform', 'rotate(270deg)');
  reverbSl.style('height', '300px');
  reverbSl.size(450);

  //decay slider
  decaySl = createSlider(0, 100, 0);
  decaySl.position(925, 175);
  decaySl.style('transform', 'rotate(270deg)');
  decaySl.style('height', '300px');
  decaySl.size(450);

  //playback rate slider
  playbackSl = createSlider(0, 100, 0);
  playbackSl.position(1050, 175);
  playbackSl.style('transform', 'rotate(270deg)');
  playbackSl.style('height', '300px');
  playbackSl.size(450);

  //preloading region buttons
  nabut = createButton("NorthAm")
  nabut.position(160, 220);
  nabut.mousePressed(naPlaylist);

  //south america buttons
  sabut = createButton("SouthAm")
  sabut.position(300, 220);
  sabut.mousePressed(saPlaylist);

  //africa buttons
  afbut = createButton("Africa")
  afbut.position(470, 220);
  afbut.mousePressed(africaPlaylist);

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

  //restart button
  /*resbut = createButton('▶️');
  resbut.position(700, 600);
  resbut.mousePressed(resume);*/
  
}

//FUNCTIONS FOR SLIDERS:

  /*function songReverb() {
    if(!reverbSl) {
    reverb = new p5.Reverb();
    reverb.process(soda1, 3, 2);
    } else {
      reverb.stop(soda1, 3, 2);
    }
    
  }*/ 

  /*function songDelay() {
    if(!__) {
    
    } else {
      
    }
    
  }
  
  function songSpeed() {
    if(!__) {
    
    } else {
      
    }
    
  }*/

//pause button; to play again, click the song title again

  function pause() {
    soda1.pause();
    lamento.pause();
    milhoras.pause();
    beCareful.pause();
    noStress.pause();
    gaou.pause();
    exes.pause();
    nereyda.pause();
    smoke.pause();
    sky.pause();
    mawlaya.pause();
    ddaeng.pause();
    bettyBoop.pause();
    nyPense.pause();
    vrille.pause();
  }

function preload() {
  //preloading region images
  northam = loadImage('images/northam.png');
  southam = loadImage('images/southam.webp');
  africa = loadImage('images/africa.webp');
  asia = loadImage('images/asia.gif');
  europe = loadImage('images/europe.png')
  bigone = loadImage('images/bigone.webp');

  //spinning record
  soda = loadImage('images/soda.png');
  enanitos = loadImage('images/enanitos.png');

  //preloading south america songs
  soda1 = loadSound('sounds/soda1.mp3');
  lamento = loadSound('sounds/lamento.mp3');
  milhoras = loadSound('sounds/milhoras.mp3');

  //preloading africa songs
  beCareful = loadSound('sounds/beCareful.mp3');
  noStress = loadSound('sounds/noStress.mp3');
  gaou = loadSound('sounds/gaou.mp3');

  //preloading north america songs
  exes = loadSound('sounds/exes.mp3');
  nereyda = loadSound('sounds/nereyda.mp3');
  smoke = loadSound('sounds/smoke.mp3');

  //preloading asia songs
  sky = loadSound('sounds/sky.mp3');
  mawlaya = loadSound('sounds/mawlaya.mp3')
  ddaeng = loadSound('sounds/ddaeng.mp3')

  //preloading europe songs
  bettyBoop = loadSound('sounds/bettyBoop.mp3');
  nyPense = loadSound('sounds/nyPense.mp3');
  vrille = loadSound('sounds/vrille.mp3');
  
}

//REGIONAL PLAYLISTS:

  function saPlaylist() {

    // De Musica Ligera - Soda Stereo
    sodabut = createButton("De Música Ligera");
    sodabut.position(220, 300);
    sodabut.mousePressed(playSoda);
    
    //
    //Lamento Boliviano - Los Enanitos Verdes
    lamentobut = createButton("Lamento Boliviano");
    lamentobut.position(500, 300);
    lamentobut.mousePressed(playLam)

    //
    // Mil  Horas - Los Abuelos de la Nada
    milbut = createButton('Mil Horas');
    milbut.position(750, 300);
    milbut.mousePressed(playMil);

    /*beCarefulbut.hide();
    noStressbut.hide();
    gaoubut.hide();
    exesbut.hide();
    nerbut.hide();
    smokebut.hide();
    skybut.hide();
    mawlayabut.hide();
    ddaengbut.hide();
    bettyBoopbut.hide();
    nyPensebut.hide();
    vrillebut.hide();*/

  }

  //******something is going on here with the ner and exes buttons
  function naPlaylist() {

   //Smoke - Victoria Monet
    smokebut = createButton("Smoke")
    smokebut.position(225, 300);
    smokebut.mousePressed(playSmoke);
  
    //Exes - Tate McRae
    exesbut = createButton("Exes")
    exesbut.position(500, 300);
    exesbut.mousePressed(playExes);

    //Nereyda - Raulin Rodriguez
    nerbut = createButton("Nereyda")
    nerbut.position(750, 300);
    nerbut.mousePressed(playNereyda);

    /*sodabut.hide();
    lamentobut.hide();
    milbut.hide();
    beCarefulbut.hide();
    noStressbut.hide();
    gaoubut.hide();
    skybut.hide();
    mawlayabut.hide();
    ddaengbut.hide();
    bettyBoopbut.hide();
    nyPensebut.hide();
    vrillebut.hide();*/

  }
  
  function africaPlaylist() {
  
    //Be Careful - Youssou N'dour
    beCarefulbut = createButton("Be Careful")
    beCarefulbut.position(225, 300);
    beCarefulbut.mousePressed(playbeCareful);
    
    //No Stress - Viviane Chidid
    noStressbut = createButton("No Stress")
    noStressbut.position(500, 300);
    noStressbut.mousePressed(playnoStress);
  
    //1er Gaou - Magic System
    gaoubut = createButton("1er Gaou")
    gaoubut.position(750, 300);
    gaoubut.mousePressed(playgaou);

   /*sodabut.hide();
    lamentobut.hide();
    milbut.hide();
    exesbut.hide();
    nerbut.hide();
    smokebut.hide();
    skybut.hide();
    mawlayabut.hide();
    ddaengbut.hide();
    bettyBoopbut.hide();
    nyPensebut.hide();
    vrillebut.hide();*/
    
  }
  
  function asiaPlaylist() {

    // Sky Restaurant - Yuri Tanaka
    skybut = createButton("スカイレストラン (Sky Restaurant)")
    skybut.position(225, 300);
    skybut.mousePressed(playSky);

    //Mawlaya - Maher Zain
    mawlayabut = createButton("Mawlaya")
    mawlayabut.position(550, 300);
    mawlayabut.mousePressed(playmawlaya);

    //Ddaeng - BTS (Rapline)
    ddaengbut = createButton("Ddaeng")
    ddaengbut.position(750, 300);
    ddaengbut.mousePressed(playddaeng);

    /*sodabut.hide();
    lamentobut.hide();
    milbut.hide();
    beCarefulbut.hide();
    noStressbut.hide();
    gaoubut.hide();
    exesbut.hide();
    nerbut.hide();
    smokebut.hide();
    bettyBoopbut.hide();
    nyPensebut.hide();
    vrillebut.hide();*/

  }
  
  function euPlaylist() {

    //Betty Boop - Alicia
    bettyBoopbut = createButton("Betty Boop")
    bettyBoopbut.position(225, 300);
    bettyBoopbut.mousePressed(playbettyBoop);
    
    //Vrille - Sally
    vrillebut = createButton("Vrille")
    vrillebut.position(500, 300);
    vrillebut.mousePressed(playVrille);
  
    //N'y Pense Plus - Tayc
    nyPensebut = createButton("N'y Pense Plus")
    nyPensebut.position(750, 300);
    nyPensebut.mousePressed(playnyPense);

    /*sodabut.hide();
    lamentobut.hide();
    milbut.hide();
    beCarefulbut.hide();
    noStressbut.hide();
    gaoubut.hide();
    exesbut.hide();
    nerbut.hide();
    smokebut.hide();
    skybut.hide();
    mawlayabut.hide();
    ddaengbut.hide();*/
  }

//FUNCTIONS TO PLAY SONGS:

  //SOUTH AMERICA SONGS
  //function to play soda
  function playSoda() {
    console.log('soda wooooo');
    if (!soda1.isPlaying()) {
      soda1.play();
      playingSoda = true;
    } else {
      soda1.pause();
    }
  }

  //function to play lamento
  function playLam() {
    console.log('lamento yassss');
    if (!lamento.isPlaying()) {
      lamento.play();
      playingLamento = true;
    } else {
      lamento.pause();
    }
  }

  //function to play Mil Horas
  function playMil() {
    console.log('Mil Horas ok ok');
    if (!milhoras.isPlaying()) {
      milhoras.play();
      playingMilHoras = true;
    } else {
      milhoras.pause();
    }
  }

  //AFRICA SONGS
  //function to play Be Careful
  function playbeCareful() {
    console.log('be careful be careful baby');
    if (!beCareful.isPlaying()) {
      beCareful.play();
      playingBeCareful = true;
    } else {
      beCareful.pause();
    }
  }

  //function to play No Stress
  function playnoStress() {
    console.log('no stress');
    if (!noStress.isPlaying()) {
      noStress.play();
      playingNoStress = true;
    } else {
      noStress.pause();
    }
  }

  //function to play 1er Gaou
  function playgaou() {
    console.log('1er gaou anthemmmm');
    if (!gaou.isPlaying()) {
      gaou.play();
      playingGaou = true;
    } else {
      gaou.pause();
    }
  }

  //ASIA SONGS
  //function to play sky
  function playSky(){
    console.log('sky');
    if (!sky.isPlaying()) {
      sky.play();
      playingSky = true;
    } else {
      sky.pause();
    }
  }

  //function to play mawlaya
  function playmawlaya(){
    console.log('mawlaya');
    if (!mawlaya.isPlaying()) {
      mawlaya.play();
      playingMawlaya = true;
    } else {
      mawlaya.pause();
    }
  }

    //function to play ddaeng
  function playddaeng(){
    console.log('ddaaaaaaaaaaaeng');
    if (!ddaeng.isPlaying()) {
      ddaeng.play();
      playingDdaeng = true;
    } else {
      ddaeng.pause();
    }
  }


  //NORTH AMERICA SONGS
    //function to play exes
    function playExes(){
      console.log('exes oop');
      if (!exes.isPlaying()) {
        exes.play();
        playingExes = true;
      } else {
        exes.pause();
      }
  }

  //function to play Smoke
  function playSmoke(){
    console.log('smoke!');
    if (!smoke.isPlaying()) {
      smoke.play();
      playingSmoke = true;
    } else {
      smoke.pause();
    }
  }

  //function to play Nereyda
  function playNereyda(){
    console.log('Nereyda vuelve otra vezzzzz');
    if (!nereyda.isPlaying()) {
      nereyda.play();
      playingNereyda = true;
    } else {
      nereyda.pause();
    }
  }

  //EUROPE SONGS
  //function to play Betty Boop
  function playbettyBoop(){
    console.log('betty boooooooop');
    if (!bettyBoop.isPlaying()) {
      bettyBoop.play();
      playingBettyBoop = true;
    } else {
      bettyBoop.pause();
    }
  }

  //function to play vrille
  function playVrille(){
    console.log('vrille');
    if (!vrille.isPlaying()) {
      vrille.play();
      playingVrille = true;
    } else {
      vrille.pause();
    }
  }

  //function to play N'y Pense
  function playnyPense(){
    console.log('ymih ymih ymih ymih');
    if (!nyPense.isPlaying()) {
      nyPense.play();
      plyingNyPense = true;
    } else {
      nyPense.pause();
    }
  }

function draw() {
  stroke(0);
  tint(110);
  background(bigone);
  fill(225);
  rectMode(CENTER);
  rect(width/2, height/2, 1200, 600, 20);

  
  let waveform = fft.waveform();
  noFill();
  beginShape();
  strokeWeight(2);
  for (let i = 0; i < waveform.length; i++){
    let x = map(i, 0, waveform.length, 960, 445);
    let y = map( waveform[i], -1, 1, 200, height);
    vertex(x,y);
  }
  endShape();
  
  //image positions for each region
  image(northam, 150, 100, 100, 100);
  image(southam, 290, 100, 100, 100);
  image(africa, 440, 100, 100, 100);
  image(asia, 625, 100, 120, 100);
  image(europe, 800, 100, 110, 110);

  amt = reverbSl.value()/100;
  reverb.drywet(amt);

  //progress line for current song
  stroke(150, 150);
  line(450, 550, 953, 550);
    if (soda1.isPlaying()) {
      // if the song is playing, 
      // get the current time of song in secs
      cTime = soda1.currentTime();
      strokeWeight(8);
      stroke(18);
      // use lerp to figure out how long to draw the line
      let pct = lerp(450, 550, cTime / sodaDuration);
      line(450, 550, pct, 550);
      // put a lil dot at the end 
      strokeWeight(10);
      point(pct, 550);
      strokeWeight(1);
      //time passed in song in seconds with zero in front
      //text(frontZero(soda1.currentTime()), 450, 575);
      //time left in song
      //text("-" + frontZero(soda1.currentTime()-sodaDuration), 875, 575)
    }

  noTint();

  //rotating album cover record player thingy
  if(playingSoda == true){
      push();
          imageMode(CENTER);
          translate(280, 480);
          // rotate the origin
          rotate(-rotme * 4.0);
          rotme += .01;
          image(soda, 0, 0, 250, 250);
          // reset to the previous origin
          pop(); 
  }
}


  //adding the zero in front if number is below 9 for song duration
 /* function frontZero(num) {
    if (num <= 9) {
      return "0" + num;
    } else {
      return num;
    }
  }
*/

/*  if(playingLamento == true){
    push();
        imageMode(CENTER);
        translate(280, 480);
        // rotate the origin
        rotate(-rotme * 4.0);
        rotme += .01;
        image(enanitos, 0, 0, 1250, 700);
        // reset to the previous origin
        soda.hide();
        pop();
  }  */



// we can if audio stops playing, rotme = 0.0
//if statements to sync audio and the album cover that pops us
// if ___.isPlaying, image(blah blah blah)

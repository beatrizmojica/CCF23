  // Classifier Variable
  let classifier;
  // Model URL
  let imageModelURL = 'https://teachablemachine.withgoogle.com/models/cwD6P7zTX/';
  
  // Video
  let video;
  let flippedVideo;
  // To store the classification
  let label = "";
  let hat, cane, lights;
  let witch, ghost, pump;
  let pie, turk, leaves;

  // Load the model first
  function preload() {
    classifier = ml5.imageClassifier(imageModelURL + 'model.json');
    hat = loadImage('images/hat.png');
    cane = loadImage('images/cane.png');
    lights = loadImage('images/lights.png');
    witch = loadImage('images/witch.png');
    ghost = loadImage('images/ghost.png');
    pump = loadImage('images/pump.png');
    pie = loadImage('images/pie.png');
    turk = loadImage('images/turk.png');
    leaves = loadImage('images/leaves.png');
  }

  function setup() {
    createCanvas(320, 260);
    // Create the video
    video = createCapture(VIDEO);
    video.size(320, 240);
    video.hide();

    flippedVideo = ml5.flipImage(video);
    // Start classifying
    classifyVideo();

  }

  function draw() {
    background(0);
    // Draw the video
    image(flippedVideo, 0, 0);

    // Draw the label
    fill(255);
    textSize(16);
    textAlign(CENTER);
    text(label, width / 2, height - 4);

    if(label === "Christmas"){
      image(hat, width/4, 0, 100, 100)
      image(cane, 30, height/2, 50, 70);
      image(lights,0, height-100, width, 100);
    }

    if(label === "Halloween"){
      image(witch, width/3, 0, 100, 100)
      image(ghost, 30, height/2, 50, 70);
      image(pump, width - 70, height/2, 50, 70);
    }

    if(label === "Thanksgiving"){
      image(leaves,0, height-100, width, 100);
      image(turk, 30, height/2, 50, 70);
      image(pie, width - 70, height/2, 50, 70);
    }
  }

  // Get a prediction for the current video frame
  function classifyVideo() {
    flippedVideo = ml5.flipImage(video)
    classifier.classify(flippedVideo, gotResult);
    flippedVideo.remove();
    console.log(label);
  }

  // When we get a result
  function gotResult(error, results) {
    // If there is an error
    if (error) {
      console.error(error);
      return;
    }
    // The results are in an array ordered by confidence.
    // console.log(results[0]);
    label = results[0].label;
    // Classifiy again!
    classifyVideo();
  }
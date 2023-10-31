let clientID = "&token=M3lSb3QIxs6S4z1txLfz";
let baseURL1 = "https://binaryjazz.us/wp-json/genrenator/v1/genre/";
let baseURL2 = "https://binaryjazz.us/wp-json/genrenator/v1/story/";
let baseURL3 = "https://freesound.org/apiv2/search/text/?token=EgnxZvx6yunBDrqHb0LrhpRqHqTby1OW1Ywynqml";


let kind = "&filter=type:mp3";
let data1, data2, data3;
let numGenre = 1;
let numStory = 1;
let numSound = 15;
let search;
let b;
let fs = false;

function preload() {
  data1 = loadStrings(baseURL1 + numGenre);
  data2 = loadStrings(baseURL2 + numStory);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(data1 + "," + data2 + "," + data3);
  search = createInput();
  search.position(width/2, 75);
  b = createButton("Search");
  b.position(width/2+150, 75);
  b.mousePressed(prep);
}

function prep() {
  let url = baseURL3 + "&query=" + search.value() + kind;
  loadJSON(url, loaded);
}

function loaded(resp) {
  fs = true;
  data3 = resp;
  console.log(data3);
  textSize(20);
  text("Here are the top " + data3.results.length + " results:", width/2+250, 90);
 /*for (let i = 0; i < numSound; i++){
   text(data3.results[i].name, width/2, i*30 + 125);
   console.log(data3.results[i].name);
  }*/
}

function draw() {
  background('lavender');
  
  let genres = data1[0];//.split(",");
  let story = data2[0];

  textSize(20);
  textFont('Times New Roman');
  text('Reload for a new genre', 30, 50);
  text('and story. Then, use the search', 30, 75);
  text('bar to search Freesound.org', 30, 100);
  text('for unconventional project inspo!', 30, 125);

  text('Your Genre:', 30, 250);
  text('Your Story:', 30, 390);
  text("Search keywords for related sounds!", width/2, 50);
  
  for (let i=0; i < numGenre; i++){
  text(genres, 30,18 * i + 300)
  }

  for (let i=0; i < numStory; i++){
   text(story, 30,10 * i + 450);
  }

  if(fs == true){
 for (let i = 0; i < data3.results.length; i++){
    text(data3.results[i].name, width/2, i*30 + 125);
    console.log(data3.results[i].name);
 }
}
}


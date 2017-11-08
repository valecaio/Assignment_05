var starsImg;
var lightImg;
var mySong;
var amp;
var volhistory = [];



function preload () {
  lightImg = loadImage ('img/lights.png');
  mySong = loadSound('song/SecretSong.mp3');
  starsImg = loadImage ('img/background.png'); 
  streetImg = loadImage ('img/prova.png');
}


function setup() {
  createCanvas (500,500);
  angleMode(DEGREES);
  mySong.play();
  amp = new p5.Amplitude();
}

function draw() {
  
  background(starsImg);
  var vol = amp.getLevel();
  volhistory.push(vol);
  
  
  //amp1
  noFill();
  stroke(255);
  strokeWeight(0.5);
  push();
  translate(200, 300);
  beginShape();
  for (var i = 0; i < 360; i++) {
    var r = map(volhistory[i],0,1,10,500);
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x, y);
  }
  endShape();
  if (volhistory.length > 360) {
    volhistory.splice(0,1);
  }
  pop();
  
  
  //amp2
  noFill();
  stroke(255);
  strokeWeight(0.5);
  push();
  translate(300,200);
  rotate(-30);
  beginShape();
  for (var i = 0; i < 360; i++) {
    var r = map(volhistory[i],0,1,10,200);
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x, y);
  }
  endShape();
  if (volhistory.length > 360) {
    volhistory.splice(0,1);
  }
  pop();
  
  
  //amp4
  noFill();
  stroke(255);
  strokeWeight(0.5);
  push();
  translate(400,400);
  rotate(45);
  beginShape();
  for (var i = 0; i < 360; i++) {
    var r = map(volhistory[i],0,1,10, 800);
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x, y);
  }
  endShape();
  if (volhistory.length > 360) {
    volhistory.splice(0,1);
  }
  pop();
  
  //amp4
  noFill();
  stroke(255);
  strokeWeight(0.5);
  
  push();
  translate(200,100);
  rotate(90);
  beginShape();
  for (var i = 0; i < 360; i++) {
    var r = map(volhistory[i],0,1,10,400);
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x, y);
  }
  endShape();
  
  if (volhistory.length > 360) {
    volhistory.splice(0,1);
  }
  pop();
  
  
  //amp5
  noFill();
  stroke(255);
  strokeWeight(0.5);
  push();
  translate(170,450);
  rotate(-90);
  beginShape();
  for (var i = 0; i < 360; i++) {
    var r = map(volhistory[i],0,1,10,250);
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x, y);
  }
  endShape();
  if (volhistory.length > 360) {
    volhistory.splice(0,1);
  }
  pop();
  
 
 
  image(lightImg,0,0,500,500);

}
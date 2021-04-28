var background,bImg

function preload() {
  bImg = loadImage("snow3.png");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(bImg);  
  drawSprites();
}
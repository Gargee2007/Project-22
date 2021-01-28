var fairy, star, starnight;
var fairyImg, starImg, starnightImg;
//var background, backImg;
function preload()
{
   //preload the images here
  backImg = loadImage("starnight.png");
  fairyImg = loadAnimation("fairy.png","fairy1.png","fairy2.png");
  starImg = loadImage("star.png");
}

function setup() {
	createCanvas(800, 750);
}


function draw() {
  background("black");
  drawSprites();

}

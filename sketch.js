
var fixr, movr
function setup() {
  createCanvas(400,400);
  movr = createSprite(400, 400, 50, 50);
  movr.shapeColor = "black"; 
  movr.velocityX = -4
  movr.velocityY = -4
  fixr = createSprite(0, 0, 50, 50);
  fixr.shapeColor = "black";
  fixr.velocityX = 4
  fixr.velocityY = 4
  movr.debug = true;
  fixr.debug = true;

}

function draw() {
  background(255,255,255);  
  drawSprites();
  //movr.y = mouseY;
  //movr.x = mouseX;
  if((movr.x - fixr.x <=(fixr.width/2 + movr.width/2) && (fixr.x - movr.x <=(fixr.width/2 + movr.width/2)))&& movr.y - fixr.y <=(fixr.width/2 + movr.width/2) && (fixr.y - movr.y <=(fixr.width/2 + movr.width/2))){
    movr.shapeColor = "red"
    fixr.shapeColor = "red"
    movr.velocityX = - (movr.velocityX)
    fixr.velocityX = - (fixr.velocityX)
    movr.velocityY = - (movr.velocityY)
    fixr.velocityY = - (fixr.velocityY)
  }
  else{
    fixr.shapeColor = "black";
    movr.shapeColor = "black";
}
}
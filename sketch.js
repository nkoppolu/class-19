var fixedrectangle;
var movingrectangle;
function setup() {
  createCanvas(1200,800);
  fixedrectangle=createSprite(400, 200, 50, 50);
  movingrectangle=createSprite(200,200,30,80);
  movingrectangle.shapeColor="green";
  fixedrectangle.shapeColor="green"
}

function draw() {
  background(0);  
  movingrectangle.x=mouseX
  movingrectangle.y=mouseY
  if(movingrectangle.x-fixedrectangle.x<movingrectangle.width/2+fixedrectangle.width/2 &&
    fixedrectangle.x-movingrectangle.x<movingrectangle.width/2+fixedrectangle.width/2 &&
    movingrectangle.y-fixedrectangle.y<movingrectangle.height/2+fixedrectangle.height/2 &&
    fixedrectangle.y-movingrectangle.y<movingrectangle.height/2+fixedrectangle.height/2) {
    movingrectangle.shapeColor="red";
    fixedrectangle.shapeColor="red"
  }
  
  else{
    movingrectangle.shapeColor="yellow";
    fixedrectangle.shapeColor="yellow";
  }
    
  
  drawSprites();
}


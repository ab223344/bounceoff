function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 50);
  movingRect = createSprite(600, 200, 50, 50);
  fixedRect.shapeColor="tomato";
  movingRect.shapeColor="red";
  fixedRect.velocityY=3;
  movingRect.velocityX=-3;
  rect1=createSprite(200,400,50,50)
  rect1.velocityY=-3;
}

function draw() {
   
background(0);
  drawSprites();
bounceoff(rect1,fixedRect)


}
function bounceoff(fixedRect,movingRect){if(fixedRect.x-movingRect.x<=fixedRect.width/2+movingRect.width/2 &&
  movingRect.x-fixedRect.x<=fixedRect.width/2+movingRect.width/2)
{fixedRect.velocityX=-fixedRect.velocityX;
  movingRect.velocityX=-movingRect.velocityX;
}
if(fixedRect.y-movingRect.y<=fixedRect.height/2+movingRect.height/2 &&
  movingRect.y-fixedRect.y<=fixedRect.height/2+movingRect.height/2)
{fixedRect.velocityY=-fixedRect.velocityY;
  movingRect.velocityY=-movingRect.velocityY;
}}




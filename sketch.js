var box;

function setup() {
  createCanvas(400,400);
  background('white');
  box = createSprite(200,200,30,30)

}




function draw() 
{

  if(keyIsDown(LEFT_ARROW))
  {
    background('red')
  }

  if(keyIsDown(RIGHT_ARROW))
  {
    background('green')
  }

  if(keyIsDown(DOWN_ARROW))
  {
    background('blue')
  }

  if(keyIsDown(UP_ARROW))
  {
    background('yellow')
  }
  

  drawSprites()
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(1360, 500);
   ground=createSprite(50,480,2800,10)
   ground.shapeColor=color("yellow")

   dustbin1=createSprite(800,420,10,100)
   dustbin1.shapeColor=color("red")

   dustbin2=createSprite(950,420,10,100)
   dustbin2.shapeColor=color("red")

   dustbin3=createSprite(875,470,155,10)
   dustbin3.shapeColor=color("red")



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper=createSprite=ellipse(360,435,55,55);
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW)
	Matter.Body.applyForce(paperObject,body,position,{x:85,y:-85})
}


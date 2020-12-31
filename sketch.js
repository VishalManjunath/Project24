var engine, world;
var crumpledPaper;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 850);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	crumpledPaper = new Paper(100,650,50,50);

	side1 = createSprite(1150, 820, 200, 20);
	 side2 = createSprite(1050, 780, 20, 100);
	 side3 = createSprite(1250, 780, 20, 100);
	 side1.shapeColor = "white";
	 side2.shapeColor = "white";
	 side3.shapeColor = "white";


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.body.applyForce(crumpledPaper.body, crumpledPaper.body.position, {x:85,y:-85});
	}
}




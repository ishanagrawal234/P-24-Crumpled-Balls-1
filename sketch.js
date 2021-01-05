const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,engine,world,side1,side2,side3,paper;

function preload()
{
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	side1 = new Side(600,660,200,10);
	side2 = new Side(700,605,10,100);
	side3 = new Side(500,605,10,100);
 	paper = new Paper(100, 300, 10);
	ground = new Ground(400,height,800,70);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  side1.display();
  side2.display();
  side3.display();
  paper.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body,paper.body.position,{x:14,y:-13});
  }
}


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bobObject1;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	bobDiameter=40;

	startpositionx=width/2;
	startpositiony=height/4+500;
	//Create the Bodies Here.
	 bobObject1=new Bob(startpositionx-bobDiameter*2,startpositiony,bobDiameter)
	 bobObject2=new Bob(startpositionx-bobDiameter,startpositiony,bobDiameter)
	 bobObject3=new Bob(startpositionx,startpositiony,bobDiameter)
	 bobObject4=new Bob(startpositionx+bobDiameter,startpositiony,bobDiameter)
	 bobObject5=new Bob(startpositionx+bobDiameter*2,startpositiony,bobDiameter)

	 roof=new Roof(width/2,height/4,width/7,20)
	 
	 rope1=new Rope(bobObject1.body,roof.body,-bobDiameter*2,0)
	 rope2=new Rope(bobObject2.body,roof.body,-bobDiameter*1,0)
	 rope3=new Rope(bobObject3.body,roof.body,0,0)
	 rope4=new Rope(bobObject4.body,roof.body,bobDiameter*1,0)
	 rope5=new Rope(bobObject5.body,roof.body,bobDiameter*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

 roof.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-20,y:-50})
	}
}

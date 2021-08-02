const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var Rope1,Rope2, Rope3, Rope4, Rope5;
var bob1,bob2,bob3,bob4, bob5;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;


	//bob1= new Bob(450,500,30);
	//bob2= new Bob(500,500,30);
  //bob3= new Bob(550,500,30);
  //bob4= new Bob(600,500,30);
   //bob5= new Bob(650,500,30);

	var roof_options={
		isStatic:true			
	}
	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);  


	var options={
        restitution:1.4,
        friction:1.0,
        density:1.0
    }
    
    bob1= Bodies.circle(450,500,(this.r-20)/2, options);
    World.add(world,bob1);


    var options={
      restitution:1.4,
      friction:1.0,
      density:1.0
  }
  
  this.r=r;
  bob2= Bodies.circle(500,500,(this.r-20)/2, options);
  World.add(world,bob2);

  var options={
    restitution:1.4,
    friction:1.0,
    density:1.0
}

this.r=r;
bob3= Bodies.circle(550,500,(this.r-20)/2, options);
World.add(world,bob3);

var options={
  restitution:1.4,
  friction:1.0,
  density:1.0
}

this.r=r;
bob4= Bodies.circle(600,500,(this.r-20)/2, options);
World.add(world,bob4);

var options={
  restitution:1.4,
  friction:1.0,
  density:1.0
}
this.r=r;
bob5= Bodies.circle(650,500,(this.r-20)/2, options);
World.add(world,bob5);

Rope1= new rope(bob1.body,{x: 450,y:1000});
Rope2= new rope(bob2.body,{x:500,y:100});
Rope3= new rope(bob3.body, {x:550,y:100});
Rope4= new rope(bob4.body, {x:600, y:100});
Rope5= new rope(bob5.body,{x:650,y:100});


	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  Rope1.display();
  Rope2.display();
  Rope3.display();
  Rope4.display();
  Rope5.display();
  roof.display();

  ellipse(bob1.x, bob1.y, bob1.r);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();


}

function keyPressed(){
	if(keyCode === RIGHT_ARROW){
	  Matter.Body.applyForce(bob1.body, bob1.body.position,{x:-30,y:155});
	}
  }

function display(){
    var bobpos= this.body.position;
    push();
    translate(bobpos.x, bobpos.y);
    rectMode(CENTER);
    fill("yellow");
    ellipse(0,0,this.r,this,r);
    pop();
}


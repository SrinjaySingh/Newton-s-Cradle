
	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;
	const Constraint = Matter.Constraint;


	var chain;
	var bob1,bob2,bob3,bob4,bob5;
	var roof1;
	var c1,c2,c3,c4,c5;

	function setup() {
		createCanvas(800, 800);

		
		engine = Engine.create();
		world = engine.world;

		//Create the Bodies Here.
		roof1=new Roof(400,200,400,20);

		bob1 = new Paper(300,400,50);
		bob2 = new Paper(350,400,50);
		bob3 = new Paper(400,400,50);
		bob4 = new Paper(450,400,50);
		bob5 = new Paper(500,400,50);

		c1 = new Constraints(bob1.body, roof1.body,-100,0);
		c2 = new Constraints(bob2.body, roof1.body,-50,0);
		c3 = new Constraints(bob3.body, roof1.body,0,0);
		c4 = new Constraints(bob4.body, roof1.body,50,0);
		c5 = new Constraints(bob5.body, roof1.body,100,0);
		 
		
	 
		Engine.run(engine);
	
	}


	function draw() {
	rectMode(CENTER);
	background("white");
	Engine.update(engine);
	
	

	roof1.display();

	bob3.display();
	bob2.display();
	bob1.display();
	bob4.display();
	bob5.display();
	 
	c1.display();
	 	 
	c2.display();	 
	c3.display();	 
	c4.display();
	c5.display();



	
 
	}

	 
	function keyPressed() {
		if (keyCode === UP_ARROW) {
	
		  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-170,y:75});
	      
	  
		}
	}	
	
	
	
	





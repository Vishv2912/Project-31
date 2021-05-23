var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];

var divisionHeight=300;
var score =0;
var particles;
var wall1,wall2;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k+155, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k+310, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k+465, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k+620, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k+790, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j-3,175));
  }

  //create 3rd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j-30,275));
  }

  
  //create 4th row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j-3,375));
  }

//creating Side Walls===  
wall1=new Wall(0,400,20,800);
wall2=new Wall(800,400,20,800);







}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  //create particle objects
  if (frameCount%60==0){
    particles.push(new Particle(random(50,750),10,10,10))
  }
   

  //display the plinkos
  
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  //display the paricles 
for(var p = 0; p<particles.length;p++){
  particles[p].display();
}

wall1.display();
wall2.display();

}
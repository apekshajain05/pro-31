const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var sq;

function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  sq=new snake(200,100);
  
}

function draw() {
  background("white"); 
  Engine.update(engine);
  sq.display();
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,380,400,10);

    box = new Box(200,200,70,30);
    box2 = new Box(230,50,90,45);


    console.log(ground);
    console.log(box);
    console.log(box2);
}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
    box.display();
    box2.display();
}
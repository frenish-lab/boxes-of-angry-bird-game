const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var piggy;
var bigPiggy;
var oak;
function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,590,50,50);
    box2 = new Box(850,590,50,50);
    box3 = new Box(790,570,50,50);
    box4 = new Box(850,570,50,50);
    boxey = new Box(810,500,50,50);
    ground = new Ground(200,height,1800,20)
    piggy = new Pig(810,590);
    bigPiggy = new Pig(810,580);
    oak = new Log(810,580,200,PI/2)
    tick = new Log(810,550,200,PI/2)
    corona = new Log(800,490,150,PI/7)
    qurantine = new Log(820,490,150,-PI/7)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    boxey.display();
    ground.display();
    piggy.display();
    bigPiggy.display();
    oak.display();
    tick.display();
    corona.display();
    qurantine.display();
}
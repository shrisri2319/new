const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(2000,1000);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1100,800,75,75);
    box2 = new Box(900,800,75,75);
    log1 = new Log(1000,750,300,PI/2);
    ground = new Ground(1000,height,2000,20);
    Pig = new pig(1000,800);

    box3 = new Box(1100,600,75,75);
    box4 = new Box(900,600,75,75);
    log2 = new Log(1000,550,300,PI/2);
    Pig1 = new pig(1000,600);
    
    box5 = new Box(1000,400,75,75);
    log3 = new Log(1050,350,150,-PI/5);
    log4 = new Log(950,350,150,PI/5);
    birb = new bird(100,100);

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    log1.display();
    ground.display();
    Pig.display();
    box3.display();
    box4.display();
    log2.display();
    Pig1.display();
    log3.display();
    log4.display();
    box5.display();
    birb.display();
}
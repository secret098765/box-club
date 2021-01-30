const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(600,380,1200,12)

  
   
bird=new Bird(200,200)
    box1= new Box(700,360,50,50)
    box2=new Box(830,360,50,50)
    box3=new Box(700,350,50,50)
    box4=new Box(830,350,50,50)
    box5=new Box(760,340,50,50)
    pig1=new Pig(760,360)
    pig2=new Pig(760,350)
    log1=new Log(760,355,250,PI/2)
    log2=new Log(760,345,250,PI/2)
    log3=new Log(730,335,100,PI/6)
    log4=new Log(800,335,100,-PI/6)

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    text(mouseX+","+mouseY,mouseX,mouseY)
    ground.display()
    bird.display()
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()

    pig1.display()
    pig2.display()
    log1.display()
    log2.display()
    log3.display()
    log4.display()
}
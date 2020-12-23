const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var box1;
var ball;
var rope;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)
    box1=new Box(900,100,70,70);
    box2=new Box(900,100,70,70);
    box3=new Box(900,100,70,70);
    box4=new Box(900,100,70,70);
    box5=new Box(900,100,70,70);
    box6=new Box(900,100,70,70);
    box7=new Box(800,100,70,70);
    box8=new Box(800,100,70,70);
    box9=new Box(800,100,70,70);
    box10=new Box(800,100,70,70);
    box11=new Box(800,100,70,70);
    box12=new Box(800,100,70,70);

    ball= new Ball(200,200,80);
    rope= new Rope(ball.body,{x:540,y:400});

}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    ball.display();
    rope.display();
   
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
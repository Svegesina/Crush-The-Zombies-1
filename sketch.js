const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var zimg;
var bkimg

Stone={}

 function preload(){
zimg=loadImage("zombie.png")
bkimg=loadImage("background.png")
 }



function setup() {
  createCanvas(windowWidth, windowHeight);

zombie=createSprite(width/2,height-110);
zombie.addAnimation("lefttoright",zombie)
zombie.addAnimation("righttoleft",zombie)
zombie.scale=0.1
zombie.velocityX=10


breakButton=createButton("")
breakButton.position(width-200,height/2-50)
breakButton.class("breakbutton")
breakButton.mousePressed(handleButtonPress)



for (var i = 0; i <= 8; i++) {
  var x = random(width / 2 - 200, width / 2 + 300);
  var y = random(-10, 140);
  var stone = new Stone(x, y, 80, 80);
  stones.push(stone);
}
}


  engine = Engine.create();
  world = engine.world;
  frameRate(80);



function draw() {
  background(51);
  Engine.update(engine);
  drawSprites()

}

function handleButtonPress(){
jointLink.detach();
setTimeout(() =>{
bride.break();
},
 1500 );
}



var car1,car2,car3,car4,wall1,wall2,wall3,wall4;
var speed,weight;

function setup() {
  createCanvas(800,400);
  speed = random(50,90);
  width = random(400,1500);
  car1 = createSprite(50, 60, 25,11);
  car1.velocityX = 8;
  car2 = createSprite(50, 150, 25,11);
  car2.velocityX = 8;
  car3 = createSprite(50,250,25,11);
  car3.velocityX = 8;
  car4 = createSprite(50,360,25,11);
  car4.velocityX = 8;
  ///wall
  wall1 = createSprite(770,60,20,40);
  wall2 = createSprite(770,150,20,40);
  wall3 = createSprite(770,250,20,40);
  wall4 = createSprite(770,360,20,40);
}

function draw() {
  background("black");  

  isTouching();


  drawSprites();
}

function isTouching(){
  if(car1.x - wall1.x < wall1.width/2 + car1.width/2 &&
    wall1.x - car1.x < wall1.width/2 + car1.width/2){
    car1.shapeColor = "green";
    car1.velocityX = 0;
  }
  if(car2.x - wall2.x < wall2.width/2 + car2.width/2 &&
    wall2.x - car2.x < wall2.width/2 + car2.width/2){
    car2.shapeColor = "yellow";
    car2.velocityX = 0;
  }
  if(car3.x - wall3.x < wall3.width/2 + car3.width/2 &&
    wall3.x - car1.x < wall3.width/2 + car3.width/2){
    car3.shapeColor = "blue";
    car3.velocityX = 0;
  }
  if(car4.x - wall4.x < wall4.width/2 + car4.width/2 &&
    wall4.x - car4.x < wall4.width/2 + car4.width/2){
    car4.shapeColor = "red";
    car4.velocityX = 0;
  }
}
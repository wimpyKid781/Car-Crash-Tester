var car, wall
var speed, weight
var deformation

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1000,200,60, height/2)
  speed=random(55,90);
  weight=random(400,1500)
  car.velocityX = speed;
}

function draw() {
  background(255,255,255);
deformation = 0.5*weight*speed*speed/22500
if (deformation<100){
  car.shapeColor = rgb(0,255,0)
}
if (deformation>=100){
  if (deformation<=180){
  car.shapeColor = rgb(230,230,0)
  }
}
if (deformation>180){
  car.shapeColor = rgb(255,0,0)
}
  
  drawSprites();
}
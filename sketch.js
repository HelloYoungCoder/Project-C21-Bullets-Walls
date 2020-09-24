// Project C-21: Bullets & Walls 
// Test Effectiveness of Walls against Bullets
// Damage: (0.5 X Weight X Speed X Speed) / (Thickness of Wall X Thickness of Wall X Thickness of Wall) 

//Create Variables
var wall,thickness;
var bullet,speed, weight;
var distanceX, horizontalDistance;
var deformation;
var indicator, status;

function setup() {
  createCanvas(1600,400);
  
  //Create sprites
  wall = createSprite(1200,200,50,height/2);
  wall.shapeColor = rgb(220,20,60);

  //Assign random values for thickness,speed & weight
  thickness = random(22,83);
  weight = random(30,52);
  speed = random(223,321);

  bullet = createSprite(50,200,50,50);
  bullet.shapeColor = "cream";

  //Assign speed
  bullet.velocityX = speed;

  indicator = createSprite(1200,350,50,20);

  //Set text size & font
  fill("cream");
  textSize(20);
  textFont("Trebuchet MS");
}

function draw() {
  background(40,40,40);
  
  //Calculate horizontal distance
  distanceX = wall.x - bullet.x;
  horizontalDistance = wall.width/2 + bullet.width/2;

  //Check the damage level
  if (hasCollided(bullet,wall)){

    //Make the bullet to stop
    bullet.velocityX = 0;

    //Calculate damage
    var damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);

    //Indicate damage level
    if (damage > 10) {
      indicator.shapeColor = rgb(255,0,0);
    }

    if (damage < 10) {
      indicator.shapeColor = rgb(0,255,0);
    }

    console.log(damage);

  }
  
  //Display sprites on screen
  drawSprites();

  //Display info & status
  text("BULLETS & WALLS: WALL EFFECTIVESS TEST",600,30);
}

function hasCollided(lbullet,lwall) 
{
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;

  if (bulletRightEdge >= wallLeftEdge){
    return true;
  }

  return false;

}
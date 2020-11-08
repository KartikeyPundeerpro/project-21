var speed , thickness

function setup() {
    
   speed  = random (55 , 90)
   thickness = random (22 , 83)
   
  
  createCanvas(800,400);
 
  
  
  bullet = createSprite(30, 200, 50, 20);
  bullet.velocityX = speed
  bullet.shapeColor = ("gold");
  
  wall = createSprite (700 , 200 , thickness , 200)

}

function draw() {
  background("black");  
  
  function hascoliied(bullet , wall){
    
    bulletRightEdge = bullet.x + bullet.width ;
    wallleftedge = wall.x;
    if (bulletRightEdge >= wallleftedge){
        return true
        }
    return false
  
  if (hascoliided(bullet , wall)){
      
  var damage = 0.5* weight * speed * speed/ (thickness * thickness * thickneess)     
  if (damage>10) {
                                                                                         wall.shapeColour = ("green")
                                                                                         }
    
  if (damage<10){
      wall.shapeColour = ("red")
      }
  
  
  if (wall.x - bullet.x < (bullet.width + wall.width)/2) {
      
  bullet.velocityX = 0
    var deformation = 0.5 * weight * speed * speed/22509
    
    }  if (deformation  < 100 ) {
           
    bullet.shapeColor = ("green");
           
}      
  
      if (deformation > 100) {
        bullet.shapeColor = ("red")
  
 
    }
  
  
  
  
  
  
  
  }
  
  }
  
  

  
  
  
  
  drawSprites();
}
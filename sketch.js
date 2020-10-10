var object1,object2,object3;
function setup(){
createCanvas(1200,800);
object1=createSprite(600,400,50,80);
object1.shapeColor = "red";
object2=createSprite(400,400,50,80);
object2.shapeColor = "blue";
object3=createSprite(800,400,50,80);
object3.shapeColor = "green";
}
function draw(){
background("black");
object1.x = World.mouseX
object1.y = World.mouseY
if(object1.x-object2.x<object2.width/2 + object1.width/2
  && object2.x-object1.x<object2.width/2 + object1.width/2
  && object1.y-object2.y<object2.height/2 + object1.height/2
  && object2.y-object1.y<object2.height/2 + object1.height/2){
    object1.shapeColor = "black";
    object2.shapeColor = "blue";
  }
  else{
    object1.shapeColor = "red";
    object2.shapeColor = "blue";
  }
  if(object1.x-object3.x<object3.width/2 + object1.width/2
    && object3.x-object1.x<object3.width/2 + object1.width/2
    && object1.y-object3.y<object3.height/2 + object1.height/2
    && object3.y-object1.y<object3.height/2 + object1.height/2){
      object1.shapeColor = "black";
      object3.shapeColor = "green";
    }
    else{
      object1.shapeColor = "red";
      object3.shapeColor = "green";
    }
drawSprites();
}
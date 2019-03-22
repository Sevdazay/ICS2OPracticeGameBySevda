var person;
var sceneNum = 0

function setup() {
  createCanvas(700,400);  
  person = new Person();
}

function keyPressed(){
  if (key == ' '){
    var jump = createVector(0,-5);
    person.applyForce(jump);
  }else if (key=='s'){
    sceneNum++;
  }
}

function draw(){
if (sceneNum===0){
  background(51);
  textSize(30);
  fill(90,800,90)
  text("Swaggie Rectangle",80,100);
  fill(50,600,300);
  text("press 's' for swag",70,150);
  fill(90,67,30);


}else if (sceneNum===1){
    background(49);
  fill(900,700,8)
  text("press the space bar to jump",10,90)
    fill(90,67,900);
  text("don't touch the purple box!",80,60)
  fill(80,70,200);
  translate(-person.pos.x,0);
  var gravity = createVector(0,0.6);
  person.applyForce(gravity);
  if(mouseIsPressed){
  
  var force = createVector(-0.1,0);
  person.applyForce(force);
  }
  //translate(-person.pos.x,0);
    person.update();
  person.edges();
    person.display();
  fill(90,0,100);
  rect(500,height-100,250 ,400);
  
}else{
  background(40);
  fill(0,60,800)
  text("o no u ded", 200,200);
  fill(0,200,80)
  text("o no u ded", 215,215);
}
}

  

  

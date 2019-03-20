// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Array of Particles, multiple forces

var person; 


function setup() {
  createCanvas(640, 360);
  person= new Person();
}

function keyPressed(){ 
if (key == ' ' ){
    var jump =createVector(-10);
  person.applyForce(force);
    } }



function draw() {
  background(51);
  translate(-person.pos.x,0);
  var gravity = createVector(0.100);
  person.applyForce(gravity);
  if(mouseIsPressed){
    
    var force = createVector(-0.1,0);
    person.applyForce(force);
  }
  
  
  
//translate(-person.pos.x),0);
  person.update();
  person.edges();
  person.display();
  fill(0,300,300);
  rect(400,height-50,400,400);
    
  }

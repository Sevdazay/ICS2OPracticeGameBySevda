// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Array of Particles, multiple forces

function Person() {
  this.pos = createVector(50, 250);
  this.vel = createVector(1, 0);
  //change x value to1 to get it moving
  this.acc = createVector(0, 0);
  this.mass = 10;


  this.applyForce = function(force) {
    this.acc.add(force);
  }
 

 
  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  this.display = function() {
    fill(100,100,300);
    stroke(255);
    rect(this.pos.x,this.pos.y-90, this.mass*3, this.mass*8);
}


 
this.edges = function() {
  if (this.pos.y > 250) {
    this.vel.y *= -1;
    this.pos.y = 250;
  }
  
  if (this.pos.x > width) {
    this.vel.x *= -1;
    this.pos.x = width;
  }
 }
}

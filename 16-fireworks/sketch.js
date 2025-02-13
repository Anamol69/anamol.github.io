// Fireworks OOP Demo
// 11/20/2023
let theFireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");

  //for (let particle of theFireworks) {
  for (let a = theFireworks.length - 1; a >= 0; a --) {
    let particle = theFireworks[a];
    particle.update();
    if (particle.isDead()) {
      //remove from array
      theFireworks.splice(a, 1);
    }
    else {
      particle.display();
    }
  }
}

function mousePressed() {
  for (let a = 0; a < 100; a++) {
    let dx = random(-5, 5);
    let dy = random(-5, 5);
    let someParticle = new Particle(mouseX, mouseY, dx, dy);
    theFireworks.push(someParticle);
  }
}

class Particle {
  constructor(x, y, dx, dy) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = 5;
    this.r = 255;
    this.g = 0;
    this.b = 0;
    this.alpha = 255;
  }

  display() {
    noStroke();
    fill(this.r, this.g, this.b, this.alpha);
    circle(this.x, this.y, this.radius*2);
  }
  update() {
    //move
    this.x += this.dx;
    this.y += this.dy;

    //get more transparent
    this.alpha--;

  }
  isDead() {
    return this.alpha <= 0;
  }
}
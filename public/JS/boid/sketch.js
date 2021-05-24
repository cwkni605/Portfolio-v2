// Flocking
// Daniel Shiffman
// https://thecodingtrain.com

// https://thecodingtrain.com/CodingChallenges/124-flocking-boids.html
// https://youtu.be/mhjuuHl6qHM
// https://editor.p5js.org/codingtrain/sketches/ry4XZ8OkN

const flock = [];
const flock1 = [];
const flock2 = [];
const flock3 = [];
const flock4 = [];

let alignSlider, cohesionSlider, separationSlider;

function setup() {
  createCanvas(2800, 300*1.25);
  alignSlider = 1;
  cohesionSlider = 1;
  separationSlider = 1.2;
  for (let i = 0; i < 60; i++) {
    flock.push(new Boid("green"));
  }
  for (let i = 0; i < 60; i++) {
    flock1.push(new Boid("red"));
  }
  for (let i = 0; i < 60; i++) {
    flock2.push(new Boid("blue"));
  }
  for (let i = 0; i < 60; i++) {
    flock3.push(new Boid("yellow"));
  }
}

function draw() {
  background(51);
  for (let boid of flock) {
    boid.edges();
    boid.flock(flock);
    boid.update();
    boid.show();
  }
  for (let boid of flock1) {
    boid.edges();
    boid.flock(flock1);
    boid.update();
    boid.show();
  }
  for (let boid of flock2) {
    boid.edges();
    boid.flock(flock2);
    boid.update();
    boid.show();
  }
  for (let boid of flock3) {
    boid.edges();
    boid.flock(flock3);
    boid.update();
    boid.show();
  }
}
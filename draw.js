function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);
}

function draw() {
  stroke("blue");
  smooth();
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

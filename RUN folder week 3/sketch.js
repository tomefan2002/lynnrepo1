function setup() {
    createCanvas(480, 480);
    strokeWeight(30);
    background(204);

}

function draw() {
  stroke(102);
  line(40,0,70,height);

  if (mouseIsPressed == true) {
    stroke(0);
  }else{
      stroke(255);
  }
  line(0,70,width,50);
  }

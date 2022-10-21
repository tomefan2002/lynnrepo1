
function setup() {
    createCanvas(720, 400);
    background(0, 0, 255);
    noStroke();
    
    
  }
  
  function draw() {
    drawTarget(random(0,width),random(0,height),random(0,200), random(0,10));
    noLoop();
  }
  
 function mousePressed (){
    redraw();
 }
  
  
  function drawTarget(xloc, yloc, size, num) {
    const grayvalues = 255 / num;
    const steps = size / num;
    for (let i = 0; i < num; i++) {
      fill(i * grayvalues);
      ellipse(xloc, yloc, size - i * steps, size - i * steps);
    }
  }
  
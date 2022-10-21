let x = 0; 
let y = 0;
let easing = 0.01;

function setup(){
  createCanvas(1080,1080);
  strokeWeight (10);
  noStroke();
} 

function draw() {
  let targetX = mouseX;
  let targetY = mouseY;
  fill(155, 0, 125);
    x += (targetX - x) * easing;
    y += (targetY- y) * easing;
     ellipse(x, y, 12, 12);
       console.log(targetX + " : " + x);
      console.log(targetY + " : " + y);
    fill(255);
    ellipse (x + 4, y - 2, 5, 5);
    ellipse (x - 4, y - 2, 5, 5);
      fill(0);
      ellipse (x + 4, y - 2, 3, 3);
      ellipse (x - 4, y - 2, 3, 3);
        fill(0);
        ellipse (x, y + 3, 5, 3);
}

 

  
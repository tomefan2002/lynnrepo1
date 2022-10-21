let x;

function setup() {
	createCanvas(480, 480);
	x = width/2;
}

function draw() {
	background(204);
  	line(x,0,x,height);

    if(mouseX > x){
      x ++; 
      
    }else{
      x--;
    }
    
}
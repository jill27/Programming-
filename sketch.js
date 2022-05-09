var
tree=0;
seethru=255;
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  background(123,tree,235); //an RGB color for the canvas' background
  //circle
}

//The draw function happens over and over again
function draw() {
  
  stroke(255,255,127) // an RGB color for the circle's border
  strokeWeight(6);
  fill(255,255,127,seethru); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(random(width),random(height),80,80); // center of canvas, 20px dia
  fill(9,mouseX,mouseX);
  stroke(49,23,195);
  strokeWeight(6);
  rect(100,30,tree,tree);
  fill(34,32,31,seethru);
  strokeWeight(0);
  ellipse(mouseX,mouseY,20,20);
  stroke(0);
  strokeWeight(3);
  line(tree,5,100,tree);

}

  function mousePressed(){
    if (tree>=300){
      tree=0
    }
    tree=tree+5;
    seethru=seethru-10
  }

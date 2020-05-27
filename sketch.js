  var snake;
  let rez = 20;
  let food;
  let w;
  let h;

 function setup() {
  createCanvas(800,400);
  w = floor(width/rez);
  h = floor(height/rez);
  frameRate(7);
  snake = new Snake();
  food = createVector();
  foodLocation();
}

function foodLocation () {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x,y);
}

function keyPressed() {
  if(keyCode === 37){
    snake.setDir(-1,0);  
  } else if (keyCode === 39){
    snake.setDir(1,0);
  }else if (keyCode === 38){
    snake.setDir(0,-1);
  }else if (keyCode === 40){
    snake.setDir(0,1);
  }
  
}

function draw() {
  scale(rez);
  background("black");  
  if (snake.eat(food)){
    foodLocation();
  }
  snake.update();
  snake.show();
  
if (snake.endGame()){
  background(255,0,0);
  noStroke();
  textSize("white");
  fill(0);
  text('GaMe OvER', 600,200);
  noLoop();
  
}

  noStroke();
  fill(255,0,0);
  rect (food.x, food.y , 1, 1);

}
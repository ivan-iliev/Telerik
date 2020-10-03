  class Player {
    constructor(x, y,speed) {
      this.x = x;
      this.y = y;
      this.speed = speed;
    }
}

class Bullet {
    constructor(x, y,speed) {
      this.x = x;
      this.y = y;
      this.speed = speed;
    }
}
var player1 = new Player(10,10,1);
var bullet1 = new Bullet(player1.x,player1.y,5);

function move(){
    if(isKeyPressed[87]){
        player1.y-=player1.speed;
    }
    if(isKeyPressed[83]){
        player1.y+=player1.speed;
    }
    if(isKeyPressed[65]){
        player1.x-=player1.speed;
    }
     if(isKeyPressed[68]){
        player1.x+=player1.speed;
    }
}

function update() {
    bullet1.x = player1.x;
    bullet1.y = player1.y;
    move();
    fire();
}
var isItFired = true;
function fire(){
    if(isKeyPressed[38] && isItFired == true){
        bullet1.y -= bullet1.speed;
        isItFired = false;
    }
}

function draw() {
     context.fillRect(player1.x,player1.y,40,40);
    context.fillRect(bullet1.x,bullet1.y,5,10);
};
function keyup(key) {
    console.log("Pressed", key);
};
function mouseup() {
     console.log("Mouse clicked at", mouseX, mouseY);
};

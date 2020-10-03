// Creating variables
var terrX=2000, terrY=1000;
var cameraX=600, cameraY=200;
var blockS = 30;
class Block{
    constructor(x, y, type=0){
        this.x = x;
        this.y = y;
        this.type = type;
    }
    draw(){
        if (this.type==0) drawImage(dirt, this.x-cameraX, this.y-cameraY, blockS, blockS);
    }
}
var blocks = [];
for (let i=0; i<terrX/blockS; ++i){
    for (let j=0; j<terrY/blockS/2; ++j){
        blocks.push(new Block(i*blockS, j*blockS+terrY/2));
    }
}
class Entity{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.sx = 50;
        this.sy = 80;
        this.dy = 0;
        this.oldx = this.x;
        this.oldy = this.y;
        //this.img = femaleStand;
    }
    update(){
        this.dy += 0.1;
        this.y += this.dy;
        for (let b of blocks){
            if(areColliding(this.x, this.y, this.sx, this.sy, b.x, b.y, blockS, blockS)){
                //this.x = this.oldx;
                this.y = this.oldy;
                this.dy = 0;
                break;
            }
        }
        this.oldx = this.x;
        this.oldy = this.y;
    }
    draw(){
        drawImage(femaleStand, this.x-cameraX, this.y-cameraY, this.sx, this.sy);
    }
}
 
class Player extends Entity{
    update(){
        super.update();
        if (isKeyPressed[65]) this.x-=5;
        if (isKeyPressed[68]) this.x+=5;
        if (isKeyPressed[32] && this.dy==0) this.dy = -5;
        cameraX = this.x + this.sx/2 - 400;
        cameraY = this.y + this.sy/2 - 400;
    }
}
let e = new Player(terrX/2, 0);
 
function update() {
    // Napisanoto tuk se izpulnqva otnovo i otnovo mnogo puti v sekunda
    e.update();
}
function draw() {
    // tuk naprogramirai kakvo da se risuva
    for (let b of blocks){
        b.draw();
    }
    e.draw();
};
function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};
function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};

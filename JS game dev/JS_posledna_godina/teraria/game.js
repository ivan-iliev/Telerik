// Creating variables
var terrX=2000, terrY=1200;
var cameraX=600, cameraY=200;
var blockS = 30;
var guy=new Image();
guy.src="guy.png";
var background=new Image();
background.src="background.png";
class Block{
    constructor(x, y, type=0){
        this.x = x;
        this.y = y;
        this.type = type;
    }
    draw(){
        if (this.type==0) drawImage(box, this.x-cameraX, this.y-cameraY, blockS, blockS);
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
        this.canJump = false;
        this.sideCollision = false;
        //this.img = femaleStand;
    }
    update(){
        this.dy += 0.1;
        this.y += this.dy;
        this.canJump = false;
        this.sideCollision = false;
        for (let b of blocks){
            if(areColliding(this.x, this.y, this.sx, this.sy, b.x, b.y, blockS, blockS)){
                //up
                if (this.oldy+this.sy < b.y && this.oldx+this.sx >= b.x && this.oldx <= b.x+blockS){
                    this.y = b.y-this.sy-0.1;
                    this.dy = 0;
                    this.canJump = true;
                }
                //down
                if (this.oldy > b.y+blockS && this.oldx+this.sx >= b.x && this.oldx <= b.x+blockS){
                    this.y = b.y+blockS+0.1;
                    this.dy = 0;
                }
            }
        }
        for (let b of blocks){
            if(areColliding(this.x, this.y, this.sx, this.sy, b.x, b.y, blockS, blockS)){
                //right
                if (this.oldx > b.x+blockS){
                    this.x = b.x+blockS+0.1;
                    this.sideCollision = true;
                }
                //left
                if (this.oldx+this.sx < b.x){
                    this.x = b.x-this.sx-0.1;
                    this.sideCollision = true;
                }
            }
        }
        this.oldx = this.x;
        this.oldy = this.y;
    }
    draw(){
        drawImage(heroStand, this.x-cameraX, this.y-cameraY, this.sx,this.sy);
    }
}
 
class FlyingEntity extends Entity{
    update(){
        for (let b of blocks){
            if(areColliding(this.x, this.y, this.sx, this.sy, b.x, b.y, blockS, blockS)){
                //up
                if (this.oldy+this.sy < b.y && this.oldx+this.sx >= b.x && this.oldx <= b.x+blockS){
                    this.y = b.y-this.sy-0.1;
                }
                //down
                if (this.oldy > b.y+blockS && this.oldx+this.sx >= b.x && this.oldx <= b.x+blockS){
                    this.y = b.y+blockS+0.1;
                }
            }
        }
        for (let b of blocks){
            if(areColliding(this.x, this.y, this.sx, this.sy, b.x, b.y, blockS, blockS)){
                //right
                if (this.oldx > b.x+blockS){
                    this.x = b.x+blockS+0.1;
                }
                //left
                if (this.oldx+this.sx < b.x){
                    this.x = b.x-this.sx-0.1;
                }
            }
        }
        this.oldx = this.x;
        this.oldy = this.y;
    }
}
 
class Player extends Entity{
    update(){
        if (isKeyPressed[65]) this.x-=5;
        if (isKeyPressed[68]) this.x+=5;
        if (isKeyPressed[87] && this.canJump) this.dy = -5;
        super.update();
        cameraX = this.x + this.sx/2 - 400;
        cameraY = this.y + this.sy/2 - 400;
    }
}
let p = new Player(terrX/2, 0);
 
class Enemy extends Entity{
    ai(){}
    update(){
        this.ai();
        super.update();
    }
}
class FlyingEnemy extends FlyingEntity{
    ai(){}
    update(){
        this.ai();
        super.update();
    }
}
class Zombie extends Enemy{
    ai(){
        if (p.x < this.x) this.x-=3;
        if (p.x > this.x) this.x+=3;
        if ((this.sideCollision || p.y+this.sy < this.y) && this.canJump) this.dy=-5;
    }
    draw(){
        drawImage(troll, this.x-cameraX, this.y-cameraY, this.sx, this.sy);
    }
}
class Bird extends FlyingEnemy{
    constructor(x, y){
        super(x, y);
        this.sx = 50;
        this.sy = 50;
    }
    ai(){
        let dx = Math.cos(Math.atan2(p.y-this.y, p.x-this.x))*5;
        let dy = Math.sin(Math.atan2(p.y-this.y, p.x-this.x))*5;
        this.x+=dx;
        this.y+=dy;
    }
    draw(){
        drawImage(parrot,this.x-cameraX,this.y-cameraY,this.sx,this.sy);
    }
}
let enemies = [];
 
function spawnZombie(){
    for (let i=0; i<blocks.length; ++i){
        let j = Math.floor(Math.random()*(blocks.length-i)+i);
        let s = blocks[i];
        blocks[i] = blocks[j];
        blocks[j] = s;
    }
    for (let b of blocks){
        if (!areColliding(b.x, b.y, blockS, blockS, cameraX, cameraY, 800, 600)
            && areColliding(b.x, b.y, blockS, blockS, cameraX-100, cameraY-100, 1000, 800)){
            let z = new Zombie(b.x, b.y-85);
            let toSpawn = true;
            for (let b2 of blocks){
                if (areColliding(b2.x, b2.y, blockS, blockS, z.x, z.y, z.sx, z.sy)){
                    toSpawn = false;
                    break;
                }
            }
            if (toSpawn){
                enemies.push(z);
                break;
            }
        }
    }
}
 
function spawnBird(){
    let x, y;
    do{
        x = Math.random()*1000+cameraX-100;
        y = Math.random()*800+cameraY-100;
    }while(areColliding(x, y, 50, 50, cameraX, cameraY, 800, 600));
    enemies.push(new Bird(x, y));
}
 
var t=0;
 
function update() {
    // Napisanoto tuk se izpulnqva otnovo i otnovo mnogo puti v sekunda
    ++t;
    if (t%150==0) spawnZombie();
    if (t%150==75) spawnBird();
    p.update();
    for (let e of enemies){
        e.update();
    }
}
function draw() {
    context.drawImage(background,0,0,800,600)
    for (let b of blocks){
        b.draw();
    }
    p.draw();
    for (let e of enemies){
        e.draw();
    }
};
function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};
function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX+cameraX, mouseY+cameraY);
    blocks.push(new Block(Math.floor((mouseX+cameraX)/blockS)*blockS, Math.floor((mouseY+cameraY)/blockS)*blockS));
};
var time = 0, wait = 7;
var bigImg=new Image();
bigImg.src="Easteregg.png";

var platX = [] , platY = [] , broiPl = 17;
var dvijeniwe = Math.PI*2;
platX[0] = 70
platY[0] = 250

platX[1] = 300;
platY[1] = 250;

platX[2] = 600;
platY[2] = 250;

platX[3] = 950;
platY[3] = 250;

platX[4] = 100;
platY[4] = 400;

platX[5] = 430;
platY[5] = 400;

platX[6] = 750;
platY[6] = 400;

platX[7] = 1100;
platY[7] = 400;

platX[8] = 20;
platY[8] = 550;

platX[9] = 300;
platY[9] = 550;

platX[10] = 600;
platY[10] = 550;

platX[11] = 950;
platY[11] = 450;

platX[12] = 100
platY[12] = 100

platX[13] = 400
platY[13] = 100

platX[14] = 720
platY[14] = 100

platX[15] = 1020
platY[15] = 100

platX[broiPl] = 0;
platY[broiPl] = 630;
class Tank{
    constructor (x_, y_, color_){
        this.x = x_;
        this.y = y_;
        this.color = color_;
        this.health = 100;
    }
   
    draw(){
        if (this.health >= 0){context.fillRect(this.x - this.health/2, this.y-35, this.health, 5);}
        context.drawImage(santa , this.x - 25, this.y - 25 , 50 , 50)
    }
    move(){
        if (player.health > 0){
            if (isKeyPressed[65]) player.x -= 3
            if (isKeyPressed[68]) player.x += 3
        }
    }
   
    isShot(){
        if (this.health <= 0){return;}
        for (let i=0; i<bullet.length; ++i){
            if (bullet[i].color != this.color && areCircleColliding(bullet[i].x, bullet[i].y, 5, this.x, this.y, 25)){
                this.health -= 10;
                bullet[i] = bullet[bullet.length-1];
                bullet.pop();
                --i;
            }
        }
    }
   
    shoot(targetX, targetY){
        if (this.health <= 0){return;}
        let dist = Math.sqrt( (this.x-targetX)*(this.x-targetX) + (this.y-targetY)*(this.y-targetY) )
        let dx = (targetX - this.x)*10/dist;
        let dy = (targetY - this.y)*10/dist;
        bullet.push( new Bullet(this.x, this.y, this.color, dx, dy) );
    }
}
 
class Bullet{
    constructor(x_, y_, color_, dx_, dy_){
        this.x = x_;
        this.y = y_;
        this.dx = dx_;
        this.dy = dy_;
        this.color = color_;
    }
   
    draw(){
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, 5, 0, 2*Math.PI);
        context.fill();
    }
   
    update(){
        this.x += this.dx;
        this.y += this.dy;
    }
}
class Bot{
    constructor(X, Y, sX, sY, Img, Speed , live){
        this.X=X;
        this.Y=Y;
        this.sX=sX;
        this.sY=sY;
        this.Img=Img;
        this.Img = new Image();
        this.Img.src = Img;
        this.Speed=Speed;
        this.DX=0;
        this.DY=0;
        this.live = live;
    }
    draw(){
        if(this.live > 0){ 
            context.fillStyle = "red"
            context.fillRect(this.X - this.live/2+20, this.Y-35, this.live, 5)
            context.drawImage(this.Img, this.X, this.Y, this.sX, this.sY);
        }
    }
    move(){
        this.DY-=0.1;
        this.Y-=this.DY;
        for(let i=0; i<broiPl; i++){
            if(areColliding(this.X, this.Y, this.sX, this.sY , platX[i], platY[i], 170, 30) && this.Y>platY[i]){
                this.DY=5;
            }
        }
        if(this.X<50){
            this.X+=this.Speed;
        }else{
            if(this.X>1300){
               this.X-=this.Speed;
            }else{
                if(this.X<player.x){
                    if(Math.random()>0.2){
                        this.X+=this.Speed;
                    }else{
                        this.X-=this.Speed;
                    }
                }else{
                    if(Math.random()>0.2){
                        this.X-=this.Speed;
                    }else{
                        this.X+=this.Speed;
                    }
                }
            }
        }
    }
}
var bot = new Bot(1150, 0, 50, 50, "bunny.png", 2 , 100); 

class EggBullet{
    constructor(x_, y_, img_, sX_, sY_, targetX_, targetY_, speed_){
        this.x=x_;
        this.y=y_;
        this.img=img_;
        this.sX=sX_;
        this.sY=sY_;
        this.targetX=targetX_;
        this.targetY=targetY_;
        this.speed=speed_
        if(this.x<this.targetX){
            this.dx=this.speed;  
        }else{
            this.dx=-this.speed; 
        }
        if(this.y<this.targetY){
            this.dy=this.speed;  
        }else{
            this.dy=-this.speed;
        }
    }
    draw(){
        if(bot.live > 0){
            context.drawImage(this.img, this.x, this.y, this.sX, this.sY);
        }
    }
    update(){
        if(areColliding(this.x, this.y, this.sX, this.sY, player.x, player.y, 25, 25)){
            player.health-=10;
            let b=eggbullet[brEggBullet];
            eggbullet[brEggBullet]=eggbullet[iEB];
            eggbullet[iEB]=b;
            eggbullet.pop();
            brEggBullet-=1;
            
        }

        this.x+=this.dx;
        this.y+=this.dy;
        if(this.x>10000 || this.x<-50 || this.y<-50 || this.y>10000){
            let b=eggbullet[brEggBullet];
            eggbullet[brEggBullet]=eggbullet[iEB];
            eggbullet[iEB]=b;
            eggbullet.pop();
            brEggBullet-=1;
        }

    }
}

var eggbullet=[], brEggBullet=-1, iEB=0;
for(iEB=0; iEB<brEggBullet; iEB++){
    banan[iEB]=true;
}

function areCircleColliding(x1, y1, r1, x2, y2, r2){
    let dist = Math.sqrt( (x1-x2)*(x1-x2) + (y1-y2)*(y1-y2) );
    return dist <= r1+r2;
}
var player = new Tank(180 , 500 , ' purple '); 
var bullet = [];
var vreme = 110 , natisnaLi = false;
var ugul = Math.PI*2;
var img = new Image()
img.src = "background.png"
var santa = new Image()
santa.src = "santa.png"
function update() {
    time+=1;
    if(time%wait == 0){
            brEggBullet+=1;
            eggbullet[brEggBullet] = new EggBullet(bot.X, bot.Y, bigImg, 10, 10, player.x+Math.floor(Math.random()*10-5), player.y+Math.floor(Math.random()*10-5), 4.5);
        }
    for(iEB=0; iEB<brEggBullet; iEB++){
        eggbullet[iEB].update();
    }
    
    for(var i = 0;i < bullet.length;i++){
        if(areColliding(bot.X , bot.Y , bot.sX , bot.sY , bullet[i].x , bullet[i].y , 3,3)){
            bot.live-=2
        }
    }
    bot.move();
    if(vreme > 100){
        player.y+=3.5
    }
    platX[0]+=Math.cos( dvijeniwe ) * 2
    platX[6]-=Math.cos( dvijeniwe ) * 2
    platY[9]-=Math.sin( dvijeniwe ) * 2
    platY[11]+=Math.sin( dvijeniwe ) * 2
    platX[14]+=Math.cos( dvijeniwe ) * 2
    dvijeniwe+=0.04
    
    vreme++
    if(vreme < 100){
        player.y-=Math.sin(ugul) * 4.2
        ugul+=0.065
    }
    player.move()
    player.isShot();
    for (let i=0; i<bullet.length; ++i){
        bullet[i].update();
        if (bullet[i].x > 1400 || bullet[i].x < 0 || bullet[i].y > 800 || bullet[i].y < 0){
            bullet[i] = bullet[bullet.length-1];
            bullet.pop();
            i--;
        }
    }
}
 
function draw() {
    context.drawImage(img , 0 , 0 , 1370 , 660)
    for (let i=0; i<bullet.length; ++i){
        bullet[i].draw();
    }
    player.draw();
    for(var i = 0;i < broiPl-1;i++){
        context.fillStyle = " green "
        context.fillRect(platX[i] , platY[i] , 170 , 30)
    }
    context.fillRect(platX[broiPl] , platY[broiPl] ,100000000000 , 30)
    if(player.y > 600) player.y = 600
    for(var i = 0;i < broiPl-1;i++){
        if(areColliding(platX[i] , platY[i] , 170 , 10 , player.x , player.y , 30 , 30)){ 
            player.y = platY[i]-30;
        }
    
    }
    bot.draw()
    for(iEB=0; iEB<brEggBullet; iEB++){
        eggbullet[iEB].draw();
    }
};
 
function keyup(key) {
    if(key == 32 && vreme >= 100){
        vreme = 0;
        ugul = Math.PI*2;
    }
    // Show the pressed keycode in the console
}; 
 
function mouseup() {
    player.shoot(mouseX , mouseY);
};
function d(x1, y1, x2, y2){
    return Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1));
}

function orient(ax, ay, bx, by, cx, cy){
    return ax*by + ay*cx + bx*cy - by*cx - ax*cy - ay*bx;
}

function crossSegments(ax, ay, bx, by, cx, cy, dx, dy){
    let o1 = orient(ax, ay, bx, by, cx, cy),
        o2 = orient(ax, ay, bx, by, dx, dy),
        o3 = orient(cx, cy, dx, dy, ax, ay),
        o4 = orient(cx, cy, dx, dy, bx, by);
    if (o1*o2 < 0 && o3*o4 < 0) return true;
    if (o1 == 0 && (cx-ax)*(cx-bx) <= 0 && (cy-ay)*(cy-by) <= 0) return true;
    if (o2 == 0 && (dx-ax)*(dx-bx) <= 0 && (dy-ay)*(dy-by) <= 0) return true;
    if (o3 == 0 && (ax-cx)*(ax-dx) <= 0 && (ay-cy)*(ay-dy) <= 0) return true;
    if (o3 == 0 && (bx-cx)*(bx-dx) <= 0 && (by-cy)*(by-dy) <= 0) return true;
    return false;
}

var terrX=800, terrY=600;

class Segment{
    constructor(){
        this.x1 = Math.random()*terrX;
        this.y1 = Math.random()*terrY;
        if (Math.random() < 0.5){
            this.x2 = this.x1 + 100;
            this.y2 = this.y1;
        }else{
            this.x2 = this.x1;
            this.y2 = this.y1 + 100;
        }
    }
    draw(){
        context.beginPath();
        context.moveTo(this.x1, this.y1);
        context.lineTo(this.x2, this.y2);
        context.stroke();
    }
}

var baseX = [100, terrX-100], baseY = [100, terrY-100];

class Player{
    constructor(team, ind){
        this.team = team;
        this.ind = ind;
        this.respawn();
    }
    respawn(){
        this.x = baseX[this.team]+Math.random()*50-25;
        this.y = baseY[this.team]+Math.random()*50-25;
        if (this.team == 0) this.color = "red";
        else this.color = "blue";
        this.hp = 30;
        this.speed = 3;
        this.r = 10;
        this.reload = 0;
        this.reload_time = 5;
        this.flag = 0;
    }
    draw(){
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, 2*Math.PI);
        context.fillStyle = this.color;
        context.fill();
        context.fillRect(this.x-this.hp/2, this.y-this.r-10, this.hp, 5);
    }
    moveTowards(tX, tY){
        let dist = d(this.x, this.y, tX, tY);
        let dx = (tX-this.x)/dist*this.speed;
        let dy = (tY-this.y)/dist*this.speed;
        this.x += dx;
        this.y += dy;
    }
    hit(dmg){
        this.hp -= dmg;
        if (this.hp <= 0){
            if (this.flag == 1){
                flag[1-this.team].held = -1;
            }
            this.respawn();
        }
    }
    shoot(tX, tY){
        if (this.reload <= 0 && this.flag==0){
            b.push(new Bullet(this.x, this.y, tX, tY, this.team));
            this.reload = this.reload_time;
        }
    }
    ai(){}
    update(){
        --this.reload;
        let oldx = this.x, oldy = this.y;
        this.ai();
        for (let i=0; i<w.length; ++i){
            if (w[i].x1 == w[i].x2 && areColliding(this.x-this.r, this.y-this.r, 2*this.r, 2*this.r, w[i].x1, w[i].y1, 1, w[i].y2-w[i].y1)){
                if (oldx+this.r < w[i].x1) this.x = w[i].x1-this.r-1;
                if (oldx-this.r > w[i].x1+1) this.x = w[i].x1+this.r+2;
                if (oldy+this.r < w[i].y1) this.y = w[i].y1-this.r-1;
                if (oldy-this.r > w[i].y2) this.y = w[i].y2+this.r+1;
            }
            if (w[i].y1 == w[i].y2 && areColliding(this.x-this.r, this.y-this.r, 2*this.r, 2*this.r, w[i].x1, w[i].y1, w[i].x2-w[i].x1, 1)){
                if (oldy+this.r < w[i].y1) this.y = w[i].y1-this.r-1;
                if (oldy-this.r > w[i].y1+1) this.y = w[i].y1+this.r+2;
                if (oldx+this.r < w[i].x1) this.x = w[i].x1-this.r-1;
                if (oldx-this.r > w[i].x2) this.x = w[i].x2+this.r+1;
            }
        }
        for (let i=0; i<flag.length; ++i){
            if (flag[i].held == -1 && areColliding(this.x-this.r, this.y-this.r, 2*this.r, 2*this.r, flag[i].x-25, flag[i].y-25, 50, 50)){
                if (flag[i].team == this.team) flag[i].return();
                else{
                    flag[i].pickup(this.ind);
                    this.flag = 1;
                }
            }
        }
    }
}

class PlayerHuman extends Player{
    ai(){
        if (isKeyPressed[87] && isKeyPressed[65]) this.moveTowards(this.x - 1, this.y-1); 
        else if (isKeyPressed[87] && isKeyPressed[68]) this.moveTowards(this.x + 1, this.y-1); 
        else if (isKeyPressed[83] && isKeyPressed[65]) this.moveTowards(this.x - 1, this.y+1); 
        else if (isKeyPressed[83] && isKeyPressed[68]) this.moveTowards(this.x + 1, this.y+1); 
        else if (isKeyPressed[65]) this.moveTowards(this.x - 1, this.y); 
        else if (isKeyPressed[87]) this.moveTowards(this.x, this.y-1); 
        else if (isKeyPressed[68]) this.moveTowards(this.x+1, this.y); 
        else if (isKeyPressed[83]) this.moveTowards(this.x, this.y+1);
        if (isMousePressed) this.shoot(mouseX, mouseY);
    }
}

class Flag{
    constructor(team){
        this.team = team;
        this.x = baseX[team];
        this.y = baseY[team];
        this.held = -1;
    }
    update(){
        if (this.held != -1){
            this.x = p[this.held].x;
            this.y = p[this.held].y;
        }
        if (d(this.x, this.y, baseX[1-this.team], baseY[1-this.team]) < 50){
            ++score[1-this.team];
            this.return();
        }
    }
    return(){
        if (this.held > -1) p[this.held].flag = 0;
        this.x = baseX[this.team];
        this.y = baseY[this.team];
        this.held = -1;
    }
    pickup(ind){
        this.held = ind;
    }
    draw(){
        if (this.team == 0) drawImage(flagRed1, this.x-25, this.y-25, 50, 50);
        else drawImage(flagBlue1, this.x-25, this.y-25, 50, 50);
    }
}

function remBullet(i){
    if (b[i].x < 0 || b[i].x > terrX || b[i].y < 0 || b[i].y > terrY){
        b[i] = b[b.length-1];
        b.pop();
    }
}

class Bullet{
    constructor(x, y, tX, tY, team){
        this.team = team;
        this.x = x;
        this.y = y;
        this.r = 5;
        this.speed = 10;
        let dist = d(x, y, tX, tY);
        this.dx = (tX-x)/dist*this.speed;
        this.dy = (tY-y)/dist*this.speed;
        this.dmg = 5;
    }
    update(){
        this.x += this.dx;
        this.y += this.dy;
        for (let i=0; i<w.length; ++i){
            if (w[i].x1 == w[i].x2 && areColliding(this.x-this.r, this.y-this.r, 2*this.r, 2*this.r, w[i].x1, w[i].y1, 1, w[i].y2-w[i].y1)){
                this.x = -1000;
            }
            if (w[i].y1 == w[i].y2 && areColliding(this.x-this.r, this.y-this.r, 2*this.r, 2*this.r, w[i].x1, w[i].y1, w[i].x2-w[i].x1, 1)){
                this.x = -1000;
            }
        }
        for (let i=0; i<p.length; ++i){
            if (p[i].team != this.team && d(this.x, this.y, p[i].x, p[i].y)<this.r+p[i].r){
                p[i].hit(this.dmg);
                this.x = -1000;
            }
        }
    }
    draw(){
        if (this.team == 0) context.fillStyle = "red";
        else context.fillStyle = "blue";
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, 2*Math.PI);
        context.fill();
    }
}

var w = [], p = [new PlayerHuman(0, 0), new Player(1, 1)];
var flag = [new Flag(0), new Flag(1)];
var b = [];
var score = [0, 0];
for (let i=0; i<20; ++i){
    w[i] = new Segment();
}

var isMousePressed = false;

function update() {
    for (let i=0; i<p.length; ++i){
        p[i].update();
    }
    for (let i=0; i<flag.length; ++i){
        flag[i].update();
    }
    for (let i=0; i<b.length; ++i){
        b[i].update();
        remBullet(i);
    }
}
function draw() {
    context.font = "50px Arial";
    context.fillStyle = "rgba(255, 0, 0, 0.3)";
    context.beginPath();
    context.arc(baseX[0], baseY[0], 50, 0, 2*Math.PI);
    context.fill();
    context.fillText(score[0], baseX[0], baseY[0]-50);
    context.fillStyle = "rgba(0, 0, 255, 0.3)";
    context.beginPath();
    context.arc(baseX[1], baseY[1], 50, 0, 2*Math.PI);
    context.fill();
    context.fillText(score[1], baseX[1], baseY[1]-50);
    for (let i=0; i<w.length; ++i){
        w[i].draw();
    }
    for (let i=0; i<p.length; ++i){
        p[i].draw();
    }
    for (let i=0; i<b.length; ++i){
        b[i].draw();
    }
    for (let i=0; i<flag.length; ++i){
        flag[i].draw();
    }
};
function keyup(key) {
};
function mouseup() {
    isMousePressed = false;
};
function mousedown(){
    isMousePressed = true;
}

// Creating variables
var myX = 0, myY = 0, pX1=myX+12 , pY1=myY+5, i=false ;
var px=200, py=300, ex=600, ey=300, pr=0, er=0, php = 20, ehp = 20;
var nb = 0;
var bx = [], by = [], dx = [], dy = [], color = [];
var pspeed = 5/10, bspeed = 15/10, r = 10*10;
/*
class Enemy(){
    constructor()
    
}
*/



function d(x1, y1, x2, y2){
    return Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1));
}

function player_move(){
    if (isKeyPressed[65]) px -= pspeed;
    if (isKeyPressed[68]) px += pspeed;
    if (isKeyPressed[87]) py -= pspeed;
    if (isKeyPressed[83]) py += pspeed;
}

function shoot(x, y, tx, ty, c){
    bx[nb] = x;
    by[nb] = y;
    let dist = d(x, y, tx, ty);
    dx[nb] = (tx-x)*bspeed/dist;
    dy[nb] = (ty-y)*bspeed/dist;
    color[nb] = c;
    ++nb;
}

function rem_bullet(i){
    nb--;
    bx[i] = bx[nb];
    by[i] = by[nb];
    dx[i] = dx[nb];
    dy[i] = dy[nb];
    color[i] = color[nb];
}

function update() {
	// Napisanoto tuk se izpulnqva otnovo i otnovo mnogo puti v sekunda
	 if (php <= 0 || ehp <= 0) return;
    if (pr > 0) --pr;
    if (er > 0) --er;
    
    
    player_move();
    
    
    for (let i=0; i<nb; ++i){
        bx[i] += dx[i];
        by[i] += dy[i];
        if (color[i] == 'red' && areColliding(px-15, py-15, 30, 30, bx[i]-2.5, by[i]-2.5, 5, 5)){
            php--;
            rem_bullet(i);
            --i;
            continue;
        }
        if (color[i] == 'blue' && areColliding(ex-15, ey-15, 30, 30, bx[i]-2.5, by[i]-2.5, 5, 5)){
            ehp--;
            rem_bullet(i);
            --i;
            continue;
        }
    }
}

function draw() {
   
    context.fillRect(px-15, py-15, 30, 30);
    for (let i=0; i<nb; ++i){
        context.fillStyle = color[i];
        context.fillRect(bx[i]-2.5, by[i]-2.5, 5, 5);
    }
}

function keyup(key) {
	// Show the pressed keycode in the console
	console.log("Pressed", key);
  
}
function mousedown() {
   if (pr == 0){
        pr = r;
        shoot(px, py, mouseX, mouseY, "blue");
    }
}

var px=200, py=300, ex=600, ey=300, pr=0, er=0, php = 20, ehp = 20;
var nb = 0;
var bx = [], by = [], dx = [], dy = [], color = [];
var pspeed = 5/10, bspeed = 15/10, r = 10*10;
 
function d(x1, y1, x2, y2){
    return Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1));
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
 
var danger = Math.sqrt(2)*(30+5)/2 + 5;
 
function move_enemy(){
    let run_away_x, run_away_y, run_away_dx, run_away_dy, mint = -1;
    for (let i=0; i<nb; ++i){
        if (color[i] == "red") continue;
        let t = (dx[i]*(ex-bx[i]) + dy[i]*(ey-by[i]))/bspeed/bspeed;
        if (t<0) t=0;
        let nx = bx[i] + t*dx[i];
        let ny = by[i] + t*dy[i];
        if (d(nx, ny, ex, ey) <= danger){
            if (mint == -1 || mint > t) {
                mint = t;
                run_away_x = nx;
                run_away_y = ny;
                run_away_dx = dx[i];
                run_away_dy = dy[i];
            }
        }
    }
    if (mint > -1){
        let dist = d(run_away_x, run_away_y, ex, ey);
        if (dist > 0.1){
            ex += (ex-run_away_x)*pspeed/dist;
            ey += (ey-run_away_y)*pspeed/dist;
        }else{
            ex += -run_away_dy/bspeed*pspeed;
            ey += run_away_dx/bspeed*pspeed;
        }
    }
    if (er == 0){
        er = r;
        shoot(ex, ey, px, py, "red");
    }
}
 
function rem_bullet(i){
    nb--;
    bx[i] = bx[nb];
    by[i] = by[nb];
    dx[i] = dx[nb];
    dy[i] = dy[nb];
    color[i] = color[nb];
}
 
function player_move(){
    if (isKeyPressed[65]) px -= pspeed;
    if (isKeyPressed[68]) px += pspeed;
    if (isKeyPressed[87]) py -= pspeed;
    if (isKeyPressed[83]) py += pspeed;
}
 
function update() {
    if (php <= 0 || ehp <= 0) return;
    if (pr > 0) --pr;
    if (er > 0) --er;
    player_move();
    //move_player_bot();
    move_enemy();
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
    context.fillStyle = "blue";
    context.fillRect(px-15, py-15, 30, 30);
    context.fillStyle = "red";
    context.fillRect(ex-15, ey-15, 30, 30);
    for (let i=0; i<nb; ++i){
        context.fillStyle = color[i];
        context.fillRect(bx[i]-2.5, by[i]-2.5, 5, 5);
    }
};
function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};
function mouseup() {
    if (pr == 0){
        pr = r;
        shoot(px, py, mouseX, mouseY, "blue");
    }
};
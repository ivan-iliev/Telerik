// v1: https://pastebin.com/zWNFz910
 
let sizeX = 257, sizeY = 257;
let grid = [];
for(let x = 0;x < sizeX;x ++) {
    grid[x] = [];
    for(let y = 0;y < sizeY;y ++) {
        grid[x][y] = -1;//Math.random() * 255;
    }
}
 
// initial seed
grid[0][0] = 128;
grid[sizeX-1][0] = 128;
grid[0][sizeY-1] = 128;
grid[sizeX-1][sizeY-1] = 128;
 
let E = 105;
function ds(sx, sy, size) {
    let c1 = grid[sx][sy];
    let c2 = grid[sx+size-1][sy];
    let c3 = grid[sx][sy+size-1];
    let c4 = grid[sx+size-1][sy+size-1];
 
    let hx = sx + Math.floor(size/2);
    let hy = sy + Math.floor(size/2);
 
    grid[hx][hy] = (c1 + c2 + c3 + c4) / 4 + Math.random() * E - E/2;
    let d = grid[hx][hy];
 
    // e1
    if(grid[hx][sy] == -1) {
        grid[hx][sy] = (c1 + c2 + d) / 3 + Math.random() * E - E/2;
    }
    // e2
    if(grid[sx + size - 1][hy] == -1) {
        grid[sx + size - 1][hy] = (c2 + c4 + d) / 3 + Math.random() * E - E/2;
    }
    // e3
    if(grid[hx][sy + size - 1] == -1) {
        grid[hx][sy + size - 1] = (c3 + c4 + d) / 3 + Math.random() * E - E/2;
    }
    // e4
    if(grid[sx][hy] == -1) {
        grid[sx][hy] = (c1 + c3 + d) / 3 + Math.random() * E - E/2;
    }
 
    if(size == 3) {
        return;
    }
 
    ds(sx, sy, Math.floor(size / 2) + 1);
    ds(hx, sy, Math.floor(size / 2) + 1);
    ds(sx, hy, Math.floor(size / 2) + 1);
    ds(hx, hy, Math.floor(size / 2) + 1);
 
}
 
ds(0, 0, sizeX);
//ds(4, 4, 5);
//ds(6, 6, 3);
//ds(0, 4, 5);
 
 
function update() {
}
 
function draw() {
    for(let x = 0;x < sizeX;x ++) {
        for(let y = 0;y < sizeY;y ++) {
            let v = grid[x][y];
            context.fillStyle=`rgb(${v},0,0)`;
            context.fillRect(x * 2, y * 2, 2, 2);
        }
    }
}
 
function keyup(key) {
}
 
function mouseup() {
}
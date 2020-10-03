// Creating variables
let grid=[],myX=0,myY=0,directionX=25,directionY=0;
for(var x=0;x<25;x++){
    grid[x]=[];
    for(var y=0;y<25;y++){
        grid[x][y]=0;
    }
}
let a=0;
function update() {
    if(isKeyPressed[68]){
        directionX=25
        directionY=0;
    }
    if(isKeyPressed[65]){
        directionX=-25
        directionY=0;
    }
    if(isKeyPressed[87]){
        directionY=-25
        directionX=0;
    }
    if(isKeyPressed[83]){
        directionY=25;
        directionX=0;
    }
a++;
    if(a>25){
    myX+=directionX;
    myY+=directionY
        a=0;
    }
    if(grid[(myX+directionX)/25][(myY+directionY)/25]==1){
        console.log("sblusak")
        x=myX/25
        for(var y=myY/25;y<10;y++){
        for(var x=myX/25;grid[x][y]!=1;x++){
        grid[x][y]=1;
        }
    }
    }
    grid[myX/25][myY/25]=1;
   
}
function draw() {
    for(var x=0;x<25;x++){
        for(var y=0;y<25;y++){
        if(grid[x][y]==0){
            context.fillStyle="green"
            context.fillRect(x*25,y*25,24,24);
        }
            if(grid[x][y]==1){
            context.fillStyle="blue"
            context.fillRect(x*25,y*25,24,24);
        }
    }
}
    context.fillStyle="red"
    context.fillRect(myX,myY,24,24)
}
 
function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
}
 
function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
}
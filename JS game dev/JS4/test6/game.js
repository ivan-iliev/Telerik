var grid=[];
for(let i=0;i<10;i++){
    grid[i]=[];
}
for(let i=0;i<10;i++){
    for(let j=0;j<10;j++){
        grid[i][j]=1;
    }
}
for(let k=0;k<10;k++){
    let m=Math.floor(Math.random()*10),n=Math.floor(Math.random()*10);
    while(grid[m][n]!=1){
        m=Math.floor(Math.random()*10);
        n=Math.floor(Math.random()*10);
    }
    grid[m][n]=2
}
function update(){
    let k
    for(let i=0;i<10;i++){
        for(let j=0;j<10;j++){
            if(grid[i][j]==0){
                if(j!=0){
                    k=grid[i][j]
                    grid[i][j]=grid[i][j-1];
                    grid[i][j-1]=k;
                }
            }
        }
    }
}
function draw() {
    for(let i=0;i<10;i++){
        for(let j=0;j<10;j++){
            if(grid[i][j]!=0){
            if(grid[i][j]==1){
                context.fillStyle="red";
            }
            if(grid[i][j]==2){
                context.fillStyle="blue"
            }
            context.fillRect(i*31,j*31,30,30)
            }
        }
    }
}

function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
    
}
function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
    for(let i=0;i<10;i++){
        for(let j=0;j<10;j++){
            if(areColliding(i*31,j*31,30,30,mouseX,mouseY,1,1)){
                grid[i][j]=0
            }
        }
    }
}
// Creating variables
var myX = 0, myY = 0,updates=0,sX=12,sY=7;
function update() {
    
}
function draw() {
    for(var x=0;x<sX;x++){
        for(var y=0;y<sY;y++){
            context.fillStyle = "red"
            context.fillRect(100+x*25,100+y*25,24,24);
            context.fillStyle = "green"
            context.strokeRect(mouseX,mouseY,24,24);
        }
    }
};
function keyup(key) {
    
};
function mouseup() {
    
};

// Creating variables
var myX = 0, myY = 0;
var pole=[];
for(x=0;x<100;x=x+1){
    for(y=0;y<100;y=y+1){
       pole[x][y]=Math.floor(Math.random()*8) 
    }
}







function update() {
	myX = myX+(mouseX-myX)/10;
	myY = myY+(mouseY-myY)/10;
}

function draw() {
	// This is how you draw a rectangle
    for(x=0;x<100;x=x+1){
        for(y=0;y<100;y=y+1){
            if(pole[x][y]==0){
                context.fillRect();
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
}

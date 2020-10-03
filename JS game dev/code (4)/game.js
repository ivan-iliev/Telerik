// Creating variables
var myX = 0, myY = 0,golqmaKarta=[];

function update() {
	//myX = myX+(mouseX-myX)/10;
	//myY = myY+(mouseY-myY)/10;
}

function draw() {
	// This is how you draw a rectangle
	//context.fillRect(myX, myY, 30, 30);
    
        for(x=0;x<10;x=x+30){
            for(y=0;y<10;y=y+30){
                context.fillRect(myX, myY,31,31); 
            
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
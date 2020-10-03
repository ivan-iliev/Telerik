// Creating variables
var myX = 0, myY = 0,platformaX=0,platformaY=465;
var otmestwaneX=3,otmestwaneY=-3;
function update() {
	//myY = myY+3;
    platformaX=mouseX; 
    if(myY>=800){
        myY=0
        myX=Math.random()*600; 
    }
    
    if(myX+30>800){
        otmestwaneX=-3; 
    }
    if(myX<0){
        otmestwaneX=3
    }
    
    if(myY+30>600){
        otmestwaneY=-3;
    }
    if(myY<0){
        otmestwaneY=3;
    }



}

function draw() {
	// This is how you draw a rectangle
	context.fillRect(myX, myY, 30, 30);
    context.fillRect(platformaX,platformaY,200,10);
}

function keyup(key) {
	// Show the pressed keycode in the console
	console.log("Pressed", key);
}
function mouseup() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}
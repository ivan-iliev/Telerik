// Creating variables
var myX = 0, myY = 0,plodX=500,plodY=0,duljina=300;
var tochki=0;


function update() {
	myX = myX+(mouseX-myX)/10;
	myY = myY+(mouseY-myY)/10;
plodY=plodY+1;
    if(areColliding(myX,myY,30,30,plodX,plodY,30,30)){
    plodX=Math.random()*800;
    plodY=0;    
     tochki=tochki+1;
    duljina=duljina-3;
     if(duljina<0){
        duljina=0;
     }
        
    if(duljina==0){
        console.log("iner")
    }    
    if(plodY>800){
        plodY=0;
    }    
        
    
   }
}

function draw() {
	// This is how you draw a rectangle
	context.fillRect(myX, myY, 30, 30);
    context.fillRect(400, 50, duljina, 30);
    context.fillRect(plodX, plodY, 30, 30);

}

function keyup(key) {
	// Show the pressed keycode in the console
	console.log("Pressed", key);
}
function mouseup() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}
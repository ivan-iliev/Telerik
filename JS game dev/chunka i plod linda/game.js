// Creating variables
var myX = 0, myY = 0,sireneX=300,sireneY=0,sirene_speed=1;
var life = 5,tochki=0;
function update() {
if (mouseX<sireneX+30){
   if(mouseY>sireneY){
       if(mouseY<sireneY+30){
        if(mouseX>sireneX){
           tochki=tochki+1;
            console.log("tochki")
                sireneX=Math.random()*600;
         }     sireneY=0;
       }
   }
}   
    if(sireneY>600){
        sireneY=0;

    }
sireneY=sireneY+1;
}
function draw() {
	// This is how you draw a rectangle
	context.fillRect(sireneX, sireneY, 30, 30);
}
 
function keyup(key) {
	// Show the pressed keycode in the console
	console.log("Pressed", key);
}
function mouseup() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}
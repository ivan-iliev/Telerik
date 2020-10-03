// Creating variables
var myX = 0, myY = 0,o4akwanKlawish=65;
var tochki=5,life=10;

function update() {
	myX = myX+(mouseX-myX)/10;
	myY = myY+(mouseY-myY)/10;
}

function draw() {
}    

function keyup(key) {
	// Show the pressed keycode in the console
	console.log("Pressed", key);
    if(key==o4akwanKlawish){
     console.log("bravo",key);
    o4akwanKlawish=1+o4akwanKlawish;
    tochki=tochki+1;
    console.log("tochki",tochki);
    }else{
       console.log("proval",key);
       tochki=tochki-1; 
        console.log("tochki",tochki);
}
if(tochki==0){
    console.log("game over,igrata zapochva ot nachalo");    
    o4akwanKlawish=65;
}





}
function mouseup() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}
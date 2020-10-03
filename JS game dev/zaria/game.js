// Creating variables
var myX = 0, myY = 400,risuvan,razstoianie=0;


function update() {
	myX = myX+(mouseX-myX)/10;
	myY = myY+(mouseY-myY)/10;
    razstoianie=razstoianie+0.1;
}

function draw() {
	// This is how you draw a rectangle
     for(red=1;red<=15;red=red+1){
          for(risuvan=1;risuvan<=15;risuvan=risuvan+1){
                 context.fillRect(myX+risuvan*razstoianie, myY+red*razstoianie, 3, 3);
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

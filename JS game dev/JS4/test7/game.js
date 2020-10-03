// Creating variables
let myX = 100, myY = 0,deltaY=0,skochih=false,deltaY2=0,padnah=false;

function player_move(){
    if (isKeyPressed[37]) myX -= 10;
    if (isKeyPressed[39]) myX += 10;
}

function update() {
	player_move();
	deltaY+=0.02;
	myY+=deltaY;
	if(myY>=570){
		myY=570
		padnah=true;
	}
	if(skochih){
		deltaY2++;
		myY-=deltaY2;
		if(myY<=550){
			skochih=false;
		}
	}
	
}

function draw() {
	// tuk naprogramirai kakvo da se risuva
	context.fillRect(myX,myY,30,30);
}

function keyup(key) {
	// Show the pressed keycode in the console
	console.log("Pressed", key);
	if(padnah){
	if(key==32){
		deltaY=0;
		skochih=true;
		
	}
	}
    
   
}

function mouseup() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}

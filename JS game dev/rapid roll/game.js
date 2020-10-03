// Creating variables
var myX = 0, myY = 0,platformaY=[],platformaX=[],indPlatf,platformataObiecLiE=[];

for(indPlatf=0;indPlatf<10;indPlatf=indPlatf+1){
    platformaX[indPlatf]=Math.random()*800;   
}

    
    function update() {
	 myY = myY+1;
    for(indPlatf=0;indPlatf<3;indPlatf=indPlatf+1){
      platformaY[indPlatf]=platformaY[indPlatf]-3;  
         if(platformaY[indPlatf]<0){
            platformaY[indPlatf]=800;
            platformaX[indPlatf]=Math.random()*800;
        }
        if(areColliding(myX,myY,30,30,platformaX[indPlatf],platformaY[indPlatf],100,10)){
             myY=platformaY[indPlatf]-30;
        }
     
    }
    
     if(isKeyPressed[39]){
        myX=myX+5;  
    }
    
    if(isKeyPressed[37]){
        myX=myX-5;
    }
    
    if(myY>=600){
        console.log("GAME OVER")
    }
}
function draw() {
	// This is how you draw a rectangle
    context.fillStyle="yellow"
    context.fillRect(myX, myY, 30, 30);
    context.fillStyle="cyan"
    for(indPlatf=0;indPlatf<10;indPlatf++){
        context.fillRect(platformaX[indPlatf],platformaY[indPlatf],150,10);
    }
}

function keydown(key) {
	// Show the pressed keycode in the console
	console.log("Pressed", key);
}
function mouseup() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}
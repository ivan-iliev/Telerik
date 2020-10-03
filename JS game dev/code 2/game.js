// Creating variables
var myX = 0, myY = 0;

function update() {
	patronX[broiPatroni]=myX;
    patronX[broiPatroni]=myX;
    myX=mouseX;
    myY=mouseY;

   for(patronInd=0;patronInd<broiPatroni;patronInd=patronInd+1){
      vragoveX[vragInd]=vragove[vragInd]-0.1
      if(areColliding(myX, myY, 30, 30,vragoveX[vragInd],vragoveY[vragInd],30,30)){
      }
      for(patronInd=0;patronInd<broiPatroni;patronInd=patronInd+1)
         if(areColliding(patronX[patronInd],patronY[patronInd],3,7,vragoveX[vragInd],vragoveY[vragInd],30,30)){
            vragoveX[vragInd]=-1000;
      }
   }
}

function draw() {
	// This is how you draw a rectangle
	context.fillRect(myX, myY, 30, 30);
   for(vragInd=0;vragInd<100;vragInd=vragInd+1){
      context.fillRect(vragoveX[vragInd],vragoveY[vragInd], 30, 30);
   }
   for(vragInd=0;vragInd<100;vragInd=vragInd+1){
       context.fillRect(patronX[patronInd],patronY[patronInd], 3, 7);
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

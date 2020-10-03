// Creating variables
var topcheX = 0, topcheY = 0,posoka=3;
//posoka 0 gore lqvo
//posoka 1 gore dqsno
//posoka 2 dolu lqvo
//posoka 3 dolu dqsno
function update() {
    if(posoka==3){
        topcheX=topcheX+3;
        topcheY=topcheY+3;
        if(topcheY>570){
            posoka=1;
        }
        if(topcheX>=770){
            posoka=2;
        }
    }
    if(posoka==1){
        topcheX=topcheX+3;
        topcheY=topcheY-3;
        if(topcheX>=770){
            posoka=0;
        }
        if(topcheY<0){
            posoka=3;
        }        
    }    
    if(posoka==0){
        topcheX=topcheX-3;
        topcheY=topcheY-3;
        if(topcheY<0){
            posoka=2;
        }
        if(topcheX<0){
            posoka=1;
        }        
    }
    if(posoka==2){
        topcheX=topcheX-2;
        topcheY=topcheY+2;
        if(topcheX<0){
            posoka=3;
        }
        if(topcheY>570){
            posoka=0;
        }
    }
}
 
function draw() {
        // This is how you draw a rectangle
        context.fillRect(topcheX, topcheY, 30, 30);
        context.fillStyle="black"
}
 
function keyup(key) {
        // Show the pressed keycode in the console
        console.log("Pressed", key);
}
function mouseup() {
        // Show coordinates of mouse on click
        console.log("Mouse clicked at", mouseX, mouseY);
}
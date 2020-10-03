// Creating variables
var myX = 0, myY = 0;
var vragX=700 , vragY=310,skorost=3;




function update() {
vragX=vragX+1;
 if(myX+30>800){
   myX=770  
 }
 if(vragX+50>800){
     vragX=750;
 }    

    
    
}

function draw() {
	// This is how you draw a rectangle
	context.fillRect(myX, myY, 30, 30);
    context.fillRect(vragX,vragY,50,50);
}

function keyup(key) {
	// Show the pressed keycode in the console
	console.log("Pressed", key);
    if (key==key_down){
            if (myY<=300) {
                myY=myY+150;  
            }else{
                myY=myY+0
            }       
        }                           
    
   
        if (key==key_up){
           if(myY>=150){
               myY=myY-150;     
           }else{
               myY=myY+0;
           }
        }
                 
    
     
    
    
    if (key==key_left){
        myX=myX-50;  
    } 
    if (key==key_right){
        myX=myX+50;  
    } 
}
function mouseup() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}

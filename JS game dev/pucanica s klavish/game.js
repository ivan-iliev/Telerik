// Creating variables
var myX = 0, myY = 0 , vragX=300 ,vragY=300;
var speed=50,sblusuk=0,monetcaX=300,monetcaY=200,toshki=1;

function update() {
  // speed=speed+1;
    if(myX+40>800){
    myX=780;
   }
   if(myX<0){
      myX=0;
   }
  if(myY+40>600){
      myY=myY-40;
  }
  if(myY<0){
      myY=0;
  }
    if(myX<vragX){
      vragX=vragX-speed;
  }
    if(myX>vragX){
      vragX=vragX+speed;
  }
    if(myY>vragY){
      vragY=vragY+speed;
  }
     if(myY<vragY){
      vragY=vragY-speed;
  }   
    if(areColliding(myX, myY, 40,40,monetcaX,monetcaY,40,40)){
     monetcaX=Maht.random()*800;
     monetcaY=Math.random()*600;    
        toshki=toshki+1;   
    }
  }
function draw() {
	// This is how you draw a rectangle
	context.fillRect(myX, myY, 40,40);
    context.fillRect(vragX,vragY,50,50);
    context.fillRect(0,0,1,600);
    context.fillRect(0,0,800,1);
    context.fillRect(0,599,800,1);
    context.fillRect(799,0,1,600);
    context.fillRect(monetcaX,monetcaY,40,40)
}
function keydown(key) {
	// Show the pressed keycode in the console
	console.log("Pressed", key);
    if (key==key_down){
         myY=myY+40;         
    }                           
        if (key==key_up){
            myY=myY-40;     
        }
    if (key==key_left){
        myX=myX-40;  
    } 
    if (key==key_right){
        myX=myX+40;  
    } 
}
function mouseup() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}
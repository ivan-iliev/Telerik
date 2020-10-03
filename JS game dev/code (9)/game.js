// Creating variables
var myX = 0, myY = 0 , vragX=400 ,vragY=0;
var speed=3,tochki=5,life=10,monetaX=300 ,monetaY=200,krainaigra=false ;

function update() {
    
   if(myX+20>800){
    myX=780;
   }
   
   if(myX<0){
      myX=0;
   }

  if(myY+20>600){
      myY=myY-20;
  }
  if(myY<0){
      myY=0;
  }
  
 vragY=vragY+1;
        
  
 // if(vragY>800){
   //  vragY=0;
     // vragX=Math.random()*600;
  
  if(areColliding(myX, myY, 20, 20,vragX,vragY,50,50)){
      console.log("drun");
  }
    
  if(areColliding(myX,myY,20,20,monetaX,monetaY,40,40)){
    console.log("tochki",tochki);
      tochki=tochki+1;
    monetaX+20;
    monetaY+20;
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
 
  
}















function draw() {
	// This is how you draw a rectangle
	
    context.fillRect(myX, myY, 20, 20);
    context.fillRect(vragX,vragY,50,50);
    context.fillRect(0,0,1,600);
    context.fillRect(0,0,800,1);
    context.fillRect(0,599,800,1);
    context.fillRect(799,0,1,600);
    context.fillRect(monetaX,monetaY,40,40);
    if(krainaigra==true){
    context.font="60px Ariel";
    context.fillText("game over",300,300);
    }
}
function keydown(key) {
	// Show the pressed keycode in the console
	//console.log("Pressed", key);
  
    if(krainaigra==true){
        
    }
    
    
    if (key==key_down){
         myY=myY+20;  
            
    }                           
    
   
        if (key==key_up){
            myY=myY-20;     
        }
                 
    
     
    
    
    if (key==key_left){
        myX=myX-20;  
    } 
    
    if (key==key_right){
        myX=myX+20;  
    } 

}
function mouseup() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}
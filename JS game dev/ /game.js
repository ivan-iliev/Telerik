// Creating variables
var robotX = 0, robotY = 0;
var dX=[],dY=[];
var score=0;
var vragX=500,vragY=300;
var bX=0,bY=0;
var dtaken=false;
var gameover=false;
var dcount=5;
var grid =[];



for(var i=0;i<dcount;i++){
    dX.push (Math.floor(Math.random()*770));
    dY.push (Math.floor(Math.random()*570));
    dtaken.push (false);
}








function update() { 
   for( var i=0;i<dcount;i++){ 
        if(areColliding(robotX,robotY,30,30,dX[i],dY[i],30,30)){
            dtaken[i]=true;
        }
   }
    
    if(areColliding(robotX,robotY,30,30,bX,bY,50,50)){
       for(var i=0;i<dcount;i++){ 
            if(dtaken[i]){
                dtaken[i]=false;
                dX[i]=Math.floor(Math.random()*770);
                dY[i]=Math.floor(Math.random()*570);
                console.log(score);
                score++;
            }   
        }
    }
    if(areColliding(robotX,robotY,30,30,vragX,vragY,30,30)){
       alert("game over")
       robotX=0;
       robotY=0;
       vragX=500;
       vragY=300;
       gameover=true;
    }
    
    
    
    
    if(robotY<vragY){
        vragY=vragY-1;
    }if(robotY>vragY){
        vragY=vragY+1;
    }if(robotX<vragX){
        vragX=vragX-1;
    }if(robotX>vragX){
        vragX=vragX+1;
    }





}

function draw() {
	// This is how you draw a rectangle
   
    context.fillStyle="gray";
    context.fillRect(robotX, robotY, 30, 30);
  
    for(var i=0;i<dcount;i++){ 
        if(!dtaken[i]){ 
            context.fillStyle="blue";
            context.fillRect(dX[i], dY[i], 30, 30);
        }                     
  }
      
    context.fillStyle="green";
    context.fillRect(bX,bY, 50, 50);
    
    context.fillStyle="red";
    context.fillRect(vragX,vragY, 30, 30);
   
}

function keydown(key) {
	// Show the pressed keycode in the console
    //console.log("Pressed", key);

   // nagore
    if(key==38){
        robotY=robotY-10;
    }

  // nadolu
    if(key==40){
        robotY=robotY+10;
    }


    // nalqvo
    if(key==37){
        robotX=robotX-5;
    }
    
    // nadqsno
    if(key==39){
        robotX=robotX+5;
    }
    
    
    
}
function mouseup() {
	// Show coordinates of mouse on click
	//console.log("Mouse clicked at", mouseX, mouseY);
}

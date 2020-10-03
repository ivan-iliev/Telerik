// Creating variables
var myX = 390, myY = 450,vrag1X=400,vrag1Y=0,vrag2X=700,vrag2Y=300;
var daska1X=20,daska1Y=500,daska2X=550,daska2Y=500,daska3X=250,daska3Y=400;
var tochki=5,monetaX=50,monetaY=50;

function update() {
vrag1Y=vrag1Y+10;
vrag2Y=vrag2Y+10;

    if(vrag1Y>600){
      vrag1Y=0;
       vrag1X=Math.random()*600;
    }
    if(vrag2Y>600){
       vrag2Y=0;
        vrag2X=Math.random()*600;
    }


    if(areColliding(vrag1X,vrag1Y,50,50,daska1X,daska1Y,150,10)){
             vrag1Y=daska1Y-50;
             vrag1Y=0;
             vrag1X=Math.random()*600;
    }

    if(areColliding(vrag2X,vrag2Y,50,50,daska1X,daska1Y,150,10)){
             vrag2Y=daska1Y-50;    
             vrag2Y=0;
             vrag2X=Math.random()*600;
    }

    if(areColliding(vrag1X,vrag1Y,50,50,daska2X,daska2Y,150,10)){
             vrag1Y=daska2Y-50;
             vrag1Y=0;
             vrag1X=Math.random()*600;
    }

    if(areColliding(vrag2X,vrag2Y,50,50,daska2X,daska2Y,150,10)){
             vrag2Y=daska2Y-50;
             vrag2Y=0;
             vrag2X=Math.random()*600;
    }
    
    if(areColliding(vrag1X,vrag1Y,50,50,daska3X,daska3Y,150,10)){
             vrag1Y=daska3Y-50;
             vrag1Y=0;
             vrag1X=Math.random()*600;
    }

    if(areColliding(vrag2X,vrag2Y,50,50,daska3X,daska3Y,150,10)){
             vrag2Y=daska3Y-50;
             vrag2Y=0;
             vrag2X=Math.random()*600;
    }

    if(areColliding(myX,myY,30,30,vrag1X,vrag1Y,50,50)){
        console.log("game over.ti sybra:"+tochki+"tochki.restart");
        myX=0;
        myY=0;
    }
    
    
    if(areColliding(myX,myY,30,30,monetaX,monetaY,10,10)){
        monetaX=Math.floor(Math.random()*800);
        monetaY=Math.floor(Math.random()*600);
        tochki=tochki+1;
        console.log("tochki:"+tochki)
    }
    
    if(tochki>100){
        console.log("WIN!!!")
    }



}



function draw() {
	// This is how you draw a rectangle
	context.fillRect(myX, myY, 30, 30);
    context.fillStyle="red"
    context.fillRect(vrag2X, vrag2Y, 50, 50);
    context.fillRect(vrag1X, vrag1Y, 50, 50);
    context.fillStyle="brown"
    context.fillRect(daska1X,daska1Y,150,10);
    context.fillRect(daska2X,daska2Y,150,10);
    context.fillRect(daska3X,daska3Y,150,10);
    context.fillStyle="yellow"
    context.fillRect(monetaX,monetaY,10,10);
}




function keydown(key) {
	// Show the pressed keycode in the console
	//console.log("Pressed", key);

    if(key==key_up){
        myY=myY-10;
    }

    if(key==key_down){
        myY=myY+10;
    }   
    
    if(key==key_right){
        myX=myX+10;
    }

    if(key==key_left){
        myX=myX-10;
    }



}
function mouseup() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}

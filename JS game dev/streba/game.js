// Creating variables
var myX = 0, myY = 700,patron_D_y,patron_D_x,raz,tochki,razi;
var patronX,patronY;
var vrag1X=20,vrag1Y=340;
var vrag2X=456,vrag2Y=60
var vrag3X=300,vrag3Y=467;
function update() {
	myX = myX+(mouseX-myX)/100;
	myY = myY+(mouseY-myY)/100;
patronX=patronX+patron_D_x;
patronY=patronY-patron_D_y;        

vrag1X=vrag1X+3;
if(vrag1X>600){
    vrag1X=20;
}
    
vrag2Y=vrag2Y+3;
if(vrag2Y>800){
    vrag2Y=0;
}


vrag3X=vrag3X-3;
if(vrag3X<0){
    vrag3X=800;
}



}

function draw() {   
	// This is how you draw a rectangle
	context.fillRect(myX, myY, 30, 30);
    context.fillRect(patronX, patronY, 10, 10);
    context.fillStyle = "red";
    context.fillRect(vrag1X, vrag1Y, 50, 50);
    context.fillRect(vrag2X, vrag2Y, 50, 50);
    context.fillRect(vrag3X, vrag3Y, 50, 50);
if(areColliding(vrag3X,vrag3Y,patronX,patronY)){
    tochki=tochki+5;
    console.log("tochki",tochki)
    context.fillStyle = "white";
}

if(areColliding(vrag2X,vrag2Y,patronX,patronY)){
    tochki=tochki+5;
    console.log("tochki",tochki)
    context.fillStyle = "white";
}    

 if(areColliding(vrag1X,vrag1Y,patronX,patronY)){
    tochki=tochki+5;
    console.log("tochki",tochki)
    context.fillStyle = "white";
}   
    
}

function keyup(key) {
	console.log("Pressed", key);
}
function mouseup() {
	raz=myX-mouseX
    raz=Math.abs(mouseX-myX);
   
    
   if(myY>mouseY){
       raz=myY-mouseY;
   }else{
       raz=mouseY-myY;
   } 
    //console.log(raz);   
    
    razi=Math.sqrt(())
    
    patronX=myX;
    patronY=myY;
    patron_D_x=20*(mouseX-myX)/raz;
	patron_D_y=20*(mouseY-myY)/raz;
}
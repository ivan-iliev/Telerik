// Creating variables
var myX = 0, myY = 0,vrag1X = 300,vrag1Y =200
var vrag2X=0,vrag2Y=300,skorost1=3,skorost2=3,tochki1=0,tochki2=0;
var life1=5,life2=5;
var sblasak_vrag2=0;

function update() {
	myX = mouseX;
	myY = mouseY;
    
    vrag1X=vrag1X-skorost1;
           
    if(myY+30>vrag1Y && myY<vrag1Y+50 && myX+30>vrag1X &&  myX<vrag1X+50){
        console.log("drun1"); 
        life1=life1-1;
        console.log("life1:",life1);
        vrag1X=800;
        skorost1=Math.random()*10;
        vrag1Y=Math.random()*600;
    }else {
            if(vrag1X<0){
                tochki1=tochki1+1;
                console.log("tochki1:",tochki1);
                vrag1X=800;
                skorost1=Math.random()*10;
                vrag1Y=Math.random()*600;
            }
        }
   
    
     
    if(myX+30>600){
         myX=570;
    }    
    
    
    
    
    
    
    //________________________________________________________________________________________________________
    
    vrag2X=vrag2X+skorost2;
    sblasak_vrag2=areColliding(myX,myY,30,30,vrag2X,vrag2Y,50,50);
    if(sblasak_vrag2){
        console.log("drun2");
        life2=life2-1;
        console.log("life2:",life2)
        vrag2X=0;
        skorost2=Math.random()*10;
        vrag2Y=Math.random()*600;
    }else{
            if(vrag2X>800){
                tochki2=tochki2+1;
                console.log("tochki2:",tochki2);
                vrag2X=0;
                skorost2=Math.random()*10;
                vrag2Y=Math.random()*600;
            }
        }
   
    


} 

function draw() {
	// This is how you draw a rectangle
	context.fillRect(myX, myY, 30, 30);
    context.fillRect(vrag1X,vrag1Y,50,50);
    context.fillRect(vrag2X,vrag2Y,50,50);
}

function keyup(key) {
	// Show the pressed keycode in the console
	console.log("Pressed", key);
}
function mouseup() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}
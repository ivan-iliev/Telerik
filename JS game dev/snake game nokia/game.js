  // Creating variables
var myX = 0, myY = 0;
var duljina=10,hranaX=50,hranaY=60,otrovaX=100,otrovaY=200,tochki=5,bonusHranaX=50,bonusHranaY=50;
var posoka=2;
//posoka0-na gore
//posoka1-na dolu
//posoka2-na lqwo
//posoka3-na dqsno
var minatoX=[],minatoY=[],obchtoMinato=0,risuvanoI;

function update() {
    
 
  if(posoka==2){
     myX=myX-10;
  }
  
   if(posoka==0){
     myY=myY-10;
  }
   
   if(posoka==1){
     myY=myY+10;
  }
   if(posoka==3){
     myX=myX+10;
  }
   
   if(areColliding(myX,myY, duljina, 30,hranaX,hranaY, 10, 10)){
     duljina=duljina+20;
     tochki=tochki+1;
     console.log("tochki",tochki);
     hranaY=Math.random()*600;
     hranaX=Math.random()*800;
  }    

  if(areColliding(myX,myY, duljina, 30,otrovaX,otrovaY, 10, 10)){
     duljina=duljina-20;
     tochki=tochki-1;
     console.log("tochki",tochki);
     otrovaY=Math.random()*600;
     otrovaX=Math.random()*800;
  }    

  
  if(areColliding(myX,myY, duljina, 30,bonusHranaX,bonusHranaY,20,20)){
     duljina=duljina+30;
     tochki=tochki+5;
     console.log("tochki",tochki);
     bonusHranaY=Math.random()*600;
     bonusHranaX=Math.random()*800;
  }    

   
   if(tochki>=100){
      console.log("YOU WIN!!!");
   }
   
   if(myX>800){
      myX=0;
   }
   
   if(myY>600){
      myY=0;
   }
   
   if(myY<0){
      myY=600;
   }
   
   if(myX<0){
      myX=800;
   }
   
   for(proverenoI=obchtoMinato;proverenoI>obchtoMinato-duljina;provrenoI=proverenoI-1){
      if(myX==minatoX && myY==minatoY){
         console.log("drun");
         duljina=duljina-10;
      }
   }
   
   
   if(duljina<=10 || tochki<=0){
     console.log("game over")
  }


  minatoX[obchtoMinato]=myX;
  minatoY[obchtoMinato]=myY;
  obchtoMinato=1+obchtoMinato;
  

}

function draw() {
	for(risuvanoI=obchtoMinato;risuvanoI>obchtoMinato-duljina;risuvanoI=risuvanoI-1){
       context.fillStyle="green";
       context.fillRect(minatoX[risuvanoI],minatoY[risuvanoI],9,9)
    }       
	
    
    context.fillRect(hranaX,hranaY, 20, 20);
    context.fillStyle="black";    
    context.fillRect(otrovaX,otrovaY, 20, 20);
    context.fillStyle="green";
    context.fillRect(bonusHranaX,bonusHranaY,20,20);
}

function keydown(key) {
	// Show the pressed keycode in the console
	console.log("Pressed", key);
  if(key==40){
     posoka=1;
  }
   
   if(key==38){
     posoka=0;
  }
  
   if(key==37){
     posoka=2;
  }
   if(key==39){
     posoka=3;
  }

}
function mouseup() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}
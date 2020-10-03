// Creating variables
var myX = 10, myY = 250;
var hranaX=200,hranaY=150,otrovaX=600,otrovaY=150;
var bonusHranaX=200,bonusHranaY=450, bonusOtrovaX=600, bonusOtrovaY=450;
var posoka=3, duljina=10, tochki=10;
var daska1X=100, daska1Y=290, daska2X=500, daska2Y=290;
var daska3X=390, daska3Y=50, daska4X=390, daska4Y=400;
//posoka0-na gore
//posoka1-na dolu
//posoka2-na lqwo
//posoka3-na dqsno
var minatoX=[],minatoY=[],obchtoMinato=0,risuvanoI;
var cvetove=["black","gray","orange","brown","purple","green","fuchsia","blue"]

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
   
   if(areColliding(myX,myY, 9,9,hranaX,hranaY, 9, 9)){
     duljina=duljina+1;
     tochki=tochki+1;
     console.log("tochki",tochki);
     hranaY=Math.random()*594;
     hranaX=Math.random()*794;
  }    

  if(areColliding(myX,myY, 9,9,otrovaX,otrovaY,9,9)){
     duljina=duljina-1;
     tochki=tochki-1;
     console.log("tochki",tochki);
     otrovaY=Math.random()*594;
     otrovaX=Math.random()*794;
  }    

  
  if(areColliding(myX,myY, 9, 9,bonusHranaX,bonusHranaY,9,9)){
     duljina=duljina+2;
     tochki=tochki+5;
     console.log("tochki",tochki);
     bonusHranaY=Math.random()*594;
     bonusHranaX=Math.random()*794;
  }    

   if(areColliding(myX,myY, 9, 9,bonusOtrovaX,bonusOtrovaY,9,9)){
     duljina=duljina-2;
     tochki=tochki-1;
     console.log("tochki",tochki);
     bonusOtrovaY=Math.random()*594;
     bonusOtrovaX=Math.random()*794;
  }    
   
    
    
    
    
    if(tochki>=100 || duljina>100){
      console.log("YOU WIN!!!");
      myX = 10, myY = 250,posoka=3;
      tochki=10,duljina=10;
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
                                 
   
   
       if(tochki<=0){
         console.log("game over")
       }
    


  minatoX[obchtoMinato]=myX;
  minatoY[obchtoMinato]=myY;
  obchtoMinato=1+obchtoMinato;
  

    if(areColliding(myX,myY,9,9,daska1X,daska1Y,200,20)){
        console.log(" ti se prechuka, sabral si:" + tochki + ".Startirame nova igra");
        console.log("1")
        myX = 10, myY = 250,posoka=3;
        tochki=10;
        duljina=10;
    }
    
     if(areColliding(myX,myY,9,9,daska2X,daska2Y,200,20)){
        console.log(" ti se prechuka, sabral si:" + tochki + ".Startirame nova igra");
        console.log("2")
         myX = 10, myY = 250,posoka=3;
        tochki=10;
        duljina=10;
    }
     
     if(areColliding(myX,myY,9,9,daska3X,daska3Y,20,150)){
        console.log(" ti se prechuka, sabral si:" + tochki + ".Startirame nova igra");
        console.log("3")
        myX = 10, myY = 250,posoka=3;
        tochki=10;
        duljina=10;
    }
    
    if(areColliding(myX,myY,9,9,daska4X,daska4Y,20,150)){
        console.log(" ti se prechuka, sabral si:" + tochki + ".Startirame nova igra");
        console.log("4");
        myX = 10, myY = 250,posoka=3;
        tochki=10;
        duljina=10;
    }
   // for(proverenoI=obchtoMinato;proverenoI>obchtoMinato-duljina;provrenoI=proverenoI-1){
     // if(myX==minatoX && myY==minatoY){
     //    console.log("drun");
      //   duljina=duljina-10;
      
   }






function draw() {
	for(risuvanoI=obchtoMinato;risuvanoI>obchtoMinato-duljina;risuvanoI=risuvanoI-1){
       context.fillStyle=cvetove[risuvanoI%8];
       context.fillRect(minatoX[risuvanoI],minatoY[risuvanoI],9,9)
    }       
	
    
 //   function draw() {
//  for(x=0;x<80;x=x+1){
//         for(y=0;y<60;y=y+1){
//            if(naKoiHodZaPoslednoStypihNa[x][y]>=segashenHod-duljina){
//               context.fillStyle=cvetove[(segashenHod-naKoiHodZaPoslednoStypihNa[x][y])%8];
//                
               //context.fillRect(x*10,y*10,9,9);
//            }
//         }
//      
//  }
    
    context.fillStyle="green";  
    context.fillRect(hranaX,hranaY, 9, 9);
    context.fillStyle="red";    
    context.fillRect(otrovaX,otrovaY, 9, 9);
    context.fillStyle="cyan";
    context.fillRect(bonusHranaX,bonusHranaY,9,9);
    context.fillStyle="red";  
    context.fillRect(bonusOtrovaX,bonusOtrovaY,9,9);
   
    context.fillStyle="black";
    context.fillRect(0,0,6,600);
    context.fillRect(0,0,800,6);    
    context.fillRect(794,0,6,600);
    context.fillRect(0,594,800,6);
    context.fillStyle="brown"
    context.fillRect(daska1X,daska1Y,200,20);
    context.fillRect(daska2X,daska2Y,200,20);
    context.fillRect(daska3X,daska3Y,20,150);
    context.fillRect(daska4X,daska4Y,20,150);
}

function keydown(key) {
	// Show the pressed keycode in the console
	//console.log("Pressed", key);
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
	//console.log("Mouse clicked at", mouseX, mouseY);
}
// Creating variables
var myX = 0, myY = 0,posoka=39,segashenHod=0,duljina=21,otrovaX=20,otrovaY=30;
var naKoiHodZaPoslednoStypihNa=[];
var appleX=10,appleY=10;  
var cvetove=["black","gray","orange","brown","purple","green","fuchsia","blue"];
  for(x=0;x<80;x=x+1){
     naKoiHodZaPoslednoStypihNa[x]=[]
      for(y=0;y<60;y=y+1){
         naKoiHodZaPoslednoStypihNa[x][y]=-1
      }
  }
function update() {
  segashenHod=segashenHod+1;
  if(posoka==37){
     myX=myX-1;
  }
  if(posoka==38){
     myY=myY-1;
  }
  if(posoka==39){
     myX=myX+1;
  }
  if(posoka==40){
     myY=myY+1;
  }  

   if(myX>800){
      console.log("game over");
   }                                                                                              
   if(myY>600){
      console.log("game over");
   }
   
   if(myY<0){                      
      console.log("game over");
   }
   
   if(myX<0){
      console.log("game over");
   }
   
   naKoiHodZaPoslednoStypihNa[myX][myY]=segashenHod;

   if(appleX==myX && appleY==myY){
       duljina=duljina+1;
       appleX=Math.floor(Math.random()*80);
       appleY=Math.floor(Math.random()*60);
   }

   if(otrovaX==myX && otrovaY==myY){
       duljina=duljina-1;
       otrovaX=Math.floor(Math.random()*80);
       otrovaY=Math.floor(Math.random()*60);
   }

    if(naKoiHodZaPoslednoStypihNa[myX][myY]){
        context.fillStyle="green";
    }   
}

function draw() {
  for(x=0;x<80;x=x+1){
         for(y=0;y<60;y=y+1){
            if(naKoiHodZaPoslednoStypihNa[x][y]>=segashenHod-duljina){
               context.fillStyle=cvetove[(segashenHod-naKoiHodZaPoslednoStypihNa[x][y])%8];
                
                context.fillRect(x*10,y*10,9,9);
            }
         }
      
  }
context.fillStyle="green";
context.fillRect(appleX*10,appleY*10,9,9);   
context.fillStyle="red";
context.fillRect(otrovaX*10,otrovaY*10,9,9);   
}


function keyup(key) {
	// Show the pressed keycode in the console
	console.log("Pressed", key);
      
   if(key<=40 && key>=37){
      posoka=key;
   }
   
   if(key==32){
      duljina=duljina+100;
   }
   

 }
function mouseup() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
 }
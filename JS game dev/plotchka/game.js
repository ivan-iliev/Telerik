var myX = 0, myY = 0,pole=[],cvetove=["green","cyan","red","black"],tochki=10;
var diamant4eta=[];   
for(index=0;index<=3;index=index+1){
    diamant4eta[index]=new Image();
    diamant4eta[index].src="t"+index+".png";
    

}





for(x=0;x<12;x=x+1){
    pole[x]=[]
    for(y=0;y<12;y=y+1){
        pole[x][y]=-1;
    }
}
for(x=1;x<11;x=x+1){
      for(y=1;y<11;y=y+1){  
      pole[x][y]=Math.floor(Math.random()*3);
      }     
}

function update() {	
    for(x=1;x<11;x=x+1){
        for(y=1;y<11;y=y+1){
            if(pole[x][y]==3){
                if(y<=1){
                    pole[x][y]=Math.floor(Math.random()*3);
                }else{
                    pole[x][y]=pole[x][y-1];
                }
                pole[x][y-1]=3;
            }
        }
    }
    

}




function draw() {
    for(x=1;x<11;x=x+1){
      for(y=1;y<11;y=y+1){    
         context.drawImage(diamant4eta[pole[x][y]],(x-1)*60,(y-1)*60);
      }  
  }
}
function keyup(key) {
	console.log("Pressed", key);
}

function mouseup() {
var klikX=1+Math.floor(mouseX/60),klikY=1+Math.floor(mouseY/60);	
broiPovtarqshtiSeOtKliknatiqCvqtNadqsno=0,nekaProduljim=true,kliknatCvqt=pole[klikX][klikY],broiPovtarqshtiSeOtKliknatiqCvqtNalqvo=0;
   
    for(x=klikX;pole[x][klikY]==pole[klikX][klikY];x=x+1){
      //  pole[x][klikY]=3;
        //console.log("cikala se vika za",x,klikX,klikY);
    }
     var desenKraiKombo=x;   
    
         
    for(x=klikX;pole[x][klikY]==kliknatCvqt;x=x-1){
        pole[x][klikY]=3;
    }

    if(desenKraiKombo-(x+1)>=3){
        for(x=x+1;x<desenKraiKombo;x=x+1){
            pole[x][klikY]=3;
        }
    }     
}
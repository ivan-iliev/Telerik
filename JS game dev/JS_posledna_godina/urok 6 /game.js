// Creating variables
var myX = 0, myY = 0,pole=[];
    for(var i=0;i<3;i++){
        pole[i]=[];
    }

class AI{
    constructor(gridX,gridY){
        this.gridX=gridX;
        this.gridY=gridY;
    }
}

play(){
    
    this.a++;
    if(this.a){
        this.outputX = Math.floor(Math.random()*3);
        this.outputY = Math.floor(Math.random()*3);
        pole[this/outputX][this.outputY]=1;
        console.log(this.outputX,this.outputY);
        this.a=0;
    }
}

var ai= new AI;


function update() {
    
    
}
function draw() {
    // tuk naprogramirai kakvo da se risuva
   for(var x=0;x<3;x++){
      for(var y=0;y<3;y++){
          ai.play();
          if(pole[x][y]==0){
            context.strokeRect(x*175,y*175,174,174);
          }
          if(pole[x][y]==1){
            context.fillRect(x*175,y*175,174,174);
          }
      } 
   }
};
function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};
function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};

// Creating variables
var myX = 0, myY = 0,notaX=800, notaY=150,nota_speed=3,tochki=0,preragdania=0;
var sluchaino;

function update(){
if (preragdania < 5) {
    notaX=notaX-nota_speed;
    if(notaX<0){
        if(myY==notaY){
            tochki=tochki+1;
            console.log("tochki",tochki);
            }else{
                preragdania=preragdania+1;
                console.log("life:",preragdania);
            }
            notaX=800; 
            sluchaino=Math.random();   
            console.log("sluchajno",sluchaino);
            if(0 < sluchaino && sluchaino < 0.25){
                notaY=0;
            }
            if(0.25<sluchaino && sluchaino < 0.5){
                notaY=150;
            }            
            if(0.5<sluchaino && sluchaino < 0.75){
                notaY=300;
            }     
            if(0.75<sluchaino && sluchaino < 1){
                notaY=450;
            }        
            nota_speed=nota_speed+1;
    }
     /// myX = myX+(mouseX-myX)/10;
	myY = myY+(mouseY-myY)/10;
    
    /// if(mouseY<200){
       // myY=0;}   
   /// if(mouseY>400){
       // mouseY=400;}
} else {
    console.log("GAME OVER");
}
}
  


function draw() {
// This is how you draw a rectangle
	context.fillRect(notaX,notaY,30,150);
    context.fillRect(myX, myY,30,150);
}           


function keyup(key) {
// Show the pressed keycode in the console
    console.log("Pressed", key);
    
//        if (key==key_down){
            //if (myY<=300) {
              //  myY=myY+150;  
            //}else {
            //    myY=myY+0
          //  }       
        //}
    
   
        //if (key==key_up){
           //if(myY>=150){
         //      myY=myY-150;     
       //    }else{
     //          myY=myY+0;
   //        }
 //       }
                 
    
     
    
    
//    if (key==key_left){
//        myX=myX-30;  
//    } 
//    if (key==key_right){
//        myX=myX+30;  
//    } 
}


function mouseup() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}
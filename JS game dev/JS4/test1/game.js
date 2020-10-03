// Creating variables
var myX = 0, myY = 0,updates=0,bX=0,bY=0;
function update() {
    // Napisanoto tuk se izpulnqva otnovo i otnovo mnogo puti v sekunda
    myX = myX+(mouseX-myX)/10;
    myY = myY+(mouseY-myY)/10;
    
}
function draw() {
    // tuk naprogramirai kakvo da se risuva
    
    if(mouseY<300){
        context.fillStyle = "red"
        context.fillRect(bX,bY,800,600)
    }else{
        context.fillStyle = "blue"
        context.fillRect(bX,bY,800,600)
    }
    
    context.fillStyle = "green"
    context.fillRect(myX,myY,30,30);
  
    
    
};
function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};
function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};

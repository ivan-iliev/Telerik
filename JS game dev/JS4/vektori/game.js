// Creating variables
let myX = 0, myY = 0,deltaX=0,deltaY=0,duljina=0;
function update() {
    deltaX=mouseX - myX;
    deltaY=mouseY - myY;
    duljina = Math.sqrt(deltaX*deltaX + deltaY*deltaY);
    if(duljina==0){
        return
    }
    myX+=deltaX/duljina;
    myY+=deltaY/duljina;
}
function draw() {
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

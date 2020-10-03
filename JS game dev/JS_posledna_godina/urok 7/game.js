// Creating variables
var myX = 0, myY = 0,updates=0;
function update() {
    // Napisanoto tuk se izpulnqva otnovo i otnovo mnogo puti v sekunda
    myX = myX+(mouseX-myX)/10;
    myY = myY+(mouseY-myY)/10;
}
function draw() {
    // tuk naprogramirai kakvo da se risuva
    drawImage(backCake,0, 0, 800, 600);
    drawImage(femaleAction,myX,myY,80,110);
};
function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};
function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};

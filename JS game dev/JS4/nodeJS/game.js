// Creating variables
var a = Math.floor(Math.random()*3);
function update() {
   console.log(a);
}
function draw() {
   if(a==0){
    context.fillText("kamuk",10,10);
   }
   if(a==1){
    context.fillText("nojica",10,10);
   }
   if(a==2){
    context.fillText("hartiq",10,10);
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

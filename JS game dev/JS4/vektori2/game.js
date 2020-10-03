// Creating variables
var myX = 0, myY = 0;
    
    class VectorX{
       constructor(){
           
       } 
        draw(x,y){
            ctx.beginPath();
            ctx.moveTo(x, y*40);
            ctx.lineTo(x*100, y*40);
            ctx.stroke();

        }
    }


    class VectorX{
       constructor(){
           
       } 
        draw(x,y){
            ctx.beginPath();
            ctx.moveTo(x, y*40);
            ctx.lineTo(x*100, y*40);
            ctx.stroke();

        }
    }
    



function update() {
    
}
function draw() {
   
};
function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};
function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};

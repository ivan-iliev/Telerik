// Creating variables
var myX = 0, myY=0; 
var updates=0,hX=0,hY=0,health=undefined,maxHealth=undefined,x=undefined,y=undefined;
function healthBar(x,y,maxHealth,health){
    context.fillRect(x,y,health,maxHealth)
    
    if(maxHealth==health){
        context.fillRect(x,y,100,40)
    }
    
    if(Math.floor(maxHealth/2)){
        context.fillRect(x,y,50,40)
    }
    
    if(Math.floor(maxHealth/3)){
        context.fillRect(x,y,30,40)
    }
    
    if(Math.floor(maxHealth/4)){
        context.fillRect(x,y,25,40)
    }
    
    if(Math.floor(maxHealth/5)){
        context.fillRect(x,y,20,40)
    }
    
}

function update() {
    // Napisanoto tuk se izpulnqva otnovo i otnovo mnogo puti v sekunda
    myX = myX+(mouseX-myX)/10;
    myY = myY+(mouseY-myY)/10;
}
function draw() {
    // tuk naprogramirai kakvo da se risuva
    context.fillRect(myX,myY,20,20);
    healthBar(x,y,maxHealth,health);
};
function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};
function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};

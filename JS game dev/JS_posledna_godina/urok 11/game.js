// Creating variables

var player={
    x:100,
    y:100,
    w:100,
    h:100,
    speed:5,
    r:0,
    img:new Image(),
    move(){
        var h=0, v=0;
        if(isKeyPressed[37]){
            h++;
        }
        if(isKeyPressed[38]){
            v++;
        }
        if(isKeyPressed[39]){
            h--;
        }
        if(isKeyPressed[40]){
            v--;
        }
        this.r-=Math.PI/150*h;
        this.y-=Math.cos(this.r)*this.speed*v;
        this.x+=Math.sin(this.r)*this.speed*v;
    },
    draw(){
        context.save();
        context.translate(this.x ,this.y);
        context.rotate(this.r);
        context.drawImage(this.img, -this.w/2, -this.h/2, this.w, this.h);
        context.restore();
    },

}
player.img.src="a.jpg"
function update() {
    // Napisanoto tuk se izpulnqva otnovo i otnovo mnogo puti v sekunda
    player.move();
}
function draw() {
    // tuk naprogramirai kakvo da se risuva
    player.draw()
};
function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};
function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};
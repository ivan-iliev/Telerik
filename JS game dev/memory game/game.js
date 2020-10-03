// Creating variables
var myX = 0, myY = 0,broividove=6,pole=[],i,got=new Image;
got.src="got.jpg"
for(i=0;i<broividove;i=i+1){
    pole[i*1]=i;
    pole[i*1+1]=i;
}
for(i=0;i<100;i=i+1){
    var razmenqn1=Math.floor(Math.random()*2);
    var razmenqn2=Math.floor(Math.random()*2);
    var kopieNaRazmenqn1=pole[razmenqn1];
    pole[razmenqn1]=pole[razmenqn2];
    pole[razmenqn2]=kopieNaRazmenqn1;
}
console.log(pole)
function update() {
	//myX = myX+(mouseX-myX)/10;
    //myY = myY+(mouseY-myY)/10;
}

function draw() {
context.drawImage(got,0,0);
context.fillRect(myX, myY, 30, 30);   	

for(pole=0;pole>6;pole=pole+1){
   context.fillRect(myX, myY, 30, 30); 
}
console.log(pole)

}

function keydown(key) {
    console.log("Pressed", key);
if(key==32){
    myX=myX+30;
}


}
function mouseup() {
	console.log("Mouse clicked at", mouseX, mouseY);
}
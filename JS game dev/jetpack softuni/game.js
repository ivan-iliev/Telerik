// Creating variables - създаване на променливи за моя герой
var myX = 50, myY = 0, my_width = 40, my_height = 40; 

// Creating variables - създаване на променливи за моя враг №1
var vrag1X = 800, vrag1Y = 400, vrag1_width=80, vrag1_height=40;

// Creating  - създаване на променливи за моя враг №2
var vrag2X = vrag1X-2*vrag1_height, vrag2Y = vrag1Y+vrag1_height, vrag2_width=6*vrag1_height, vrag2_height=vrag1_height;

// Creating variables - създаване на променливи за моя враг №3
var vrag3X = vrag2X+vrag1_height, vrag3Y = vrag2Y+vrag1_height, vrag3_width=vrag1_height, vrag3_height=vrag1_height;
 
// Creating variables - създаване на променливи за моя враг №4
var vrag4X = vrag2X+4*vrag1_height, vrag4Y = vrag2Y+vrag1_height, vrag4_width=vrag1_height, vrag4_height=vrag1_height;

var a="Ivan", b="Dimi", temp;

//тази функция задвижва героя и вра
function update() {
	myX = myX+(mouseX-myX)/800;
    myY = myY+1;
    console.log(myX);
    vrag1X=vrag1X-6;
    vrag2X=vrag2X-6;
    vrag3X=vrag3X-6;
    vrag4X=vrag4X-6;
    






}

function draw() {
	// This is how you draw a rectangle
	context.fillRect(myX, myY, my_width, my_height);
    context.fillRect(vrag1X,vrag1Y,vrag1_width,vrag1_height);
    context.fillRect(vrag2X,vrag2Y,vrag2_width,vrag2_height);
    context.fillRect(vrag3X,vrag3Y,vrag3_width,vrag3_height);
    context.fillRect(vrag4X,vrag4Y,vrag4_width,vrag4_height);

}

function keyup(key) {
	// Show the pressed keycode in the console
	console.log("Pressed", key);
    console.log("Width and Height of my Hero:", my_width, my_height);
    temp=a;
    a=b;
    b=temp;
    console.log("Mein name ist:", a, "Er name ist:", b);
    
myY=myY-50
}
function mouseup() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
    vrag
    


}

7 <  4

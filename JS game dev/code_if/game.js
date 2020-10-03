// Creating variables
var myX = 100, myY = 0,
    vragX =800, vragY =550,
    vrag_life=1, vrag_speed=1;

function update() {
	
    if (vragX<0){
        vrag_life=vrag_life+1;
        vrag_speed=vrag_speed+1;
        console.log("vrag1 life:",vrag_life);
        vragX=800; 
        vragY=vragY-50;
    }
    
    
    if(myY+30>600){
        myY=0;
    }
    
    if(vragY<0){
        vragY=600-50;
        vrag_speed=1;
    }
    
//---------------------------- Вариянт 1 ----------------------------------------------
// && - означава и ; тоест всичките условия да са изпълнени едновременно в if ( )
// тука в условието на if ( ) се прави проверка за случаите когато има припокриване на врага с героя   
// и ако  е вярно печатим Край на играта
//   if( vragX <= myX +30 && vragX +50 >= myX && vragY <= myY +30 && vragY +50 >= myY ){
//            console.log("Game Over")          
//   }
    
// --------------------------- Вариянт 2 ---------------------------------------------- 
// || - или ; 
// тука в условието на if се прави проверка за случаите когато няма припокриване на врага с героя       
 if( vragX > myX +30 || vragX +50 < myX || vragY > myY +30 || vragY +50 < myY ){
            console.log("niama pripokriwane");          
    } else{
// В противен случай имаме припокриване и печатим Край на играта      
        console.log("Game Over");    
    }
//-------------------------------------------------------------------------------------    
    myY=myY+1;
    vragX=vragX-vrag_speed;
//    vragY=vragY-2;
}

function draw() {
	// This is how you draw a rectangle
	context.fillRect(myX, myY, 30, 30);
    context.fillRect(vragX,vragY,50,50);
}

function keyup(key) {
	// Show the pressed keycode in the console
	console.log("Pressed", key);
    myY=myY-50;
}
function mouseup() {
    
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}
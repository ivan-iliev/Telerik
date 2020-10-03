// Creating variables
var player1_X = 10, player1_Y = 280, player1_width=10,player1_height=40, player1_move_Y = 40;
var player2_X = 780,  player2_Y = 280, player2_width=10, player2_height=40, player2_move_Y = 40;

var ball_X = 0; ball_Y = 0; ball_width=20, ball_height=20, ball_move_X=3, ball_move_Y=-3;

var time=300;time_bar=300;

function update() {
    
    ball_X=ball_X+ball_move_X;
    ball_Y=ball_Y+ball_move_Y;
    
    if(ball_X+20>800){
        ball_move_X=-3; 
    }
    if(ball_X<0){
        ball_move_X=3;
    }
    
    if(ball_Y+20>600){
        ball_move_Y=-3;
    }
    if(ball_Y<0){
        ball_move_Y=3;
    }
    
}    





function draw() {
	// This is how you draw a rectangle
	context.fillRect(player1_X, player1_Y, player1_width, player1_height);
    context.fillRect(player2_X,player2_Y,player2_width,player2_height);
    
    
    
    context.fillRect(ball_X,ball_Y,ball_width,ball_height);
    



}

function keydown(key) {
	// Show the pressed keycode in the console
	console.log("Pressed", key);
  
    if(key==65){
        if(player1_Y>=0+player1_height){
        player1_Y=player1_Y-player1_move_Y;
        }else{
            player1_Y=player1_Y-0;
        }
    }
    
    if(key==90){
        if(player1_Y<600-player1_height){
        player1_Y=player1_Y+player1_move_Y;
        }else{
            player1_Y=player1_Y+0;
        }
    }
    
    if(key==222){
        if(player2_Y>=0+player2_height){
        player2_Y=player2_Y-player2_move_Y;

        }else{
            player2_Y=player2_Y-0;
        }
    }
    
    if(key==191){
        if (player2_Y<600-player2_height){
        player2_Y=player2_Y+player2_move_Y;    
        }else{
            player2_Y=player2_Y+0;
        }
    }
 
    
   
        //if (key==key_up){
           //if(myY>=150){
         //      myY=myY-150;     
       //    }else{
     //          myY=myY+0;
   //        }
 //       }
    
    
    
    
    
    
}
function mouseup() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}
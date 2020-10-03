// Creating variables
var X=0,Y=0,igrpole=[],razmer=5,koienared=0;



for(X=0;X<3;X=X+1){
    igrpole[X]=[]
    for(Y=0;Y<3;Y=Y+1){
        igrpole[X][Y]=0
    }
}
function narisuvaipole(){
for(X=0;X<3;X=X+1){
     for(Y=0;Y<3;Y=Y+1){
            if(igrpole[X][Y]==0){context.fillStyle="white"}
            if(igrpole[X][Y]==1){context.fillStyle="red"}
            if(igrpole[X][Y]==2){context.fillStyle="green"}
            context.fillRect(1+X*razmer*20,1+Y*razmer*20,razmer*19,razmer*19)
        }
}
}
function update() {
}

function draw() {
    context.fillStyle="black"
    context.fillRect(0,0,800,600)
    context.fillStyle="black"
    context.fillRect(0,0,razmer*60,razmer*60)
    
    narisuvaipole();
   
    
    if(koienared%2==0){context.fillStyle="green"}else{context.fillStyle="red"}
    context.fillRect(350,250,50,50)
    
    
    if(igrpole[0][0]==1 && igrpole[1][1]==1 && igrpole[2][2]==1 || igrpole[0][2]==1 && igrpole[1][1]==1 &&
        igrpole[2][0]==1){
    context.font="50px georgia";
    context.fillStyle = "red";
    context.fillText("red win!",400,160);
    }
    if(igrpole[0][0]==2 && igrpole[1][1]==2 && igrpole[2][2]==2 || igrpole[0][2]==2 && igrpole[1][1]==2 && igrpole[2][0]==2){
    context.font="50px georgia";
    context.fillStyle = "green";
    context.fillText("green win!",400,160);
    }
    for(X=0;X<3;X=X+1){
    if(igrpole[X][0]==1 && igrpole[X][1]==1 && igrpole[X][2]==1){
    context.font="50px georgia";
    context.fillStyle = "red";
    context.fillText("red win!",400,160);
        }
    if(igrpole[X][0]==2 && igrpole[X][1]==2 && igrpole[X][2]==2){
    context.font="50px georgia";
    context.fillStyle = "green";
    context.fillText("green win!",400,160);
        }
    }
    for(Y=0;Y<3;Y=Y+1){
    if(igrpole[0][Y]==1 && igrpole[1][Y]==1 && igrpole[2][Y]==1){
    context.font="50px georgia";
    context.fillStyle = "red";
    context.fillText("red win!",400,160);
        }
    if(igrpole[0][Y]==2 && igrpole[1][Y]==2 && igrpole[2][Y]==2){
    context.font="50px georgia";
    context.fillStyle = "green";
    context.fillText("green win!",400,160);
        }
    }
};


function keyup(key) {
   
    console.log("Pressed", key);
};

function mouseup() {
    console.log("Pressed",mouseX,mouseY);
    if(igrpole[Math.floor(mouseX/(razmer*20))][Math.floor(mouseY/(razmer*20))]==0){
        koienared++;
        if(koienared%2==0){
            igrpole[Math.floor(mouseX/(razmer*20))][Math.floor(mouseY/(razmer*20))]=1
        }else{
            igrpole[Math.floor(mouseX/(razmer*20))][Math.floor(mouseY/(razmer*20))]=2
        }
    }
    
};
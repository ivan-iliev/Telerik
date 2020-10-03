// Creating variables
let x=[], y=[], pointsNum=0;


function drawCalc(a){
    for(let i=-1000; i<1000; i+=1){
        x[pointsNum] = i;
        y[pointsNum] = a(i);
        pointsNum++;
    }
}

drawCalc(function f(x) {return Math.sin(x*100)});


function update() {
	
}

function draw() {	
    context.beginPath();
    context.moveTo(x[0]+canvas.width/2, -y[0]+canvas.height/2);
    for(let i=0; i<pointsNum; i++){
        context.lineTo(x[i]+canvas.width/2, -y[i]+canvas.height/2);
    }
    context.stroke();
    
    context.beginPath();
}

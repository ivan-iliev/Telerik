
var mode = 0; 

function length(a, b){
    return Math.sqrt((a.x- b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y));
}

class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.color = 'black';
    }
    draw(){
        context.beginPath();
        context.arc(this.x, this.y, 10, 0, 2*Math.PI);
        context.fillStyle = this.color;
        context.fill();
    }
    isClicked(mouse){
        return length(mouse, this) < 10;
    }
};
function drawLine(a, b){
    context.beginPath();
    context.moveTo(a.x, a.y);
    context.lineTo(b.x, b.y);
    context.stroke();
}

var point = [];
var roads = [];
var pred = [];
var start=-1, final=-1;


function update() {
}
function draw() {
    for(var i = 0 ; i < roads.length; i ++){
        for(var j = 0; j < roads[i].length; j ++){
            if(roads[i][j] > 0){
                context.strokeStyle = 'black';
                context.lineWidth = 7;
                drawLine(point[i], point[j]);
            }
        }
    }
   
    for(var i = 0; i < point.length; i ++){
        point[i].draw();
    }
   
    var mouse = new Point(mouseX, mouseY);
    mouse.color = 'pink';
    mouse.draw();



};

function dijkstra(start, final){
    var dist = [];
    var visited = [];
    for(var i = 0 ; i < point.length; i++){
        dist[i] = 1000000000;
        visited[i] = false;
        pred[i] = -1;
    }
   
    dist[start] = 0;
   
    for(var k = 0; k < point.length; k ++){
       
        // Minimalna stoinost na dist
        var index, min = 100000000000;
        for(var i = 0 ; i < dist.length; i ++){
            if(!visited[i] && min > dist[i]){
                min = dist[i];
                index = i;
            }
        }
       
        visited[index] = true;
       
        for(var j = 0 ; j < roads[index].length; j ++){
            if(roads[index][j] > 0 && dist[j] > dist[index] + roads[index][j] &&
              !visited[j]){
                dist[j] = dist[index] + roads[index][j];
                pred[j] = index;
            }
        }
       
    }
}
function keyup(key) {
    if(key == 32){
        mode ++;
    }
    if(mode == 1){
        for(var i = 0; i < point.length; i ++){
            roads[i] = [];
            for(var j = 0; j < point.length; j ++){
                roads[i][j] = 0;
            }
        }
    }
};
function mouseup() {
    if(mode == 0){
        point.push(new Point(mouseX, mouseY));
    }
    if(mode == 1){
        for(var i = 0 ; i< point.length; i ++){
            if(point[i].isClicked(new Point(mouseX, mouseY))){
                if(start == -1){
                    start = i;
                }
                else if(final == -1){
                    final = i;
                    console.log(start, final);
                    roads[start][final] = length(point[start], point[final]);
                    roads[final][start] = roads[start][final];
                    start = -1;
                    final = -1;
                }
            }
        }
    }
};
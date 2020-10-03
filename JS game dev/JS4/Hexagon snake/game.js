var hexHeight,
hexRadius,
hexRectangleHeight,
hexRectangleWidth,
hexagonAngle = 0.523598776, // 30 degrees in radians
sideLength = 10,
boardWidth = 100,
boardHeight = 100;
var canvas = document.getElementById('hexmap');
var ctx = canvas.getContext('2d');

hexHeight = Math.sin(hexagonAngle) * sideLength;
hexRadius = Math.cos(hexagonAngle) * sideLength;
hexRectangleHeight = sideLength + 2 * hexHeight;
hexRectangleWidth = 2 * hexRadius;
function update() {
   
}
function draw() {
 
};
function keyup(key) {
    
};
function mouseup() {
    console.log("Mouse clicked at", mouseX, mouseY);
    drawHexagon(ctx, screenX, screenY, true);
};



function drawBoard(canvasContext, width, height) {
    var i,
        j;

    for(i = 0; i < width; ++i) {
        for(j = 0; j < height; ++j) {
            drawHexagon(
                ctx, 
                i * hexRectangleWidth + ((j % 2) * hexRadius), 
                j * (sideLength + hexHeight), 
                false
            );
        }
    }
}



function drawHexagon(x, y, fill) {           
    var fill = fill || false;

    canvasContext.beginPath();
    canvasContext.moveTo(x + hexRadius, y);
    canvasContext.lineTo(x + hexRectangleWidth, y + hexHeight);
    canvasContext.lineTo(x + hexRectangleWidth, y + hexHeight + sideLength);
    canvasContext.lineTo(x + hexRadius, y + hexRectangleHeight);
    canvasContext.lineTo(x, y + sideLength + hexHeight);
    canvasContext.lineTo(x, y + hexHeight);
    canvasContext.closePath();

    if(fill) {
        canvasContext.fill();
    } else {
        canvasContext.stroke();
    }
}
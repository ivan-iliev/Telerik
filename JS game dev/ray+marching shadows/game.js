// Creating variables
let map = [], mapS = 150, cellS = 5;
let MapShadow = [];

for(let x = 0; x < mapS; x++) {
    map[x] = [];
    MapShadow[x] = [];
    for(let y = 0; y < mapS; y++) {
        if(Math.random()>0.0) {
            map[x][y] = 0;
        } else {
            map[x][y] = 1;
        }
        MapShadow[x][y] = true;
    }
}
for(let i = 0; i < 40; i++) {
    let x = randomInteger(mapS), y = randomInteger(mapS),
        l = randomInteger(mapS), dX = randomInteger(2), dY = randomInteger(2);
    for(let j = 0; j < l; j++) {
        if(!areColliding(x, y, 1, 1, 0, 0, mapS-1, mapS-1)) {
            break;
        }
        map[x][y] = 1;
        if(j%2 == 0) {
            x+=dX;
        } else {
            y+=dY;
        }
    }
}

function update() {
    if(carDrag) {
        carX = mouseX;
        carY = mouseY;
    } else {
        if(isKeyPressed[87]) {
            carX += Math.cos(carRot)*5;
            carY += Math.sin(carRot)*5;
        }
        if(isKeyPressed[83]) {
            carX -= Math.cos(carRot)*5;
            carY -= Math.sin(carRot)*5;
        }
    }
    if(isKeyPressed[65]) {
        carRot -= 0.08;
    }
    if(isKeyPressed[68]) {
        carRot += 0.08;
    }
    if(isKeyPressed[69] && carBeamAngle <= 2*Math.PI) {
        carBeamAngle += 0.08;
    }
    if(isKeyPressed[81] && carBeamAngle >= 0) {
        carBeamAngle -= 0.08;
    }
}
let angleStep = 0.005, movementStep = cellS/2;
let mapWidth = cellS*mapS;
let carX = 200, carY = 200, carRot = 0, carBeamAngle = 1, carDrag = false;
let showInfo = false;
function calcMapShadow(x, y, startAngle, endAngle) {
    for(let x = 0; x < mapS; x++) {
        for(let y = 0; y < mapS; y++) {
            MapShadow[x][y] = true;
        }
    }
    for(let angle = startAngle; angle < endAngle; angle+=angleStep) {
        let puppetX = x, puppetY = y,
            dX = Math.cos(angle)*movementStep,
            dY = Math.sin(angle)*movementStep;
        while(areColliding(puppetX, puppetY, 1, 1, 1, 1, mapWidth-2, mapWidth-2)) {
            let cellX = Math.floor(puppetX/cellS),
                cellY = Math.floor(puppetY/cellS);
            MapShadow[cellX][cellY] = false;
            if(map[cellX][cellY] == 1) {
                break;
            }
            puppetX+=dX;
            puppetY+=dY;
        }
    }
}
function draw() {
	context.globalAlpha = 1;
	    context.fillStyle = "black";
	    for(let x = 0; x < mapS; x++) {
	        for(let y = 0; y < mapS; y++) {
	            if(map[x][y]) {
	                context.fillRect(x*cellS, y*cellS, cellS, cellS);
	            }
	        }
	    }
	    calcMapShadow(carX, carY, carRot - carBeamAngle, carRot+carBeamAngle);

	    context.globalAlpha = 0.5;
	    context.fillStyle = "purple";
	    for(let x = 0; x < mapS; x++) {
	        for(let y = 0; y < mapS; y++) {
	            if(MapShadow[x][y]) {
	                context.fillRect(x*cellS, y*cellS, cellS, cellS);
	            }
	        }
	    }
	    context.globalAlpha = 1;
	    context.fillStyle = "green";
	    context.beginPath();
	    context.arc(carX, carY, cellS, 0, 2*Math.PI);
	    context.fill();
	    context.stroke();

	    let fontSize = 40;
	    context.font = fontSize + "px Courier New";
	    context.fillStyle = "red";
	    if(!showInfo) {
	        context.fillText("ESC", 10, fontSize)
	    } else {
	        context.fillText("A/D to rotate", 10, fontSize);
	        context.fillText("Q/E for beam angle", 10, fontSize * 2);
	        context.fillText("SPACE for new controls", 10, fontSize * 3);
	        if(!carDrag) {
	            context.fillText("W/S to move", 10, fontSize * 4);
	        } else {
	            context.fillText("Mouse to move", 10, fontSize * 4);
	        }
	    }

}

function keyup(key) {
    if(key == 32) {
        carDrag = !carDrag;
    }
    if(key == 27) {
        showInfo = !showInfo;
    }
}

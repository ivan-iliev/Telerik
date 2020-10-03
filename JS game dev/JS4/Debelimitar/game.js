// Creating variables
let updates = 0;
let objectFunctionList = [], objectSpawnUpdate = [];
let deltaX = 5,
    deltaY = 3;
let speed = 5;
function dist(x1,y1,x2,y2) {
    return Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2))
}
function moveUp(t) {
    return {
        x: 0,
        y: -t
    }
}
function moveDown(t) {
    return {
        x: 0,
        y: t
    }
}
function moveRight(t) {
    return {
        x: t,
        y: 0
    }
}
function moveLeft(t) {
    return {
        x: -t,
        y: 0
    }
}
function moveInCircle(t) {
    return {
        x: Math.cos(t/10)*50,
        y: Math.sin(t/10)*50,
    }
}
function addPositions(pos1, pos2) {
    return {
        x: pos1.x + pos2.x,
        y: pos1.y + pos2.y
    }
}
function spawnObject(movementFunction, spawnTime) {
    objectFunctionList.push(movementFunction);
    objectSpawnUpdate.push(spawnTime);
}
 
function funcGenerator(){
    
    
    
}
function moveFromAToB(t) {
    let dist_ = dist(450, 350, 300, 300);
    return {
        x: 450 + (450 - 300)/(dist_/speed)*t,
        y: 350 + (350 - 300)/(dist_/speed)*t
    }
}
 
function generateMoveWithDelta(deltaX, deltaY) {
    function moveWithDelta(t) {
        return {
            x: t*deltaX,
            y: t*deltaY
        }
    }
    return moveWithDelta;
}
 
function update() {
    if(isKeyPressed[32]) {
        updates--;
    } else {
        updates++;
    }
}
 
function draw() {
    console.log("v draw:")
    context.font = "50px Arial";
    context.fillText("Updates: " + updates, 0, 50);
    for(let i = 0; i < objectFunctionList.length; i++) {
        let objectLifeLength = updates - objectSpawnUpdate[i];
        if(objectLifeLength >= 0) {
            let movementFunction = objectFunctionList[i];
            let drawPosition = movementFunction(objectLifeLength);
            drawImage(bird, drawPosition.x, drawPosition.y, 50, 50);
		}
    }
}
 
function keyup(key) {
    console.log("Pressed", key);
}
 
function mouseup() {
    let dX = (mouseX - 0)/40;
    let dY = (mouseY - 0)/40;
    let movementFunction = generateMoveWithDelta(dX, dY);
    spawnObject(movementFunction ,updates)
    console.log("Mouse clicked at", mouseX, mouseY);
}
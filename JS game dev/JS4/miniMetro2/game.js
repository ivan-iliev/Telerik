// cities
let gradX = [], gradY = [], gradType = [];
let brGradove = 0;
let colors = ["green", "yellow", "blue"];

// vruzki
let vrStart = [], vrEnd = [];
let brVruzki = 0;

// people
let personX = [], personY = [], personType = [], personCurTarget = [];
let brPeople = 0;

let selected = -1;

brVruzki = 1;
vrStart[0] = 1;
vrEnd[0] = 2;

function distance(ax, ay, bx, by) {
	return Math.sqrt((ax-bx)*(ax-bx) + (ay-by)*(ay-by));
}

function spawnGrad() {
	while(true) {
		let nx = Math.random() * (800-60) + 30;
		let ny = Math.random() * (600-60) + 30;
		let ok = true;
		for(let i = 0;i < brGradove;i ++) {
			if(distance(gradX[i], gradY[i], nx, ny) < 100) {
				ok = false;
			}
		}
		if(ok) {
			gradX[brGradove] = nx;
			gradY[brGradove] = ny;
			gradType[brGradove] = Math.floor(Math.random() * 3);
			brGradove ++;
			break;
		}
	}
}

function spawnPerson(startGrad) {
	personX[brPeople] = gradX[startGrad];
	personY[brPeople] = gradY[startGrad];
	personType[brPeople] = Math.floor(Math.random() * 3);
	personCurTarget[brPeople] = -1;
	brPeople ++;
}

function movePerson(personIdx) {
	let target = personCurTarget[personIdx];
	if(target == -1) return;

	let dx = gradX[target] - personX[personIdx];
	let dy = gradY[target] - personY[personIdx];

	let len = distance(0, 0, dx, dy);

	dx /= len;
	dy /= len;

	dx *= 1.5;
	dy *= 1.5;

	personX[personIdx] += dx;
	personY[personIdx] += dy;
}

for(let i = 0;i < 8;i ++) {
	spawnGrad();
}

function update() {
	for(let i = 0;i < brPeople;i ++) {
		movePerson(i);
	}
}

gradDist=[];
for(let i =0; i<brGradove;i++){
   gradDist[i]=-999;
}


var f=0;
function bfs(start){
   gradDist[start] = 0;
   for(var naKoiGradSum=0;naKoiGradSum<brVruzki;naKoiGradSum++){
      if(gradDist[vrEnd[naKoiGradSum]]==-999){                                                                                   
         if(gradDist[vrStart[naKoiGradSum]]==f){
           gradDist[vrEnd[naKoiGradSum]]=f+1;
           f++;
           return;
         }
      }
   }
   if(gradDist[vrStart[naKoiGradSum]]!=0){                                                                                   
      if(gradDist[vrEnd[naKoiGradSum]]==f){
        gradDist[vrEnd[naKoiGradSum]]=f+1;
        f++;
        return;
      }
   }
}


function draw() {
   bfs(0);
	for(let i = 0;i < brVruzki;i ++) {
		let a = vrStart[i];
		let b = vrEnd[i];
		context.beginPath();
		context.moveTo(gradX[a], gradY[a]);
		context.lineTo(gradX[b], gradY[b]);
		context.lineWidth = 15;
		context.stroke();
	}
	for(let i = 0;i < brGradove;i ++) {
		context.fillStyle = colors[gradType[i]];
		context.fillRect(gradX[i] - 30, gradY[i] - 30, 60, 60);
		if(selected == i) {
			context.lineWidth = 5;
			context.strokeRect(gradX[i] - 31, gradY[i] - 31, 62, 62);
		}
	}
	for(let i = 0;i < brPeople;i ++) {
		context.beginPath();
		context.arc(personX[i], personY[i], 8, 0, 2 * Math.PI);
		context.fillStyle = colors[personType[i]];
		context.fill();
   }
   for(let i=0;i<brGradove;i++){
      context.font = "16px Arial"
      context.fillStyle = "black"
      context.fillText(gradDist[i],gradX[i],gradY[i]);
   }
}

function keyup(key) {
	// Show the pressed keycode in the console
	console.log("Pressed", key);
}

function mouseup() {
	for(let i = 0;i < brGradove;i ++) {
		if(areColliding(mouseX, mouseY, 1, 1, gradX[i] - 30, gradY[i] - 30, 60, 60)) {
			if(selected == -1) {
				selected = i;
			} else {
				if(selected != i)		{
					// make vruzka between selected and i
					vrStart[brVruzki] = selected;
					vrEnd[brVruzki] = i;
					brVruzki ++;
				}
				selected = -1;
			}
		}
	}
}
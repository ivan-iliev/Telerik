function lerp(a, b, t) {
	return {x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t};
}

function p3curve(a, b, c, t) {
	let l0 = lerp(a, b, t);
	let l1 = lerp(b, c, t);
	return lerp(l0, l1, t);
}

function p4curve(a, b, c, d, t) {
	let l0 = p3curve(a, b, c, t);
	let l1 = p3curve(b, c, d, t);
	return lerp(l0, l1, t);
}

let points = [];
for(let x = 0;x < 800;x += 50) {
	points.push({x: x, y: Math.random() * 600});
}


function update() {}

function draw() {
	// draw curves
	context.fillStyle = "blue";
	for(let animation = 0;animation < 1;animation += 0.002) {
		for(let i = 0;i < points.length - 3;i += 3) {
			let c = p4curve(points[i], points[i+1], points[i+2], points[i+3], animation);
			context.fillRect(c.x, c.y, 3, 3);
		}
	}

	// draw labels
	context.fillStyle = "red";
	context.font = "20px monospace";
	for(let i = 0;i < points.length;i ++) {
		const p = points[i];
		context.fillText(i, p.x - 10, p.y)
	}

	// draw points and lines
	for(let anchor = 0;anchor < points.length;anchor += 3) {
		context.fillRect(points[anchor].x, points[anchor].y, 10, 10);
		if(anchor - 1 >= 0) {
			drawLine(points[anchor-1].x, points[anchor-1].y, points[anchor].x, points[anchor].y);
			context.fillRect(points[anchor - 1].x, points[anchor - 1].y, 5, 5);
		}
		if(anchor + 1 < points.length) {
			drawLine(points[anchor+1].x, points[anchor+1].y, points[anchor].x, points[anchor].y);
			context.fillRect(points[anchor + 1].x, points[anchor + 1].y, 5, 5);
		}
	}
}

let selected = -1;
function mouseup() {
	selected = -1;
}

function mousedown() {
	selected = -1;
	for(let i = 0;i < points.length;i ++) {
		if(areColliding(mouseX, mouseY, 1, 1, points[i].x, points[i].y, 10, 10)) {
			selected = i;
		}
	}
}
function mousemove() {
	if(selected == -1) return;
	points[selected].x = mouseX;
	points[selected].y = mouseY;



}

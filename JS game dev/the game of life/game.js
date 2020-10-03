const size = {x: 200, y: 200};

let grid = [];
for(let x = 0;x < size.x;x ++) {
	grid[x] = [];
	for(let y = 0;y < size.y;y ++) {
		grid[x][y] = Number(Math.random() < 0.5);
	}
}

let cnt = 0;
function update() {
	cnt ++;
	//if(cnt % 10 != 0) return;

	let tmpGrid = [];
	for(let x = 0;x < size.x;x ++) {
		tmpGrid[x] = [];
	}

	for(let x = 0;x < size.x;x ++) {
		for(let y = 0;y < size.y;y ++) {

			// count neighbours
			let nei = 0;
			for(let ofx = -1;ofx <= 1;ofx ++) {
				for(let ofy = -1;ofy <= 1;ofy ++) {
					if(ofx == 0 && ofy == 0) continue;

					const nx = x + ofx;
					const ny = y + ofy;
					if(nx < 0 || nx >= size.x || ny < 0 || ny >= size.y) continue;

					nei += grid[nx][ny];
				}
			}

			tmpGrid[x][y] = grid[x][y];

			if(grid[x][y] == 1 && nei < 2) tmpGrid[x][y] = 0;
			if(grid[x][y] == 1 && (nei == 2 || nei == 3)) tmpGrid[x][y] = 1;
			if(grid[x][y] == 1 && nei > 3) tmpGrid[x][y] = 0;
			if(grid[x][y] == 0 && nei == 3) tmpGrid[x][y] = 1;
		}
	}

	for(let x = 0;x < size.x;x ++) {
		for(let y = 0;y < size.y;y ++) {
			grid[x][y] = tmpGrid[x][y];
		}
	}
}

function draw() {
	const color = ["white", "black"];
	const bs = Math.min(canvas.width / size.x, canvas.height / size.y);
	for(let x = 0;x < size.x;x ++) {
		for(let y = 0;y < size.y;y ++) {
			context.fillStyle = color[grid[x][y]];
			context.fillRect(x * bs, y * bs, bs, bs);
		}
	}

}

function keyup(key) {
	// Show the pressed keycode in the console
	console.log("Pressed", key);
}

function mouseup() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}

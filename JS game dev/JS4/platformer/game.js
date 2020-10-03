let Engine = Matter.Engine,
	World = Matter.World,
	Bodies = Matter.Bodies;

// create an engine
let engine = Engine.create();

// ground
let ground = Bodies.rectangle(300, 600, 300, 10, {
	isStatic: true
});
World.add(engine.world, [ground]);

//platforms
let plat = [];
for (let i = 0; i < 200; i++) {
	plat[i] = Bodies.rectangle(Math.floor(Math.random() * 50000), Math.floor(Math.random() * 600 + 200), Math.floor(Math.random() * 300 + 100), 10, {isStatic: true,
		render: {
			fillStyle: 'red',
			strokeStyle: 'blue',
			lineWidth: 3
	   }});
	World.add(engine.world, [plat[i]]);
}

//
let player = Bodies.circle(100, 550, 30);
Matter.Body.setMass(player,1.7)
player.restitution=0.1;
World.add(engine.world, [player]);
Matter.Body.applyForce(player, player.position, {
	x: 0.038,
	y: 0
});

//item1 - platXDown
let platXDown = [];
for (let i = 0; i < 20; i++) {
	platXDown[i] = Bodies.rectangle(Math.floor(Math.random() * 50000), Math.floor(Math.random() * 600 + 200), 10, 10, {
		isStatic: true,
		fillStyle: 'red'
	});
	World.add(engine.world, [platXDown[i]]);
}

// run the engine
Engine.run(engine);

// Creating variables
let myX = 0,
	myY = 0;
let d = 0;
let Jump = true;
let cooldown = 0;
let FS_Move = 0.0015;
let c = 0;
let falling = false
let points=0;
let asd=0;
var images=[];
images[0]=new Image();
images[0].src="https://cdn.discordapp.com/attachments/567009609303195658/703267389780918282/backTrees.png"
images[1]=new Image();
images[1].src="https://cdn.discordapp.com/attachments/567009609303195658/703267400920858704/backWaterfall.png"
images[2]=new Image();
images[2].src="https://media.discordapp.net/attachments/567009609303195658/703267419984101396/backSpikes.png?width=845&height=475"
images[3]=new Image();
images[3].src="https://cdn.discordapp.com/attachments/567009609303195658/703267453349789777/backSunset.png"
images[4]=new Image();
images[4].src="https://cdn.discordapp.com/attachments/567009609303195658/703267568017997834/backDesert.png"
images[5]=new Image();
images[5].src="https://cdn.discordapp.com/attachments/567009609303195658/703320026199097464/Coffin-Dance-Meme-Music.png"
var deathsound=new Audio("moozik.mp3")
image=images[0];
function update() {
	asd++;
	if(asd%10==0){
	points++;
	}
	let Ground_Collision = Matter.SAT.collides(player, ground);
	if (Ground_Collision.collided) {
		FS_Move = 0.0015
	}

	if (!falling) {
		for (let i = 0; i < plat.length; i++) {
			let Plat_Collision = Matter.SAT.collides(player, plat[i]);
			if (Plat_Collision.collided) {
				FS_Move = 0.0015;
			}
		}
	}

	if (!Jump) {
		cooldown++;
	}
	if (cooldown % 100 == 0) {
		Jump = true;
	}

	if (isKeyPressed[65]) {
		Matter.Body.applyForce(player, player.position, {
			x: -FS_Move,
			y: 0
		});
	}
	if (isKeyPressed[68]) {
		Matter.Body.applyForce(player, player.position, {
			x: FS_Move,
			y: 0
		});
	}
	for (let i = 0; i < platXDown.length; i++) {
		let PlatXDown_Collision = Matter.SAT.collides(player, platXDown[i]);
		if (PlatXDown_Collision.collided) {
			points+=200;
			Matter.Composite.remove(engine.world, platXDown[i])
			for (let i = 0; i < plat.length; i++) {
				Matter.Body.setStatic(plat[i], false)
			}
			falling = true;
		}
	}
	if (falling) {
		c++;

		if (c > 25) {
			for (let i = 0; i < plat.length; i++) {
				Matter.Body.setStatic(plat[i], true)
			}
			falling = false;
			c = 0;
		}
	}

}

function renderBody(body) {
	context.beginPath();
	for (const vertex of body.vertices) {
		context.lineTo(vertex.x, vertex.y);
	}
	context.fill();
}
let last_pos_plat_x = 0;
let last_pos_plat_y = 0;
let screens = 0;
let last_pos = 0;
let pos_x = 0;
let pos_y = 0


function draw() {

	context.drawImage(image,0,0,canvas.width,canvas.height)
	context.fillStyle="black"
	context.font="40px Arial"
	context.fillText(points,100,100)
	context.fillStyle="blue"
	if(player.position.y>=canvas.height){
	context.fillStyle="red"
	context.font="120px Arial"
	context.fillText("YOU DED",canvas.width/2-200,canvas.height/2)
	//context.drawImage(image[5],0,0,canvas.width,canvas.height)
	deathsound.play();
	alert("Open this shit https://www.youtube.com/watch?v=oHg5SJYRHA0");
	for(let i=0;i<plat.length;i++){
		Matter.Composite.remove(engine.world,plat[i])
		Matter.Composite.remove(engine.world,ground)
	}
	}
	if (player.position.x >= canvas.width) {
		screens++;
		image=images[Math.floor(Math.random()*5)]

		let last_pos = player.position.y;
		Matter.Body.setPosition(player, {
			x: 0,
			y: last_pos
		})

		console.log("ads")
		for (let i = 0; i < plat.length; i++) {
			last_pos_plat_x = plat[i].position.x
			last_pos_plat_y = plat[i].position.y

			Matter.Body.setPosition(plat[i], {
				x: last_pos_plat_x - canvas.width,
				y: last_pos_plat_y
			})

		}
		for (let i = 0; i < platXDown.length; i++) {
			pos_x = platXDown[i].position.x;
			pos_y = platXDown[i].position.y;
			Matter.Body.setPosition(platXDown[i], {
				x: pos_x - canvas.width,
				y: pos_y
			})
		}
	}
	if (player.position.x <= -10) {
		last_pos = player.position.y;
		if (screens >= 1) {
			screens--;
			image=images[Math.floor(Math.random()*5)]
			Matter.Body.setPosition(player, {
				x: 1900,
				y: last_pos
			})
			Matter.Composite.remove(engine.world,ground)
			console.log("asd")
			for (let i = 0; i < plat.length; i++) {
				last_pos_plat_x = plat[i].position.x
				last_pos_plat_y = plat[i].position.y

				Matter.Body.setPosition(plat[i], {
					x: last_pos_plat_x + 1900,
					y: last_pos_plat_y
				})

			}
			for (let i = 0; i < platXDown.length; i++) {
				pos_x = platXDown[i].position.x;
				pos_y = platXDown[i].position.y;
				Matter.Body.setPosition(platXDown[i], {
					x: pos_x - 1900,
					y: pos_y
				})
			}
		} else {
			Matter.Body.setPosition(player, {
				x: -10,
				y: last_pos
			})
		}
	}
	for (const body of engine.world.bodies) {
		renderBody(body);
	}

}
var render = Matter.Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: window.innerWidth,
      height: window.innerHeight,
      wireframes: false // <-- important
    }
});
Matter.Render.run(render);

function keyup(key) {
	const FS = 0.1
	if (key == 32 && Jump) {
		FS_Move = 0.0002;
		Matter.Body.applyForce(player, player.position, {
			x: 0,
			y: -FS
		});
		Jump = false;

	}

}


function mouseup() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}

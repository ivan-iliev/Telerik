// Creating variables
let myX = 100, myY = 0,broiach=0,a=0,bombi=[],spawn=false;
class Bomb{
	constructor(){
		this.x=Math.floor(Math.random()*800)
		this.y=Math.floor(Math.random()*600)
		this.sx=50
		this.sy=50
		this.pop=false;
		this.razstoqnieX=0;
		this.razstoqnieY=0;
	}
	draw(){
		context.fillRect(this.x,this.y,this.sx,this.sy)
	}
	update(){
		if(!this.pop){
		this.sx+=0.20;
		this.sy+=0.20;
		}
		if(this.pop){
			
			this.razstoqnieX=Math.abs(this.x+50-mouseX);
			this.razstoqnieY=Math.abs(this.y+50-mouseY);
			    this.sx=0;
				this.sy=0;
				this.x=undefined
				this.y=undefined
				this.pop=false;
			if(this.razstoqnieX<200 && this.razstoqnieY<200){
			console.log("-1 jivot")
				
		}
			
		}
		if(this.sx>=100 && this.sy>=100){
			this.pop=true
		}
		
		
		
	}
}

function update() {
	// Napisanoto tuk se izpulnqva otnovo i otnovo mnogo puti v sekunda
	broiach++;
	if(broiach>=100){
		broiach=0
		spawn=true
	}
	if(spawn){
	
	bombi[a]=new Bomb();
	spawn=false;
		a++;
		if(bombi>=3){
			bombi=0;
		}
}
	if(a>0){
	for(var i=0;i<bombi.length;i++){
		bombi[i].update();
	}
	}
	
	
}

function draw() {
	// tuk naprogramirai kakvo da se risuva
	if(a>0){
	for(var i=0;i<bombi.length;i++){
		bombi[i].draw();
	}
	}
}

function keyup(key) {
	// Show the pressed keycode in the console
	
	
}

function mouseup() {
	// Show coordinates of mouse on click
	console.log("Mouse clicked at", mouseX, mouseY);
}

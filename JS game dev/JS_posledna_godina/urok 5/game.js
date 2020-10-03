class Player{
    constructor(){
        this.x = -1;
        this.y = -1;
        this.dir = "left";
    }
    move(){
        if (this.dir=='left') --this.x;
        if (this.dir=='right') ++this.x;
        if (this.dir=='up') --this.y;
        if (this.dir=='down') ++this.y;
    }
    ai(s){}
};
let vs = 5;
 
class AIBot extends Player{
    constructor(){
        super();
        this.w = [];
        this.b = [];
        this.first_layer = 10;
        this.generate_weights();
    }
    generate_weights(){
        for (let i=0; i<this.first_layer; ++i){ //first layer
            this.w[i] = [];
            for (let j=0; j<vs*vs; ++j){
                this.w[i][j] = Math.random()*20-10;
            }
            this.b[i] = Math.random()*200-100;
        }
        for (let i=this.first_layer; i<this.first_layer+4; ++i){ //second layer
            this.w[i] = [];
            for (let j=0; j<this.first_layer; ++j){
                this.w[i][j] = Math.random()*20-10;
            }
            this.b[i] = Math.random()*200-100;
        }
    }
    ai(s){
        let ans = [];
        let ans_hidden = [];
        for (let i=0; i<this.first_layer; ++i){
            ans_hidden[i] = 0;
            for (let j=0; j < vs*vs; ++j){
                ans_hidden[i] += this.w[i][j]*s[Math.floor(j/vs)][j%vs];
            }
            ans_hidden[i] += this.b[i];
            if(ans_hidden[i]<0) ans_hidden[i]=0;
        }
        for (let i=0; i<4; ++i){
            ans[i] = 0;
            for (let j=0; j < this.first_layer; ++j){
                ans[i] += this.w[i+this.first_layer][j]*ans_hidden[j];
            }
            ans[i] += this.b[i+this.first_layer];
        }
        let maxind = 0;
        for (let i=1; i<4; ++i){
            if (ans[i] > ans[maxind]) maxind = i;
        }
        if (maxind==0) this.dir = 'left';
        if (maxind==1) this.dir = 'right';
        if (maxind==2) this.dir = 'up';
        if (maxind==3) this.dir = 'down';
    }
}
 
function mutate(bot, mr){
    let ans = new AIBot();
    for (let i=0; i<bot.w.length; ++i){
        for (let j=0; j<bot.w[i].length; ++j){
            ans.w[i][j] = bot.w[i][j]+Math.random()*2*mr-mr;
        }
    }
    for (let i=0; i<bot.b.length; ++i){
        ans.b[i] = bot.b[i]+Math.random()*20*mr-10*mr;
    }
    return ans;
}
 
var n = 20;
var grid = [];
 
function valid(x, y){
    if (x<0 || x>=n || y<0 || y>=n) return 0;
    return grid[x][y] == 0;
}
let ans = [];
function moveBots(bots){
    for (b of bots){
        grid[b.x][b.y] = 1 + b.ind;
    }
    for (b of bots){
        let s = [];
        for (let i=0; i<vs; ++i){
            s[i] = [];
            for (let j=0; j<vs; ++j){
                s[i][j] = valid(b.x-Math.floor(vs/2)+i, b.y-Math.floor(vs/2)+j);
            }
        }
        b.ai(s);
    }
    for (b of bots){
        b.move();
    }
    for (let i=0; i<bots.length; ++i){
        if (!valid(bots[i].x, bots[i].y)){
            ans.push(bots[i].ind);
            bots[i] = bots[bots.length-1];
            --i;
            bots.pop();
        }
    }
}
 
function startGame(bots){
    ans = [];
    grid = [];
    for (let i=0; i<n; ++i){
        grid[i] = [];
        for (let j=0; j<n; ++j) grid[i][j] = 0;
    }
    bots[0].x = 1; bots[0].y = 1; bots[0].dir = "right"; bots[0].ind = 0;
    bots[1].x = n-2; bots[1].y = 1; bots[1].dir = "down"; bots[1].ind = 1;
    bots[2].x = n-2; bots[2].y = n-2; bots[2].dir = "left"; bots[2].ind = 2;
    bots[3].x = 1; bots[3].y = n-2; bots[3].dir = "up"; bots[3].ind = 3;
}
 
function playGame(bots){
    startGame(bots);
    while (bots.length > 1){
        moveBots(bots);
    }
    if (bots.length > 0) ans.push(bots[0].ind);
    return ans;
}
 
function swap(a, b){
    let c = a;
    a = b;
    b = c;
}
 
function findBestInPop(population){
    for (let i=0; i<population.length; ++i){
        swap(population[i], population[Math.floor(Math.random()*(population.length-i-1)) + i+1])
    }
    while(population.length > 16){
        //console.log("population", population.length);
        for (let i=0; i<population.length; i+=4){
            //console.log(i, population.length, population[i]);
            let bots = [population[i], population[i+1], population[i+2], population[i+3]];
            let dead = playGame(bots);
            if (dead[0] < dead[1]){
                let s = dead[0];
                dead[0] = dead[1];
                dead[1] = s;
            }
            population.splice(dead[0]+i, 1);
            population.splice(dead[1]+i, 1);
            i-=2;
            //console.log("asdf", i);
        }
    }
}
 
let isVisualizing = false;
let population = [];
let popSize = 4096;
for (let i=0; i<popSize; ++i){
    population[i] = new AIBot();
}
let bots = [];
function geneticAlgorithm(generations){
    for (let gen=0; gen<generations; ++gen){
        console.log("generation", gen);
        findBestInPop(population);
        for (let i=16; i<popSize/2; ++i){
            population[i] = mutate(population[i%16], 2);
        }for (let i=popSize/2; i<popSize; ++i){
            population[i] = new AIBot();
        }
    }
    bots = [population[0], population[1], population[2], population[3]];
}//playGame(bots);
isVisualizing = false;
let color = ['gray', 'blue', 'yellow', 'red', 'green'];
let t = 0;
function update() {
    if (isVisualizing){
        ++t;
        if (t%10==0) moveBots(bots);
        if (bots.length==0) isVisualizing=false;
    }else{
        geneticAlgorithm(10);
        isVisualizing=true;
        startGame(bots);
    }
}
function draw() {
    if (isVisualizing){
        for(let i=0; i<n; ++i){
            for (let j=0; j<n; ++j){
                context.fillStyle = color[grid[i][j]];
                context.fillRect(i*30, j*30, 29, 29);
            }
        }
    }
};
function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};
function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};
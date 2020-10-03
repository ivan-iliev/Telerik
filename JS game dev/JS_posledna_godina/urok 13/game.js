function orient(ax, ay, bx, by, cx, cy){
    return ax*by + ay*cx + bx*cy - by*cx - ax*cy - ay*bx;
}
 
function crossSegments(ax, ay, bx, by, cx, cy, dx, dy){
    let o1 = orient(ax, ay, bx, by, cx, cy),
        o2 = orient(ax, ay, bx, by, dx, dy),
        o3 = orient(cx, cy, dx, dy, ax, ay),
        o4 = orient(cx, cy, dx, dy, bx, by);
    if (o1*o2 < 0 && o3*o4 < 0) return true;
    if (o1 == 0 && (cx-ax)*(cx-bx) <= 0 && (cy-ay)*(cy-by) <= 0) return true;
    if (o2 == 0 && (dx-ax)*(dx-bx) <= 0 && (dy-ay)*(dy-by) <= 0) return true;
    if (o3 == 0 && (ax-cx)*(ax-dx) <= 0 && (ay-cy)*(ay-dy) <= 0) return true;
    if (o3 == 0 && (bx-cx)*(bx-dx) <= 0 && (by-cy)*(by-dy) <= 0) return true;
    return false;
}
 
function d(x1, y1, x2, y2){
    return Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1));
}
 
class Segment{
    constructor(a,b,c,d,e){
        this.bx = a
        this.by = b
        this.a = c
        this.ex = this.bx + Math.cos(this.a)*200;
        this.ey = this.by + Math.sin(this.a)*200;
    }
    draw(){
        context.beginPath();
        context.moveTo(this.bx, this.by);
        context.lineTo(this.ex, this.ey);
        context.stroke();
    }
}
 
var bx=400, by=300, ex=100, ey=100;
var s = [];
//for (let i=0; i<50; ++i){
  //  s[i] = new Segment();
//}
    s[0]=new Segment(199,478,73);
    s[1]=new Segment(200,200,157);
    s[2]=new Segment(400,250,120);
    s[3]=new Segment(469,456,3)
    s[4]=new Segment(543,378,68)
    s[5]=new Segment(436,257,98)
    s[6]=new Segment(678,289,156)
    s[7]=new Segment(342,167,23)
    s[8]=new Segment(213,374,89)
    s[9]=new Segment(303,203,90)
var cnt = 0;
 
var vx = [], vy = [], e = [], ed = [];
//e[0] = [1, 6, 10]
//ed[0] = [123.5, 100, 56.7]
 
function construct_graph(){
    vx = [bx, ex];
    vy = [by, ey];
    for (let i=0; i<s.length; ++i){
        vx.push(s[i].bx - Math.cos(s[i].a)*5);
        vy.push(s[i].by - Math.sin(s[i].a)*5);
        vx.push(s[i].ex + Math.cos(s[i].a)*5);
        vy.push(s[i].ey + Math.sin(s[i].a)*5);
    }
    e = []; ed = [];
    for (let i=0; i<vx.length; ++i){
        e[i] = [];
        ed[i] = [];
        for (let j=0; j<vx.length; ++j){
            if (i==j) continue;
            let valid = true;
            for (let segm of s){
                if (crossSegments(vx[i], vy[i], vx[j], vy[j], segm.bx, segm.by, segm.ex, segm.ey)){
                    valid = false;
                    break;
                }
            }
            if (valid){
                e[i].push(j);
                ed[i].push(d(vx[i], vy[i], vx[j], vy[j]));
            }
        }
    }
}
 
var distv = [], prev = [];
var used = [];
function dijkstra(){
    distv[0] = 0;
    used[0] = false;
    prev[0] = -1;
    for (let i=1; i<vx.length; ++i){
        distv[i] = -1;
        prev[i] = -1;
        used[i] = false;
    }
    while(!used[1]){
        let ind = -1;
        for (let i=0; i<distv.length; ++i){
            if (!used[i] && distv[i]!=-1){
                if (ind==-1 || (distv[ind] > distv[i])){
                    ind = i;
                }
            }
        }
        if (ind == -1) break;
        for (let i=0; i<e[ind].length; ++i){
            let x = e[ind][i];
            if (distv[x]==-1 || distv[x] > distv[ind] + ed[ind][i]){
                distv[x] = distv[ind] + ed[ind][i];
                prev[x] = ind;
            }
        }
        used[ind] = true;
    }
}
 
var path_found = false;
function find_path(){
    construct_graph();
    dijkstra();
    path_found = true;
}
 
function update() {
    if (isKeyPressed[87]) by -= 5;
    if (isKeyPressed[83]) by += 5;
    if (isKeyPressed[65]) bx -= 5;
    if (isKeyPressed[68]) bx += 5;
    find_path();
        if (prev[1] != -1){
        let dist = d(ex, ey, vx[prev[1]], vy[prev[1]]);
        let dx = (vx[prev[1]]-ex)/dist*1;
        let dy = (vy[prev[1]]-ey)/dist*1;
        ex += dx;
        ey += dy;
    }
}
 
function draw() {
    context.strokeStyle="black";
    for (let segm of s){
        segm.draw();
    }
    context.fillStyle = "red";
    context.fillRect(bx, by, 5, 5);
    context.fillStyle = "blue";
    context.fillRect(ex, ey, 5,  5);
    if (path_found){
        context.strokeStyle = "green";
        context.beginPath();
        let last = 1;
        context.moveTo(vx[last], vy[last]);
        while(last!=-1){
            context.lineTo(vx[last], vy[last]);
            last = prev[last];
        }
        context.stroke();
    }
};
function keyup(key) {
};
function mouseup() {
    console.log("Mouse clicked at", mouseX, mouseY);
    /*if (cnt % 2 == 0){
        bx = mouseX;
        by = mouseY;
    }
    if (cnt % 2 == 1){
        ex = mouseX;
        ey = mouseY;
        find_path();
    }
    ++cnt;*/
};
const c=document.getElementById("waterCanvas");
const ctx=c.getContext("2d");
c.width=window.innerWidth;
c.height=window.innerHeight;

let drops=[];

function create(){
drops.push({
x:Math.random()*c.width,
y:-20,
size:Math.random()*8+4,
speed:Math.random()*3+2,
alpha:Math.random()*0.5+0.3
});
}

function draw(){
ctx.clearRect(0,0,c.width,c.height);
drops.forEach((d,i)=>{
ctx.beginPath();
ctx.moveTo(d.x,d.y);
ctx.bezierCurveTo(d.x-3,d.y+5,d.x-3,d.y+10,d.x,d.y+15);
ctx.bezierCurveTo(d.x+3,d.y+10,d.x+3,d.y+5,d.x,d.y);
ctx.fillStyle="rgba(0,200,255,"+d.alpha+")";
ctx.fill();
d.y+=d.speed;
if(d.y>c.height) drops.splice(i,1);
});
}

function loop(){
if(Math.random()<0.5) create();
draw();
requestAnimationFrame(loop);
}
loop();

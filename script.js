/*==================================================
 NEON X WEBSITE
 SCRIPT.JS PART 1
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

/*==========================
 LOADER
==========================*/

const loader = document.getElementById("loader");

window.addEventListener("load", () => {

setTimeout(() => {

loader.style.opacity = "0";
loader.style.visibility = "hidden";

setTimeout(() => {

loader.remove();

},800);

},1200);

});

/*==========================
 SCROLL BUTTON
==========================*/

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

if(window.scrollY > 300){

scrollBtn.style.opacity="1";
scrollBtn.style.pointerEvents="auto";
scrollBtn.style.transform="translateY(0px)";

}else{

scrollBtn.style.opacity="0";
scrollBtn.style.pointerEvents="none";
scrollBtn.style.transform="translateY(25px)";

}

});

scrollBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*==========================
 CURSOR GLOW
==========================*/

const cursor=document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

});

/*==========================
 CARD TILT
==========================*/

const card=document.querySelector(".glass-card");

document.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*16;

const rotateX=((y/rect.height)-0.5)*-16;

card.style.transform=

`perspective(1200px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.02)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=

`perspective(1200px)
rotateX(0deg)
rotateY(0deg)
scale(1)`;

});

/*==========================
 IMAGE HOVER
==========================*/

const image=document.querySelector(".image-box img");

image.addEventListener("mouseenter",()=>{

image.style.transform="scale(1.08) rotate(2deg)";

});

image.addEventListener("mouseleave",()=>{

image.style.transform="scale(1) rotate(0deg)";

});

/*==========================
 BUTTON RIPPLE
==========================*/

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mousemove",(e)=>{

const x=e.offsetX;
const y=e.offsetY;

btn.style.setProperty("--x",x+"px");
btn.style.setProperty("--y",y+"px");

});
/*==================================================
SCRIPT.JS PART 2
PREMIUM EFFECTS
==================================================*/

/*==========================
 FLOATING PARTICLES
==========================*/

const particleContainer=document.querySelector(".particles");

function createParticle(){

const p=document.createElement("span");

const size=Math.random()*8+4;

p.style.width=size+"px";
p.style.height=size+"px";

p.style.left=Math.random()*100+"%";

p.style.animationDuration=(Math.random()*8+8)+"s";

p.style.opacity=Math.random();

particleContainer.appendChild(p);

setTimeout(()=>{

p.remove();

},16000);

}

setInterval(createParticle,350);

/*==========================
 SHOOTING STARS
==========================*/

function shootingStar(){

const star=document.createElement("div");

star.className="spark";

star.style.left=Math.random()*window.innerWidth+"px";

star.style.top="-20px";

star.style.width=(Math.random()*120+80)+"px";

star.style.transform=`rotate(${Math.random()*40-20}deg)`;

document.body.appendChild(star);

let y=-20;

const speed=Math.random()*6+5;

const timer=setInterval(()=>{

y+=speed;

star.style.top=y+"px";

if(y>window.innerHeight+200){

clearInterval(timer);

star.remove();

}

},16);

}

setInterval(shootingStar,3000);

/*==========================
 SCROLL REVEAL
==========================*/

const reveals=document.querySelectorAll(

".info-card,.feature-card,.premium-box,.contact-area"

);

function revealElements(){

reveals.forEach(el=>{

const top=el.getBoundingClientRect().top;

if(top<window.innerHeight-80){

el.style.opacity="1";

el.style.transform="translateY(0px)";

}

});

}

reveals.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition=".8s";

});

window.addEventListener("scroll",revealElements);

revealElements();

/*==========================
 BUTTON GLOW
==========================*/

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.filter="brightness(1.2)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.filter="brightness(1)";

});

});

/*==========================
 ONLINE DOT
==========================*/

const dot=document.querySelector(".dot");

setInterval(()=>{

dot.style.transform="scale(1.5)";

setTimeout(()=>{

dot.style.transform="scale(1)";

},300);

},1200);

/*==========================
 RANDOM RGB GLOW
==========================*/

const rgbColors=[

"#00F5FF",

"#8A2EFF",

"#3B82F6",

"#00FF99"

];

setInterval(()=>{

const color=rgbColors[Math.floor(Math.random()*rgbColors.length)];

document.documentElement.style.setProperty("--cyan",color);

},5000);
 
});

/*==========================
 CONSOLE
==========================*/

console.log("🔥 NEON X Loaded Successfully");

});
/*==================================================
SCRIPT.JS PART 3
FINAL EFFECTS
==================================================*/

/*==========================
 PARALLAX BACKGROUND
==========================*/

const auroras=document.querySelectorAll(".aurora");

document.addEventListener("mousemove",(e)=>{

const x=(e.clientX/window.innerWidth)-0.5;
const y=(e.clientY/window.innerHeight)-0.5;

auroras.forEach((a,index)=>{

const speed=(index+1)*18;

a.style.transform=

`translate(${x*speed}px,${y*speed}px)`;

});

});

/*==========================
 FLOATING GLOW
==========================*/

document.querySelectorAll(".floating-glow").forEach((glow,index)=>{

setInterval(()=>{

const x=(Math.random()*40)-20;
const y=(Math.random()*40)-20;

glow.style.transform=

`translate(${x}px,${y}px) scale(${1+Math.random()/4})`;

},4000+(index*700));

});

/*==========================
 CARD SHINE
==========================*/

const inner=document.querySelector(".card-inner");

setInterval(()=>{

inner.style.boxShadow=

`0 0 30px rgba(0,245,255,.25),
0 0 80px rgba(138,46,255,.18)`;

setTimeout(()=>{

inner.style.boxShadow="none";

},1200);

},5000);

/*==========================
 CURSOR SCALE
==========================*/

const cursor=document.querySelector(".cursor-glow");

document.querySelectorAll("a,button,.info-card,.feature-card").forEach(el=>{

el.addEventListener("mouseenter",()=>{

cursor.style.width="80px";
cursor.style.height="80px";
cursor.style.opacity=".45";

});

el.addEventListener("mouseleave",()=>{

cursor.style.width="35px";
cursor.style.height="35px";
cursor.style.opacity=".22";

});

});

/*==========================
 MOBILE SUPPORT
==========================*/

if("ontouchstart" in window){

document.body.classList.add("touch-device");

}

/*==========================
 PAGE FADE
==========================*/

window.addEventListener("pageshow",()=>{

document.body.style.opacity="1";

});

window.addEventListener("beforeunload",()=>{

document.body.style.opacity=".98";

});

/*==========================
 FPS OPTIMIZATION
==========================*/

let ticking=false;

window.addEventListener("scroll",()=>{

if(!ticking){

window.requestAnimationFrame(()=>{

revealElements();

ticking=false;

});

ticking=true;

}

});

/*==========================
 RANDOM TITLE EFFECT
==========================*/

const titles=[

"KARAN FF",

"FREE FIRE MAX",

"NEON X"

];

let titleIndex=0;

setInterval(()=>{

const title=document.querySelector(".hero h1");

if(title){

titleIndex=(titleIndex+1)%titles.length;

title.textContent=titles[titleIndex];

}

},5000);

/*==========================
 END
==========================*/

console.log("🚀 NEON X Premium Website Ready!");

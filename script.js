/*==================================================
 FREE FIRE PREMIUM WEBSITE
 SCRIPT.JS
 PART 1
==================================================*/

document.addEventListener("DOMContentLoaded",()=>{

/*==============================
LOADER
==============================*/

const loader=document.getElementById("loader");

window.addEventListener("load",()=>{

setTimeout(()=>{

loader.style.opacity="0";
loader.style.visibility="hidden";

},1200);

});

/*==============================
MOUSE GLOW
==============================*/

const glow=document.querySelector(".mouse-glow");

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";

});

/*==============================
CARD TILT
==============================*/

const card=document.querySelector(".card");

document.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/30;

const y=(window.innerHeight/2-e.clientY)/30;

card.style.transform=
`rotateY(${x}deg) rotateX(${-y}deg)`;

});

document.addEventListener("mouseleave",()=>{

card.style.transform=
"rotateY(0deg) rotateX(0deg)";

});

/*==============================
BUTTON HOVER
==============================*/

const buttons=document.querySelectorAll(".contact a");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

/*==============================
RGB SHADOW
==============================*/

const colors=[
"#00ffff",
"#00ff88",
"#ff00ff",
"#00bfff"
];

setInterval(()=>{

const c=
colors[Math.floor(Math.random()*colors.length)];

card.style.boxShadow=
`0 0 35px ${c}`;

},2000);
/*==============================
FLOATING PARTICLES
==============================*/

function createParticle(){

const particle=document.createElement("div");

particle.className="particle";

const size=Math.random()*6+2;

particle.style.width=size+"px";
particle.style.height=size+"px";

particle.style.left=Math.random()*window.innerWidth+"px";

particle.style.top=window.innerHeight+"px";

document.body.appendChild(particle);

let pos=window.innerHeight;

const speed=Math.random()*3+2;

const move=setInterval(()=>{

pos-=speed;

particle.style.top=pos+"px";

if(pos<-20){

clearInterval(move);

particle.remove();

}

},20);

}

setInterval(createParticle,250);

/*==============================
SHOOTING STAR
==============================*/

function shootingStar(){

const star=document.createElement("div");

star.className="shooting-star";

star.style.top=Math.random()*250+"px";

star.style.left="-250px";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},3000);

}

setInterval(shootingStar,3500);

/*==============================
PROFILE IMAGE EFFECT
==============================*/

const profile=document.querySelector(".profile");

profile.addEventListener("mouseenter",()=>{

profile.style.transform="scale(1.04)";

});

profile.addEventListener("mouseleave",()=>{

profile.style.transform="scale(1)";

});

/*==============================
SCROLL REVEAL
==============================*/

const revealItems=document.querySelectorAll(".card");

function reveal(){

revealItems.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<window.innerHeight-100){

item.style.opacity="1";

item.style.transform="translateY(0px)";

}

});

}

window.addEventListener("scroll",reveal);

reveal();

/*==============================
WINDOW RESIZE
==============================*/

window.addEventListener("resize",()=>{

card.style.transform="rotateX(0deg) rotateY(0deg)";

});

/*==============================
CONSOLE MESSAGE
==============================*/

console.log("🔥 Free Fire Premium Website Loaded Successfully");

/*==============================
END OF SCRIPT
==============================*/

});
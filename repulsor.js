const battlefield =
document.getElementById(
"battlefield"
);

const crosshair =
document.getElementById(
"crosshair"
);

const scoreText =
document.getElementById(
"score"
);

const accuracyText =
document.getElementById(
"accuracy"
);

const achievement =
document.getElementById(
"achievement"
);

const nextBtn =
document.getElementById(
"nextBtn"
);

const homeBtn =
document.getElementById(
"homeBtn"
);

const beam =
document.getElementById(
"beam"
);

let score = 0;
let shots = 0;
let hits = 0;

battlefield.addEventListener(
"mousemove",
e=>{

const rect =
battlefield.getBoundingClientRect();

crosshair.style.left =
(e.clientX - rect.left)
+ "px";

crosshair.style.top =
(e.clientY - rect.top)
+ "px";

});

function updateAccuracy(){

let accuracy =
Math.round(
(hits /
Math.max(shots,1))
*100
);

accuracyText.textContent =
accuracy + "%";

}

function shootBeam(x,y){

beam.style.display =
"block";

beam.style.left =
"90px";

beam.style.top =
(window.innerHeight - 180)
+ "px";

const dx =
x - 90;

const dy =
y - (window.innerHeight - 180);

const angle =
Math.atan2(dy,dx)
* 180 / Math.PI;

const length =
Math.sqrt(
dx * dx +
dy * dy
);

beam.style.width =
length + "px";

beam.style.transform =
`rotate(${angle}deg)`;

setTimeout(()=>{

beam.style.display =
"none";

},100);

}

function spawnTarget(){

const target =
document.createElement(
"div"
);

target.className =
"target";

let x =
Math.random() *
(window.innerWidth - 450)
+ 250;

let y =
Math.random() *
(window.innerHeight - 200)
+ 100;

target.style.left =
x + "px";

target.style.top =
y + "px";

battlefield.appendChild(
target
);

let dir = 1;

const move =
setInterval(()=>{

x += 2 * dir;

if(
x > window.innerWidth - 200
){
dir = -1;
}

if(
x < 250
){
dir = 1;
}

target.style.left =
x + "px";

},16);

target.addEventListener(
"click",
()=>{

shots++;
hits++;
score++;

updateAccuracy();

scoreText.textContent =
score;

shootBeam(
x,
y
);

target.classList.add(
"explosion"
);

clearInterval(
move
);

setTimeout(()=>{

target.remove();

},400);

if(score === 10){

achievement.style.display =
"block";

achievement.innerText =
"TARGET SPECIALIST";

setTimeout(()=>{

achievement.style.display =
"none";

},2500);

}

if(score >= 20){

nextBtn.style.display =
"block";

homeBtn.style.display =
"block";

}

});

setTimeout(()=>{

if(target.parentNode){

clearInterval(
move
);

target.remove();

}

},5000);

}

battlefield.addEventListener(
"click",
e=>{

if(
!e.target.classList.contains(
"target"
)
){

shots++;

updateAccuracy();

}

});

setInterval(
spawnTarget,
1000
);

localStorage.setItem(
"repulsorTraining",
"completed"
);

nextBtn.addEventListener(
"click",
()=>{

alert(
"GAME 3 UNLOCKED!"
);

window.location.href =
"assembly.html";

});

homeBtn.addEventListener(
"click",
()=>{

window.location.href =
"home.html";

});
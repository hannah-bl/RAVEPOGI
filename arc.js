let power = 0;

const reactorArea =
document.getElementById("reactorArea");

const reactor =
document.getElementById("reactor");

const percent =
document.getElementById("percent");

const status =
document.getElementById("status");

const progressFill =
document.getElementById("progressFill");

const nextBtn =
document.getElementById("nextBtn");
const homeBtn =
document.getElementById("homeBtn");

reactorArea.addEventListener("click",()=>{

    if(power >= 100) return;

    power +=
    Math.floor(Math.random()*6)+4;

    if(power > 100)
        power = 100;

    percent.innerHTML =
    power + "%";

    progressFill.style.width =
    power + "%";

    const glow =
    20 + power * 1.5;

    reactor.style.filter =

    `drop-shadow(
    0 0 ${glow}px
    #00d9ff)`;

    reactor.style.transform =

    `translate(-50%,-50%)
    scale(${1 + power/250})`;

    if(power < 25){

        status.innerHTML =
        "INITIALIZING REACTOR";

    }else if(power < 50){

        status.innerHTML =
        "CHARGING POWER CORE";

    }else if(power < 75){

        status.innerHTML =
        "ENERGY OUTPUT STABLE";

    }else if(power < 100){

        status.innerHTML =
        "MAXIMUM POWER APPROACHING";

    }

    if(power === 100){

    localStorage.setItem(
        "arcReactor",
        "completed"
    );

    status.innerHTML =

    `
    ARC REACTOR ONLINE
    <br>
    MISSION COMPLETE
    `;

    nextBtn.style.display =
    "inline-block";

    homeBtn.style.display =
    "inline-block"; 
}

    localStorage.setItem(
    "arcReactor",
    "completed"
);

});

nextBtn.addEventListener("click",()=>{

    window.location.href =
    "repulsor.html";

});

homeBtn.addEventListener("click",()=>{

    window.location.href =
    "home.html";

});
const parts =
document.querySelectorAll(".part");

const slots =
document.querySelectorAll(".slot");

const progress =
document.getElementById("progress");

const completeBox =
document.getElementById("completeBox");

const nextBtn =
document.getElementById("nextBtn");

const homeBtn =
document.getElementById("homeBtn");

let assembled = 0;

parts.forEach(part=>{

part.addEventListener(
"dragstart",
()=>{

part.classList.add("dragging");

});

part.addEventListener(
"dragend",
()=>{

part.classList.remove("dragging");

});

});

slots.forEach(slot=>{

slot.addEventListener(
"dragover",
e=>{

e.preventDefault();

});

slot.addEventListener(
"drop",
e=>{

e.preventDefault();

const dragged =
document.querySelector(
".dragging"
);

if(!dragged) return;

const partName =
dragged.id;

const slotName =
slot.id.replace("-slot","");

if(partName === slotName){

    slot.appendChild(dragged);
    slot.style.border = "none";
    slot.style.background = "transparent";

    dragged.style.height = "100%";
    dragged.style.width = "auto";

    dragged.draggable = false;

    assembled++;

    const percent =
    Math.floor((assembled/6)*100);

    progress.textContent =
    percent + "%";

    if(assembled === 6){

        completeBox.style.display =
        "block";

    }

    localStorage.setItem(
    "suitAssembly",
    "completed"
);

}

});

});

nextBtn.addEventListener(
"click",
()=>{

window.location.href =
"quiz.html";

});

homeBtn.addEventListener(
"click",
()=>{

window.location.href =
"home.html";

});
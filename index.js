const progressBar =
document.getElementById("progress");

const percent =
document.getElementById("percent");

const logs =
document.getElementById("logs");

const steps =
document.querySelectorAll(".step");

const messages = [

"Initializing J.A.R.V.I.S...",
"Loading Core Systems...",
"Checking User Data...",
"Scanning Security Modules...",
"Connecting Network...",
"Preparing Dashboard...",
"System Ready."

];

let progress = 0;
let stepIndex = 0;

const boot = setInterval(()=>{

    progress++;

    progressBar.style.width =
    progress + "%";

    percent.innerHTML =
    progress + "%";

    if(progress % 15 === 0 &&
       stepIndex < messages.length){

        logs.innerHTML +=
        "> " + messages[stepIndex] + "<br>";

        steps.forEach(step =>
        step.classList.remove("active"));

        if(steps[stepIndex])
        steps[stepIndex]
        .classList.add("active");

        stepIndex++;
    }

    if(progress >= 100){

        clearInterval(boot);

        logs.innerHTML +=
        "<br><span style='color:#00ff88'>BOOT COMPLETE</span>";

        setTimeout(()=>{

            window.location.href =
            "boot.html";

        },2000);
    }

},80);
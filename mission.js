const arc =
localStorage.getItem("arcReactor")
=== "completed";

const repulsor =
localStorage.getItem("repulsorTraining")
=== "completed";

const assembly =
localStorage.getItem("suitAssembly")
=== "completed";

const quiz =
localStorage.getItem("jarvisQuiz")
=== "completed";

if(arc){

    const el =
    document.getElementById("arcStatus");

    el.innerHTML = "COMPLETED";
    el.classList.add("complete");
}

if(repulsor){

    const el =
    document.getElementById("repulsorStatus");

    el.innerHTML = "COMPLETED";
    el.classList.add("complete");
}

if(assembly){

    const el =
    document.getElementById("assemblyStatus");

    el.innerHTML = "COMPLETED";
    el.classList.add("complete");
}

if(quiz){

    const el =
    document.getElementById("quizStatus");

    el.innerHTML = "COMPLETED";
    el.classList.add("complete");
}

const allComplete =

arc &&
repulsor &&
assembly &&
quiz;

if(allComplete){

    document
    .getElementById("secretStatus")
    .innerHTML =
    "ACCESS GRANTED";

    const secret =
    document
    .getElementById("secretMission");

    secret.href =
    "secret.html";

    secret.classList
    .remove("locked");
}
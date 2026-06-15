let blown = false;

document
.getElementById("blowBtn")
.addEventListener("click",()=>{

    if(blown) return;

    blown = true;

    document
    .getElementById("flame1")
    .style.opacity = "0";

    document
    .getElementById("flame2")
    .style.opacity = "0";

    document
    .getElementById("status")
    .innerHTML =

    "WISH STATUS: RECORDED";

});

document
.getElementById("dashboardBtn")
.addEventListener("click",()=>{

    window.location.href =
    "home.html";

});
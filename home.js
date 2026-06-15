const button = document.getElementById("startMission");
button.addEventListener("click", () => {
    button.innerHTML = "MISSION STARTED";
    button.style.color = "#00d9ff";
    button.style.borderColor = "#00d9ff";
    button.style.boxShadow =
    "0 0 20px #00d9ff";
});


function updateClock(){
    const now = new Date();
    const time = now.toLocaleTimeString(
        "en-PH",
        {
            timeZone: "Asia/Manila",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true
        }
    );

    const date = now.toLocaleDateString(
        "en-PH",
        {
            timeZone: "Asia/Manila",
            year: "numeric",
            month: "long",
            day: "numeric"
        }
    );

    document.getElementById("clock").innerHTML =
        `${time}<br><small>${date}</small>`;
}

setInterval(updateClock, 1000);
updateClock();
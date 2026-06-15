const arcStatus =
document.getElementById(
    "arcReactorStatus"
);

if(
    localStorage.getItem(
        "arcReactor"
    ) === "completed"
){

    arcStatus.innerHTML =
    "✓ COMPLETED";

    arcStatus.style.color =
    "#00ff88";
}
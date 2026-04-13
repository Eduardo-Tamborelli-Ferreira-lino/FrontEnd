const champions = document.querySelectorAll(".champion");
const card = document.querySelectorAll(".champions-card");

champions.forEach(champion => {
    champion.addEventListener("dragstart", dragStart);
    champion.addEventListener("dragend", dragEnd);
});

card.forEach(zones => {
    zones.addEventListener("dragover", dragOver);
    zones.addEventListener("drop", dropElement)
});

function dragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
    e.target.classList.add("dragging")
}

function dragEnd(e) {
    e.target.classList.remove("dragging")
    console.log("Drag finalizado")
}

function dragOver(e) {
    e.preventDefault();
}

function dropElement(e) {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    const elementDrag = document.getElementById(id);
    e.currentTarget.appendChild(elementDrag);
}
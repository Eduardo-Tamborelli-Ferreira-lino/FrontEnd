const champions = document.querySelectorAll(".champion");
const card = document.querySelectorAll(".champions-card");
const filtersBtn = document.querySelectorAll(".filter-btn");

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


filtersBtn.forEach(btn => {
    btn.addEventListener("click", function () {
        filtersBtn.forEach(b => b.classList.remove("active"));
        this.classList.add("active");
        const filterSelect = this.innerText.toLocaleLowerCase();
        champions.forEach(champion => {
            const roles = champion.getAttribute("data-role").toLocaleLowerCase();
            if (filterSelect === "all" || filterSelect === "todos") {
                champion.style.display = "flex";
            }
            else if (roles.includes(filterSelect)) {
                champion.style.display = "flex";
            }
            else {
                champion.style.display = "none";
            }
        });
    })
});

window.addEventListener('dragover', (e) => {
    const threshold = 100; // Distância da borda em pixels para começar a rolar
    if (e.clientY < threshold) {
        window.scrollBy(0, -10); // Sobe a página
    } else if (window.innerHeight - e.clientY < threshold) {
        window.scrollBy(0, 10); // Desce a página
    }
});
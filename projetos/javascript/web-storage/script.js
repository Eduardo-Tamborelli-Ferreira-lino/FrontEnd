const addBtn = document.getElementById("add");
const clearBtn = document.getElementById("clear");
const userName = document.getElementById("name");
const user = document.getElementById("user");
const userList = document.getElementById("users-list");
const line = document.getElementById("line-divider");
const visitCountDisplay = document.getElementById("visit-count");
const themaBtn = document.getElementById("thema-btn");
const header = document.getElementById("header");
const footer = document.getElementById("footer");

function updateVisitCount() {
    let count = parseInt(localStorage.getItem("VisitCount")) || 0;
    count++;
    localStorage.setItem("VisitCount", count);
    visitCountDisplay.textContent = count;
}

function verifyOption() {
    const userThema = localStorage.getItem("Thema");
    if (userThema === "light") {
        document.body.classList.add("light-mode");
        header.classList.add("light-mode");
        line.classList.add("light-mode");
        userList.classList.add("light-mode");
        user.classList.add("light-mode");
        footer.classList.add("light-mode");
        themaBtn.classList.add("light-mode");
        themaBtn.innerHTML = "";
        themaBtn.innerHTML = "🌑";
        return;
    }
    return;
}

function saveName() {

    const userValue = user.value.trim();

    if (userValue === "") {
        alert("Pls enter a name");
        return;
    }

    localStorage.setItem("UserName", userValue);

    const currentList = JSON.parse(localStorage.getItem("UserList")) || [];
    currentList.push(userValue);
    localStorage.setItem("UserList", JSON.stringify(currentList));

    renderAll();
    user.value = "";
}

function renderAll() {
    const savedName = localStorage.getItem("UserName");
    if (savedName) {
        userName.innerHTML = `<h2>${savedName}</h2>`;
    }

    const savedNames = JSON.parse(localStorage.getItem("UserList")) || [];
    userList.innerHTML = "";

    savedNames.forEach((name, index) => {
        const h3 = document.createElement("h3");
        h3.textContent = name;
        userList.appendChild(h3);

        if (index < savedNames.length - 1) {
            const hr = document.createElement("hr");
            hr.className = "line-divider-table";
            userList.appendChild(hr);
        }
    });
}

function alterThema() {
    header.classList.toggle("light-mode");
    line.classList.toggle("light-mode");
    userList.classList.toggle("light-mode");
    user.classList.toggle("light-mode");
    footer.classList.toggle("light-mode");
    themaBtn.classList.toggle("light-mode");
    return;
}

addBtn.addEventListener("click", saveName);

clearBtn.addEventListener("click", () => {
    localStorage.removeItem("UserName");
    localStorage.removeItem("UserList");
    user.innerHTML = "";
    userList.innerHTML = "";
});

themaBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
        alterThema();
        const option = "light";
        themaBtn.innerHTML = "";
        themaBtn.innerHTML = "🌑";
        localStorage.setItem("Thema", option);
    }
    else {
        alterThema()
        themaBtn.innerHTML = "";
        themaBtn.innerHTML = "☀️";
        const option = "dark";
        localStorage.setItem("Thema", option);
    }
});

renderAll();
updateVisitCount();
verifyOption();
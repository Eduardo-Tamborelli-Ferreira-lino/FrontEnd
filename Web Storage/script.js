const addBtn = document.getElementById("add");
const clearBtn = document.getElementById("clear");
const userName = document.getElementById("name");
const user = document.getElementById("user");
const userList = document.getElementById("users-list");
const line = document.getElementById("line-divider");
const visitCountDisplay = document.getElementById("visit-count");

function updateVisitCount() {
    let count = parseInt(localStorage.getItem("VisitCount")) || 0;
    count++;
    localStorage.setItem("VisitCount", count);
    visitCountDisplay.textContent = count;
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
            hr.className = "line-divider";
            userList.appendChild(hr);
        }
    });
}

addBtn.addEventListener("click", saveName);

clearBtn.addEventListener("click", () => {
    localStorage.removeItem("UserName");
    localStorage.removeItem("UserList");
    user.innerHTML = "";
    userList.innerHTML = "";
});

renderAll();
updateVisitCount();
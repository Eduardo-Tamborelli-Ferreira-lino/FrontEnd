let counter = 0;

// Counter
const display = document.getElementById("counter-panel");
const btnAdd = document.getElementById("add-btn");
const btnMinus = document.getElementById("decrease-btn");

// Background
const darkBtn = document.getElementById("alter-btn");

// Title
const title = document.getElementById("main-title");
const fontBtn = document.getElementById("font-title-btn");
const titleColorBtn = document.getElementById("color-title-btn");

// Paragraph
const paragraph = document.getElementById("main-p");
const pFontBtn = document.getElementById("font-p-btn");
const pColorBtn = document.getElementById("color-p-btn");

// Change All
const changeAll = document.getElementById("change-all");

// Fonts
const fontStyles = ['Bitcount Grid Double', 'Fjalla One', 'Inconsolata', 'Inter', 'Montserrat', 'Oswald', 'Outfit', 'Playfair Display', 'Playwrite NO', 'Poppins', 'Roboto Slab', 'Roboto', 'Saira', 'Sekuya', 'Spectral'];

display.textContent = counter;

function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

function getRandomFont() {
    const font = Math.floor(Math.random() * 15);

    return fontStyles[font];
}

function changeBackground() {
    document.body.style.backgroundColor = getRandomRGB();
}

function changeTitleColor() {
    title.style.color = getRandomRGB();
}

function changeTitleFont() {
    title.style.fontFamily = getRandomFont();
}

function changePColor() {
    paragraph.style.color = getRandomRGB();
}

function changePFont() {
    paragraph.style.fontFamily = getRandomFont();
}

btnAdd.addEventListener("click", function () {
    counter++;
    display.textContent = counter;
});

btnMinus.addEventListener("click", function () {
    counter--;
    display.textContent = counter;
});

darkBtn.addEventListener("click", function () {
    changeBackground();
});

titleColorBtn.addEventListener("click", function () {
    changeTitleColor();
});

fontBtn.addEventListener("click", function () {
    changeTitleFont();
});

pFontBtn.addEventListener("click", function () {
    changePFont();
});

pColorBtn.addEventListener("click", function () {
    changePColor();
});

changeAll.addEventListener("click", function () {
    changeBackground();
    changeTitleColor();
    changeTitleFont();
    changePColor();
    changePFont();
});
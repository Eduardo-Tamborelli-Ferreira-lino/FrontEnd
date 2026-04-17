const myInput = document.querySelector("#nome-input");
const myTitle = document.querySelector("#cartao-nome");

// Make the input update in card
myInput.addEventListener("input", () => {
    myTitle.textContent = myInput.value;
});

const myBtnGreen = document.querySelector("#btn-verde");
const myCard = document.querySelector("#cartao");

// Make de card change the color to green on click
myBtnGreen.addEventListener("click", () => {
    myCard.classList.remove("fundo-azul");
    myCard.classList.add("fundo-verde");
});

const myBtnBlue = document.querySelector("#btn-azul");

// Make de card change the color to blue on click
myBtnBlue.addEventListener("click", () => {
    myCard.classList.remove("fundo-verde");
    myCard.classList.add("fundo-azul");
});

const myBtnFont = document.querySelector("#btn-fonte");

// Alter the font
myBtnFont.addEventListener("click", () => {

    myCard.classList.toggle("fonte-alternativa");

});

const mySelectIcon = document.querySelector("#imagem-select");
const myCardImage = document.querySelector("#cartao-img");

// Input the icon chose;
mySelectIcon.addEventListener("change", () => {

    myCardImage.src = mySelectIcon.value;

});

const mySkillInput = document.querySelector("#habilidade-input");
const myBtnAdd = document.querySelector("#btn-adicionar");
const myListSkill = document.querySelector("#lista-habilidades");

// Create hability for the card
myBtnAdd.addEventListener("click", () => {

    const textInput = mySkillInput.value;

    if (textInput.trim() !== "") {

        const newSkill = document.createElement("li");

        newSkill.textContent = textInput;

        myListSkill.appendChild(newSkill);

        mySkillInput.value = "";
    }

});
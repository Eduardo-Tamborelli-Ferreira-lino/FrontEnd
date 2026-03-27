const prompt = require('prompt-sync')();
console.log(`1 - Questão 1
2 - Questão 2
3 - Questão 3
4 - Questão 4
5 - Questão 5
6 - Questão 6
7 - Questão 7
8 - Questão 8
9 - Questão 9
10 - Questão 10
11- Questão 11
12 - Questão 12
13 - Questão 13
14 - Questão 14
0 - Sair
`)
let opcao = parseInt(prompt())
switch (opcao) {
    case 1: {
        questao1()
        break
    }
    case 2: {
        questao2()
        break
    }
    case 3: {
        questao3()
        break
    }
    case 4: {
        questao4()
        break
    }
    case 5: {
        questao5()
        break
    }
    case 6: {
        questao6()
        break
    }
    case 7: {
        questao7()
        break
    }
    case 8: {
        questao8()
        break
    }
    case 9: {
        questao9()
        break
    }
    case 10: {
        questao10()
        break
    }
    case 11: {
        questao11()
        break
    }
    case 12: {
        questao12()
        break
    }
    case 13: {
        questao13()
        break
    }
    case 14: {
        questao14()
        break
    }
    case 0: {
        process.exit(0);
    }
}
// Questão 1
function questao1() {
    let number = prompt("Insira O Número Que Você Deseja Verificar Se É Negativo Ou Positivo. ");
    if (number === 0) {
        console.log(`Seu Número é zero `);
    }
    else if (number < 0) {
        console.log(`Seu Número ${number} é Negativo `);
    }
    else if (number > 0) {
        console.log(`Seu Número ${number} é Positivo `);
    }
}


// Questão 2
function questao2() {
    let soma = 0;
    let notas;
    let qtdNotas = parseInt(prompt(`Insira a quantidade de notas que você tem: `));
    for (let i = 0; i < qtdNotas; i++) {
        notas = parseInt(prompt(`Insira a ${i + 1}° nota: `));
        soma += notas;
    }
    let media = soma / qtdNotas;
    if (media < 3) {
        console.log(`Você foi Reprovado Parabens`);
    }
    else if (media > 7) {
        console.log(`Droga Você Foi Aprovado`);
    }
    else if (media >= 3 && media < 7) {
        console.log(`Pegou Exame Lenda`);
    }
    else if (media == 10) {
        console.log(`Tu é Bom, Aprovado com Excelência
            Go Drinking `);
    }
}

// Questão 3
function questao3() {
    let multiplos = new Array;
    let number = 0;
    do {
        if (number % 3 === 0) {
            multiplos.push(number);
        }
        number += 1;
    } while (number <= 30)
    console.log(`Os Multiplos de 3 são: `);
    for (let i = 0; i < multiplos.length; i++) {
        console.log(`${multiplos[i]}`);
    }
}

// Questão 4
function questao4() {
    let number = parseInt(prompt(`Insira O Número que deseja vizualizar o fatorial `));
    let soma = number;
    if (number == 1 || number == 0) {
        console.log(`O fatorial é 1`)
        return
    }
    for (let i = (number - 1); i > 1; i--) {
        soma *= i
    }
    console.log(`O fatorial é ${soma}`)
}

// Questão 5
function questao5() {
    let ano = Number(prompt("Insira o ano que deseja conferir se é bissexto ou não: "))
    if (ano % 4 === 0 && ano % 100 != 0 || ano % 400 === 0) {
        console.log(`O ano ${ano} é bissexto`)
    }
    else {
        console.log(`O ano ${ano} não é bissexto`)
    }
}

// Questão 6
function questao6() {
    let c = Number(prompt("Insira a temperatura em celsius: "))
    let fahrenheit = (c * 9 / 5) + 32
    console.log(`${c}° celsius é igual a ${fahrenheit}° fahrenheit`)
}

// Questão 7
function questao7() {
    let palavra = prompt("Insira Uma Palavra Para Verificar se Ela é ou Não um Palindromo: ").toLocaleLowerCase()
    let invertida = palavra.split("").reverse().join("")
    if (palavra == invertida) {
        console.log(`A Palavra ${palavra} é um palindromo `)
    }
    else {
        console.log(`A Palavra ${palavra} não é um palindromo `)
    }
}

// Questão 8
function questao8() {
    let number = 1;
    let soma = 0
    do {
        soma += number
        number++
    } while (number <= 100)
    console.log(soma)
}

// Questão 9
function questao9() {
    let tabuada = []
    let multiplicador = 1;
    do {
        tabuada.push(5 * multiplicador)
        multiplicador++
    } while (multiplicador <= 10)
    console.log(tabuada)
}

// Questão 10
function questao10() {
    let number = 10
    while (number > 0) {
        console.log(number)
        number--
    }
}

// Questão 11
function questao11() {
    let number = 1
    while (number <= 30) {
        if (number % 3 === 0 && number % 5 === 0) {
            console.log("FizzBuzz")
        }
        else if (number % 5 === 0) {
            console.log("Buzz")
        }
        else if (number % 3 === 0) {
            console.log("Fizz")
        }
        else {
            console.log(number)
        }
        number++
    }
}

// Questão 12
function questao12() {
    let number = 1;
    let sequencia = ""
    do {
        if (number == 5) {
            sequencia += number + "."
        }
        else {
            sequencia += number + "-"
        }
        number++
    } while (number <= 5)
    console.log(sequencia)
}

// Questão 13
function questao13() {
    let linha = [" ", " ", " ", " ", "*", " ", " ", " ", " "]
    let indexLeft = 3
    let indexRight = 5
    for (let i = 0; i <= 7; i++) {
        if (i >= 5) {
            triangulo = ""
            indexLeft = 3
            indexRight = 5
            for (let j = 0; j < 9; j++) {
                linha[indexLeft] = ("*")
                linha[indexRight] = ("*")
                triangulo += linha[j]
            }
            console.log(triangulo)
        }
        else {
            let triangulo = ""
            for (let j = 0; j < 9; j++) {
                triangulo += linha[j]
            }
            console.log(triangulo)
            linha[indexLeft] = ("*")
            linha[indexRight] = ("*")
            indexLeft--
            indexRight++
            if(i == 4){
                linha = [" ", " ", " ", " ", "*", " ", " ", " ", " "]
            }
        }
    }
}

function questao14() {
    let palavra = prompt("Insira uma Palavra: ")
    let invertida = palavra.split("").reverse().join("")
    console.log(palavra)
    console.log(invertida)
}
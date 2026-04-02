const prompt = require('prompt-sync')();

// Arrows Functions
let produto = (valor1, valor2) => valor1 * valor2;

while (true) {
    console.log(`
    Lista - 2
    --------------------
    | 1 - Questão 1    |
    | 2 - Questão 2    |
    | 3 - Questão 3    |
    | 4 - Questão 4    |
    | 5 - Questão 5    |
    | 6 - Questão 6    |
    | 7 - Questão 7    |
    | 8 - Questão 8    |
    | 9 - Questão 9    |
    | 10 - Questão 10  |
    | 11- Questão 11   |
    | 12 - Questão 12  |
    | 13 - Questão 13  |
    | 14 - Questão 14  |
    | 0 - Sair         |
    --------------------
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
}

function questao1() {
    let valor1 = Number(prompt("Insira O Primeiro Valor: "));
    let valor2 = Number(prompt("Insira O Segundo Valor: "));
    let soma = adicionar(valor1, valor2);
    console.log(`\nA Soma Do Valor ${valor1} + ${valor2} = ${soma}`)
}

function adicionar(valor1, valor2) {
    let soma = 0;
    return soma = valor1 + valor2;
}

function questao2() {
    let valor1 = Number(prompt("Insira O Primeiro Valor: "));
    let valor2 = Number(prompt("Insira O Segundo Valor: "));
    let diferenca = subtrair(valor1, valor2);
    console.log(`\nA Diferença Do Valor ${valor1} + ${valor2} = ${diferenca}`)
}

function subtrair(valor1, valor2) {
    let diferenca = 0;
    return diferenca = valor1 - valor2;
}


function questao3() {
    let valor1 = Number(prompt("Insira O Primeiro Valor: "));
    let valor2 = Number(prompt("Insira O Segundo Valor: "));
    console.log(`\nO Produto Dos Valores ${valor1} X ${valor2} = ${produto(valor1, valor2)}`);
}


function questao4() {
    let numero = Number(prompt("Informe Um Número Para Ver Se Ele É Par: "));
    if (ehPar(numero)) {
        console.log(`O Número ${numero} é Par. `);
        return;
    }
    console.log(`O Número ${numero} Não É Par. `)
}

function ehPar(numero) {
    if (numero % 2 == 0) {
        return true;
    }
    return false;
}

function questao5() {
    let qtdNotas = Number(prompt("Quantas Notas Você Deseja Inserir?? "));
    console.log()
    let notas = [];
    for (let i = 0; i < qtdNotas; i++) {
        let nota = Number(prompt(`Qual a ${i + 1}° Nota: `));
        console.log();
        notas.push(nota);
    }
    let media = calcularMedia(notas) / qtdNotas;
    console.log(`A Média Das Notas Inseridas é: ${media}`);
}

function calcularMedia(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma;
}

function questao6() {
    let palavra = prompt("Digite uma palavra sem letras maiusculas: ");
    console.log();
    console.log("Receba a mesma palavra só que tudo maisculo " + transformarString(palavra));
}

function transformarString(palavra) {
    let PALAVRA = palavra.toLocaleUpperCase();
    return PALAVRA;
}

function questao7() {
    let limite = Number(prompt("Insira o Valor que Deseja Usar Como Limite: "));
    let valores = [];
    let qtdValores = Number(prompt("Informe a quantidade de valores que deseja inserir. "));
    for (let i = 0; i < qtdValores; i++) {
        let valor = Number(prompt(`Informe o ${i + 1}° valor: `));
        valores.push(valor);
    }
    console.log(`Os números maiores que ${limite} são: `)
    let maiores = maioresNumeros(valores, limite);
    for (let i = 0; i < maiores.length; i++) {
        console.log(maiores[i]);
    }
}

function maioresNumeros(valores, limite) {
    let maiores = [];
    for (let i = 0; i < valores.length; i++) {
        if (valores[i] > limite) {
            maiores.push(valores[i]);
        }
    }
    return maiores;
}

function questao8() {
    let valor = Number(prompt("Informe o valor que deseja encontrar: "));
    let numeros = [];
    let qtdValores = Number(prompt("Informe a quantidade de valores que deseja inserir. "));
    for (let i = 0; i < qtdValores; i++) {
        let numero = Number(prompt(`Informe o ${i + 1}° número: `));
        numeros.push(numero);
    }
    console.log(`\n O Número ${valor} se aparece : ${encontrarValor(numeros, valor)} dentro da lista. `)
}

function encontrarValor(numeros, valor) {
    let quantidade = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] == valor) {
            quantidade++;
        }
    }
    return quantidade;
}

function questao9() {
    console.log("Insira um texto que desejar fazer a contagem de caracterer.");
    console.log(); j
    let texto = prompt();
    let quantidade = contarCaracter(texto)
    console.log(`
        Caracteres: ${quantidade[0]}
        Espaços: ${quantidade[1]}
        Total: ${quantidade[0] + quantidade[1]}`);
}

function contarCaracter(texto) {
    let quantidade = 0;
    let espacos = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] != " ") {
            quantidade++;
        }
        else {
            espacos++;
        }
    }
    let contagem = [];
    contagem.push(quantidade);
    contagem.push(espacos);
    return contagem;
}

function questao10() {
    console.log();
    console.log("Vamos Iniciar um contagem no número 1. ");
    console.log("Informe o ultimo da contagem. ");
    console.log();
    let numero = Number(prompt());
    let contagem = contagemRegressiva(numero);
    console.log(`Contagem Regressiva iniciando:`)
    for (let i = 1; i < contagem.length; i++) {
        console.log(contagem[i])
        let inicio = Date.now();
        while (Date.now() - inicio < 1000) {
        }
    }
}

function contagemRegressiva(numero) {
    let contagem = [];
    contagem.push(0);
    for (let i = 1; i <= numero; i++) {
        contagem.push(i);
    }
    return contagem;
}

function questao11() {

}

function questao12() {
    console.log();
    let numero = numeroAleatorio()
    console.log(numero);
    console.log();
}

function numeroAleatorio() {
    return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
}

function questao13() {
    console.log();
    console.log("Informe um dia do seu nascimento: ");
    console.log();
    let data1 = Number(prompt());
    console.log("Agora Informe um dia aleatorio: ");
    let data2 = Number(prompt());

}

function verificarDistancia (data1, data2) {
    
}

function questao14() {

}
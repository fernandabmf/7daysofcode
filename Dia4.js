// DIA 4 - LOOPS E RANDOMIZAÇÃO

//OBS: foi necessário um pacote do node para usar prompt e alert direto pelo terminal do vscode
const prompt = require("prompt-sync")();
const alert = require("prompt-sync")();

var numeroAleatorio = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let tentativas = 2;
let acertou = false;

alert("Olá, bem vinde ao jogo de advinhação! Tente acertar qual número estou pensando.");

for (let i = 0; i < tentativas; i++) {
    let palpite = parseInt(prompt("Digite um número (entre 1 e 10):"));

    if (isNaN(palpite)) {
        console.log("Por favor, insira um número válido.");
    } else {
        if (palpite === numeroAleatorio) {
            console.log(`Parabéns! Você acertou o número em ${i + 1} tentativas.`);
            acertou = true;
            break;
        } else if (palpite < numeroAleatorio) {
            console.log("O número é maior.");
        } else {
            console.log("O número é menor.");
        }
    }
}

if (!acertou) {
    console.log("Que pena, as tentativas acabaram :(");
    console.log(`O número era ${numeroAleatorio}`);
}



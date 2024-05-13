// DIA 2 - VARIÁVEIS 
//Nesse desafio foram usadas as variáveis, bem como o uso do alert e prompt 

//OBS: foi necessário um pacote do node para usar prompt e alert direto pelo terminal do vscode
const prompt = require("prompt-sync")();
const alert = require("prompt-sync")();

const nome = prompt("Qual o seu nome?"); 
const idade = prompt("Quantos anos você tem?");
const prog = prompt("Qual linguagem de programação você está estudando?");

const msg1 = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${prog}!`;
alert(msg1);

const msg2 = prompt(`Você gosta de estudar ${prog}? Responda com o número 1 para SIM ou 2 para NÃO`);

if (msg2 == 1) {
    console.log("Muito bom! Continue estudando e você terá muito sucesso.");
} else {
    console.log("Ahh que pena... Já tentou aprender outras linguagens?");
}

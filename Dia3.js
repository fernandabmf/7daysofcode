// DIA 3 - FLUXO DE DECISÃO

//OBS: foi necessário um pacote do node para usar prompt direto pelo terminal do vscode
var prompt = require("prompt-sync")();

var areaFront = "Front-End"
var areaBack= "Back-End"

var area = prompt("Olá! você deseja seguir para área de Front-End ou Back-End? Digite 1 para Front, ou 2 para Back."); 

if (area == 1) {
    const front = prompt("Deseja aprender React ou Vue? Digite 1 pra React, ou 2 pra Vue.");
    area = areaFront;
} else {
    const back = prompt("Deseja aprender C# ou Java? Digite 1 pra C#, ou 2 pra Java.");
    area = areaBack;
}

const especializa = prompt("Deseja seguir se especializando na área escolhida ou se tornar FullStack? Digite 1 pra área escolhida, ou 2 pra Fullstack");

if (especializa == 1) {
    console.log(`Que legal! Que seus estudos sejam bem sucedidos! Boa sorte na área de ${area}`);
} else {
    console.log("Que legal! Que seus estudos sejam bem sucedidos! Boa sorte na área de fullstack");
}


do {
    var tec = prompt("Por fim, escreva uma tecnologia do qual você tem interesse de se especializar ou conhecer:");
    console.log("Você inseriu a tecnologia: " + tec);

    var pergunta = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 1 para sim, 2 para não");

    if (pergunta == 1) {
        // continua no loop
    } else {
        console.log("Ok, Bons estudos!");
    }
} while (pergunta == 1);

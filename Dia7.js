// DIA 7 - FUNÇOES

//OBS: foi necessário um pacote do node para usar prompt direto pelo terminal do vscode
const prompt = require("prompt-sync")();

// Função para somar dois números
function soma(num1, num2) {
    return num1 + num2;
}

// Função para subtrair dois números
function subtracao(num1, num2) {
    return num1 - num2;
}

// Função para multiplicar dois números
function multiplicacao(num1, num2) {
    return num1 * num2;
}

// Função para dividir dois números
function divisao(num1, num2) {
    if (num2 === 0) {
        return "Não é possível dividir por zero!";
    }
    return num1 / num2;
}

// Loop principal para interagir com o usuário
let continuar = true;
while (continuar) {
    // Opções disponíveis
    console.log("\nOperações disponíveis:");
    console.log("1. Soma");
    console.log("2. Subtração");
    console.log("3. Multiplicação");
    console.log("4. Divisão");
    console.log("5. Sair");

    // Pergunta ao usuário a opção desejada
    const operacao = parseInt(prompt("Escolha uma operação (1-5):"));

    // Realiza a operação correspondente à opção escolhida
    switch (operacao) {
        case 1:
            const somaNum1 = parseFloat(prompt("Digite o primeiro número:"));
            const somaNum2 = parseFloat(prompt("Digite o segundo número:"));
            console.log(`Resultado: ${somaNum1} + ${somaNum2} = ${soma(somaNum1, somaNum2)}`);
            break;

        case 2:
            const subNum1 = parseFloat(prompt("Digite o primeiro número:"));
            const subNum2 = parseFloat(prompt("Digite o segundo número:"));
            console.log(`Resultado: ${subNum1} - ${subNum2} = ${subtracao(subNum1, subNum2)}`);
            break;

        case 3:
            const multNum1 = parseFloat(prompt("Digite o primeiro número:"));
            const multNum2 = parseFloat(prompt("Digite o segundo número:"));
            console.log(`Resultado: ${multNum1} * ${multNum2} = ${multiplicacao(multNum1, multNum2)}`);
            break;

        case 4:
            const divNum1 = parseFloat(prompt("Digite o primeiro número:"));
            const divNum2 = parseFloat(prompt("Digite o segundo número (diferente de zero):"));
            console.log(`Resultado: ${divNum1} / ${divNum2} = ${divisao(divNum1, divNum2)}`);
            break;

        case 5:
            continuar = false;
            console.log("Até a próxima!");
            break;

        default:
            console.log("Opção inválida. Por favor, escolha uma opção válida (1-5).");
    }
}

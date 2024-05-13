// DIA 5 - ARRAYS E COLEÇÕES

//OBS: foi necessário um pacote do node para usar prompt direto pelo terminal do vscode
const prompt = require("prompt-sync")();

// Objeto para armazenar os itens da lista de compras por categoria
const listaDeCompras = {
    Frutas: [],
    Laticinios: [],
    Congelados: [],
    Doces: [],
    Outros: []
};

// Loop principal para adicionar itens à lista de compras
let adicionar = "sim";

while (adicionar === "sim") {
    adicionar = prompt("Deseja adicionar um item à lista de compras? (sim/não)").toLowerCase();

    while (adicionar !== "sim" && adicionar !== "nao") {
        adicionar = prompt("Por favor, responda sim ou não. Deseja adicionar um item à lista de compras? (sim/não)").toLowerCase();
    }

    if (adicionar === "sim") {
        const item = prompt("Digite o nome do item que deseja adicionar à lista de compras:");
        let categoria = prompt("Em qual categoria esse item se encaixa? (Frutas, Laticínios, Congelados, Doces, Outros)").trim();
        categoria = categoria.charAt(0).toUpperCase() + categoria.slice(1).toLowerCase(); // Ajuste para garantir a categoria correta

        if (listaDeCompras.hasOwnProperty(categoria)) {
            listaDeCompras[categoria].push(item);
            console.log(`"${item}" foi adicionado à categoria "${categoria}".`);
        } else {
            listaDeCompras["Outros"].push(item);
            console.log(`"${item}" foi adicionado à categoria "Outros".`);
        }
    }
}

// Exibição da lista de compras agrupada por categoria
console.log("\nLista de compras:");
for (const categoria in listaDeCompras) {
    if (listaDeCompras[categoria].length > 0) {
        console.log(`\t${categoria}: ${listaDeCompras[categoria].join(", ")}`);
    }
}








// DIA 6 - REMOÇÃO DE ARRAYS

//OBS: foi necessário um pacote do node para usar prompt direto pelo terminal do vscode
const prompt = require("prompt-sync")();

// Objeto para armazenar os itens da lista de compras por categoria
const listaDeCompras = {
    Frutas: [],
    Laticínios: [],
    Congelados: [],
    Doces: [],
    Outros: []
};

// Função para exibir a lista de compras agrupada por categoria
function exibirListaDeCompras() {
    console.log("\nLista de compras:");
    for (const categoria in listaDeCompras) {
        if (listaDeCompras[categoria].length > 0) {
            console.log(`\t${categoria}: ${listaDeCompras[categoria].join(", ")}`);
        }
    }
}

// Loop principal para interagir com o usuário
let continuar = true;
while (continuar) {
    // Pergunta ao usuário se deseja adicionar ou remover um item da lista de compras
    const opcao = prompt("Deseja adicionar, remover um item da lista de compras ou sair? (adicionar/remover/sair)").toLowerCase();

    switch (opcao) {
        case "adicionar":
            const item = prompt("Digite o nome do item que deseja adicionar à lista de compras:");
            let categoria = prompt("Em qual categoria esse item se encaixa? (Frutas, Laticínios, Congelados, Doces, Outros)").trim();
            categoria = categoria.charAt(0).toUpperCase() + categoria.slice(1).toLowerCase(); // Ajusta a capitalização da categoria

            if (listaDeCompras.hasOwnProperty(categoria)) {
                listaDeCompras[categoria].push(item);
                console.log(`"${item}" foi adicionado à categoria "${categoria}".`);
            } else {
                listaDeCompras["Outros"].push(item);
                console.log(`"${item}" foi adicionado à categoria "Outros".`);
            }
            break;

        case "remover":
            // Verifica se existem itens na lista de compras antes de tentar remover
            const quantidadeDeItens = Object.values(listaDeCompras).flat().length;
            if (quantidadeDeItens === 0) {
                console.log("Não há itens na lista de compras para remover.");
                break;
            }

            // Exibe a lista de compras para o usuário escolher qual item remover
            exibirListaDeCompras();
            const itemParaRemover = prompt("Digite o nome do item que deseja remover da lista de compras:");

            // Verifica se o item está presente na lista de compras e o remove
            let itemEncontrado = false;
            for (const categoria in listaDeCompras) {
                const index = listaDeCompras[categoria].indexOf(itemParaRemover);
                if (index !== -1) {
                    listaDeCompras[categoria].splice(index, 1);
                    console.log(`"${itemParaRemover}" foi removido da lista de compras.`);
                    itemEncontrado = true;
                    break;
                }
            }

            // Se o item não for encontrado na lista, exibe uma mensagem de aviso
            if (!itemEncontrado) {
                console.log("Não foi possível encontrar o item na lista de compras.");
            }
            break;

        case "sair":
            continuar = false;
            break;

        default:
            console.log("Opção inválida. Por favor, responda adicionar, remover, ou sair.");
    }
}

// Exibe a lista de compras final
exibirListaDeCompras();









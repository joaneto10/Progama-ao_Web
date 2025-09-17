const cor = "Amarelo";
const quantidade = 12;
const precoUnitario = 100;

let desconto = 0;

if (cor === "Verde") {
    if (quantidade <= 10) desconto = 0.05;
    else desconto = 0.10;
} else if (cor === "Amarelo") {
    if (quantidade <= 5) desconto = 0.15;
    else desconto = 0.20;
}

const valorFinal = quantidade * precoUnitario * (1 - desconto);

console.log(`Valor final da compra: R$ ${valorFinal.toFixed(2)}`);

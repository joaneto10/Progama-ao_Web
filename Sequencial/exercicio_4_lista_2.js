const valorPrestacao = 150.00;
const taxaJuros = 0.5;   // % ao dia
const diasAtraso = 10;
const valorAtualizado = valorPrestacao + (valorPrestacao * (taxaJuros / 100) * diasAtraso);
console.log("Lista 02 - Ex 4: Prestação atualizada =", valorAtualizado.toFixed(2));
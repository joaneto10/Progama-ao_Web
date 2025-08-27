// Ex 6: Posto de combustível - cálculo do valor a pagar

const opcao = 3;        // 1 - Álcool | 2 - Diesel | 3 - Gasolina
const litros = 40;      // quantidade em litros

let precoLitro;
let combustivel;

if (opcao === 1) {
  precoLitro = 4.805;
  combustivel = "Álcool";
} else if (opcao === 2) {
  precoLitro = 5.953;
  combustivel = "Diesel";
} else if (opcao === 3) {
  precoLitro = 6.565;
  combustivel = "Gasolina";
} else {
  console.log("Opção inválida!");
}

if (precoLitro) {
  const valorTotal = litros * precoLitro;
  console.log(`Ex 6: ${litros} litros de ${combustivel} custam R$ ${valorTotal.toFixed(2)}`);
}

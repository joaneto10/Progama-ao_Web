const opcao = 3;        
const litros = 40;      

let precoLitro;
let combustivel;

if (opcao === 1) {
  precoLitro = 4.805;
  combustivel = "Álcool";
  console.log(`Ex 6: ${litros} litros de ${combustivel} custam R$ ${(litros * precoLitro).toFixed(2)}`);
} else if (opcao === 2) {
  precoLitro = 5.953;
  combustivel = "Diesel";
  console.log(`Ex 6: ${litros} litros de ${combustivel} custam R$ ${(litros * precoLitro).toFixed(2)}`);
} else if (opcao === 3) {
  precoLitro = 6.565;
  combustivel = "Gasolina";
  console.log(`Ex 6: ${litros} litros de ${combustivel} custam R$ ${(litros * precoLitro).toFixed(2)}`);
} else {
  console.log("Opção inválida!");
}

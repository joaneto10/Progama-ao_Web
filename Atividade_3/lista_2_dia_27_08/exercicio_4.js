

const valorReais = 1000.00; 
const opcao = 2; 

let convertido;
let moeda;

if (opcao === 1) {
  convertido = valorReais / 5.418;
  moeda = "Euro (€)";
} else if (opcao === 2) {
  convertido = valorReais / 6.336;
  moeda = "Libra Esterlina (£)";
} else if (opcao === 3) {
  convertido = valorReais / 5.189;
  moeda = "Dólar (US$)";
} else {
  console.log("Opção inválida!");
}

if (convertido) {
  console.log(`Ex 4: R$ ${valorReais.toFixed(2)} = ${convertido.toFixed(2)} ${moeda}`);
}

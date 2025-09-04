
const precoFabrica = 50000.00; 


const arCondicionado = "S";
const pinturaMetalica = "N";
const vidroEletrico = "S";
const direcaoHidraulica = "S";

let precoFinal = precoFabrica;

if (arCondicionado === "S") {
  precoFinal += 1750.00;
}
if (pinturaMetalica === "S") {
  precoFinal += 800.00;
}
if (vidroEletrico === "S") {
  precoFinal += 1200.00;
}
if (direcaoHidraulica === "S") {
  precoFinal += 2000.00;
}

console.log("Ex 2: Preço final do carro = R$", precoFinal.toFixed(2));

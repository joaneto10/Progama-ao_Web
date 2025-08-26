const salarioFixo = 2000.00;
const qtdLCD = 10;   // R$50 cada
const qtdLED = 5;    // R$60 cada
const qtdPlasma = 2; // R$55 cada
const comissaoTotal = qtdLCD * 50 + qtdLED * 60 + qtdPlasma * 55;
const salarioTotal = salarioFixo + comissaoTotal;
console.log("Lista 02 - Ex 2: Salário total =", salarioTotal.toFixed(2));
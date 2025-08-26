const P = 2.00;   // aporte mensal
const i = 8;     // taxa mensal (1%)
const n = 12;       // nº meses
const valorFuturo = P * (Math.pow(1 + i, n) - 1) / i;
console.log("Lista 02 - Ex 3: Valor futuro =", valorFuturo.toFixed(2));
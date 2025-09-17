const P = 2.00;   // aporte mensal
const i = 0.01;   // taxa mensal (1% = 0.01)
const n = 12;     // nº meses

const valorFuturo = P * (Math.pow(1 + i, n) - 1) / i;

console.log("Lista 02 - Ex 3: Valor futuro =", valorFuturo.toFixed(2));

// Estrutura condicional
if (valorFuturo < 50) {
    console.log("Investimento baixo.");
} else if (valorFuturo <= 200) {
    console.log("Investimento moderado.");
} else {
    console.log("Investimento alto.");
}

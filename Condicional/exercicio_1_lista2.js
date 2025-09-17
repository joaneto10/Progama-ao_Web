// Ex 1: Distância entre dois pontos
const x1 = 2.0, y1 = 3.0;
const x2 = -1.0, y2 = 7.0;

const distanciaAB = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

console.log("Lista 02 - Ex 1: Distância entre pontos =", distanciaAB.toFixed(2));

// Estrutura condicional
if (distanciaAB === 0) {
    console.log("Os pontos são iguais.");
} else if (distanciaAB <= 5) {
    console.log("Os pontos estão próximos.");
} else if (distanciaAB <= 10) {
    console.log("Os pontos estão a uma distância média.");
} else {
    console.log("Os pontos estão distantes.");
}

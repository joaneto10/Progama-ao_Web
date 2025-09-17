const a = 1;
const b = 3;
const c = 2;

let bAoQuadrado = b * b;
let quadradoAC = 4 * a * c;
let delta = bAoQuadrado - quadradoAC;

console.log("O valor de delta é: " + delta);

// Forma sequencial: apenas imprime os possíveis resultados, sem testar condições
console.log("Se delta < 0 → Não existem raízes reais.");
console.log("Se delta = 0 → Existe apenas uma raiz real (raiz dupla).");
console.log("Se delta > 0 → Existem duas raízes reais diferentes.");

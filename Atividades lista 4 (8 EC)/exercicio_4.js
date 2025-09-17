const n1 = 8, n2 = 3, n3 = 12, n4 = 6;

const numeros = [n1, n2, n3, n4];
numeros.sort((a, b) => a - b);

const soma = numeros[0] + numeros[1] + numeros[2];

console.log("Soma dos três menores =", soma);

const num = 3025; // número de 4 dígitos
const parte1 = Math.floor(num / 100);
const parte2 = num % 100;
const soma = parte1 + parte2;
if (soma * soma === num) {
  console.log("Ex 3:", num, "possui a característica especial!");
} else {
  console.log("Ex 3:", num, "NÃO possui a característica especial.");
}
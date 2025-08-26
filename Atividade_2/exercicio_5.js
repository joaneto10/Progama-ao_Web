const A = 1, B = -10, C = 25; // Exemplo: x² - 10x + 25 = 0
const delta = Math.pow(B, 2) - 4 * A * C;
if (delta < 0) {
  console.log("Ex 5: RAÍZES IMAGINÁRIAS");
} else if (delta === 0) {
  const raiz = -B / (2 * A);
  console.log("Ex 5: RAIZ ÚNICA =", raiz);
} else {
  const raiz1 = (-B + Math.sqrt(delta)) / (2 * A);
  const raiz2 = (-B - Math.sqrt(delta)) / (2 * A);
  console.log("Ex 5: RAÍZES DISTINTAS =", raiz1, "e", raiz2);
}
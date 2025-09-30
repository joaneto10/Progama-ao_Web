function verificar() {
  let A = parseFloat(document.getElementById("ladoA").value);
  let B = parseFloat(document.getElementById("ladoB").value);
  let C = parseFloat(document.getElementById("ladoC").value);
  let lados = [A, B, C].sort((a, b) => a - b);
  let res = document.getElementById("resultado");

  if (lados[2] < lados[0] + lados[1]) {
    if (Math.pow(lados[2], 2) === Math.pow(lados[1], 2) + Math.pow(lados[0], 2)) {
      res.textContent = "🔺 Triângulo Retângulo";
    } else if (Math.pow(lados[2], 2) > Math.pow(lados[1], 2) + Math.pow(lados[0], 2)) {
      res.textContent = "🔺 Triângulo Obtusângulo";
    } else {
      res.textContent = "🔺 Triângulo Acutângulo";
    }
  } else {
    res.textContent = "❌ Não formam um triângulo.";
  }
}
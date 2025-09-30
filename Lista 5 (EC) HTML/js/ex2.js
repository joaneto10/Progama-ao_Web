function calcular() {
  let a = parseFloat(document.getElementById("n1").value);
  let b = parseFloat(document.getElementById("n2").value);
  let op = document.getElementById("op").value;
  let res = document.getElementById("resultado");

  let resultado;
  switch (op) {
    case "+": resultado = a + b; break;
    case "-": resultado = a - b; break;
    case "*": resultado = a * b; break;
    case "/": resultado = (b !== 0) ? a / b : "Erro (divisão por zero)"; break;
  }
  res.textContent = "Resultado: " + resultado;
}
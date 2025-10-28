
function calcularQuociente(dividendo, divisor) {
  let quociente = 0;
  let resto = dividendo;

  while (resto >= divisor) {
    resto -= divisor;
    quociente++;
  }

  return quociente;
}

function calcularResto(dividendo, divisor) {
  let resto = dividendo;

  while (resto >= divisor) {
    resto -= divisor;
  }

  return resto;
}

    
function calcular() {
  const num1 = parseInt(document.getElementById('num1').value);
  const num2 = parseInt(document.getElementById('num2').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
    resultado.textContent = "Digite números inteiros positivos válidos!";
    return;
  }

  const quociente = calcularQuociente(num1, num2);
  const resto = calcularResto(num1, num2);

  resultado.textContent = `Quociente(${num1}, ${num2}) = ${quociente}, Resto(${num1}, ${num2}) = ${resto}`;
}

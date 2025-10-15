function calcularPi() {
  let pi = 0;
  let termo;
  let i = 0;

  do {
    termo = 4 * Math.pow(-1, i) / (2 * i + 1);
    pi += termo;
    i++;
  } while (Math.abs(termo) >= 0.0001);

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = ` pi = ${pi.toFixed(6)} `
}

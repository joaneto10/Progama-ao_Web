const labelArrays = document.getElementById('outArray');
const outInvertidos = document.getElementById('outInvertidos');

function geraNumeroAleatorio() {
  return Math.floor(Math.random() * 100) + 1;
}

function obterConjuntoAleatorio() {
  const conjunto = [];
  for (let i = 0; i < 10; i++) {
    conjunto.push(geraNumeroAleatorio());
  }
  return conjunto;
}

function inverterNumero(num) {
  let invertido = 0;
  while (num > 0) {
    invertido = invertido * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return invertido;
}

function onButtonGerar() {
  const vetor = obterConjuntoAleatorio();
  labelArrays.textContent = 'Array: ' + vetor.join(', ');

  outInvertidos.innerHTML = '';

  vetor.forEach((num, i) => {
    const item = document.createElement('p');
    item.textContent = `Posição ${i}: ${num} → invertido: ${inverterNumero(num)}`;
    outInvertidos.appendChild(item);
  });
}

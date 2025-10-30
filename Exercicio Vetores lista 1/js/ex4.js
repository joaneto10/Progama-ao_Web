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
  return parseInt(num.toString().split('').reverse().join(''));
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

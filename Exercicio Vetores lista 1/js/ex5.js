const labelArrays = document.getElementById('outArray');
const outFatorial = document.getElementById('outFatorial');

function geraNumeroAleatorio() {
  return Math.floor(Math.random() * 10) + 1;
}

function obterConjuntoAleatorio() {
  const conjunto = [];
  for (let i = 0; i < 10; i++) {
    conjunto.push(geraNumeroAleatorio());
  }
  return conjunto;
}

function fatorial(n) {
  if (n === 0 || n === 1) return 1;
  let fat = 1;
  for (let i = 2; i <= n; i++) {
    fat *= i;
  }
  return fat;
}

function onButtonGerar() {
  const vetor = obterConjuntoAleatorio();
  labelArrays.textContent = 'Array: ' + vetor.join(', ');

  
  outFatorial.innerHTML = '';

  vetor.forEach((num, i) => {
    const item = document.createElement('p');
    item.textContent = `Posição ${i}: ${num} → fatorial: ${fatorial(num)}`;
    outFatorial.appendChild(item);
  });
}


function gerarVetor(tamanho) {
  let vetor = [];
  for (let i = 0; i < tamanho; i++) {
    vetor.push(Math.floor(Math.random() * 101)); 
  }
  return vetor;
}

function mostrarConjunto(elementoId, conjunto) {
  document.getElementById(elementoId).textContent = conjunto.join(", ");
}


function intercalarConjuntos(conjunto1, conjunto2) {
  const intercalado = [];
  for (let i = 0; i < conjunto1.length; i++) {
    intercalado.push(conjunto1[i], conjunto2[i]);
  }
  return intercalado;
}


function exercicio1() {
  const conjunto1 = gerarVetor(10);
  const conjunto2 = gerarVetor(10);
  const conjuntoIntercalado = intercalarConjuntos(conjunto1, conjunto2);

  mostrarConjunto("saida1", conjunto1);
  mostrarConjunto("saida2", conjunto2);
  mostrarConjunto("saida3", conjuntoIntercalado);
}

function gerarVetor(tamanho) {
  const vetor = [];
  for (let i = 0; i < tamanho; i++) {
    vetor.push(Math.floor(Math.random() * 100));
  }
  return vetor;
}

function ordenarVetor(vetor) {
  return vetor.slice().sort(function(a, b) { return a - b; });
}

function intercalar(v1, v2) {
  const resultado = [];
  let i = 0, j = 0;

  while (i < v1.length && j < v2.length) {
    if (v1[i] <= v2[j]) {
      resultado.push(v1[i]);
      i++;
    } else {
      resultado.push(v2[j]);
      j++;
    }
  }

  while (i < v1.length) resultado.push(v1[i++]);
  while (j < v2.length) resultado.push(v2[j++]);

  return resultado;
}

function mostrar(texto) {
  document.getElementById("saida").textContent += texto + "\n";
}

function executar() {
  document.getElementById("saida").textContent = "";

  const vetor1 = gerarVetor(10);
  const vetor2 = gerarVetor(10);

  mostrar("Vetor 1 (original): " + vetor1.join(", "));
  mostrar("Vetor 2 (original): " + vetor2.join(", "));

  const v1Ord = ordenarVetor(vetor1);
  const v2Ord = ordenarVetor(vetor2);

  mostrar("Vetor 1 (ordenado): " + v1Ord.join(", "));
  mostrar("Vetor 2 (ordenado): " + v2Ord.join(", "));

  const intercalado = intercalar(v1Ord, v2Ord);

  mostrar("Intercalado (ordenado): " + intercalado.join(", "));
}

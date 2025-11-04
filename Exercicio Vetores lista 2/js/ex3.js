function gerarVetor(tamanho) {
  var vetor = [];
  for (var i = 0; i < tamanho; i++) {
    vetor.push(Math.floor(Math.random() * 10)); 
  }
  return vetor;
}

function produtoEscalar(v1, v2) {
  var soma = 0;
  var j;
  for (var i = 0; i < v1.length; i++) {
    soma += v1[i] * v2[i];
  }
  return soma;
}

function mostrar(texto) {
  document.getElementById("saida").textContent += texto + "\n";
}

function executar() {
  document.getElementById("saida").textContent = "";

  var vetor1 = gerarVetor(5);
  var vetor2 = gerarVetor(5);

  mostrar("Vetor 1: " + vetor1.join(", "));
  mostrar("Vetor 2: " + vetor2.join(", "));

  var resultado = produtoEscalar(vetor1, vetor2);

  mostrar("Produto escalar = " + resultado);
}

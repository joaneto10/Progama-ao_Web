function gerarVetor(tamanho) {
  var vetor = [];
  for (var i = 0; i < tamanho; i++) {
    vetor.push(Math.floor(Math.random() * 10));
  }
  return vetor;
}

function ordenarVetor(vetor) {
  var copia = vetor.slice();
  copia.sort(function(a, b) { return a - b; });
  return copia;
}

function saoIdenticos(a, b) {
  if (a.length !== b.length) return false;
  var aOrd = ordenarVetor(a);
  var bOrd = ordenarVetor(b);
  for (var i = 0; i < aOrd.length; i++) {
    if (aOrd[i] !== bOrd[i]) return false;
  }
  return true;
}

function mostrar(texto) {
  document.getElementById("saida").textContent += texto + "\n";
}

function executar() {
  document.getElementById("saida").textContent = "";
  var A = gerarVetor(5);
  var B = gerarVetor(5);
  mostrar("Conjunto A: " + A.join(", "));
  mostrar("Conjunto B: " + B.join(", "));
  if (saoIdenticos(A, B)) {
    mostrar("Os conjuntos A e B são idênticos.");
  } else {
    mostrar("Os conjuntos A e B NÃO são idênticos.");
  }
}

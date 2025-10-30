function gerarVetor(tamanho) {
  let vetor = [];
  for (let i = 0; i < tamanho; i++) {
    vetor.push(Math.floor(Math.random() * 101));
  }
  return vetor;
}

function ehPrimo(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function exercicio3() {
  const A = gerarVetor(10);
  const primos = A.filter(ehPrimo);

  let saida = `
    <strong>Conjunto A:</strong> [${A.join(", ")}]<br>
    <strong>Números primos:</strong> [${primos.join(", ") || "Nenhum primo encontrado"}]
  `;
  document.getElementById("saida3").innerHTML = saida;
}

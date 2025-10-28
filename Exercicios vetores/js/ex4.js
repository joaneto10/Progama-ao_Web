function gerarVetor(tamanho) {
  let vetor = [];
  for (let i = 0; i < tamanho; i++) {
    vetor.push(Math.floor(Math.random() * 101));
  }
  return vetor;
}

function exercicio4() {
  const A = gerarVetor(10);
  let saida = `<strong>Conjunto A:</strong> [${A.join(", ")}]<br><br>`;
  saida += "<strong>Valores invertidos:</strong><br>";

  for (let i = 0; i < A.length; i++) {
    const invertido = parseInt(A[i].toString().split('').reverse().join(''));
    saida += `Índice ${i}: ${A[i]} → ${invertido}<br>`;
  }

  document.getElementById("saida4").innerHTML = saida;
}

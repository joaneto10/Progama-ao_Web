function gerarVetor(tamanho) {
  let vetor = [];
  for (let i = 0; i < tamanho; i++) {
    vetor.push(Math.floor(Math.random() * 101));
  }
  return vetor;
}

function fatorial(n) {
  let fat = 1;
  for (let i = 1; i <= n; i++) {
    fat *= i;
  }
  return fat;
}

function exercicio5() {
  const A = gerarVetor(10);
  let saida = `<strong>Conjunto A:</strong> [${A.join(", ")}]<br><br>`;
  saida += "<strong>Fatoriais:</strong><br>";

  for (let i = 0; i < A.length; i++) {
    saida += `${A[i]}! = ${fatorial(A[i])}<br>`;
  }

  document.getElementById("saida5").innerHTML = saida;
}

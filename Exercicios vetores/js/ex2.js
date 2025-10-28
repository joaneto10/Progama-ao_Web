function gerarVetor(tamanho) {
  let vetor = [];
  for (let i = 0; i < tamanho; i++) {
    vetor.push(Math.floor(Math.random() * 101));
  }
  return vetor;
}

function exercicio2() {
  const conjunto = gerarVetor(15);
  const numero = parseInt(prompt("Digite um número inteiro para verificar se está no conjunto:"));
  const existe = conjunto.includes(numero);

  let saida = `
    <strong>Conjunto gerado:</strong> [${conjunto.join(", ")}]<br>
    <strong>Número digitado:</strong> ${numero}<br>
    <strong>Resultado:</strong> ${existe ? "O número está no conjunto." : "O número NÃO está no conjunto."}
  `;
  document.getElementById("saida2").innerHTML = saida;
}

function verificarPerfeito() {
  const n = parseInt(document.getElementById("numero").value);

  if (isNaN(n) || n <= 0) {
    alert("Digite um número inteiro positivo.");
    return;
  }

  let soma = 0;
  let i = 1;

  while (i < n) {
    if (n % i === 0) {
      soma += i;
    }
    i++;
  }

  if (soma === n) {
    document.getElementById("resultado").innerHTML = `${n} é um número perfeito.`;
  } else {
    document.getElementById("resultado").innerHTML = `${n} não é um número perfeito.`;
  }
}

function verificarTriangular() {
  const n = parseInt(document.getElementById("numero").value);

  if (isNaN(n) || n <= 0) {
    alert("Digite um número inteiro positivo.");
    return;
  }

  let i = 1;
  let encontrado = false;

  while (i * (i + 1) * (i + 2) <= n) {
    let produto = i * (i + 1) * (i + 2);
    if (produto === n) {
      encontrado = true;
      break;
    }
    i++;
  }

  if (encontrado) {
    document.getElementById("resultado").innerHTML = `${n} é um Número Triangular.`;
  } else {
    document.getElementById("resultado").innerHTML = `${n} não é um Número Triangular.`;
  }
}

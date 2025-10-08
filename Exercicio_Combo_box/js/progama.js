// === Função 1 - Verificar Número Perfeito ===
function verificarPerfeito() {
  const n = parseInt(document.getElementById("numero").value);

  if (isNaN(n) || n <= 0) {
    alert("Digite um número inteiro positivo.");
    return;
  }

  let soma = 0;
  let i;

  for (i = 1; i < n; i++) {
    if (n % i === 0) {
      soma += i;
    }
  }

  if (soma === n) {
    document.getElementById("resultado").innerHTML = `${n} é um número perfeito.`;
  } else {
    document.getElementById("resultado").innerHTML = `${n} não é um número perfeito.`;
  }
}

function procurarNumeros() {
  let resultado = "";

  for (let num = 1000; num <= 9999; num++) {
    const strNum = num.toString();
    const primeiros2 = parseInt(strNum.substring(0, 2));
    const ultimos2 = parseInt(strNum.substring(2, 4));

    if ((primeiros2 + ultimos2) ** 2 === num) {
      resultado += num + "<br>";
    }
  }

  document.getElementById("resultado").innerHTML = resultado || "Nenhum número encontrado.";
}


function calcularFatorial() {
  const n = parseInt(document.getElementById("numero").value);
  
  if (isNaN(n) || n < 0) {
    alert("Por favor, digite um número inteiro positivo.");
    return;
  }

  let fatorial = 1;

  for (let i = n; i >= 1; i--) {
    fatorial *= i;
  }

  document.getElementById("resultado").innerHTML = `${n}! = ${fatorial}`;
}


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


function executar() {
  const opcao = document.getElementById("opcao").value;
  document.getElementById("resultado").innerHTML = "";

  if (opcao === "perfeito") {
    verificarPerfeito();
  } else if (opcao === "quadrado") {
    procurarNumeros();
  } else if (opcao === "fatorial") {
    calcularFatorial();
  } else if (opcao === "triangular") {
    verificarTriangular();
  }
}

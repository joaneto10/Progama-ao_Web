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

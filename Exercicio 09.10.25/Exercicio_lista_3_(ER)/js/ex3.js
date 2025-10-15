function calcular() {
  const x = Number(document.getElementById("x").value);
  const y = Number(document.getElementById("y").value);

  if (y < 0) {
    document.getElementById("resultado").innerText = "Y deve ser inteiro positivo ou zero.";
    return;
  }

  let resultado = 1;
  for (let i = 0; i < y; i++) {
    resultado *= x; 
  }

  document.getElementById("resultado").innerText = `${x} elevado a ${y} é ${resultado}`;
}


document.getElementById("calcular").addEventListener("click", calcular);

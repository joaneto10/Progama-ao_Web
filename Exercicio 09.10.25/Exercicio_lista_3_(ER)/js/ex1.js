function calcular() {
  const n1 = Number(document.getElementById("n1").value);
  const n2 = Number(document.getElementById("n2").value);

  let resultado = 0;
  const positivo = Math.abs(n2); 

  for (let i = 0; i < positivo; i++) {
    resultado += n1; 
  }

  
  if (n2 < 0) {
    resultado = -resultado;
  }

  document.getElementById("resultado").innerText = `${n1} * ${n2} = ${resultado}`;
}

document.getElementById("calcular").addEventListener("click", calcular);

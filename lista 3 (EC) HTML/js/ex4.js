const precos = {1: 4.805, 2: 5.953, 3: 6.565};

function calcular() {
  let tipo = document.getElementById("tipo").value;
  let litros = parseFloat(document.getElementById("litros").value) || 0;
  let total = litros * precos[tipo];
  document.getElementById("res4").innerText =
    `Total a pagar: R$ ${total.toFixed(2)}`;
}

document.getElementById("calc4").onclick = calcular;

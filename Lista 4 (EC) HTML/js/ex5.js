function calcular() {
  let cor = document.getElementById("cor").value;
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let valorUnitario = parseFloat(document.getElementById("valorUnitario").value);

  let desconto = 0;
  if (cor === "Verde") {
    desconto = (quantidade <= 10) ? 0.05 : 0.10;
  } else if (cor === "Amarelo") {
    desconto = (quantidade <= 5) ? 0.15 : 0.20;
  }

  let valorTotal = quantidade * valorUnitario;
  let valorFinal = valorTotal * (1 - desconto);

  document.getElementById("resultado").textContent = "Valor final: R$ " + valorFinal.toFixed(2);
}
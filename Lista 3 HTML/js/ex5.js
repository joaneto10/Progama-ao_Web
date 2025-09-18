const precoPorAcre = {1: 50, 2: 100, 3: 150, 4: 250};

document.getElementById("calc5").onclick = function () {
  const nome = document.getElementById("nome").value || "---";
  const tipo = document.getElementById("tipoP").value;
  const area = parseFloat(document.getElementById("area").value) || 0;

  let custo = (precoPorAcre[tipo] || 0) * area;

  // descontos
  let desconto = 0;
  if (area > 300) desconto += custo * 0.05;
  if (custo > 10750) desconto += (custo - 10750) * 0.1;

  let final = custo - desconto;

  document.getElementById("res5").innerHTML = `
    Fazendeiro: <strong>${nome}</strong><br>
    Valor final: <strong>R$ ${final.toFixed(2)}</strong>
  `;
};

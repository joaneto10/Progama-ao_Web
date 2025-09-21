document.getElementById("calc7").onclick = function () {
  const figura = parseInt(document.getElementById("figura").value);
  const r = parseFloat(document.getElementById("raio").value) || 0;
  const h = parseFloat(document.getElementById("altura").value) || 0;

  let volume = 0, area = 0;

  switch (figura) {
    case 1: // Cone Reto
      volume = (Math.PI * Math.pow(r, 2) * h) / 3;
      area = Math.PI * r * Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2));
      break;

    case 2: // Cilindro
      volume = Math.PI * Math.pow(r, 2) * h;
      area = 2 * Math.PI * r * h;
      break;

    case 3: // Esfera
      volume = (4 / 3) * Math.PI * Math.pow(r, 3);
      area = 4 * Math.PI * Math.pow(r, 2);
      break;

    default:
      document.getElementById("res7").innerHTML = "Opção inválida!";
      return;
  }

  document.getElementById("res7").innerHTML = `
    Volume = ${volume.toFixed(2)} <br>
    Área da superfície = ${area.toFixed(2)}
  `;
};

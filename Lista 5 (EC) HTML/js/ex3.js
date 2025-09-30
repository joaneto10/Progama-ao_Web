function calcular() {
  let fig = document.getElementById("figura").value;
  let r = parseFloat(document.getElementById("raio").value);
  let h = parseFloat(document.getElementById("altura").value);
  let res = document.getElementById("resultado");

  let volume, area;

  switch (fig) {
    case "1": // Cone
      volume = (Math.PI * r * r * h) / 3;
      let g = Math.sqrt(r * r + h * h); // geratriz
      area = Math.PI * r * (r + g);
      break;
    case "2": // Cilindro
      volume = Math.PI * r * r * h;
      area = 2 * Math.PI * r * (r + h);
      break;
    case "3": // Esfera
      volume = (4 / 3) * Math.PI * Math.pow(r, 3);
      area = 4 * Math.PI * r * r;
      break;
  }

  res.textContent = `Volume: ${volume.toFixed(2)} | Área: ${area.toFixed(2)}`;
}
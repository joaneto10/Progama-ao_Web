const opcao = 1; // 1 - Cone reto, 2 - Cilindro, 3 - Esfera
const r = 5;     // raio
const h = 10;    // altura (usado em cone e cilindro)
let volume, area, figura;

if (opcao === 1) { // Cone reto
  const g = Math.sqrt(r**2 + h**2); // geratriz
  volume = (1/3) * Math.PI * r**2 * h;
  area = Math.PI * r * (r + g);
  figura = "Cone reto";
} else if (opcao === 2) { // Cilindro
  volume = Math.PI * r**2 * h;
  area = 2 * Math.PI * r * (r + h);
  figura = "Cilindro";
} else if (opcao === 3) { // Esfera
  volume = (4/3) * Math.PI * r**3;
  area = 4 * Math.PI * r**2;
  figura = "Esfera";
} else {
  console.log("Opção inválida!");
}

if (volume && area) {
  console.log(`${figura}:`);
  console.log(`Volume = ${volume.toFixed(2)}`);
  console.log(`Área da superfície = ${area.toFixed(2)}`);
}

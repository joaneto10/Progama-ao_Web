const opcao = 2; // 1 = cone, 2 = cilindro, 3 = esfera
const raio = 3;
const alturaFigura = 5;
const pi = Math.PI;

if (opcao === 1) { // Cone reto
    const volume = (pi * Math.pow(raio, 2) * alturaFigura) / 3;
    const area = pi * raio * (raio + Math.sqrt(Math.pow(alturaFigura, 2) + Math.pow(raio, 2)));
    console.log(`Cone -> Volume: ${volume.toFixed(2)}, Área: ${area.toFixed(2)}`);
} else if (opcao === 2) { // Cilindro
    const volume = pi * Math.pow(raio, 2) * alturaFigura;
    const area = 2 * pi * raio * (raio + alturaFigura);
    console.log(`Cilindro -> Volume: ${volume.toFixed(2)}, Área: ${area.toFixed(2)}`);
} else if (opcao === 3) { // Esfera
    const volume = (4 / 3) * pi * Math.pow(raio, 3);
    const area = 4 * pi * Math.pow(raio, 2);
    console.log(`Esfera -> Volume: ${volume.toFixed(2)}, Área: ${area.toFixed(2)}`);
} else {
    console.log("Opção inválida!");
}

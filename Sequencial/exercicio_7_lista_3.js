const opcao = 2; // 1 - Cone reto, 2 - Cilindro, 3 - Esfera
const r = 5;     // raio
const h = 10;    // altura (usado em cone e cilindro)

const figura = 
  opcao === 1 ? "Cone reto" :
  opcao === 2 ? "Cilindro" :
  opcao === 3 ? "Esfera"   :
  null;

const volume = 
  opcao === 1 ? (1/3) * Math.PI * r**2 * h :
  opcao === 2 ? Math.PI * r**2 * h :
  opcao === 3 ? (4/3) * Math.PI * r**3 :
  null;

const area = 
  opcao === 1 ? Math.PI * r * (r + Math.sqrt(r**2 + h**2)) :
  opcao === 2 ? 2 * Math.PI * r * (r + h) :
  opcao === 3 ? 4 * Math.PI * r**2 :
  null;

console.log(
  figura 
    ? `${figura}:\nVolume = ${volume.toFixed(2)}\nÁrea da superfície = ${area.toFixed(2)}`
    : "Opção inválida!"
);
5
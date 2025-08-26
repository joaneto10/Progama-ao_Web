const consumoMedio = 12.5; 
const precoLitro = 6.44;
const tempoDeViagem = 4; 
const velocidadeMedia = 100; 
let distanciaPercorrida = velocidadeMedia * tempoDeViagem;
let quantidadeDeLitros = distanciaPercorrida / consumoMedio;
let custo = quantidadeDeLitros * precoLitro;
console.log("Custo da viagem R$ " + custo);
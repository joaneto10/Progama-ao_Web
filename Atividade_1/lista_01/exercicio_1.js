const consumoMedio = 12.5; 
const precoLitro = 8.0;
const tempoDeViagem = 4; 
const velocidadeMedia = 400; 
let distanciaPercorrida = velocidadeMedia * tempoDeViagem;
let quantidadeDeLitros = distanciaPercorrida / consumoMedio;
let custo = quantidadeDeLitros * precoLitro;
console.log("Custo da viagem R$ " + custo);
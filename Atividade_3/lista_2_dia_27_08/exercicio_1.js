// Ex 1: Verificar se um número é quadrado perfeito

const numero = 144; // teste aqui com qualquer número inteiro positivo

const raiz = Math.sqrt(numero);

if (Number.isInteger(raiz)) {
  console.log(`O número ${numero} é um quadrado perfeito, pois √${numero} = ${raiz}`);
} else {
  console.log(`O número ${numero} NÃO é um quadrado perfeito`);
}

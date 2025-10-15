
function calcularBase(numero) {
  if (numero === 0) return '0';

  let binario = '';
  let n = numero;

  while (n > 0) {
    let resto = n % 2;       
    binario = resto + binario; 
    n = Math.floor(n / 2);    
  }
  return binario;
}
document.getElementById('converter').addEventListener('click', function() {
  const input = document.getElementById('decimal');
  const resultado = document.getElementById('resultado');
  const valor = Number(input.value);

  if (!Number.isInteger(valor) || valor < 0) {
    resultado.textContent = 'Digite um número inteiro positivo!';

 return;

  }
  const binario = calcularBase(valor);
  resultado.textContent = `O número ${valor} em binário é: ${binario}`;
});

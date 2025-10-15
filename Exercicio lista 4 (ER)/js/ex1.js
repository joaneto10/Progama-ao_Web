
function ehCapicua(numero) {
  if (numero < 0) return false; 
  
  let original = numero;
  let invertido = 0;

  while (numero > 0) {
    let digito = numero % 10;            
    invertido = invertido * 10 + digito; 
    numero = Math.trunc(numero / 10);    
  }

  return original === invertido;
}
function verificarCapicua() {
  const input = document.getElementById('numero');
  const resultado = document.getElementById('resultado');
  const valor = Number(input.value);

  if (!Number.isInteger(valor) || valor < 0) {
    resultado.textContent = 'Digite um número inteiro positivo!';

    return;
  }

  const eCapicua = ehCapicua(valor);

  if (eCapicua) {
    resultado.textContent = `${valor} é um número capicua`;
    
  } else {
    resultado.textContent = `${valor} não é um número capicua`;
    
  }
}
document.getElementById('botao').addEventListener('click', verificarCapicua);

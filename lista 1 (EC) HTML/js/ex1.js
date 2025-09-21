document.getElementById('btn1').onclick = function(){
const n = parseInt(document.getElementById('num1').value,10);
const out = document.getElementById('out1');
if (isNaN(n) || n < 0) { out.textContent = 'Digite um inteiro positivo.'; return; }
out.textContent = (n % 2 === 0) ? `${n} é par.` : `${n} é ímpar.`;
};
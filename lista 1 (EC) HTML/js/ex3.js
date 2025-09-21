document.getElementById('btn3').onclick = function(){
const n = parseInt(document.getElementById('num3').value,10);
const out = document.getElementById('out3');
const str = String(Math.abs(n)).padStart(4,'0');
if (str.length !== 4) { out.textContent = 'Digite um número de 4 dígitos.'; return; }
const primeira = parseInt(str.slice(0,2),10);
const segunda = parseInt(str.slice(2,4),10);
const soma = primeira + segunda;
const quad = Math.pow(soma,2);
out.innerHTML = `Partes: ${primeira} + ${segunda} = ${soma}<br>(${soma})² = ${quad}<br>` + (quad === n ? 'O número possui a característica.' : 'O número NÃO possui a característica.');
};
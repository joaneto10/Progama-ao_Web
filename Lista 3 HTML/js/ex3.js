document.getElementById('calc2').addEventListener('click', ()=>{
const valor1 = parseFloat(document.getElementById('valor1').value) || 0;
const valor2 = parseFloat(document.getElementById('valor2').value) || 0;
const cond = document.getElementById('cond').value;
let valor_1 = valor1;
let valor_2 = valor2;
let detalhe = '';
switch(cond){
case '1':
total = valor1 + valor2; detalhe = 'Resultado da Adição'; break;
case '2':
total = valor1 - valor2; detalhe = 'Resultado da Subtração'; break;
case '3':
total = valor1 * valor2; detalhe = 'Resultado da Multiplicação)'; break;
case '4':
total = valor1 / valor2; detalhe = 'Resultado da Divisão'; break;
default:
detalhe = 'Opção inválida';
}
document.getElementById('res2').textContent = `Condição: ${detalhe} — Resultado da Operação ${total.toFixed(2)}`;
}); 
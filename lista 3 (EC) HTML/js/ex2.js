document.getElementById('calc2').addEventListener('click', ()=>{
const preco = parseFloat(document.getElementById('preco').value) || 0;
const cond = document.getElementById('cond').value;
let total = preco;
let detalhe = '';
switch(cond){
case '1':
total = preco * 0.9; detalhe = '10% de desconto'; break;
case '2':
total = preco * 0.95; detalhe = '5% de desconto'; break;
case '3':
total = preco; detalhe = '2x sem juros (preço normal)'; break;
case '4':
total = preco * 1.10; detalhe = '3x com 10% de juros'; break;
default:
detalhe = 'Opção inválida';
}
document.getElementById('res2').textContent = `Condição: ${detalhe} — Valor final: R$ ${total.toFixed(2)}`;
});
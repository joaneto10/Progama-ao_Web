document.getElementById('btn6').onclick = function(){
const nome = document.getElementById('nome6').value || '---';
const conta = document.getElementById('conta6').value || '---';
const saldoSem = parseFloat(document.getElementById('saldo6').value) || 0;
const saldoMedio = saldoSem / 6; // média mensal
let tarifa = 0;


if (saldoMedio < 1000.00) tarifa = 25;
else if (saldoMedio <= 2000.00) tarifa = 20;
else if (saldoMedio <= 3500.00) tarifa = 13;
else tarifa = 0; // isento


document.getElementById('out6').innerHTML = `Nome: <strong>${nome}</strong><br>Conta: ${conta}<br>Saldo médio mensal: R$ ${saldoMedio.toFixed(2)}<br>Tarifa: R$ ${tarifa.toFixed(2)}`;
};
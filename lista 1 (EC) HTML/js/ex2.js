document.getElementById('btn2').onclick = function(){
const s = parseFloat(document.getElementById('sal').value) || 0;
let novo;
if (s <= 1412.00) novo = s * 1.5; else novo = s * 1.4;
document.getElementById('out2').innerHTML = `Salário reajustado: R$ ${novo.toFixed(2)}`;
};
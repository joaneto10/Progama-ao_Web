const taxas = {1:6.617,2:6.816,3:5.071,4:3.018};

document.getElementById('calcular').addEventListener('click', ()=>{
const val = parseFloat(document.getElementById('valor').value) || 0;
const opc = document.getElementById('moeda').value;
const taxa = taxas[opc];
const convertido = val / taxa;
const nomes = {1:'Euro',2:'Libra Esterlina',3:'Dólar',4:'Iene'};

const saida = document.getElementById('saida');
saida.innerHTML = `${val.toFixed(2)} R$ = ${convertido.toFixed(4)} ${nomes[opc]} (cotação R$ ${taxa.toFixed(3)})`;
});
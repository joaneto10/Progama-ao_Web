document.getElementById('btn4').onclick = function(){
const idade = parseInt(document.getElementById('idade').value,10) || 0;
let classe = '';
if (idade < 16) classe = 'Não-eleitor';
else if ((idade >= 16 && idade < 18) || (idade > 65)) classe = 'Eleitor facultativo';
else if (idade >= 18 && idade <= 65) classe = 'Eleitor obrigatório';
document.getElementById('out4').textContent = `Classe: ${classe}`;
};
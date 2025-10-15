function calcular() {

const numero_1 = document.getElementById("numero").value;
let resultado =  document.getElementById("resultado");


  if (isNaN(numero_1) || numero_1 <= 0){
    resultado.innerHTML = "Por favor digite um numero valido";
return;
  }

  if(numero_1 ===1 || numero_1=== 2 ){

    resultado.innerHTML = "O" + numero_1 + "Termo da série e 1";
    return;
  } 

  let anterior = 1;
  let atual = 1;
  let proximo;

  for (let i = 3; i <= numero_1; i++) {
    proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
  }

 resultado.innerHTML = "O " + numero_1 + "º termo da série é " + atual + ".";
}
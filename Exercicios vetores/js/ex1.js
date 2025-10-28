const numero  = document.getElementById("idInNota");
const botaoCalcularC = document.getElementById("btnCalcular");
const resultadoC = document.getElementById("idOnResultado");
const mediaTurmaC = document.getElementById("idOnMedia");


const arrayNumero = [];
function acaoBotaoIncluirNumero(){
    const valor = Number(numero.value);
    arrayNumero.push(valor);
    console.log(arrayNumero);
    resultadoC.innerText = arrayNumero.join(" | ");
}
function acaoBotaoCalcular(){
   let numero = 0;

   if(arrayNumero.length == 0) amplitude = 0;
   else{
      maiorNumero = arrayNumero[0];
      menorNumero = arrayNumero[0];
      for(valor of arrayNumero){
         amplitude = maiorNumero - menorNumero;
         if(valor < menorNumero)  menorNumero = valor;
         if(valor > maiorNumero)  maiorNumero = valor;
      }
      amplitude = amplitude/arrayNumero.length;
      relatorioNumero = "Relatório dos Numeros \n";
      for(valor of arrayNumero){
         if(valor < amplitude) relatorioNumero += "Nota: " + valor + " < Media\n";
         else relatorioNumero += "Nota: " + valor + " >= Media\n";
      }
       const conjuntoInverso = [...arrayNumero].reverse().join(" | ");
   }
   console.log(amplitude);
   let saida = "Amplitude = " + amplitude + "\n";
   saida += "Maior Numero: " + maiorNumero + "\n";
   saida += "Menor Numero: " + menorNumero + "\n";
   saida += relatorioNumero;
   mediaTurmaC.innerText = saida;
}
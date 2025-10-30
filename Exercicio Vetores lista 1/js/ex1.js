let inNumero = document.getElementById("idInNumero");
let resultadoLabel = document.getElementById("idOnResultado");
let textoArrayNumeros = document.getElementById("outArray");

function acaoBotaoIncluirNumero() {
  let arrayNumeros = [];
  let arrayExistente = textoArrayNumeros.textContent;

  if (arrayExistente != "Array: ") {
    arrayNumeros = arrayExistente.split(": ")[1].split(", ").map(Number);
  }

  let numero = Number(inNumero.value);
  if (numero == 0 || isNaN(numero)) {
    alert("Informe um número válido diferente de zero.");
    inNumero.focus();
    return;
  }

  arrayNumeros.push(numero);
  textoArrayNumeros.innerText = "Array: " + arrayNumeros.join(", ");
  inNumero.value = "";
  inNumero.focus();
}

function retornarAmplitude(arrayNumeros) {
  let maior = arrayNumeros[0];
  let menor = arrayNumeros[0];

  for (let numeros of arrayNumeros) {
    if (numeros > maior) maior = numeros;
    if (numeros < menor) menor = numeros;
  }

  return maior - menor;
}

function retornaArrayNumerico(arrayNumeros) {
  let arrayNumerico = [];
  for (let valor of arrayNumeros) {
    let numero = Number(valor);
    if (!isNaN(numero)) arrayNumerico.push(numero);
  }
  return arrayNumerico;
}

function retornaMediaAritmetica(arrayNumeros) {
  let somaNumeros = 0;
  for (let numeros of arrayNumeros) somaNumeros += numeros;
  return somaNumeros / arrayNumeros.length;
}

function retornaConjuntoInverso(arrayNumeros) {
  return arrayNumeros.slice().reverse();
}

function acaoBotaoCalcular() {
  let arrayTexto = textoArrayNumeros.textContent.split(": ")[1];

  if (!arrayTexto || arrayTexto.trim() === "") {
    alert("Adicione números ao array antes de calcular.");
    inNumero.focus();
    return;
  }

  let arrayExistente = arrayTexto.split(", ").map(Number);
  let arrayExistenteFormatado = retornaArrayNumerico(arrayExistente);

  let amplitude = retornarAmplitude(arrayExistenteFormatado);
  let media = retornaMediaAritmetica(arrayExistenteFormatado);
  let inverso = retornaConjuntoInverso(arrayExistenteFormatado).join(", ");

  resultadoLabel.innerText =
    "A amplitude do array é " + amplitude + ";\n" +
    "A média aritmética é " + media + ";\n" +
    "A inversão do conjunto é " + inverso + ";";
}

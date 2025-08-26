const numeroOrig = 123;
const centenas = Math.floor(numeroOrig / 100);
const dezenas = Math.floor((numeroOrig % 100) / 10);
const unidades = numeroOrig % 10;
const numeroInvertido = unidades * 100 + dezenas * 10 + centenas;
console.log("Lista 03 - Ex 6: Número invertido =", numeroInvertido);
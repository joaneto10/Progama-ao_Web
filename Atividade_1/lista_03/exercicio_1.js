const perda = 2;
const vazao = 2;
const diametro = 2;
const coeficiente = 2;
const calculoCarga = Math.pow(vazao,1.85) * 10.643 * Math.pow(diametro, 4.87) * Math.pow(coeficiente, -1.85);   
console.log(calculoCarga);
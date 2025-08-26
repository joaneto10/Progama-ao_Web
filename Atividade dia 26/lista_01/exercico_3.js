const nota_1=6.6;
const nota_2=3.9;
const nota_3=9.9;
const peso_1=2;
const peso_2=6;  
const peso_3=10;

let somaPesos = peso_1 + peso_2 + peso_3;
let somaPonderada = (nota_1 * peso_1 + nota_2 * peso_2 + nota_3 * peso_3) / somaPesos;
let media = somaPonderada / somaPesos;
console.log(" A Media final e:"+media.toFixed(2));
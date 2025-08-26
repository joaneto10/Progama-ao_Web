const raio = 0.05;   // m
const altura = 0.12; // m
const precoAluminio = 155.00;
const areaBase = Math.PI * Math.pow(raio, 2) * 2; 
const areaLateral = 2 * Math.PI * raio * altura;
const areaTotalLata = areaBase + areaLateral;
const custoLata = areaTotalLata * precoAluminio;
console.log("Lista 03 - Ex 3: Custo da lata =", custoLata.toFixed(2));

const areaBase = 20; 
const altura = 9; 

let area = areaBase * altura;  
let volume = area / 3;

if (volume > 0) {
    console.log("Volume da pirâmide é " + volume.toFixed(2));
} else {
    console.log("Valores inválidos para calcular o volume da pirâmide!");
}

// Ex 3: Verificar tipo de triângulo

const valorA = 10;
const valorB = 10;
const valorC = 10;

if (valorA + valorB > valorC && valorA + valorC > valorB && valorB + valorC > valorA) {
  
  if (valorA === valorB && valorB === valorC) {
    console.log("Ex 3: Triângulo Equilátero");
  } else if (valorA === valorB || valorA === valorC || valorB === valorC) {
    console.log("Ex 3: Triângulo Isósceles");
  } else {
    console.log("Ex 3: Triângulo Escaleno");
  }

} else {
  console.log("Ex 3: Os valores NÃO formam um triângulo");
}

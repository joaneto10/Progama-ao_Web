const num1 = 10;
const num2 = 5;
const operacao = "*"; // "+", "-", "*", "/"

let resultado;

if (operacao === "+") {
    resultado = num1 + num2;
} else if (operacao === "-") {
    resultado = num1 - num2;
} else if (operacao === "*") {
    resultado = num1 * num2;
} else if (operacao === "/") {
    if (num2 !== 0) {
        resultado = num1 / num2;
    } else {
        console.log("Erro: divisão por zero!");
    }
} else {
    console.log("Operação inválida!");
}

if (resultado !== undefined) {
    console.log(`Resultado: ${resultado}`);
}

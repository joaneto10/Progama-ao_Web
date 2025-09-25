function verificarTriangulo() {
    // Obtém os valores dos lados do triângulo
    const a = parseFloat(document.getElementById('ladoA').value);
    const b = parseFloat(document.getElementById('ladoB').value);
    const c = parseFloat(document.getElementById('ladoC').value);
    const resultadoElemento = document.getElementById('resultado');

    // Verifica a condição de existência do triângulo
    if (a + b > c && a + c > b && b + c > a) {
        // Se as condições forem verdadeiras, classifica o triângulo
        if (a === b && b === c) {
            resultadoElemento.textContent = "Os valores formam um triângulo EQUILÁTERO.";
        } else if (a === b || a === c || b === c) {
            resultadoElemento.textContent = "Os valores formam um triângulo ISÓSCELES.";
        } else {
            resultadoElemento.textContent = "Os valores formam um triângulo ESCALENO.";
        }
    } else {
        // Se as condições forem falsas, não é um triângulo
        resultadoElemento.textContent = "Os valores NÃO formam um triângulo.";
    }
}
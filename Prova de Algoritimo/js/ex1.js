function classificarTriangulo() {
    let A = parseFloat(document.getElementById('ladoA').value);
    let B = parseFloat(document.getElementById('ladoB').value);
    let C = parseFloat(document.getElementById('ladoC').value);
    let resultado = document.getElementById('resultado');

    // Verifica se os lados formam um triângulo
    if (A + B <= C || A + C <= B || B + C <= A) {
        resultado.textContent = "Os lados não formam um triângulo.";
        return;
    }

    // Organiza os lados do maior para o menor
    let lados = [A, B, C].sort((a, b) => b - a);
    let a = lados[0], b = lados[1], c = lados[2];

    // Classificação quanto ao ângulo
    if (Math.abs(a*a - (b*b + c*c)) < 1e-10) {
        resultado.textContent = "Triângulo Retângulo";
    } else if (a*a > b*b + c*c) {
        resultado.textContent = "Triângulo Obtusângulo";
    } else {
        resultado.textContent = "Triângulo Acutângulo";
    }
}

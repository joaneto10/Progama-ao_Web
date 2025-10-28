function classificarTriangulo() {
    var A = parseFloat(document.getElementById('ladoA').value);
    var B = parseFloat(document.getElementById('ladoB').value);
    var C = parseFloat(document.getElementById('ladoC').value);
    var resultado = document.getElementById('resultado');

    if (isNaN(A) || isNaN(B) || isNaN(C) || A <= 0 || B <= 0 || C <= 0) {
        resultado.textContent = "Digite valores válidos e positivos para os lados!";
        return;
    }

    
    if (A >= B + C || B >= A + C || C >= A + B) {
        resultado.textContent = "Os valores informados não formam um triângulo.";
        return;
    }

        var diferenca1 = A*A - (B*B + C*C);
        var diferenca2 = B*B - (A*A + C*C);
        var diferenca3 = C*C - (A*A + B*B);

    if (Math.pow(diferenca1) < 1-10 || Math.pow(diferenca2) < 1-10 || Math.pow(diferenca3) < 1-10) {
        resultado.textContent = "Triângulo Retângulo";
    } else if (diferenca1 > 0 || diferenca2 > 0 || diferenca3 > 0) {
        resultado.textContent = "Triângulo Obtusângulo";
    } else {
        resultado.textContent = "Triângulo Acutângulo";
    }
}

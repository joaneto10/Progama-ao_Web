function verificarQuadradoPerfeito() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultadoElemento = document.getElementById('resultado');

    // Calcula a raiz quadrada do número
    const raiz = Math.sqrt(numero);

    // Verifica se a raiz quadrada é um número inteiro
    // O operador % 1 verifica se há resto na divisão por 1.
    // Se a raiz for 12, 12 % 1 = 0. Se for 12.5, 12.5 % 1 = 0.5.
    if (raiz % 1 === 0) {
        resultadoElemento.textContent = `O número ${numero} É um quadrado perfeito.`;
    } else {
        resultadoElemento.textContent = `O número ${numero} NÃO é um quadrado perfeito.`;
    }
}
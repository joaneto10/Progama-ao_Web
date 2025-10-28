function calcularRaiz() {
    const num = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(num) || num <= 0) {
        resultado.textContent = "Digite um número positivo válido!";
        return;
    }

    let impar = 1, raiz = 0, restante = num;

    while (restante >= impar) {
        restante -= impar;
        impar += 2;
        raiz++;
    }

    resultado.textContent = 
        restante === 0
        ? `A raiz quadrada de ${num} é ${raiz} (exata).`
        : `A raiz quadrada de ${num} é aproximadamente ${raiz} (restante ${restante}).`;
}

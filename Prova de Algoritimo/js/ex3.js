// Função que calcula a raiz quadrada aproximada usando subtração de ímpares consecutivos
function raizQuadrada(num) {
    if (num <= 0) return 0;

    let impar = 1;
    let contador = 0;
    let restante = num;

    while (restante >= impar) {
        restante -= impar;
        impar += 2; // próximo número ímpar
        contador++;
    }

    return { raiz: contador, restante: restante };
}

// Função chamada pelo botão
function calcularRaiz() {
    let numero = parseInt(document.getElementById('numero').value);
    let resultado = document.getElementById('resultado');

    if (numero <= 0 || isNaN(numero)) {
        resultado.textContent = "Digite um número positivo válido!";
        return;
    }

    let { raiz, restante } = raizQuadrada(numero);

    if (restante === 0) {
        resultado.textContent = `A raiz quadrada de ${numero} é ${raiz} (exata).`;
    } else {
        resultado.textContent = `A raiz quadrada de ${numero} é aproximadamente ${raiz} (restante ${restante}).`;
    }
}

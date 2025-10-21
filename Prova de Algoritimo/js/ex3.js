
function raizQuadrada(num) {
    if (num <= 0) return 0;

    let impar = 1;
    let contador = 0;
    let restante = num;

    while (restante >= impar) {
        restante -= impar;
        impar += 2; 
        contador++;
    }

    return { raiz: contador, restante: restante };
}

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

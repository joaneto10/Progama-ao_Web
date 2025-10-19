// Função que calcula o quociente usando apenas subtrações
function quociente(num1, num2) {
    let q = 0;
    let restante = num1;

    while (restante >= num2) {
        restante -= num2;
        q++;
    }
    return q;
}

// Função que calcula o resto usando apenas subtrações
function resto(num1, num2) {
    let restante = num1;

    while (restante >= num2) {
        restante -= num2;
    }
    return restante;
}

// Função principal chamada pelo botão
function calcular() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let resultado = document.getElementById('resultado');

    if (num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)) {
        resultado.textContent = "Digite números inteiros positivos válidos!";
        return;
    }

    let q = quociente(num1, num2);
    let r = resto(num1, num2);

    resultado.textContent = `Quociente(${num1}, ${num2}) = ${q}, Resto(${num1}, ${num2}) = ${r}`;
}

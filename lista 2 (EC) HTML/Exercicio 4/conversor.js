function converterMoeda() {
    const valorReais = parseFloat(document.getElementById('valorReais').value);
    const opcao = parseInt(document.getElementById('moedaDestino').value);
    const resultadoElemento = document.getElementById('resultado');
    let valorConvertido;
    let nomeMoeda;

    // Definir as taxas de câmbio
    const TAXAS = {
        euro: 5.418,
        libra: 6.336,
        dolar: 5.189
    };

    // Realiza a conversão com base na opção selecionada
    if (opcao === 1) {
        valorConvertido = valorReais / TAXAS.euro;
        nomeMoeda = "Euro";
    } else if (opcao === 2) {
        valorConvertido = valorReais / TAXAS.libra;
        nomeMoeda = "Libra Esterlina";
    } else if (opcao === 3) {
        valorConvertido = valorReais / TAXAS.dolar;
        nomeMoeda = "Dólar";
    } else {
        resultadoElemento.textContent = "Opção inválida.";
        return;
    }

    // Exibe o resultado formatado
    resultadoElemento.textContent = `O valor de R$ ${valorReais.toFixed(2)} equivale a ${valorConvertido.toFixed(2)} ${nomeMoeda}.`;
}
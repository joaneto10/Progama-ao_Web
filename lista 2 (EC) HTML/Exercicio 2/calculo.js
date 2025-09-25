function calcularPrecoFinal() {
    const precoFabrica = parseFloat(document.getElementById('precoFabrica').value);
    let precoFinal = precoFabrica;

    // Verifica o estado de cada checkbox e adiciona o valor se estiver selecionado
    if (document.getElementById('arCondicionado').checked) {
        precoFinal += 1750.00;
    }

    if (document.getElementById('pinturaMetalica').checked) {
        precoFinal += 800.00;
    }

    if (document.getElementById('vidroEletrico').checked) {
        precoFinal += 1200.00;
    }

    if (document.getElementById('direcaoHidraulica').checked) {
        precoFinal += 2000.00;
    }

    // Exibe o preço final formatado
    document.getElementById('resultado').textContent = `O preço final do carro é: R$ ${precoFinal.toFixed(2)}`;
}
function calcularValor() {
    // 1. Obter os valores dos inputs
    const tipoCombustivel = parseInt(document.getElementById('tipoCombustivel').value);
    const litros = parseFloat(document.getElementById('litros').value);
    const resultadoDiv = document.getElementById('resultado');

    // 2. Validar as entradas
    if (isNaN(tipoCombustivel) || isNaN(litros) || litros <= 0) {
        resultadoDiv.textContent = 'Por favor, insira valores válidos.';
        return;
    }

    // 3. Definir os preços
    const precoAlcool = 4.805;
    const precoDiesel = 5.953;
    const precoGasolina = 6.565;

    let valorTotal = 0;
    let mensagem = '';

    // 4. Estrutura condicional para o cálculo
    switch (tipoCombustivel) {
        case 1:
            valorTotal = litros * precoAlcool;
            mensagem = `O valor a ser pago por ${litros} litros de Álcool é R$ ${valorTotal.toFixed(2)}.`;
            break;
        case 2:
            valorTotal = litros * precoDiesel;
            mensagem = `O valor a ser pago por ${litros} litros de Diesel é R$ ${valorTotal.toFixed(2)}.`;
            break;
        case 3:
            valorTotal = litros * precoGasolina;
            mensagem = `O valor a ser pago por ${litros} litros de Gasolina é R$ ${valorTotal.toFixed(2)}.`;
            break;
        default:
            mensagem = 'Opção de combustível inválida. Por favor, escolha 1, 2 ou 3.';
            break;
    }

    // 5. Exibir o resultado
    resultadoDiv.textContent = mensagem;
}
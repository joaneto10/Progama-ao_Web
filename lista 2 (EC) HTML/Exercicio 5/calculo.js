function calcularPagamento() {
    // 1. Obter os valores do formulário
    const preco = parseFloat(document.getElementById('preco').value);
    const condicao = parseInt(document.getElementById('condicao').value);
    const resultadoDiv = document.getElementById('resultado');

 
    if (isNaN(preco) || preco <= 0) {
        resultadoDiv.innerHTML = 'Por favor, insira um preço válido.';
        return;
    }

    let valorFinal = 0;
    let mensagem = '';

  
    switch (condicao) {
        case 1:
            // À vista, dinheiro ou cheque: 10% de desconto
            valorFinal = preco - (preco * 0.10);
            mensagem = `O valor a ser pago com 10% de desconto é R$ ${valorFinal.toFixed(2)}.`;
            break;
        case 2:
            valorFinal = preco - (preco * 0.05);
            mensagem = `O valor a ser pago com 5% de desconto é R$ ${valorFinal.toFixed(2)}.`;
            break;
        case 3:
            // Em 2 vezes: preço normal sem juros
            valorFinal = preco;
            const valorParcela2x = preco / 2;
            mensagem = `O valor a ser pago é R$ ${valorFinal.toFixed(2)}, em 2 parcelas de R$ ${valorParcela2x.toFixed(2)}.`;
            break;
        case 4:
            // Em 3 vezes: preço normal + 10% de juros
            valorFinal = preco + (preco * 0.10);
            const valorParcela3x = valorFinal / 3;
            mensagem = `O valor a ser pago com 10% de juros é R$ ${valorFinal.toFixed(2)}, em 3 parcelas de R$ ${valorParcela3x.toFixed(2)}.`;
            break;
        default:
            mensagem = 'Opção de pagamento inválida.';
            break;
    }

    resultadoDiv.innerHTML = mensagem;
}
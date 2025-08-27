// Ex 5: Cálculo do valor a pagar conforme condição de pagamento

const precoEtiqueta = 1000.00; // valor original
const codigo = 4; // condição escolhida (1 a 4)

let valorFinal;

if (codigo === 1) {
  valorFinal = precoEtiqueta * 0.90;
  console.log(`Ex 5: Pagamento à vista (dinheiro/cheque) = R$ ${valorFinal.toFixed(2)}`);
} else if (codigo === 2) {
  valorFinal = precoEtiqueta * 0.95;
  console.log(`Ex 5: Pagamento à vista (cartão) = R$ ${valorFinal.toFixed(2)}`);
} else if (codigo === 3) {
  valorFinal = precoEtiqueta;
  console.log(`Ex 5: Pagamento em 2x de R$ ${(valorFinal / 2).toFixed(2)} (sem juros)`);
} else if (codigo === 4) {
  valorFinal = precoEtiqueta * 1.10;
  console.log(`Ex 5: Pagamento em 3x de R$ ${(valorFinal / 3).toFixed(2)} (com juros)`);
} else {
  console.log("Ex 5: Código de pagamento inválido!");
}

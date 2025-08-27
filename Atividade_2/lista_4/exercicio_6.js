const nome = "João";
const conta = "12345-6";
const saldoSemestral = 12000.00;
const saldoMedioMensal = saldoSemestral / 6;

let tarifa;
if (saldoMedioMensal <= 1000) {
  tarifa = 25.00;
} else if (saldoMedioMensal <= 2000) {
  tarifa = 20.00;
} else if (saldoMedioMensal <= 3500) { 
  tarifa = 13.00;
} else {
  tarifa = 0.00;
}
console.log(`Ex 6: Cliente ${nome}, Conta ${conta}, Tarifa bancária = R$ ${tarifa.toFixed(2)}`);
const salario = 1800.00;
let salarioReajustado;
if (salario <= 1412) {
  salarioReajustado = salario * 1.5;
} else {
  salarioReajustado = salario * 1.4;
}
console.log("Ex 2: Salário reajustado =", salarioReajustado.toFixed(2));

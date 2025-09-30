function calcular() {
  let matricula = document.getElementById("matricula").value;
  let nome = document.getElementById("nome").value;
  let dep = parseInt(document.getElementById("dependentes").value);
  let salarioBase = parseFloat(document.getElementById("salario").value);
  let producao = parseInt(document.getElementById("producao").value);

  // Gratificação
  let grat = 0;
  if (producao <= 1000) grat = 500;
  else if (producao <= 2000) grat = 1250;
  else grat = 2250;

  let bruto = salarioBase + grat;

  // INSS
  let inss = 0;
  if (bruto <= 1412.00) inss = bruto * 0.075;
  else if (bruto <= 2666.68) inss = bruto * 0.09;
  else if (bruto <= 4000.03) inss = bruto * 0.12;
  else inss = bruto * 0.14;

  // IRPF
  let irpf = 0;
  if (bruto <= 2259.20) irpf = 0;
  else if (bruto <= 2826.65) irpf = bruto * 0.075;
  else if (bruto <= 3751.05) irpf = bruto * 0.15;
  else if (bruto <= 4664.68) irpf = bruto * 0.225;
  else irpf = bruto * 0.275;

  let descontoDep = dep * 123;

  let liquido = bruto - inss - irpf + descontoDep;

  let texto = `
Matrícula: ${matricula}
Nome: ${nome}
Dependentes: ${dep}
Salário Base: R$ ${salarioBase.toFixed(2)}
Gratificação: R$ ${grat.toFixed(2)}
Salário Bruto: R$ ${bruto.toFixed(2)}
INSS: R$ ${inss.toFixed(2)}
IRPF: R$ ${irpf.toFixed(2)}
Desconto dependentes: R$ ${descontoDep.toFixed(2)}
Salário Líquido: R$ ${liquido.toFixed(2)}
`;

  document.getElementById("resultado").textContent = texto;
}
const matricula = 123;
const nome = "João";
const dependentes = 2;
const salarioBase = 3000;
const producao = 1500;

let gratificacao = 0;
if (producao <= 1000) gratificacao = 500;
else if (producao <= 2000) gratificacao = 1250;
else gratificacao = 2250;

const salarioBruto = salarioBase + gratificacao;

// INSS
let inss = 0;
if (salarioBruto <= 1412.00) inss = salarioBruto * 0.075;
else if (salarioBruto <= 2666.68) inss = salarioBruto * 0.09;
else if (salarioBruto <= 4000.03) inss = salarioBruto * 0.12;
else inss = salarioBruto * 0.14;

// IRPF
let irpf = 0;
if (salarioBruto <= 2259.20) irpf = 0;
else if (salarioBruto <= 2826.65) irpf = salarioBruto * 0.075;
else if (salarioBruto <= 3751.05) irpf = salarioBruto * 0.15;
else if (salarioBruto <= 4664.68) irpf = salarioBruto * 0.225;
else irpf = salarioBruto * 0.275;

// desconto por dependentes
const descontoDependentes = dependentes * 123;

const salarioLiquido = salarioBruto - inss - irpf + descontoDependentes;

console.log("=== Contra-cheque ===");
console.log("Matrícula:", matricula);
console.log("Nome:", nome);
console.log("Dependentes:", dependentes);
console.log("Salário Base: R$", salarioBase.toFixed(2));
console.log("Gratificação: R$", gratificacao.toFixed(2));
console.log("Salário Bruto: R$", salarioBruto.toFixed(2));
console.log("INSS: R$", inss.toFixed(2));
console.log("IRPF: R$", irpf.toFixed(2));
console.log("Desconto Dependentes: R$", descontoDependentes.toFixed(2));
console.log("Salário Líquido: R$", salarioLiquido.toFixed(2));

const tipoPaciente = 3; // 1 = bebê, 2 = adolescente, 3 = adulto, 4 = idoso
let dosagemMg;

if (tipoPaciente === 1) dosagemMg = 600;
else if (tipoPaciente === 2) dosagemMg = 1600;
else if (tipoPaciente === 3) dosagemMg = 4600;
else if (tipoPaciente === 4) dosagemMg = 2450;
else console.log("Tipo inválido!");

if (dosagemMg) {
    const mgPorMl = 400;
    const gotasPorMl = 15;

    const mlNecessario = dosagemMg / mgPorMl;
    const gotas = mlNecessario * gotasPorMl;

    console.log(`Receita: ${dosagemMg} mg = ${gotas.toFixed(0)} gotas`);
}

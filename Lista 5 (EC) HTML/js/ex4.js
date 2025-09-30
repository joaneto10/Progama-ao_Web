function calcular() {
  const doses = {
    "1": 600,
    "2": 1600,
    "3": 4600,
    "4": 2450
  };

  let tipo = document.getElementById("paciente").value;
  let mg = doses[tipo];

  let ml = mg / 400;      // 400 mg por ml
  let gotas = ml * 15;    // 15 gotas por ml

  document.getElementById("resultado").textContent =
    `Dosagem: ${mg} mg | ${gotas.toFixed(0)} gotas (${ml.toFixed(2)} ml)`;
}
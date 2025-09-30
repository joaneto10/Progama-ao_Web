function calcular() {
  let h = parseFloat(document.getElementById("altura").value);
  let sexo = document.getElementById("sexo").value;
  let res = document.getElementById("resultado");

  if (sexo === "M") {
    res.textContent = "Peso ideal: " + (72.7 * h - 58).toFixed(2) + " kg";
  } else if (sexo === "F") {
    res.textContent = "Peso ideal: " + (62.1 * h - 44.7).toFixed(2) + " kg";
  } else {
    res.textContent = "Selecione o sexo corretamente.";
  }
}
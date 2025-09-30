function verificar() {
  let numero = document.getElementById("numero").value.trim();
  let res = document.getElementById("resultado");

  if (numero.length === 5 && !isNaN(numero)) {
    if (numero === numero.split("").reverse().join("")) {
      res.textContent = "✅ O número é palíndromo.";
      res.style.color = "green";
    } else {
      res.textContent = "❌ O número não é palíndromo.";
      res.style.color = "red";
    }
  } else {
    res.textContent = "❌ Digite exatamente 5 dígitos.";
    res.style.color = "red";
  }
}
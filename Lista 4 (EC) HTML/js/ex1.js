function validar() {
  const prefixosBairros = {
    "Oeste": ["3223", "3225", "3212"],
    "Centro": ["3223", "3224", "3212"],
    "Sul": ["3241", "3242", "3243", "3281"],
    "Bueno": ["3251", "3285"],
    "Campinas": ["3233", "3291"]
  };

  let bairro = document.getElementById("bairro").value;
  let telefone = document.getElementById("telefone").value.trim();
  let res = document.getElementById("resultado");

  if (!bairro || telefone.length !== 8 || isNaN(telefone)) {
    res.textContent = "❌ Dados inválidos!";
    res.style.color = "red";
    return;
  }

  let prefixo = telefone.substring(0, 4);
  if (prefixosBairros[bairro].includes(prefixo)) {
    res.textContent = "✅ Telefone válido para o bairro.";
    res.style.color = "green";
  } else {
    res.textContent = "❌ Prefixo não corresponde ao bairro.";
    res.style.color = "red";
  }
}
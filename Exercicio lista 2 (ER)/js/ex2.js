function procurarNumeros() {
  let resultado = "";

  for (let num = 1000; num <= 9999; num++) {
    const strNum = num.toString();
    const primeiros2 = parseInt(strNum.substring(0,2));
    const ultimos2 = parseInt(strNum.substring(2,4));

    if ((primeiros2 + ultimos2) ** 2 === num) {
      resultado += num + "<br>";
    }
  }

  document.getElementById("resultado").innerHTML = resultado || "Nenhum número encontrado.";
}

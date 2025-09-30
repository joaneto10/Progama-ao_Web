function calcular() {
  let nums = [
    parseFloat(document.getElementById("n1").value),
    parseFloat(document.getElementById("n2").value),
    parseFloat(document.getElementById("n3").value),
    parseFloat(document.getElementById("n4").value)
  ];
  nums.sort((a, b) => a - b);
  let soma = nums[0] + nums[1] + nums[2];
  document.getElementById("resultado").textContent = "Soma dos três menores: " + soma;
}
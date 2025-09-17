const altura = 1.75;
const sexo = "M"; // "M" para masculino, "F" para feminino

let pesoIdeal;

if (sexo === "M") {
    pesoIdeal = 72.7 * altura - 58;
} else if (sexo === "F") {
    pesoIdeal = 62.1 * altura - 44.7;
} else {
    console.log("Sexo inválido!");
}

if (pesoIdeal) {
    console.log(`Peso ideal: ${pesoIdeal.toFixed(2)} kg`);
}

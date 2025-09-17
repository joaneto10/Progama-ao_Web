const A = 5, B = 4, C = 3;

if (A * A === B * B + C * C) {
    console.log("Triângulo Retângulo");
} else if (A * A > B * B + C * C) {
    console.log("Triângulo Obtusângulo");
} else {
    console.log("Triângulo Acutângulo");
}

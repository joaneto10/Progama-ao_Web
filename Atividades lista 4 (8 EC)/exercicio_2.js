const numero = 97379;
const numStr = numero.toString();

if (numStr === numStr.split("").reverse().join("")) {
    console.log(`${numero} é palíndromo`);
} else {
    console.log(`${numero} não é palíndromo`);
}

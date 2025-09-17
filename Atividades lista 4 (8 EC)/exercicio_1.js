const bairro = "Centro";
const telefone = "32241234";

const prefixo = telefone.substring(0, 4);

let valido = false;

if (bairro === "Oeste" && (prefixo === "3223" || prefixo === "3225" || prefixo === "3212")) {
    valido = true;
} else if (bairro === "Centro" && (prefixo === "3223" || prefixo === "3224" || prefixo === "3212")) {
    valido = true;
} else if (bairro === "Sul" && (prefixo === "3241" || prefixo === "3242" || prefixo === "3243" || prefixo === "3281")) {
    valido = true;
} else if (bairro === "Bueno" && (prefixo === "3251" || prefixo === "3285")) {
    valido = true;
} else if (bairro === "Campinas" && (prefixo === "3233" || prefixo === "3291")) {
    valido = true;
}

if (valido) {
    console.log(`Telefone ${telefone} válido para o bairro ${bairro}`);
} else {
    console.log(`Telefone ${telefone} inválido para o bairro ${bairro}`);
}

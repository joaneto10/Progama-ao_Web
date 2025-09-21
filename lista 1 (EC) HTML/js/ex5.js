document.getElementById('btn5').onclick = function(){
const A = parseFloat(document.getElementById('a').value) || 0;
const B = parseFloat(document.getElementById('b').value) || 0;
const C = parseFloat(document.getElementById('c').value) || 0;
const out = document.getElementById('out5');


const delta = B*B - 4*A*C;
if (delta < 0) {
out.textContent = 'RAÍZES IMAGINÁRIAS';
} else if (delta === 0) {
const x = -B / (2*A);
out.innerHTML = `RAIZ ÚNICA: x = ${x.toFixed(4)}`;
} else {
const x1 = (-B + Math.sqrt(delta)) / (2*A);
const x2 = (-B - Math.sqrt(delta)) / (2*A);
out.innerHTML = `RAÍZES DISTINTAS:<br>x1 = ${x1.toFixed(4)}<br>x2 = ${x2.toFixed(4)}`;
}
};
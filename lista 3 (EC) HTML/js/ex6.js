function mediaArit(a,b,c){return (a+b+c)/3}
function mediaPond(a,b,c){return (a*3 + b*3 + c*4)/10}
function mediaHarm(a,b,c){
if(a===0||b===0||c===0) return NaN;
return 3 / (1/a + 1/b + 1/c);
}
function mediaGeom(a,b,c){
return Math.pow(a*b*c, 1/3);
}
function mediaQuadr(a,b,c){
return Math.sqrt((a*a + b*b + c*c)/3);
}


document.getElementById('calc6').addEventListener('click', ()=>{
    const a = parseFloat(document.getElementById('a').value) || 0;
    const b = parseFloat(document.getElementById('b').value) || 0;
    const c = parseFloat(document.getElementById('c').value) || 0;
    const op = document.getElementById('opm').value;
let res;
switch(op){
case '1': res = mediaArit(a,b,c); break;
case '2': res = mediaPond(a,b,c); break;
case '3': res = mediaHarm(a,b,c); break;
case '4': res = mediaGeom(a,b,c); break;
case '5': res = mediaQuadr(a,b,c); break;
default: res = 'Opção inválida';
}
document.getElementById('res6').textContent = `Média (opção ${op}): ${isNaN(res)? 'Inválida': res.toFixed(4)}`;
});
let saida = document.getElementById("saida");
let btn_res = document.getElementById("btn_res");
let btn_limpar = document.getElementById("btn_limpar");
let num = document.getElementById("numero");
function res() {
    for (let i = 0; i <= 10; i++) { 
        let total = num.value * i;
        saida.innerHTML += `${num.value} x ${i} = ${total} <br>`;
        btn_res.disabled = true;
        btn_limpar.disabled = false;
    }
}


function limpar() {
    num.value = 1
    saida.innerHTML = " ";
    btn_limpar.disabled = true;
    btn_res.disabled = false;
}
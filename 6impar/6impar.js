let saida = document.getElementById("saida");
let total;
function res() {
    let numero = Number(document.getElementById("numero").value);
    if (numero % 2 == 0) {
        total = numero + 1
        for (let i = 0; i < 6; i++) {
            saida.innerHTML += total + "<br>"
            total += 2
        }
    }
    else if (numero % 2 == 1) {
        total = numero
        for (let i = 0; i < 6; i++) {
            saida.innerHTML += total + "<br>"
            total += 2
        }
    }
}
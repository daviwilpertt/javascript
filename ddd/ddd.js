let saida = document.getElementById("saida");
function res() {
    let ddd = Number(document.getElementById("numero").value);
    switch (ddd) {
        case 61: saida.innerHTML = "brasilia"; break;
        case 71: saida.innerHTML = "salvador"; break;
        case 11: saida.innerHTML = "são paulo"; break;
        case 21: saida.innerHTML = "rio de janeiro"; break;
        case 32: saida.innerHTML = "juiz de fora"; break;
        case 19: saida.innerHTML = "campinas"; break;
        case 27: saida.innerHTML = "vitorias"; break;
        case 31: saida.innerHTML = "belo horizonte"; break;
        case 48: saida.innerHTML = "floripa"; break;
        default: saida.innerHTML = "error"; break;
    }
}
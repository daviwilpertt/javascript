let saida1 = document.getElementById("saida1");
let saida2 = document.getElementById("saida2");
let valor_total = 0;
let total_pontos = 0;

function res() {
    let qnt_multas = document.getElementById("qnt_multas").value;
    
    for (let i = 0; i < qnt_multas; i++) {
        let valor_multas = Number(prompt(`valor da multa ${i + 1} R$`));
        valor_total += valor_multas

        let pontos = Number(prompt(`pontos da multa ${i + 1} : `));
        total_pontos += pontos

        saida1.innerHTML = `total das multas R$${valor_total} <br> total de pontos R$${total_pontos}`
    }

    if (total_pontos >= 21) {
        saida2.innerHTML = "você está irregular"
    }
    else {
        saida2.innerHTML = "você está regular"
    }
}



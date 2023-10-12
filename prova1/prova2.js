let saida_preco = document.getElementById("saida_preco");
let saida_total = document.getElementById("saida_total");

function cantina() {
    let quantidade = document.getElementById("quantidade").value
    let preco = document.getElementById("produto").value
    let total = preco * quantidade
    saida_preco.innerHTML = "R$" + preco 
    if (quantidade > 3) {
        let desconto = total * 0.172
        total -= desconto
        saida_total.innerHTML = "R$" + total.toFixed(2)
    }
    else {
        saida_total.innerHTML = "R$" + total.toFixed(2)

    }
}
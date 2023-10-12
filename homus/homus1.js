let sabor1, preco_total;
let saida1 = document.getElementById("saida1");
let saida2 = document.getElementById("saida2");
let preco_pizza;
function pizza() {
    sabor1 = document.getElementById("porta");
    preco_pizza = sabor1.value;
    switch (preco_pizza) {
        case "queijo": preco_pizza = 20;
            break;
        case "linguica": preco_pizza = 30;
            break;
        case "ovo": preco_pizza = 35;
            break;
        case "linguica_quente": preco_pizza = 40;
            break;
        case "porco": preco_pizza = 45;
            break;
        default:
    }
    
    let tamanho = document.getElementsByName("tamanho");
    switch(tamanho){
        case "borda_salgada": preco_pizza += 10;
        break;
        
    }
    let borda_salgada = document.getElementById("borda_salgada");
    let borda_doce = document.getElementById("borda_doce");
    if (borda_salgada.checked) {
        preco_total = preco_pizza + 10
        saida2.innerHTML = "valor da pizza com borda salgada " + preco_total.toFixed(2)
    }
    else if (borda_doce.checked) {
        preco_total = preco_pizza + 8
        saida2.innerHTML = "valor da pizza com borda doce " + preco_total.toFixed(2)
    }
    else {
        saida2.innerHTML = "valor da pizza sem borda " + preco_pizza.toFixed(2)
    }


}
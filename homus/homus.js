let sabor1, preco_total;
let saida1 = document.getElementById("saida1");
let saida2 = document.getElementById("saida2");
function pizza() {
    sabor1 = document.getElementById("porta");
    let preco_pizza = sabor1.value;
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
    let broto = document.getElementById("tam_broto");
    let media = document.getElementById("tam_media");
    let grande = document.getElementById("tam_grande");
    let familia = document.getElementById("tam_familia");
    if (broto.checked) {
        saida1.innerHTML = "valor pizza broto R$" + preco_pizza.toFixed(2);
    }
    else if (media.checked) {
        preco_pizza *= 1.5
        saida1.innerHTML = "valor pizza média R$" + preco_pizza.toFixed(2);
    }
    else if (grande.checked) {
        preco_pizza *= 1.8
        saida1.innerHTML = "valor pizza grande R$" + preco_pizza.toFixed(2);
    }
    else if (familia.checked) {
        preco_pizza *= 2
        saida1.innerHTML = "valor pizza família R$" + preco_pizza.toFixed(2);
    }
    else {
        alert("erro")
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

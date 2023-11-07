let saida = document.getElementById("saida")
function res() {
    let valor_x = document.getElementById("valor_x").value;
    let valor_y = document.getElementById("valor_y").value;
    if(valor_x > 0 && valor_y > 0){
        saida.innerHTML = "primeiro quadrante"
    }
    else if(valor_x < 0 && valor_y > 0){
        saida.innerHTML = "segundo quadrante"
    }
    else if(valor_x < 0 && valor_y < 0){
        saida.innerHTML = "terceiro quadrante"
    }
    else if(valor_x > 0 && valor_y < 0){
        saida.innerHTML = "quarto quadrante"
    }
}
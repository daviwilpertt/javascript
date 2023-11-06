let saida = document.getElementById("saida")

    for (let cont = 1; cont <= 500; cont++){
        let valor_copia = 0.33
        let valor_total = valor_copia * cont
        saida.innerHTML += `${cont} : R$${valor_total.toFixed(2)}<br> ` 
    }
    

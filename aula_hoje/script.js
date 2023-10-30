function contar() {
    let contador = 0;
    let saida = document.getElementById("saida")
    while (contador > 0) {
        contador++
        saida.innerHTML = "numero de clicks " + contador
    }
}
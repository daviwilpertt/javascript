function calcular() {
    let AA = document.getElementById("valor1").value;
    let BB = document.getElementById("valor2").value;
    let CC = document.getElementById("valor3").value;
    let DD = document.getElementById("valor4").value;
    let saida = document.getElementById("saida");
    if (BB > CC && DD > AA && CC + DD > AA + BB && CC > 0 && DD > 0 && AA % 2 == 0) {
        saida.innerHTML = "valores aceitos"

    } else {
        saida.innerHTML = "valores não aceitos"
    }
}
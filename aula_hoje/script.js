let saida1 = document.getElementById("saida1");
let saida2 = document.getElementById("saida2");
let contador = 0;
function contar1() {
    let reps1 = document.getElementById("numero1").value
    while (contador < reps1) {
        contador++
        saida1.innerHTML += `${contador} <br>`
    }
    
}
function contar2() {
    let reps2 = document.getElementById("numero2").value
    while (contador < reps2) {
        contador--
        saida2.innerHTML += `${contador} <br>`
    }
}

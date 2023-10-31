let saida1 = document.getElementById("saida1");
let saida2 = document.getElementById("saida2");
function contar1() {
    let contador_cres = 0;
    let reps1 = document.getElementById("numero1").value
    while (contador_cres < reps1) {
        contador_cres++
        saida1.innerHTML += `${contador_cres} <br>`
    }

}

function contar2() {
    let contador_dec = 0
    let reps2 = document.getElementById("numero2").value
    while (reps2 > contador_dec) {
        saida2.innerHTML += `${reps2} <br>`
        reps2--
    }
}

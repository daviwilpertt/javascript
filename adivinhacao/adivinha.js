let numero_aleatorio = Math.random().toFixed(1) * 10
console.log(numero_aleatorio)

let tentativas = Number()
let max_tentativas = Number()
let saida = document.getElementById("saida")
function resultado() {
    let entrada = document.getElementById("numero_digitado").value
    if (entrada > 0 && entrada <= 10) {
        tentativas++
        if (entrada == numero_aleatorio) {
            saida.innerHTML = `acertou em ${tentativas} tentativas` 
        }
        else if (entrada > numero_aleatorio) {
            saida.innerHTML = "chute alto"
        }
        else if (entrada < numero_aleatorio) {
            saida.innerHTML = "chute baixo"
        }
    }
    else {
        saida.innerHTML = "1 a 10"
    }
}
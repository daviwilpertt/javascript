let saida_resultado = document.getElementById("saida");
let saida_dificuldade = document.getElementById("saida_dificuldade");
let saida_tentativas = document.getElementById("tentativas_restantes");
let facil = document.getElementById("facil");
let media = document.getElementById("media");
let dificil = document.getElementById("dificil");
let mt_dificil = document.getElementById("mt_dificil");
let numero_aleatorio = Math.random().toFixed(1) * 10;
let tentativas = Number(1);
let max_tentativas = Number();
let resetar = document.getElementById("botao_resetar")
let res = document.getElementById("botao_res");
let dif = document.getElementById("botao_dif");
// console.log(numero_aleatorio)
function dificuldade() {
    res.disabled = false
    dif.disabled = true
    if (facil.checked) {
        max_tentativas = 15;
        saida_dificuldade.innerHTML = max_tentativas
    }
    else if (media.checked) {
        max_tentativas = 10;
        saida_dificuldade.innerHTML = max_tentativas
    }
    else if (dificil.checked) {
        max_tentativas = 5;
        saida_dificuldade.innerHTML = max_tentativas
    }
    else if (mt_dificil.checked) {
        max_tentativas = 2;
        saida_dificuldade.innerHTML = max_tentativas
    }

}
function resultado() {
    let entrada = document.getElementById("numero_digitado").value
    max_tentativas--
    if (entrada > 0 && entrada <= 10) {
        if (max_tentativas > 0) {
            saida_tentativas.innerHTML = "tentativas restantes: " + max_tentativas
        }
        else if (max_tentativas == 0) {
            saida_tentativas.innerHTML = "acabaram as tentativas"
            res.disabled = true
            resetar.disabled = false
            saida_resultado.innerHTML = "&nbsp"
        }
        else {
        }
        if (entrada == numero_aleatorio) {
            saida_resultado.innerHTML = `acertou em ${tentativas} tentativas`
            saida_tentativas.innerHTML = "jogo encerrado"
            res.disabled = true
            resetar.disabled = false

        }
        else if (entrada > numero_aleatorio) {
            saida_resultado.innerHTML = "chute alto"
            tentativas++
        }
        else if (entrada < numero_aleatorio) {
            saida_resultado.innerHTML = "chute baixo"
            tentativas++
        }
    }
    else {
        saida_resultado.innerHTML = "1 a 10"
    }
}

function reset() {
    entrada = document.getElementById("numero_digitado")
    numero_aleatorio = Math.random().toFixed(1) * 10
    // console.log(numero_aleatorio)
    resetar.disabled = true
    dif.disabled = false
    saida_tentativas.innerHTML = "&nbsp"
    entrada.value = "1"
    saida_resultado.innerHTML = "&nbsp"
    tentativas = 0
    tentativas++
}
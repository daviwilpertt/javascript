let saida_resultado = document.getElementById("saida");
let saida_tentativas = document.getElementById("tentativas_restantes");
let tentativas = 0;
let max_tentativas = Number(20);
let resetar = document.getElementById("botao_resetar")
let res = document.getElementById("res")
function resultado() {
    max_tentativas--
    let numero_secreto = Number(document.getElementById("numero_secreto").value);
    let numero_digitado = document.getElementById("numero_digitado").value;
    if (numero_secreto > 0 && numero_secreto <= 50 && numero_digitado > 0 && numero_digitado <= 50) {
        if (numero_digitado == numero_secreto) {
            saida_resultado.innerHTML = "acertou"
            tentativas = 20
            res.disabled = true

        }
        else if (numero_digitado > numero_secreto) {
            saida_resultado.innerHTML = "chute alto"
            saida_tentativas.innerHTML = `tentativas restantes ${max_tentativas}`
        }
        else if(numero_digitado < numero_secreto) {
            saida_resultado.innerHTML = "chute baixo"
            saida_tentativas.innerHTML = `tentativas restantes ${max_tentativas}`
        }
    }
}
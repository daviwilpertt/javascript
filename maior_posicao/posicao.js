let saida = document.getElementById("saida")
let maior = 0;
let posicao = -1
let i;
for (i = 0; i < 4; i++){
    let numero = Number(prompt("digite um número"));
    if (numero > maior) {
        maior = numero
        posicao = i
        saida.innerHTML = `número maior ${maior} | posição ${posicao}`
    }

}
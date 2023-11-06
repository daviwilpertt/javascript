let saida_maior = document.getElementById("saida_maior");
let saida_menor = document.getElementById("saida_menor")
let numero_maior = Number.NEGATIVE_INFINITY; 
let numero_menor = Number.POSITIVE_INFINITY;
for(let cont = 0; cont < 15; cont++) {
    let numero = Number(prompt("digite um número"));
    if (numero > numero_maior) {
        numero_maior = numero
        saida_maior.innerHTML = numero_maior
    }
    else if(numero < numero_menor){
        numero_menor = numero
        saida_menor.innerHTML = numero_menor
    }
    
}

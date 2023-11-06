let saida_maior = document.getElementById("saida_maior");
let saida_menor = document.getElementById("saida_menor")
let numero_maior = 0; 
let numero_menor = 0;
for(let cont = 0; cont < 3; cont++) {
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

let saida1 = document.getElementById("saida1");
let saida5 = document.getElementById("saida5");
let saida10 = document.getElementById("saida10");
let saida25 = document.getElementById("saida25");
let saida50 = document.getElementById("saida50");

let qntd1 = 0;
let qntd5 = 0
let qntd10 = 0
let qntd25 = 0
let qntd50 = 0

let saida_total1 = document.getElementById("total1");
let saida_total5 = document.getElementById("total5");
let saida_total10 = document.getElementById("total10");
let saida_total25 = document.getElementById("total25");
let saida_total50 = document.getElementById("total50");

for (let i = 1; i = !0; i++) {
    let valor_inicial = Number(prompt("qual moeda você quer depositar?"));
    switch (valor_inicial) {
        case 1: qntd1 = Number(prompt("quantidade"))
            break;
        case 5: qntd5 = Number(prompt("quantidade"))
            break;
        case 10: qntd10 = Number(prompt("quantidade"))
            break;
        case 25: qntd25 = Number(prompt("quantidade"))
            break
        case 50: qntd50 = Number(prompt("quantidade"))
            break
        default: "moeda invalida"
            break;
    }
    

    // if(valor_inicial == 1){
    //     let quantidade = Number(prompt("quantas moeda?"))
    //     let valor_total = quantidade * 0.01
    //     saida1.innerHTML = quantidade
    //     saida_total1 = valor_total
    // }
}




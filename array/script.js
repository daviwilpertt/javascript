let idades = [];
let quantidade = Number(prompt("quantidade de idades"));
for (i = 0; i < quantidade; i++) {
    let numero = Number(prompt("digite uma idade"));
    
    idades.push(numero);
}
alert(idades);
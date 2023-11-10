let media
let soma = 0

for (let i = 0; i < 5; i++) { 
    let idade = Number(prompt("digite idade")) 
    soma += idade
}
media = soma / 5
alert(media.toFixed(1))

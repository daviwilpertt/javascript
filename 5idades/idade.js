let media
let soma = 0

for (let i = 0; i < 5; i++) {
    let idade = Number(prompt("digite idade"))
    soma += idade
}
alert("a soma das idades é " + soma)
media = soma / 5
alert("a média das idades é " + media.toFixed())

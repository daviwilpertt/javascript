let louco = [];
let input = document.querySelector("#user");
let lista = document.querySelector("#lista");

function cadastrar() {
    louco.push(input.value)
    console.log(louco)
    input.value = ""
    listar()
}

function listar() {
    for (let i = 0; i < louco.length; i++) {
        console.log([i]);
        lista.innerHTML = louco
    }
}
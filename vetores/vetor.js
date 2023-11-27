let louco = [];
let input = document.querySelector("#user");
let lista = document.querySelector("#lista");
let pesquisa = document.querySelector("#input_pesquisa");

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

function pesquisa() { 
    let pesquisado = pesquisa.value;
    let pos_pesquisa = louco.indexOf(pesquisado);
    alert("usuario encontrado")
    if (pos_pesquisa != -1) {
        pesquisa = pesquisado
        
    }

}
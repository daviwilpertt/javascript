
function add_viagem() {
    window.location.href = "./add_viagem/viagem.html"
}

let nome = document.querySelector("#saida_nome");

let usuarios = JSON.parse(localStorage.getItem("usuarios"))
console.log(usuarios)


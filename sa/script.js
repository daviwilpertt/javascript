let usuarios = JSON.parse(localStorage.getItem("usuarios"))
console.log(usuarios)

let foto = localStorage.getItem("fotos")

if (foto) {
    let nova = document.createElement("div");
    nova.innerHTML = foto.caminho
    document.body.appendChild(nova)
}

function add_viagem() {
    window.location.href = "./add_viagem/add_viagem.html"
   
}

for (let i = 0; i < usuarios.length; i++){
    let nome = document.querySelector("#saida_nome");
    nome.innerHTML = usuarios[i].nome
}

let saida_foto = document.querySelector("#foto")


function sair() {
    window.location.href = "./login/pagina_login.html"
}

function meu_perfil() {
    window.location.href = "./meu_perfil/perfil.html"
}





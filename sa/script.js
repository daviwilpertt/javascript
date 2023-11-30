let usuarios = JSON.parse(localStorage.getItem("usuarios"))
console.log(usuarios)

function add_viagem() {
    window.location.href = "/sa/add_viagem/viagem.html"
}

for (let i = 0; i < usuarios.length; i++){
    let nome = document.querySelector("#saida_nome");
    nome.innerHTML = usuarios[i].nome
}

function sair() {
    window.location.href = "/sa/login/pagina_login.html"
}

function meu_perfil() {
    window.location.href = "/sa/meu_perfil/perfil.html"
}





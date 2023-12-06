let usuarios = JSON.parse(localStorage.getItem("usuarios"))
console.log(usuarios)


let foto = JSON.parse(localStorage.getItem("fotos"))
console.log(foto)
function add_viagem() {
    window.location.href = "./add_viagem/add_viagem.html"
   
}

for (let i = 0; i < usuarios.length; i++){
    let nome = document.querySelector("#saida_nome");
    nome.innerHTML = usuarios[i].nome
}

let saida_foto = document.querySelector("#div_foto")

saida_foto.innerHTML = `<img src="${foto.image}">`

function sair() {
    window.location.href = "./login/pagina_login.html"
}

function meu_perfil() {
    window.location.href = "./meu_perfil/perfil.html"
}





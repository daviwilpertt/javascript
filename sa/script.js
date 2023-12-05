let usuarios = JSON.parse(localStorage.getItem("usuarios"))
console.log(usuarios)

function add_viagem() {
    // window.location.href = "./add_viagem/viagem.html"
    let div = document.querySelector("#foto");
    let image = new Image();

    image.onload = function () {
        div.innerHTML += `<img id="foto1" src ="${image.src}" />`
    };
    image.src = "./fotos/bicicleta.png"
}

for (let i = 0; i < usuarios.length; i++){
    let nome = document.querySelector("#saida_nome");
    nome.innerHTML = usuarios[i].nome
}

function sair() {
    window.location.href = "./login/pagina_login.html"
}

function meu_perfil() {
    window.location.href = "./meu_perfil/perfil.html"
}





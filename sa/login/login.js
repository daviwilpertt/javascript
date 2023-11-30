
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

let saida_erro = document.querySelector("#saida_erro")
function login() {

    let email = document.querySelector("#email");
    let senha = document.querySelector("#senha");

    for (let i = 0; i < usuarios.length; i++) {

        if (email.value == usuarios[i].email && senha.value == usuarios[i].senha) {

            window.location = "/sa/index.html";
        }
        else if (email.value != usuarios[i].email || senha.value != usuarios[i].senha) {
            saida_erro.innerHTML = "Email ou senha incorretos"
        }
    }
}
console.log(usuarios)
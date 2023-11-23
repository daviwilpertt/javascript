let usuario = JSON.parse(localStorage.getItem("usuarios"))
console.log(usuario)


let saida_erro = document.querySelector("#saida_erro")
function login() {

    let email = document.querySelector("#email");
    let senha = document.querySelector("#senha");



    if (email == usuario[2] && senha == usuario[3]) {

        window.location = "/sa/index.html";
    }
    else if(email != usuario[2] || senha != usuario[3]) {
        saida_erro.innerHTML = "Email ou senha incorretos"
    }
}
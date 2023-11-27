
let usuario = JSON.parse(localStorage.getItem("usuarios"))

let saida_erro = document.querySelector("#saida_erro")
function login() {
    
    let email = document.querySelector("#email");
    let senha = document.querySelector("#senha");
    
    for (let i = 0; i < usuario.length; i++) {
        
        if (email.value == usuario[i].email && senha.value == usuario[i].senha) {
            alert("deu certo porra")
            window.location = "/sa/index.html";
        }
        else if (email.value != usuario[i].email || senha.value != usuario[i].senha) {
            saida_erro.innerHTML = "Email ou senha incorretos"
        }
    }
}
console.log(usuario)
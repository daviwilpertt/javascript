

let saida_erro = document.querySelector("#saida_erro")
function login() {
    let usuario = JSON.parse(localStorage.getItem("usuarios"))
    
    let email = document.querySelector("#email");
    let senha = document.querySelector("#senha");
    
    for (let i = 0; i < usuario.length; i++) {
        
        if (email == usuario[2] && senha == usuario[3]) {
            
            window.location = "/sa/index.html";
        }
        else if (email != usuario[2] || senha != usuario[3]) {
            saida_erro.innerHTML = "Email ou senha incorretos"
        }
    }
}
console.log(usuario)
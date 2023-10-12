let usuario = "adm";
let senha = "adm123";
let saida_login = document.getElementById("saida_login")
function login() {
    let input_usuario = document.getElementById("usuario").value;
    let input_senha = document.getElementById("senha").value;
    if (input_usuario == usuario && input_senha == senha) {
        saida_login.innerHTML = "conectado"
    }
    else if (input_usuario != usuario && input_senha != senha) {
        saida_login.innerHTML = "usuário e senha inválidos"
    }
    else if (input_usuario != usuario) {
        saida_login.innerHTML = "usuário inválido"
    }
    else if (input_senha != senha) {
        saida_login.innerHTML = "senha inválida"
    }
    else {
        saida_login.innerHTML = "erro"
    }
}
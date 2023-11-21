
function voltar() {
    window.location.href = "/sa/index.html"
}


let nome_digitado = document.getElementById("nome");
let sobrenome_digitado = document.getElementById("sobrenome");
let email_digitado = document.getElementById("email");
let senha_digitada = document.getElementById("senha");

let usuarios = [];
function cadastrar() {
    
    let nomeLido = nome_digitado.value;
    let sobrenomeLido = sobrenome_digitado.value;
    let emailLido = email_digitado.value;
    let senhaLida = senha_digitada.value;

    let usuario = {
        nome: nomeLido,
        sobrenome: sobrenomeLido,
        email: emailLido,
        senha: senhaLida
        
    }
    
    usuarios.push(usuario);
    console.log(usuarios);
}

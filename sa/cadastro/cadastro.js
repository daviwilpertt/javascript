
function voltar() {
    window.location.href = "/sa/index.html"
}



let usuarios = [];

function cadastrar() {
    let nome_digitado = document.getElementById("nome");
    let sobrenome_digitado = document.getElementById("sobrenome");
    let email_digitado = document.getElementById("email");
    let senha_digitada = document.getElementById("senha");

    let nomeLido = nome_digitado.value;
    let sobrenomeLido = sobrenome_digitado.value;
    let emailLido = email_digitado.value;
    let senhaLida = senha_digitada.value;

    let usuario = [
        nomeLido,
        sobrenomeLido,
        emailLido,
        senhaLida
    ]
    console.log(usuario)
    
    usuarios.push(usuario);
    alert(usuarios)
    
    
}

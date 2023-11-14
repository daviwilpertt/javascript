
let usuarios = []
function voltar() {
    window.location.href = "/sa/index.html"
}
function cadastrar() {
    let nomeLido = document.getElementById("nome").value;
    let sobrenomeLido = document.getElementById("sobrenome").value;
    let emailLido = document.getElementById("email").value;
    let senhaLida = document.getElementById("senha").value;
    let usuario = {
        nome: nomeLido,
        sobrenome: sobrenomeLido,
        email: emailLido,
        senha: senhaLida
    }
    usuarios.push(usuario);

    console.log(usuarios)
}
function voltar() {
    window.location.href = "/sa/index.html"
}
function cadastrar() {
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let usuario = [nome, sobrenome, email, senha]
    console.log(usuario)
}
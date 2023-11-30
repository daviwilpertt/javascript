
function voltar() {
    window.location.href = "/sa/login/pagina_login.html"
}

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

let botao_cadastro = document.getElementById("botao_cadastro");

function cadastrar() {
    const usuarios = [];

    let nome_digitado = document.getElementById("input_nome");
    let sobrenome_digitado = document.getElementById("input_sobrenome");
    let email_digitado = document.getElementById("input_email");
    let senha_digitada = document.getElementById("input_senha");

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
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    console.log(usuarios)
    // window.location = "/sa/login/pagina_login.html";
}




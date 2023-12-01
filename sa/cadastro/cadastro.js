let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
let botao_cadastro = document.querySelector("botao_cadastro");

function voltar() {
    window.location.href = "/sa/login/pagina_login.html"
}


const vetor_usuarios = [];
function cadastrar() {
    
    let usuario = ''
    
    let nome_digitado = document.querySelector("#input_nome");
    let sobrenome_digitado = document.querySelector("#input_sobrenome");
    let email_digitado = document.querySelector("#input_email");
    let senha_digitada = document.querySelector("#input_senha");
    
    let nomeLido = nome_digitado.value;
    let sobrenomeLido = sobrenome_digitado.value;
    let emailLido = email_digitado.value;
    let senhaLida = senha_digitada.value;
    
    usuario = {
        nome: nomeLido,
        sobrenome: sobrenomeLido,
        email: emailLido,
        senha: senhaLida
    }
    
    vetor_usuarios.push(usuario);


    
    
    console.log(vetor_usuarios)
    // window.location = "/sa/login/pagina_login.html";
    localStorage.setItem("usuarios", JSON.stringify(vetor_usuarios))

    JSON.parse(localStorage.getItem("usuarios"))
}




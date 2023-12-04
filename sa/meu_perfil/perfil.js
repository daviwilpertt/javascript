
let usuarios = JSON.parse(localStorage.getItem("usuarios"))
console.log(usuarios)
function editar_perfil(){
    
    
    let inp_nome = document.querySelector("#inp_nome");
    let inp_sobrenome = document.querySelector("#inp_sobrenome");
    let inp_email = document.querySelector("#inp_email");
    let inp_senha = document.querySelector("#inp_senha");
    if(inp_nome.value != 0){
        usuarios[0].nome = inp_nome.value
    }
    if(inp_sobrenome.value != 0){
        usuarios[0].sobrenome = inp_sobrenome.value
    }
    if(inp_email.value != 0){
        usuarios[0].email = inp_email.value
    }
    if(inp_senha.value != 0){
        usuarios[0].senha = inp_senha.value
    }
    
    
    console.log(usuarios)
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
}
function sair(){
window.location.href = "../index.html"

}
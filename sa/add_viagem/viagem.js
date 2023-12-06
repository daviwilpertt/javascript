let caminho_foto;

function Selecionado_imagem() {
    let image_divs = document.getElementById("imagem_usuario")
    let select_image = document.getElementById("select_image")
    let img = new Image()
     img.onload = function(){
         image_divs.innerHTML = `<img id="foto" src = ${img.src}> `
     }

    if(select_image.value == 1){
          img.src = "../imagens/trilha.png"
    }else if(select_image.value == 2 ){
        img.src = "../imagens/bicicleta.png"
    }else if(select_image.value == 3  ){
        img.src = "../imagens/moto.png"
    }else if(select_image.value == 4 ){
        img.src = "../imagens/carro.png"
    }else if(select_image.value == 5 ){
        img.src = "../imagens/barco.png"
    }
    
    caminho_foto = "./" + img.src.slice(25)
    
}

let inp_local = document.querySelector("#localizacao");
let inp_data = document.querySelector("#data");
let inp_descricao = document.querySelector("#descricao");

function postar() {
    let obj = {
        data: inp_data.value,
        local: inp_local.value,
        image: caminho_foto,
        descricao: inp_descricao.value
    }
    console.log(obj)
    localStorage.setItem("fotos", JSON.stringify(obj))
    window.location.href = "../index.html"

    
}



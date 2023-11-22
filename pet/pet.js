let pets_cadastrados = [];
let saida_cadastro = document.querySelector("#saida_cadastro");
let saida_pesquisa = document.querySelector("#saida_pesquisa");


function cadastrar() {

    let input_pet = document.getElementById("pet");
    let pet = input_pet.value;
    pets_cadastrados.push(pet);
    console.log(pets_cadastrados)
    input_pet.value = '';
    input_pet.focus();
    saida_cadastro.innerHTML = 'cadastrou o pet : ' + pet;

    
}


function pesquisar() {
    let posicao = -1;
    let input_pesquisa = document.getElementById("procurar");
    let pet_pesquisado = input_pesquisa.value;
    for (let i = 0; i < pets_cadastrados.length; i++) {
        if (pet_pesquisado == pets_cadastrados[i]) {
            saida_pesquisa.innerHTML = `ta aqui:  ${pet_pesquisado}, está na ${i + 1} posição`
            posicao = i
            input_pesquisa.value = ""
            input_pesquisa.focus();
            alert(pet_pesquisado)
        }
        if (posicao == -1) {
            saida_pesquisa.innerHTML = "não achei nenhum pet com esse"
        }
    }
}
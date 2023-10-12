let radio1 = document.getElementById("radio1");
let radio2 = document.getElementById("radio2");
let checkbox = document.getElementById("porta");
let saida = document.getElementById("saida");
function sol() {
    if (radio1.checked == true && radio2.checked == true && checkbox.checked == true) {
        saida.innerHTML = "voce gosta de banana ?"
    }
    
}
let radio_alert = document.getElementById("alert");
let radio_input = document.getElementById("input");
let radio_label = document.getElementById("label")
let saida_label = document.getElementById("saida_label");
let saida_input = document.getElementById("saida_input");
function resultado() {
    let pergunta1 = Number(document.getElementById("pergunta1").value);
    let pergunta2 = Number(document.getElementById("pergunta2").value);
    let pergunta3 = Number(document.getElementById("pergunta3").value);
    total = pergunta1 + pergunta2 + pergunta3
    
    if (radio_alert.checked == true) {
        alert(total)
    } 
    else if (radio_input.checked == true) {
        saida_input.value = total
    }
    else if (radio_label.checked == true) {
        saida_label.innerHTML = total
    }
}
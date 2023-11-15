let num = Number(prompt("digite a nota"))
let media = 0;
let soma_nota = 0; 
if(num < 0 || num > 10){
        num = Number(prompt("nota invalida (de 0 a 10)"))
    }
    else{
        num = Number(prompt("digite a segunda nota"))
        soma_nota += num
        media = soma / 2
        alert("media= " + media)
    }
   
   
    

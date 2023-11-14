let i, saida;
for ( i = 0; i <= 250; i++){
    saida = document.write(i + "<br>");
    if (i == 250) {
       saida = document.write("acabei o primeiro <br>");
    }
}

for ( i = 250; i >= 100; i--) { 
     saida = document.write(i + "<br>");
    if (i == 100) { 
        saida = document.write("acabei o segundo <br>");
    }
}

for ( i = 100; i >= 0; i-=5){
    saida = document.write(i + "<br>");
    if (i == 0) {
        saida = document.write("acabei o terceiro <br>");
    }
}

for (i = 0; i <= 9500; i += 30){
    saida = document.write(i + "<br>");
    if (i == 9500) {
        saida = document.write("acabei o quarto <br>");
    }
}


for (i = 9500; i <= 9600; i++){
    if (i % 2 == 0) {
        saida = document.write(i + "<br>");
        if (i == 9600) { 
            saida = document.write("terimei mais um <br>");
        }
    }
}


for (i = 9600; i <= 10285; i++){
    if (i % 2 == 1) { 
        saida = document.write(i + "<br>");
        if (i == 10285) { 
            saida = document.write("bo joga bola <br>");
        }
    }
}
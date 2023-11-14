let i, j = 0;
let saida;
for (i = 10; i <= 500 && j <= 1000; i++, j++) {
    saida = document.write(i + "<br>");
    if (i == 500) {
        j = 900
        saida = document.write(j + "<br>");
    }
}

let alcool, gasolina, diesel

for (let i = 0; i >0 ; i++) {
    let numero = Number(prompt("escolha o combustivel: (1.Álcool 2.Gasolina 3.Diesel 4.Fim)"))
    if (numero == 1) {
        alcool + 1
    }
    else if (numero == 2) {
        gasolina + 1
    }
    else if (numero == 3) {
        diesel + 1
    }
}
if (numero == 4) { 
    alert(`FIM ${alcool} ${gasolina} ${diesel}`)
}


const randomNumber = () => { 
    const numberRandom = Math.random() * 100 + 1 
    return numberRandom; 
}




const generarAleatorios = () => {
    let aleatorios = [];
    let inputUseNumber = document.getElementById('userNumber').value;
    let numberSelected = parseInt(inputUseNumber);

    if (numberSelected >= 5 && numberSelected <= 20) {
        for (let i = 0; i < numberSelected; i++) {
            console.log(i);
            let random = parseInt(randomNumber());
            aleatorios.push(random);
        }

        mostrarResultados(aleatorios);
    } else {
        alert('Número no válido, ingrese un número entre 5 y 20');
    }
};


const mostrarResultados = (arregloNumeros) => {
    let divResultados = document.getElementById('resultados');

    let tabla = "<table border='1'><tr>";
    for (let i = 0; i < arregloNumeros.length; i++) {
        tabla += "<td>" + arregloNumeros[i] + "</td>";
    }
    tabla += "</tr></table>";

    divResultados.innerHTML = tabla;
};

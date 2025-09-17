const calcularPromedioNotas = () => {
    const nota1 = parseFloat(document.getElementById('value1').value);
    const nota2 = parseFloat(document.getElementById('value2').value);
    const nota3 = parseFloat(document.getElementById('value3').value);

    let promedio = calcularPromedio(nota1, nota2, nota3);
    document.getElementById('average').innerText = promedio.toFixed(2)

    if (promedio >= 7){
        document.getElementById('image').src = './images/ok.gif'
    }else{
        document.getElementById('image').src = './images/fail.gif'
    }

}
let sumaNotas =0;
let promedio = 0;
let notas = [10, 8.5 ,7.2, 5, 8];

const calcularPromedio = () => {
    for(let i=0; i<notas.length; i++){
        sumaNotas+=notas[i];
    };
    promedio = sumaNotas/notas.length;
    document.getElementById('promedio').innerText = promedio
    //console.log(sumaNotas)
    return promedio;
}


let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "0705933588", nombre: "Christian", apellido: "Romero", sueldo: 800.0 }
]

const mostrarOpcionEmpleado = () => {
    mostrarEmpleado()
    mostrarComponente('divEmpleado');
    ocultarComponente('divRol');
    ocultarComponente('divResumen');
}

const mostrarOpcionRol = () => {
    ocultarComponente('divEmpleado');
    mostrarComponente('divRol');
    ocultarComponente('divResumen');
}

const mostrarOpcionResume = () => {
    ocultarComponente('divEmpleado');
    ocultarComponente('divRol');
    mostrarComponente('divResumen');
}

const mostrarEmpleado = () =>{
    let tabla = '<table><tr><th>Cedula</th><th>Nombre</th><th>Apellido</th><th>Sueldo</th></tr>';
    let elemento;
    for(let i=0; i<empleados.length; i++){
        elemento = empleados[i];
        tabla+=
        '<tr>'+
        '<td>'+elemento.cedula+'</td>'+
        '<td>'+elemento.nombre+'</td>'+
        '<td>'+elemento.apellido+'</td>'+
        '<td>'+elemento.sueldo+'</td>'+
        '</tr>'
    }
    tabla+='</table>'
    document.getElementById('tablaEmpleados').innerHTML = tabla;
}
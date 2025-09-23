let clientes = [
    { nombre: 'Christian', cedula: '123', edad: 32 },
    { nombre: 'Maryuri', cedula: '456', edad: 30 },
    { nombre: 'Sofia', cedula: '789', edad: 30 }
]

const buscarCliente = () => {
    const cedula = document.getElementById('cajonSearch').value;
    console.log(cedula)
    if (cedula) {
        let encontrado = false
        for (let i = 0; i < clientes.length; i++) {
            if (cedula == clientes[i].cedula) {
                document.getElementById('cedula').value = clientes[i].cedula
                document.getElementById('nombre').value = clientes[i].nombre
                document.getElementById('edad').value = clientes[i].edad
                encontrado = true
                break
            }
        }
        if (!encontrado) {
            alert('Cliente no encontrado')
        }
    }else{
        alert('Por favor ingresa un valor')
    }

}

const mostrarCliente = () => {
    let tabla = '<table border="1" cellspacing="0"><tr>'+
    '<th>Cedula</th>'+
    '<th>Nombre</th>'+
    '<th>Edad</th>'+
    '</tr>';
    let elemento;
    for(let i=0; i<clientes.length; i++){
        elemento = clientes[i]
        tabla+=
        '<tr><td>'+elemento.cedula+'</td>'+
        '<td>'+elemento.nombre+'</td>'+
        '<td>'+elemento.edad+'</td>'+
        '</tr>'
    }
    tabla+='</table>'
    document.getElementById('tabla').innerHTML = tabla
}

const addClient = () =>{
    const cedula = document.getElementById('cedula').value;
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value
    clientes.push({nombre: nombre, cedula: cedula, edad: edad})
}

const saveData = () => {
    const cedula = document.getElementById('cedula').value;
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;

    let actualizado = false;

    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].cedula == cedula) {
            clientes[i].nombre = nombre;
            clientes[i].edad = edad;
            actualizado = true;
            break;
        }
    }

    if (actualizado) {
        alert('Datos actualizados');
        mostrarCliente(); 
    } else {
        alert('No se encontro el cliente');
    }
};

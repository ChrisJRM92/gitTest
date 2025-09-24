let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "0705933588", nombre: "Christian", apellido: "Romero", sueldo: 800.0 }
]

let esNuevo = false;

const deshabilitarOpciones = () => {
    deshabilitarComponente('txtCedula');
    deshabilitarComponente('txtNombre');
    deshabilitarComponente('txtApellido');
    deshabilitarComponente('txtSueldo');
    deshabilitarComponente('btnGuardar');
}

const mostrarOpcionEmpleado = () => {
    mostrarEmpleado();
    deshabilitarOpciones();
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

const mostrarEmpleado = () => {
    let tabla = '<table><tr><th>Cedula</th><th>Nombre</th><th>Apellido</th><th>Sueldo</th></tr>';
    let elemento;
    for (let i = 0; i < empleados.length; i++) {
        elemento = empleados[i];
        tabla +=
            '<tr>' +
            '<td>' + elemento.cedula + '</td>' +
            '<td>' + elemento.nombre + '</td>' +
            '<td>' + elemento.apellido + '</td>' +
            '<td>' + elemento.sueldo + '</td>' +
            '</tr>'
    }
    tabla += '</table>'
    document.getElementById('tablaEmpleados').innerHTML = tabla;
}

const ejecutarNuevo = () => {
    habilitarComponente('txtCedula');
    habilitarComponente('txtNombre');
    habilitarComponente('txtApellido');
    habilitarComponente('txtSueldo');
    habilitarComponente('btnGuardar');
    esNuevo = true;
}

const buscarEmpleado = (cedula) => {
    for (let i = 0; i < empleados.length; i++) {
        let encontrado;
        if (empleados[i].cedula == cedula) {
            return empleados[i]
        }

    }
    return null
}

const agregarEmpleado = (empleado) => {
    const data = buscarEmpleado(empleado.cedula);
    if (!data) {
        empleados.push(empleado)
        console.log(empleados)
        return true
    } else {
        return false
    }
}

const guardar = () => {
    const cedula = recuperarTexto('txtCedula')
    const nombre = recuperarTexto('txtNombre').toUpperCase()
    const apellido = recuperarTexto('txtApellido').toUpperCase()
    const sueldo = parseFloat(recuperarTexto('txtSueldo'))
    let alerta;

    if ((cedula.length == 10) && nombre && apellido && sueldo) {
        const empleado = {
            cedula: cedula,
            nombre: nombre,
            apellido: apellido,
            sueldo: sueldo
        };
        alerta = agregarEmpleado(empleado);
    }

    if (alerta) {
        alert('Empleado guardado correctamente')
        mostrarEmpleado()
        deshabilitarOpciones()

    } else {
        alerta('Ya existe un empleado con la cedula: ' + cedula)
    }
}
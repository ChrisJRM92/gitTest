let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "0705933588", nombre: "Christian", apellido: "Romero", sueldo: 800.0 }
]

let roles = [];

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
    deshabilitarComponente('btnGuardarRol');
    
}

const mostrarOpcionResume = () => {
    ocultarComponente('divEmpleado');
    ocultarComponente('divRol');
    mostrarComponente('divResumen');
    monstrarRol()
    mostrarTotales()
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
        if (alerta) {
            alert('Empleado guardado correctamente')
            mostrarEmpleado();
            deshabilitarOpciones();
            esNuevo = false;
        } else {
            for (let i = 0; i < empleados.length; i++) {
                if (empleados[i].cedula == cedula) {
                    empleados[i] = empleado
                    alert('Empleado modificado exitosamente')
                    mostrarEmpleado();
                    limpiar();
                    break;
                }

            }
        }
    } else {
        //console.log(alerta)
        alert('Todos los campos son obligatorios')
    }
}

const ejecutarBusqueda = () => {
    const cedula = recuperarTexto('txtBusquedaCedula');
    const empleado = buscarEmpleado(cedula);
    if (!empleado) {
        alert('Empleado no encontrado')
    } else {
        mostrarTextoEnCaja('txtCedula', empleado.cedula);
        mostrarTextoEnCaja('txtNombre', empleado.nombre);
        mostrarTextoEnCaja('txtApellido', empleado.apellido);
        mostrarTextoEnCaja('txtSueldo', empleado.sueldo);

        deshabilitarComponente('txtCedula');
        habilitarComponente('txtNombre');
        habilitarComponente('txtApellido');
        habilitarComponente('txtSueldo');

        habilitarComponente('btnGuardar');
    }
}

const limpiar = () => {
    mostrarTextoEnCaja('txtCedula', '');
    mostrarTextoEnCaja('txtNombre', '');
    mostrarTextoEnCaja('txtApellido', '');
    mostrarTextoEnCaja('txtSueldo', '');
    deshabilitarOpciones()
}

// Rol section------------------------------------
const buscarPorRol = () => {
    const cedula = recuperarTexto('txtBusquedaCedulaRol')
    const empleado = buscarEmpleado(cedula)

    if (empleado) {
        mostrarTexto('infoCedula', empleado.cedula)
        mostrarTexto('infoNombre', empleado.nombre)
        mostrarTexto('infoSueldo', empleado.sueldo)
    } else {
        alert('El empleado no existe')
    }
}

const calcularAporteEmpleado = (sueldo) => {
    return (sueldo * 9.45) / 100
}

const calcularValorAPagar = (sueldo, iess, descuento) => {
    return sueldo - iess - descuento
}

const calcularRol = () => {
    const empleadoEncontrado = recuperarTextoDiv('infoCedula');
    //console.log(empleadoEncontrado)
    if (empleadoEncontrado == '') {
        alert('Ingresar empleado')
    } else {
        const sueldo = recuperarTextoDiv('infoSueldo')
        const descuento = recuperarFloat('txtDescuentos')
        //console.log(descuento)
        if ((typeof descuento == 'number' && !Number.isInteger(descuento)) && descuento >= 0 && descuento <= sueldo) {
            //console.log('entro?')
            const iess = calcularAporteEmpleado(sueldo)
            mostrarTexto('infoIESS', iess)
            habilitarComponente('btnGuardarRol');
            const total = calcularValorAPagar(sueldo, iess, descuento).toFixed(2);
            mostrarTexto('infoPago', total)
        } else {
            alert('Descuento no valido')
        }

    }

}

const buscarRol = (cedula) => {
    console.log(roles.length)
    for (let i = 0; i < roles.length; i++) {
        if (cedula == roles[i].cedula) {
            console.log('encontrado?')
            return rol
        } else {
            return null
        }
    }
}

const calcularAporteEmpleador = (sueldo) => {
    return (sueldo * 11.15) / 100
}

const guardarRol = () => {
    const cedula = recuperarTextoDiv('infoCedula');
    const nombre = recuperarTextoDiv('infoNombre');
    const sueldo = parseFloat(recuperarTextoDiv('infoSueldo'));
    const aporteEmpleado = parseFloat(recuperarTextoDiv('infoIESS'));
    const totalAPagar = parseFloat(recuperarTextoDiv('infoPago'));
    const aporteEmpleador = calcularAporteEmpleador(sueldo);

    let existe = false;

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].cedula === cedula) {
            existe = true;
            break;
        }
    }

    if (existe) {
        alert('El rol ya existe');
    } else {
        const nuevoRol = {
            cedula,
            nombre,
            sueldo,
            valorAPagar: totalAPagar,
            aporteEmpleado,
            aporteEmpleador,
        };

        roles.push(nuevoRol);
        deshabilitarComponente('btnGuardarRol');
        alert('Rol guardado correctamente');
        

    }

    console.log(roles);
};


//Mostrar rol RESUMEN ---------------------------------------------------------

const monstrarRol = () =>{
    let tabla = '<table><tr><th>Cedula</th><th>Nombre</th><th>Valor_a_pagar</th><th>Aporte empleado</th><th>Aporte empleador</th></tr>';
    let elemento;
    for (let i = 0; i < roles.length; i++) {
        elemento = roles[i];
        tabla +=
            '<tr>' +
            '<td>' + elemento.cedula + '</td>' +
            '<td>' + elemento.nombre + '</td>' +
            '<td>' + elemento.valorAPagar + '</td>' +
            '<td>' + elemento.aporteEmpleado + '</td>' +
            '<td>' + elemento.aporteEmpleador + '</td>' +
            '</tr>'
    }
    tabla += '</table>'
    document.getElementById('tablaResumen').innerHTML = tabla;
}

const mostrarTotales = () =>{
    let totalAPagar = 0.0;
    let totalEmpleador = 0.0;
    let totalEmpleao = 0.0;
    let existe = false
    let totalNomina = 0.0
    
    if(roles){
        existe = true
        
    }else{
        alert('No existe un rol registrado')
    }

    if(existe){
        for(let i=0; i<roles.length; i++){
            totalAPagar += parseFloat(roles[i].valorAPagar);
            totalEmpleador += parseFloat(roles[i].aporteEmpleado);
            totalEmpleao += parseFloat(roles[i].aporteEmpleador);
        }
    }

    mostrarTexto('infoTotalPago', totalAPagar.toFixed(2));
    mostrarTexto('infoAporteEmpleado', totalEmpleador.toFixed(2));
    mostrarTexto('infoAporteEmpresa', totalEmpleao.toFixed(2));

    totalNomina = parseFloat(totalAPagar+totalEmpleador+totalEmpleador)
    mostrarTexto('infoTotalNomina', totalNomina.toFixed(2));

}
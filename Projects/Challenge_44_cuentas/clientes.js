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
    document.getElementById('tabla').innerHTML = render;
}
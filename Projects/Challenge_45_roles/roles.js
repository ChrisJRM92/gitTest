let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 }
]

const mostrarOpcionEmpleado = () => {
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
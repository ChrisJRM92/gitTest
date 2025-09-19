const validarPlaca = () =>{
    const placa = document.getElementById('placa').value
    const erroresEstructura = validarEstructura(placa)
    if(!erroresEstructura){
        document.getElementById('state').innerText = 'Estructura válida'
    }else{
        document.getElementById('state').innerText = 'Estructura inválida'
    }
    document.getElementById('error').innerText = erroresEstructura
}
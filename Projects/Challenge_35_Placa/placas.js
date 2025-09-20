const validarPlaca = () =>{
    const placa = document.getElementById('placa').value;
    const erroresEstructura = validarEstructura(placa);
    if(!erroresEstructura){
        document.getElementById('state').innerText = 'Estructura válida';
        const provinceName = obtenerProvincia(placa);
        const typeOfVehicle = obtenerTipoVehiculo(placa);
        const dayPicoYPlaca = obtenerDiaPicoYPlaca(placa);
        console.log(provinceName)
        console.log(typeOfVehicle)
        if(provinceName){
            document.getElementById('province').innerText = provinceName;
            document.getElementById('type').innerText = typeOfVehicle;
            document.getElementById('picoyplaca').innerText = dayPicoYPlaca;
        }else{
            document.getElementById('province').innerText = 'Provincia incorrecta';
        }
    }else{
        document.getElementById('state').innerText = 'Estructura inválida';
    }
    document.getElementById('error').innerText = erroresEstructura;
}

const limpiar = ()=>{
    document.getElementById('province').innerText = '';
    document.getElementById('type').innerText = '';
    document.getElementById('picoyplaca').innerText = '';
    document.getElementById('province').innerText = '';
    document.getElementById('placa').value = '';

}
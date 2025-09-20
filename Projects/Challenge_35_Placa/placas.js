const validarPlaca = () =>{
    const placa = document.getElementById('placa').value;
    const erroresEstructura = validarEstructura(placa);
    if(!erroresEstructura){
        document.getElementById('state').innerText = 'Estructura válida';
        const provinceName = obtenerProvincia(placa);
        console.log(provinceName)
        if(provinceName){
            document.getElementById('province').innerText = provinceName;
        }else{
            document.getElementById('province').innerText = 'Provincia incorrecta';
        }



    }else{
        document.getElementById('state').innerText = 'Estructura inválida';
    }
    document.getElementById('error').innerText = erroresEstructura;
}
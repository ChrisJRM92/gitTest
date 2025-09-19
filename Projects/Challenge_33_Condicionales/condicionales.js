
//parametros: float
const calcularInteres = (ingresoAnual) => {
    let tasa;
    if(ingresoAnual < 300000){
        tasa = 16;
    }else if(ingresoAnual >= 300000 && ingresoAnual < 500000){
        tasa = 15;
    }else if(ingresoAnual >= 500000 && ingresoAnual < 1000000){
        tasa = 14;
    }else if(ingresoAnual >= 1000000 && ingresoAnual < 2000000){
        tasa = 13;
    }else if (ingresoAnual >= 2000000){
        tasa = 12;
    }
    return tasa;
}
//parametros: int, float, float
const calcularCapacidadPago = (edad, ingresos, egresos) => {
    let capacidadCuota;
    if (edad > 50) {
        const total = ingresos-egresos;
        capacidadCuota = (total*30)/100
    }else {
        const total = ingresos-egresos;
        capacidadCuota = (total*40)/100
    }
    return capacidadCuota;
}

//Parametros: float, int
const calcularDescuento = (precio, cantidad) => {
    let descuento;
    if(cantidad < 3 ){
        descuento = 0;
    }else if(cantidad >= 3 && cantidad <= 5){
        descuento = 2;
    }else if(cantidad >=6 && cantidad <=11){
        descuento = 3;
    }else{
        descuento = 4;
    }
    return descuento;
}


determinarColesterolLDL = function(nivelColesterol){
    let string;
    if(nivelColesterol < 110){
        string = 'Nivel LDL'+nivelColesterol+' '+'saludable'
    }else{
        string = 'Nivel LDL'+nivelColesterol+' '+'Elevado'
    }
    return string;
}

validarClave = function(clave){
    if(clave.length>=8 && clave.length <= 16){
        return true
    }else{
        return false
    }
}

esMayuscula = function(caracter){
    if(caracter.charCodeAt(0) >= 65 && caracter.charCodeAt(0) <= 90){
        return true
    }else{
        return false
    }
}

esMinuscula = function(caracter){
    if(caracter.charCodeAt(0) >= 97 && caracter.charCodeAt(0) <= 122){
        return true
    }else{
        return false
    }
}

esDigito = function(caracter){
    if(caracter.charCodeAt(0) >= 48 && caracter.charCodeAt(0) <= 57){
        return true
    }else{
        return false
    }
}

darPermiso = function(notaMatematica, notaFisica, notaGeometria){
    if(notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90){
        return true
    }else{
        return false
    }
}

otorgarPermiso = function(notaMatematica, notaFisica, notaGeometria){
    if((notaMatematica > 90 || notaFisica > 90) && notaGeometria > 80){
        return true
    }else{
        return false
    }
}

dejarSalir = function(notaMatematica, notaFisica, notaGeometria){
    if((notaMatematica > 90 || notaFisica >90 || notaFisica>90) && (notaFisica > notaMatematica)){
        return true
    }else{
        return false
    }
}
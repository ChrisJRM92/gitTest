const esMayuscula = (caracter) => {
    if(caracter.charCodeAt(0) >= 65 && caracter.charCodeAt(0) <= 90){
        return true
    }else{
        return false
    }
}

const esMinuscula = (caracter) => {
    if(caracter.charCodeAt(0) >= 97 && caracter.charCodeAt(0) <= 122){
        return true
    }else{
        return false
    }
}

const esDigito = (caracter) =>{
    if(caracter.charCodeAt(0) >= 48 && caracter.charCodeAt(0) <= 57){
        return true
    }else{
        return false
    }
}

const esGuion = (caracter) =>{
    if(caracter.charCodeAt(0) == 45){
        return true;
    }else{
        return false;
    }
}

const numberDigitsPlate = (placa) =>{
    if(placa.length >= 7 && placa.length <= 8){
        return true;
    }else{
        return false;
    };
}

const isPlate = (placa) => {

}


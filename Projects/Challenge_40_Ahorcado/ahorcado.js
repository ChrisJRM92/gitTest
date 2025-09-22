const esMayuscula = (caracter) =>{
    if(caracter.charCodeAt(0) >= 65 && caracter.charCodeAt(0) <= 90){
        return true;
    }else{
        return false;
    };
};

console.log(esMayuscula('H'))
let palabraSecreta = ''

const esMayuscula = (caracter) => {
    if (caracter.charCodeAt(0) >= 65 && caracter.charCodeAt(0) <= 90) {
        return true;
    } else {
        return false;
    };
};

const guardarPalabra = (inputWord) => {
    //const inputWord = document.getElementById('txtSecreta').value
    let validation = false;
    let error = ''
    if (inputWord.length == 5) {
        for (let i = 0; i < inputWord.length; i++) {
            //console.log(esMayuscula(inputWord[i]))
            if(esMayuscula(inputWord[i])){
                validation = true
            }else{
                error = 'Todos los caracteres deben ser en mayuscula'
                break
            }
        }
    }else{
        error = 'La plabra no tiene 5 caracteres'
    }

    return error
}

console.log(guardarPalabra('PALAB'))
console.log('La palabra es: '+palabraSecreta)
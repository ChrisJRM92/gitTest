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

const mostrarLetra = (letra, posicion) =>{
    if(posicion == 0){
        console.log('div0')
    }else if(posicion == 1){
        console.log('div1')
    }else if(posicion == 2){
        console.log('div2')
    }else if(posicion == 3){
        console.log('div3')
    }else if(posicion == 4){
        console.log('div4')
    }else{
        console.log('div5')
    }
}

console.log(guardarPalabra('PALAB'))
console.log('La palabra es: '+palabraSecreta)
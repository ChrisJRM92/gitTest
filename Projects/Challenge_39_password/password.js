const ejecutarValidacion = () => {
    console.log('Estoy dentro')
    const password = document.getElementById('pass').value
    console.log(password)
    const passState =  validarPassword(password)
    if(passState.length == 0){
        document.getElementById('errors').innerText = 'Contraseña correcta'
    }else{
        document.getElementById('errors').innerText = passState
    }
}

const validarPassword = (password) => {
    let haveMinletters = false;
    let haveMinlettersString = ''
    let haveMaxLetters = false;
    let haveMaxLettersString = ''
    let haveMayusLetter = false;
    let haveMayusLetterString = ''
    let haveADigit = false;
    let haveADigitString = ''
    let haveSpecialChar = false;
    let haveSpecialCharString = ''
    let errorsString = ''

    if(password.length >= 8){
        haveMinletters = true;
    }else{
        haveMinlettersString = 'Debe contener almenos 8 caracteres'
    }

    if(password.length > 16){
        haveMaxLetters= true;
        haveMaxLettersString= 'No puede exceder los 16 caracteres'
    }

    for(let i=0; i<password.length; i++){
        if(password.charCodeAt(i)>= 65 && password.charCodeAt(i)<=90){
            haveMayusLetter = true;
            break;
        }
    }

    for(let i=0; i<password.length; i++){
        if(password.charCodeAt(i)>= 48 && password.charCodeAt(i) <= 57){
            haveADigit = true;
            break;
        }
    }

    for(let i=0; i<password.length; i++){
        if((password.charCodeAt(i) == 42) || (password.charCodeAt(i) == 45) || (password.charCodeAt(i) == 95)){
            haveSpecialChar = true;
            break
        }
    }

    if(!haveMayusLetter){
        haveMayusLetterString = 'Debe contener almenos una mayuscula'
    }

    if(!haveADigit){
        haveADigitString = 'Debe contener almenos un digito'
    }

    if(!haveSpecialChar){
        haveSpecialCharString = 'Debe contener un caracter especial: * - _'
    }

    if(!haveMinletters || haveMaxLetters || !haveMayusLetter || !haveADigit || !haveSpecialChar){
        errorsString = haveMinlettersString+' '+haveMaxLettersString+' '+haveMayusLetterString+' '+haveADigitString+' '+haveSpecialCharString
    }else{
        errorsString = ''
    }

    return errorsString

}

//console.log(validarPassword('Contrasena*81'))
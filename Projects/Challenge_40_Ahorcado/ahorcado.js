let palabraSecreta = ''

const esMayuscula = (caracter) => {
    if (caracter.charCodeAt(0) >= 65 && caracter.charCodeAt(0) <= 90) {
        return true;
    } else {
        return false;
    };
};

const guardarPalabra = () => {
    const inputWord = document.getElementById('txtSecreta').value
    let validation = true;
    let error = ''
    if (inputWord.length == 5) {
        for (let i = 0; i < inputWord.length; i++) {
            //console.log(esMayuscula(inputWord[i]))
            if (!esMayuscula(inputWord[i])) {
                validation = false
                alert('Todos los caracteres deben ser en mayuscula')
                break
            }
        }
    } else {
        validation = false;
        alert('La palabra debe contener 5 caracteres')
    }
    if (validation) {
        palabraSecreta = inputWord
        document.getElementById('testWord').innerText = palabraSecreta
    }
}

const mostrarLetra = (letra, posicion) => {
    //console.log('----------------')
    //console.log(letra, posicion)

    if (posicion == 0) {
        document.getElementById('div0').innerText = letra
    } else if (posicion == 1) {
        document.getElementById('div1').innerText = letra
    } else if (posicion == 2) {
        document.getElementById('div2').innerText = letra
    } else if (posicion == 3) {
        document.getElementById('div3').innerText = letra
    } else if (posicion == 4) {
        document.getElementById('div4').innerText = letra
    } else {
        document.getElementById('div5').innerText = letra
    }
}

const validar = (letra) => {
    let letrasEncontradas = 0
    for (let i = 0; i < palabraSecreta.length; i++) {
        //console.log(i)
        if (letra == palabraSecreta[i]) {
            letrasEncontradas++
            mostrarLetra(letra, i)
        }
    }
    console.log(letrasEncontradas)
}

const ingresarLetra = () => {
    const letra = (document.getElementById('txtLetra').value).toUpperCase();
    console.log(letra)
    validar(letra)
}

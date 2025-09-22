let palabraSecreta = '';
let intentos = 0;
let coincidencias = 0;
let errores = 0;

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
            coincidencias++
            mostrarLetra(letra, i)
        }
    }
    if(!palabraSecreta.includes(letra)){
        alert('La letra '+letra+' no es parte de la palabra')
        errores++
    }
    
    
}

const ingresarLetra = () => {
    const letra = (document.getElementById('txtLetra').value).toUpperCase();
    intentos++
    document
    //console.log(letra)
    validar(letra)
    mostrarAhorcado()
    console.log(intentos)
    console.log(errores)
    if(intentos == 10){
        alert('Haz perdido')
    }

    if(coincidencias == 5){
        alert('Felicidades haz ganado!')
        document.getElementById('ahorcadoImagen').src = './images/ganador.gif'
    }
}

const mostrarAhorcado = () => {
    if(errores == 1){
        document.getElementById('ahorcadoImagen').src = './images/Ahorcado_01.png';
    }else if(errores == 2){
        document.getElementById('ahorcadoImagen').src = './images/Ahorcado_02.png';
    }else if(errores == 3){
        document.getElementById('ahorcadoImagen').src = './images/Ahorcado_03.png';
    }else if(errores == 4){
        document.getElementById('ahorcadoImagen').src = './images/Ahorcado_04.png';
    }else if(errores == 5){
        document.getElementById('ahorcadoImagen').src = './images/Ahorcado_05.png';
    }else if(errores == 6){
        document.getElementById('ahorcadoImagen').src = './images/Ahorcado_06.png';
    }else if(errores == 7){
        document.getElementById('ahorcadoImagen').src = './images/Ahorcado_07.png';
    }else if(errores == 8){
        document.getElementById('ahorcadoImagen').src = './images/Ahorcado_08.png';
    }else if(errores == 9){
        document.getElementById('ahorcadoImagen').src = './images/Ahorcado_09.png';
    }else if(errores == 10){
        document.getElementById('ahorcadoImagen').src = './images/Ahorcado_09.png';
    }

    if(intentos == 10){
        document.getElementById('ahorcadoImagen').src = './images/gameOver.gif';
    }
}
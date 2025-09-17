const play = () => {
    let randomNumber = parseInt(Math.random()*7)
    if(randomNumber > 0 ){
        //console.log(randomNumber)
        cambiarTexto('lblNumero', randomNumber)
    }
    
}



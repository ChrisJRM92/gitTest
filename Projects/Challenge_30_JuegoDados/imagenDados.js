let score=0
let lauchs = 5

jugar=function(){
    let resultado;
    let mensaje = '--';
    resultado=lanzarDado();
    //console.log(resultado);
    let image;

    if(resultado == 1){
        image = './dados1.png'
    }else if(resultado == 2){
        image = './dados2.png'
    }else if(resultado == 3){
        image = './dados3.png'
    }else if (resultado == 4){
        image = './dados4.png'
    }else if(resultado == 5){
        image = './dados5.png'
    }else{
        image = './dados6.png'
    }

    cambiarImagen('die', image)
    score +=resultado
    cambiarTexto('score', score)
    lauchs = lauchs-1
    cambiarTexto('launch', lauchs)
    
    if(lauchs == 0 && score >= 20){
        mensaje = 'Felicidades ganaste!'
        cambiarTexto('status', mensaje)
    }else if(lauchs == 0 && score <= 20){
        mensaje = 'Perdiste, vuelve a interntar'
        cambiarTexto('status', mensaje)
        
    }else{
        cambiarTexto('status', mensaje)
    }
}



lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}

limpiar = function(){
    score = 0;
    lauchs = 5;
    mensaje = '--'
    cambiarTexto('score', score)
    cambiarTexto('launch', lauchs)
    cambiarTexto('status', mensaje)
}
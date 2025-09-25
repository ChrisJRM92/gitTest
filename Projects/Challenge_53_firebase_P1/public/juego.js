let userScore = 0;
let iaScore = 0;
const win= 'Ganaste 🫡'
const losser = 'Perdiste 😒'
const tie = 'Empate 🙃'


const jugar = (seleccionado) =>{
    const value = generarElemento();
    mostrarImagen('imgs', generarRuta(value))
    const winner = determonarGanador(seleccionado, value)
    //console.log('Jugador: '+seleccionado)
    //console.log('Pc: '+value)
    //console.log('Ganador: '+winner)
    //console.log(typeof value)
    if (winner == '0'){
        console.log('empate')
        mostrarTexto('status', tie);
    }else if(winner == '1'){
        console.log('ganaste')
        userScore += 1;
        mostrarTexto('userScore', userScore);
        mostrarTexto('status', win);
    }else{
        console.log('gano la pc')
        iaScore += 1
        mostrarTexto('iaScore', iaScore);
        mostrarTexto('status', losser);
    }

}


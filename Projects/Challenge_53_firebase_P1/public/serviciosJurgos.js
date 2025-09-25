const obtenerAleatorio = () => {
    return parseInt(Math.random() * 3 + 1)
}

const generarElemento = () => {
    const value = obtenerAleatorio();
    if (value == 1) {
        return 'piedra'
    } else if (value == 2) {
        return 'papel'
    } else {
        return 'tijera'
    }
}

const determonarGanador = (jugador1, jugador2) => {
    if (jugador1 == jugador2) {
        return 0
    }
    if (
        (jugador1 === 'piedra' && jugador2 === 'tijera') ||
        (jugador1 === 'tijera' && jugador2 === 'papel') ||
        (jugador1 === 'papel' && jugador2 === 'piedra')
    ) {
        return 1;
    } else {
        return 2;
    }
}

const generarRuta = (nombre) => {
    if (nombre == 'piedra') {
        return './images/piedra.png';
    } else if (nombre == 'papel') {
        return './images/papel.png'
    } else {
        return './images/tijera.png'
    }
}

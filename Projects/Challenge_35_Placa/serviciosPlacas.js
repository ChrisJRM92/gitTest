const validarEstructura = (placa) => {
    //console.log(placa)
    let valuesPlate = numberDigitsPlate(placa)
    let char_1 = esMayuscula(placa.charAt(0));
    let char_2 = esMayuscula(placa.charAt(1));
    let char_3 = esMayuscula(placa.charAt(2));
    let char_4 = esGuion(placa.charAt(3));
    let char_5 = esDigito(placa.charAt(4));
    let char_6 = esDigito(placa.charAt(5));
    let char_7 = esDigito(placa.charAt(6));
    let char_8 = esDigito(placa.charAt(7));

    //return [valuesPlate, char_1, char_2, char_3, char_4, char_5, char_6, char_7, char_8]
    if (!valuesPlate) {
        return 'La placa debe contener 7 u 8 caracteres.'
    }

    if (!char_1 || !char_2 || !char_3) {
        return 'Los 3 primero degitos deben ser en mayuscula'
    }

    if (!char_4) {
        return 'El cuarto digito debe ser un guion'
    }

    if (!char_5 || !char_6 || !char_7) {
        return 'Los ultimos digitos deben ser numeros'
    }

    if (!char_8) {
        return 'Los ultimos digitos deben ser numeros'
    }

    if (valuesPlate && char_1 && char_2 && char_3 && char_4 && char_5 && char_6 & char_7) {
        return null
    }
}

const provincias = {
    A: 'Azuay',
    B: 'Bolívar',
    U: 'Cañar',
    C: 'Carchi',
    X: 'Cotopaxi',
    H: 'Chimborazo',
    O: 'El Oro',
    E: 'Esmeraldas',
    W: 'Galápagos',
    G: 'Guayas',
    I: 'Imbabura',
    L: 'Loja',
    R: 'Los Ríos',
    M: 'Manabí',
    V: 'Morona Santiago',
    N: 'Napo',
    S: 'Pastaza',
    P: 'Pichincha',
    K: 'Sucumbíos',
    Q: 'Orellana',
    T: 'Tungurahua',
    Z: 'Zamora Chinchipe',
    Y: 'Santa Elena'
};

const obtenerProvincia = (placa) => {
    return provincias[placa.charAt(0)] || null


}
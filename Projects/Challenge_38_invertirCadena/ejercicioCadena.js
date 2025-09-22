const invertir = () =>{
    const string = document.getElementById('textInput').value;
    const reverseString = invertirCadena(string);
    document.getElementById('reverseText').innerText = reverseString;
}

const invertirCadena = (string) =>{
    let resultado = '';
    for(let i = string.length-1; i>=0; i--){
        resultado+=string.charAt(i)
    }
    return resultado
}
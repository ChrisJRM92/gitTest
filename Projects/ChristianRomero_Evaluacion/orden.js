let usuarios = [
    {id: 0, name: 'Marcos', age: 18},
    {id: 1, name: 'Roberto', age: 15},
    {id: 2, name: 'Kate', age: 25},
    {id: 3, name: 'Diana', age: 12},
    {id: 4, name: 'Benja', age: 5}
];
let id = 5;
const errors = [{
    error_length: '*Almenos 3 caracteres',
    error_empy: '*El campo es obligatorio',
    error_noNumber: '*Solo se aceptan numeros'
}]

const validarNombre = (user) => {
    let validation = false;
    
    if(user){
        mostrarTexto('error_name', '')
        if(user.length < 3){
            mostrarTexto('error_name', errors[0].error_length)
            return validation
        }else{
            validation = true;
            return validation
        }
        
    }else{
        mostrarTexto('error_name', errors[0].error_empy)
        return validation
    }
}

const validarEdad = (age) =>{
    let validation = false;
    let edad = parseInt(age)

    if(edad){
        mostrarTexto('error_age', '')
        if( typeof edad == 'string'){
            mostrarTexto('error_age', errors[0].error_noNumber)
            return validation
        }else{
            validation = true;
            return validation
        }
        
    }else{
        mostrarTexto('error_age', errors[0].error_empy)
        return validation
    }
}

const registrarUsuario = () => {
    const userInput = recuperarTexto('name').trim();
    const ageInput = recuperarTexto('age').trim();

    const user = userInput.charAt(0).toUpperCase()+userInput.slice(1).toLowerCase();
    const age = ageInput.charAt(0).toUpperCase()+ageInput.slice(1).toLowerCase();

    let isTrueUser = validarNombre(user)
    let isTrueAge = validarEdad(age)
    
    if(isTrueUser && isTrueAge){
        alert('Usuario agregado correctamente')
        usuarios.push({
            id: id+=1,
            name: user,
            age: age
        })
        console.log(usuarios)
        crearUsuarioTabla()

    }
}

const crearUsuarioTabla = () =>{
    let tabla = '<table><thead><tr><th>Id</th><th>Nombre</th><th>Edad</th></tr></thead>'
    for(let i=0; i<usuarios.length; i++){
        tabla+='<tbody><tr>'+
        '<td>'+usuarios[i].id+'</td>'+
        '<td>'+usuarios[i].name+'</td>'+
        '<td>'+usuarios[i].age+'</td>'
    }
    tabla+='</tr></tbody></table>'
    document.getElementById('tablaUsuarios').innerHTML = tabla;
}

const buscarMayor = () =>{
    let personaMayor;
    
    for(let i=0; i<usuarios.length; i++){
        let personaActual = usuarios[0].age
        if(personaActual < usuarios[i].age){
            personaActual = usuarios[i]
            personaMayor = personaActual
        }
    }
    alert('La persona mayor es: '+personaMayor.name+' con '+personaMayor.age+' años.')
    //console.log(personaMayor)
}

const buscarMenor = () =>{
    let personaMenor;
    
    for(let i=0; i<usuarios.length; i++){
        let personaActual = usuarios[0].age
        if(personaActual > usuarios[i].age){
            personaActual = usuarios[i]
            personaMenor = personaActual
        }
    }
    alert('La persona menor es: '+personaMenor.name+' con '+personaMenor.age+' años.')
    //console.log(personaMayor)
}
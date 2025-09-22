const crearProductos =()=>{
    let producto1 = {
        nombre: 'Cerveza',
        precio: 2.75,
        stock: 12
    }
    let producto2 = {
        nombre: 'Mentas',
        precio: 0.05,
        stock: 100

    }
    console.log(producto1)
    console.log(producto2)

    if(producto1.stock < producto2.stock){
        console.log('El stock de '+producto1.nombre+' es mayor que '+producto2.nombre)
    }
    return null
}
    
console.log(crearProductos())
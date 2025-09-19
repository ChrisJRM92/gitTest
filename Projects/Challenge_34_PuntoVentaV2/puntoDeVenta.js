calcularValorTotal = function () {
    let nombreProducto;
    let precioProducto;
    let cantidad;
    let porcentajeDescuento;


    nombreProducto = document.getElementById('txtProducto').value
    precioProducto = parseFloat(document.getElementById('txtPrecio').value)
    cantidad = parseInt(document.getElementById('txtCantidad').value)

    esProductoValido(nombreProducto);
    esCantidadValida(cantidad);
    

    if (!precioProducto) {
        document.getElementById('field_price').innerText = string_required
    } else {
        document.getElementById('field_price').innerText = ''
    }

    if (precioProducto > 0 && precioProducto < 50) {

        valorSubtotal = calcularSubTotal(precioProducto, cantidad)
        document.getElementById('lblSubtotal').innerText = valorSubtotal
        valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad)
        document.getElementById('lblDescuento').innerText = valorDescuento
        let opp = valorSubtotal - valorDescuento
        valorIVA = parseFloat(calcularIVA(opp).toFixed(2))
        console.log(valorIVA)
        document.getElementById('lblValorIVA').innerText = valorIVA
        console.log(valorSubtotal, valorDescuento, valorIVA)
        valorTotal = parseFloat(calcularTotal(valorSubtotal, valorDescuento, valorIVA).toFixed(2));
        document.getElementById('lblTotal').innerText = valorTotal;
    }










}



limpiar = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        document.getElementById(arr[i]).innerText = '0.0';
    }
    document.getElementById('txtProducto').value = '';
    document.getElementById('txtCantidad').value = '';
    document.getElementById('txtPrecio').value = '';

    document.getElementById('field_product').innerText = '';
    document.getElementById('field_amount').innerText = '';
    document.getElementById('field_price').innerText = '';

}

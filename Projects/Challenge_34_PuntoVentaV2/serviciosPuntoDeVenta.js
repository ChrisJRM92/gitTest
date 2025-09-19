
let valorSubtotal;
let valorDescuento;
let valorIVA;
let valorTotal;

const string_required = 'Campo obligatorio'
const max_value = 'Max. 10 caracteres'
const cantidad_max = 'Max. 100 productos'

const calcularIVA = (monto) => {
    const valorIVA = (monto * 12) / 100
    return valorIVA;
};
const calcularSubTotal = (precio, cantidad) => {
    const totalPagar = precio * cantidad;
    return totalPagar;
};

const calcularTotal = (subTotal, descuento, iva) => {
    const totalPagar = subTotal - descuento + iva
    return totalPagar;
};

const calcularDescuentoPorVolumen = (subTotal, cantidad) => {
    let descuento;
    let res;
    if (cantidad < 3) {
        descuento = 0;
    } else if (cantidad >= 3 && cantidad <= 5) {
        descuento = 3;
    } else if (cantidad >= 6 && cantidad <= 11) {
        descuento = 4;
    } else {
        descuento = 5;
    }
    return res = subTotal * descuento / 100

}


const esProductoValido = (nombreProducto) => {
    if (!nombreProducto) {
        document.getElementById('field_product').innerText = string_required
    } else {
        document.getElementById('field_product').innerText = ''
    }
    if (nombreProducto.length > 10) {
        document.getElementById('field_product').innerText = max_value
    }
}

const esCantidadValida = (cantidad) => {
    if (!cantidad) {
        document.getElementById('field_amount').innerText = string_required
    } else {
        document.getElementById('field_amount').innerText = ''
    }

    if (cantidad > 0 && cantidad <= 100) {
        document.getElementById('field_amount').innerText = ''
    } else {
        document.getElementById('field_amount').innerText = cantidad_max
    }


}

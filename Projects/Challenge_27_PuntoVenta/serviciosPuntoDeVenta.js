const calcularValorDescuento = (monto, porcentajeDescuento) => {
    const valorDescuento = (monto*porcentajeDescuento)/100;
    return valorDescuento;
};

const calcularIVA = (monto) => {
    const valorIVA = (monto*12)/100
    return valorIVA;
};
const calcularSubTotal = (precio, cantidad) => {
    const totalPagar = precio*cantidad;
    return totalPagar;
};

const calcularTotal = (subTotal, descuento, iva) => {
    const totalPagar = subTotal-descuento+iva
    return totalPagar;
};
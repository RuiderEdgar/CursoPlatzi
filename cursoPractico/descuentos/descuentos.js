const precioOri = 120;
const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecio = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecio) / 100;
    return precioConDescuento
}

function priceDiscount() { 
    const precio = document.getElementById("price").value;
    const descuento = document.getElementById("descuento").value;

    const precioConDescuento = calcularPrecioConDescuento(precio, descuento);

    document.getElementById("texto").innerHTML = "El precio con el desucento aplicado es de: "
    document.getElementById("total").value = `$ ${precioConDescuento}`;
    
}


// console.log("El precio original es " + precioConDescuento);
// console.log({
//     precioOri,
//     descuento,
//     porcentaje,
//     precioConDescuento
// })
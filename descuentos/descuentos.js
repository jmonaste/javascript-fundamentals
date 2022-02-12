//const precioOriginal = 120;
//const descuento = 18;



function calcularPrecioConDescuento(precio, descuento) {
    //calculamos el precio aplicando el descuento sobre el precio pasado por parámetro
    const porcentajePrecioConDescuento = 100 - descuento;
    return precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = InputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultPrice = document.getElementById("resultPrice");
    resultPrice.innerText = "El precio con descuento son: " + precioConDescuento + "$";
}


/*
console.log("El precio original es " + precioOriginal);

//otra forma de usar el log, enviando un objeto como parámetro de entrada a la función de log
console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,

});
*/

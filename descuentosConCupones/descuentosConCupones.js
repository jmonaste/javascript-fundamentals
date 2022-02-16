//const precioOriginal = 120;
//const descuento = 18;



function calcularPrecioConDescuento(precio, descuento) {
    //calculamos el precio aplicando el descuento sobre el precio pasado por parámetro

    const porcentajePrecioConDescuento = 100 - descuento;
    return precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
}

function getSelectedDiscount(){
    const selectedCupon = document.getElementById("cuponSelector"); //leemos el valor del combo-box
    const cuponValue = selectedCupon.value;
    var cuponDiscount = 0;

    console.log("cuponValue: " + cuponValue);

    switch (cuponValue) {
        case '0':
            cuponDiscount = 0;
            console.log("Opción 0: sin cupón")
            break;
        case '1': 
            cuponDiscount = 50;
            console.log("Opción 1: con 50%");
            break;
        case '2':
            cuponDiscount = 30;
            console.log("Opción 2: con 30%");
            break;
        default:
            cuponDiscount = 0;
            console.log('default option: no discount will be aplied');
    }

    return cuponDiscount;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = InputDiscount.value;

    var precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    //añadir el cupon como parametro
        //leemos cupon
        //buscamos el descuento que debemos aplicar
        //lvolvemos a aplicar el descuento
    
    //Volvemos a llamar para aplicar un posible descuento con cupón
    precioConDescuento = calcularPrecioConDescuento(precioConDescuento, getSelectedDiscount());

    //mostramos el precio final
    const resultPrice = document.getElementById("resultPrice");
    resultPrice.innerHTML = "<span>$</span>" + precioConDescuento;

    //actualizamos el precio original
    const groupTextPrice = document.getElementById("groupTextPrice");
    groupTextPrice.innerText = precioConDescuento + "$";
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

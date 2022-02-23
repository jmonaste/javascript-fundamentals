
/**
 * Antes de ecmas6
 * @param {*} name 
 * @param {*} age 
 * @param {*} country 
 */
function newFunction(name, age, country) {
    var name = name || 'Javier';
    var edad = edad || 30;
    var country = country || 'Spain';
    console.log(name, age, country);
}

//en ecmascript6 se puede hacer desde que asignamos los parámetros

/**
 * Con ecmascript6
 * @param {*} name 
 * @param {*} edad 
 * @param {*} country 
 */
function newFunction2(name = 'Javier', edad = 30, country = 'Spain') {
    //Aquí la función
    console.log(name, edad, country);
}
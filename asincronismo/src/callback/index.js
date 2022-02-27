function sum(num1, num2) {
    return num1 + num2;
}


/**
 * Se le llama callback por convención, pero puede ser cualquier otro nombre
 * @param {*} num1 
 * @param {*} num2 
 * @param {*} callback 
 */
function calc(num1, num2, callback) {
    return callback(num1, num2);
}

//creamos el llamado
console.log(calc(2,2,sum));
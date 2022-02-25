/**
 * caracteristicas de ecmascript9
 */


/**
 * operador de reposo. puede extraer las prop deun objeto que aun no se ha construido
 */
const obj = {
    name: 'Javier',
    age: 30,
    country: 'Spain',
}

let { name, ...all } = obj;
console.log(name, all);


/**
 * Más sobre el operador de reposo
 */

const obj = {
    name: 'Javier',
    age: 30,
}

const obj1 = {
    ...obj,
    country: 'Spain'
}

console.log(obj1);

/**
 * promise.finally
 * podmeos saber cuando ha temrinado el llamado y poder ejecutar funcion o logica según el caso
 */

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? resolve('Hello World')
        : reject(new Error('Test error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizado'))

//añadimos algo de complejidad

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizado'))
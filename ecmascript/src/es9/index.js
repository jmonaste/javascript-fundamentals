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


/**
 * han añadido mejoras sobre regex
 * cómo podemos agrupar bloques del regex y pdoder acceder a cada uno de ellos
 */

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);






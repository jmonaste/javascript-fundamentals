/**
 * se ha introducido object.entries
 * que nos va a permitir devolver la clave y valores de una matriz 
 */

const data = {
    frontend: 'Javier',
    backend: 'Isabel',
    designer: 'Ana'
};

//como pasamos este objeto a matriz?
const entries = Object.entries(data);
console.log(entries);

//¿cuñantos elementos tiene el array?

console.log(entries.length);

//object.values - me devuelve los valores de un objeto a un array
const values = Object.values(data);
console.log(values);
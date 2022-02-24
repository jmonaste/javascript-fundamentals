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

/**
 * tambien se añadió el padding
 */

const string = 'Hello!';
console.log(string.padStart(7, 'hi'));
console.log(string.padStart(8, 'h'));
console.log(string.padEnd(12, 'hii'));

//sirve para poder presentar una estructura de elementos. un menu, estructura, etc, para la opcion de impresion
//lo podemos hacer de esta forma
console.log('food'.padEnd(12,'---------'));
console.log('drinks'.padEnd(12,'---------'));
console.log('cofees'.padEnd(12,'---------'));
console.log('bee'.padEnd(12,'---------'));
console.log('a'.padEnd(12,'---------'));
console.log('nowhere'.padEnd(12,'---------'));
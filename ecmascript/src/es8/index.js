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


/**
 * trailing commas
 * --podemos meter comas al final de los objetos, mas simple para nosotros empezar a añadir mas elementos
 * sin caer en el error comun
 */

 const dataExample = {
    frontend: 'Javier',
    backend: 'Isabel',
    designer: 'Ana',
};

//como pasamos este objeto a matriz?
const entries = Object.entries(dataExample);
console.log(entries);


/**
 * Async y await
 * Crearemos un función, luego
 * Haremos una promesa, y vamos a invocarlas
 * veremos cómo nos ayudan las promesas, junto con el async y el await, 
 * para entender esta nueva caracteristica de es8
 */

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World!'), 3000)
        : reject(new Error('Test error...'))
    })
}

/**
 * ya tenemos nuestra promesa con la que vamos a trabajasr nuestro async y await 
 * esas funciones que le agregan este valor para identificar que se va a comportar
 * de fomra disinta
 * nos permite ser mas claros en la construccion de esta forma
 * y trabajremos mejor con el asincronismo
 * vamos a ver cómo funciona y cual es la logica que implica usarla
 */

const hellowAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

//hará el llamado, va a epserar a que esto suceda y luego lo podremos imprimir en consola
hellowAsync();


//otro ejemplo
const anotherFunction = async() => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error)
    }
};

anotherFunction();
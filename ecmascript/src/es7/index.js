//en ecmascript7 han incorporado dos cosas interesantes
/**
 * el valor de include
 * operaciones en forma exonencial
 * 
 * es7 nace en julio del 16. 
 */


//el metodo llamado include que trabaja sobre un array, nos permite saber si hay un elemento dentro de este

let numbers = [1,2,3,6,7,8,0];

if (numbers.includes(7)) {
    console.log('Sí se encuentra el valor 7');
}
else{
    console.log('No se encuentra');
}


//cómo elevar a la potencia

let base = 4;
let exponent = 3;
let result = base ** exponent;
console.log(result);
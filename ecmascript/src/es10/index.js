/**
 * novedades de ecmascript10
 * salio en julio del 19. vamos a ver carateristicas que han ido añadiendo
 * 
 */

/**
 * array.flat
 * flat recibe como argumento la profundidad
 */

let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array);

console.log(array.flat()); 
console.log(array.flat(2)); 


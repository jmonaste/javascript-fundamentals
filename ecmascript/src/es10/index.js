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

/**
 * flatmap
 * permite mapear cada lemento, despues pasarle una funcion y aplanar segun el restulado
 */

 let array = [1,2,3,4,5];
 console.log(array.flatMap(value => [value, value * 2]));

 /**
  * trimstart()
  * elimina espacios en blancos de un string
  */

 let helloWorld = '                hello World';
 console.log(helloWorld);
 console.log(helloWorld.trimStart());

  /**
  * trimsend()
  * elimina espacios en blancos de un string
  */

   let helloWorld = 'hello World                ';
   console.log(helloWorld);
   console.log(helloWorld.trimEnd());
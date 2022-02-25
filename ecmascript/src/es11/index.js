/**
 * caracterisitcas de las nuevas funcionalidad de es11
 * 2020
 */

/**
 * dinamic import
 * vamos a importar de forma dinamica para llamar piezas de código
 * optimizando nuestro proyecto
 */

//necesario crear el html
const btn = document.getElementById('btn');
btn.addEventListener('click', async function () {
    const module = await import('./file.js');
    module.hello();
})

/**
 * el archivo file se carga de forma dinamica, para cuando necesitemos cargar una pieza de código
 * nos permite dividir el codigo y usarlo sólo cuanod lo necesitamos
 * dinamy imports, mejora el performance de la aplicación
 */



//Big INT: permite trabajar con numeros mayores a 2^53

// 1- Añadiendo una "n" al final activas el big int en el valor
const aBigNumber = 9007199254740991n;

// 2- Con el metodo BigInt activas el valor
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);



//Promise All Settled

const promise1 = new Promise((resolve,reject) => reject("reject"));
const promise2 = new Promise((resolve,reject) => resolve("resolve"));
const promise3 = new Promise((resolve,reject) => resolve("resolve 1"));


Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));
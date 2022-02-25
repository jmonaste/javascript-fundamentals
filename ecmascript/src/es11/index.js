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
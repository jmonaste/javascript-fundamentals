/**
 * Vamos a construir una implementación para consultar una API pública
 * para implementarla con promesas
 */

 let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

/**
 * creamos una funcion fetchdata que nos va a traer la info
 *  del api.
 */
 
let API = 'https://rickandmortyapi.com/api/character/'

const fetchData = (url_api, callback) => {
    return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = (() => {
        if(xhttp.readyState === 4) { //ha sido completado
            (xhttp.status === 200)
                ? resolve(JSON.parse(xhttp.responseText))
                : reject(new Error('Error ', url_api))
        }
    });
    xhttp.send();
});
}

module.exports = fetchData;
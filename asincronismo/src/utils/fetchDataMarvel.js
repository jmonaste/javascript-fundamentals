
/**
 * Aquí las dependencias
 */

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; 
//const MD5 = require("crypto-js/md5");
const formatParams = require('./formatters');

/**
 * También tenemos que pasar como parámetros los parámetros:
 *  -ts
 *  -public key
 *  -hash md5(ts+privateKey+publicKey)
 * 
 * Tenemos que instalar la dependencia con crypt -> npm install crypto-js
 */


let ts = '1';
let apikey = 'f99b54a9da1a7d23c04f956f98d91d97';
let hash = 'ff770760b8a1648946b5653dbc7adef0';
 

/**
 * Función para que nos devuelva los datos del API
 * @param {*} url_api 
 * @param {*} callback 
 * @returns 
 */
const fetchDataMarvel = (url_api, callback) => {
    return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api + formatParams({ts, apikey, hash}), true);
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



module.exports = fetchDataMarvel;
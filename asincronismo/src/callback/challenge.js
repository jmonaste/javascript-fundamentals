/**
 * Vamos a construir una implementación para consultar una API pública
 * Estamos trabajando sobre node, necesitamos una dependencia
 * xmlhttprequest - nos permitirá hacer peticiones a algún servico (URL-API)
 * 
 * dentro del proyecto, debemos instalar la dependencia con
 * npm install xmlhttprequest --save
 * 
 */

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

/**
 * creamos una funcion fetchdata que nos va a traer la info
 * del api.
 */

function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest();

    //hacemos el llamado a la url - el true es para indicar que es asíncrono
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = function(event) {
        if(xhttp.readyState === 4) { //ha sido completado
            if(xhttp.status === 200) { //OK
                //ya podemos regresar el calllback
                callback(null, JSON.parse(xhttp.responseText)); //el primer valor es el error. parseamos para poder operar
            } else {
                const error = new Error('Error ' + url_api);
                return callback(error, null); //por convención se pasa primero el error, luego el resultado
            }
        }
    }

    xhttp.send();
}

//ya tenemos la funcion para la llamada al API, ahora resta utilizarla
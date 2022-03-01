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
 
 let API = 'https://rickandmortyapi.com/api/character/'
 
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
 
 fetchData(API, function(error1, data1) { //numeros porque vamos a usarla varias veces de forma anidada
     if (error1) return console.error(error1); //en caso de error, finalizamos la funcion
     fetchData(API + data1.results[0].id, function(error2, data2) {
         if(error2) return console.error(error2);
         fetchData(data2.origin.url, function(error3, data3) {
             if(error3) return console.error(error3);
             console.log(data1.info.count);
             console.log(data2.name);
             console.log(data3.dimension);
         });
     })
 })
 
 //con los callbacks hemos hecho una llamada tras una llamada
 //podemos encadenar callbacks, se llama callbackhell en el argot.
 //son muchas mismas peticiones encadenas. genera el llamado callback-hell
 //es una mala práctica
 
 //debemos evitar caer en este detalle de hacer llamadas encadenadas.
 
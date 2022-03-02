/**
 * Los primero es entender la API
 * Leer la documentación
 * https://developer.marvel.com/documentation/getting_started
 * 
 * The Marvel Comics API is a RESTful service which provides methods for accessing specific resources at canonical URLs 
 * and for searching and filtering sets of resources by various criteria. All representations are encoded as JSON objects.
 * 
 * 
 * Authorizing requests
 * APIs use authorization to ensure that client requests access data securely. This can involve authenticating the sender of a 
 * request and verifying that they have permission to access or manipulate the relevant data. If you're building an API, you can 
 * choose from a variety of auth models. If you're integrating a third-party API, the required authorization will be specified 
 * by the API provider.
 * 
 * En el caso de la API con la cual queremos experimentar, podemos leer en la documentación lo siguiente
 * 
 * Authentication
 * All requests to the APIs must be authenticated using the methods outlined in the request signing and authentication 
 * guidelines (https://developer.marvel.com/documentation/authorization). 
 * Requests which fail authentication generally pass a 401 HTTP code and an error describing the reason for rejection.
 * 
 * En el enlace podemos leer:
 * 
 * Using your keys
 * All calls to the Marvel Comics API must pass your public key via an “apikey” parameter.
 * Client-side and server-side applications have slightly different authentication rules in order to access the API. 
 * Please read below for the appropriate method for your application.
 * Please keep your private key private! Do not store your private key in publicly available code or repositories that are accessible to the public. 
 * Do not accidentally leave it at the bar.
 * 
 * Authentication for Server-Side Applications
 * Server-side applications must pass two parameters in addition to the apikey parameter:
 *      ts - a timestamp (or other long string which can change on a request-by-request basis)
 *      hash - a md5 digest of the ts parameter, your private key and your public key (e.g. md5(ts+privateKey+publicKey)
 * For example, a user with a public key of "1234" and a private key of "abcd" could construct a valid call as follows: 
 * http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150 (the hash value is the md5 digest of 1abcd1234)
 * 
 * Ya tenemos acceso al API con nuestra clave pública (postman)
 * 
 * Para más información sobre métodos de autenticación -> https://learning.postman.com/docs/sending-requests/authorization/
 * 
 */


/**
 * Lo siguiente es elegir el recurso con el que vamos a trabajar:
 * 
 * Resources
 * You can access six resource types using the API:
 * 
 * Comics: individual print and digital comic issues, collections and graphic novels. For example: Amazing Fantasy #15.
 * Comic series: sequentially numbered (well, mostly sequentially numbered) groups comics with the same title. For example, Uncanny X-Men.
 * Comic stories: indivisible, reusable components of comics. For example, the cover from Amazing Fantasy #15 or the origin of Spider-Man story from that comic.
 * Comic events and crossovers: big, universe-altering storylines. For example, Infinity
 * Creators: women, men and organizations who create comics. For example, Jack Kirby.
 * Characters: the women, men, organizations, alien species, deities, animals, non-corporeal entities, trans-dimensional manifestations, abstract personifications, 
 * and green amorphous blobs which occupy the Marvel Universe (and various alternate universes, timelines and altered realities therein). For example, Spider-Man.
 * 
 * Dentro de esta lista de recursos, elegiremos el primero -> Comics
 */

/**
 * Primer reto: vamos a imprimir todos los nombres de los comics que me devuelve el API
 */


const fetchDataMarvel = require('../utils/fetchDataMarvel');
const marvelPrinter = require('../utils/printers');
const marvelCharacterPrinter = require('../utils/printers');

const API = 'http://gateway.marvel.com/v1/public/comics';


const getCharacters = async (url_api) => {
    try {
        const data = await fetchDataMarvel(url_api);
        console.log(data);
    } catch (error){
        console.error(error);
    }
}

const getAllComicsNames = async (url_api) => {
    try {
        const data = await fetchDataMarvel(url_api);
        //const character = await fetchDataMarvel(`${API}${data.results[0].id}`);
        //const origin = await fetchDataMarvel(character.origin.url);

        //console.log(data.data.results);
        //console.log(character.name);
        //console.log(origin.dimension);

        //intentamos imprimir
        marvelPrinter(data.data.results);

        //si queremos más datos a partir de algun endpoint dentro de la respuesta:
        const listOfCharacters = data.data.results.map(
            function(item) {
                getCharacters(item.characters.collectionURI);
            }
          );

        //const charactersData = await fetchDataMarvel(characters.collectionURI);
        //console.log(charactersData);



    } catch (error) {
        console.error(error);
    }
}







console.log('Before');
getAllComicsNames(API);
console.log('After');
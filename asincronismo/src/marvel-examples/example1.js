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
 */
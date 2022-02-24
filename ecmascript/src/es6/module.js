//tenemos lógica separa del fichero principal
const hello = () =>  {
    return 'Hello!'
}

//exportamos este móudlo que podemos llamar donde necesitemos

/**
 * export default hello; 
 */


//es posible que no funcione porque no está soportado por node
//la sintaxxis antigua es
module.exports = hello;
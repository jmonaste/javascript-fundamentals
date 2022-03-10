/**
 * Fichero de configuración que tocaremos a lo largo del curso
 * -donde le diremos la configuracion para nuestro proyecto
 * -le diremos cual es el punto de entrada -> importnate, el elemtno prinicipall de la app
 * -hacia donde va a enviar la comilacion del proyecto
 * -extensiones que va a estar trabajando
 * -dist es la carpeta de distributioun
 * -main tambien lo podemos encontrar como boundle
 * -etensiones para que webpack sepa qué tipo de archivos (sbel, react) que tiene que identificar webpack para leer los ficheros dentro del proyecto
 * 
 */

const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }
    ]},
}
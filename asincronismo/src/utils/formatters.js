
/**
 * Formatea la cadena de string para los params de la URL que vamos a consultar
 * @param {*} params 
 * @returns 
 */
function formatParams(params){
    return "?" + Object
          .keys(params)
          .map(function(key){
            return key+"="+encodeURIComponent(params[key])
          })
          .join("&")
  }

  module.exports = formatParams;
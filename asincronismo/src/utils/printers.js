
/**
 * Print id and names of marvel objects
 * @param {*} marvelObject 
 */
function marvelPrinter(marvelObject) {
  const listOfNames = marvelObject.map(
    function(item) {
        console.log(item.id.toString().padEnd(12,'-') + ' | ' + item.title);
    }
  );
}

/**
 * Print characters of marvel objects
 * @param {*} marvelObject 
 */
 function marvelCharacterPrinter(marvelObject) {
  const listOfCharacters = marvelObject.map(
    function(item) {
        console.log(item);
    }
  );
}

module.exports = marvelPrinter;
module.exports = marvelCharacterPrinter;
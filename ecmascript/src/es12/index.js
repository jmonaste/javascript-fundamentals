/**
 * ecmascript12
 */


//Replace

const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web.";
const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);

// Output: Python es maravilloso, con JavaScript puedo crear el futuro de la web.

const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);

// Output: Python es maravilloso, con Python puedo crear el futuro de la web.

/**
 * Antes de ecmas6
 * @param {*} name 
 * @param {*} age 
 * @param {*} country 
 */
function newFunction(name, age, country) {
    var name = name || 'Javier';
    var edad = edad || 30;
    var country = country || 'Spain';
    console.log(name, age, country);
}

//en ecmascript6 se puede hacer desde que asignamos los parámetros

/**
 * Con ecmascript6
 * @param {*} name nombre para mostrar
 * @param {*} edad edad para mostrar
 * @param {*} country país para mostrar
 */
function newFunction2(name = 'Javier', edad = 30, country = 'Spain') {
    //Aquí la función
    console.log(name, edad, country);
}

//Cómo podemos llamar a esta función
newFunction2();
newFunction2('Ignacio', 29, 'Chile');


//Template literals. Permite separar o unir varios elementos

let hello = 'Hello';
let world = 'World';

//ejemplo en ecmascript6
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//los templates nos van a permitir hacer esto mismo sin usar el '+' que es un poco tedioso
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);




//Multilínea en los string

//esto se hacía antes de es6
//normalmente no es la mejor opcion
let lorem = 'lorem ipsum, lorem ipsum. quiero escribir una frase épica \n'
+ ' concatenamos esta linea para continuar en nueva línea en el editor';

//ecmascript6 tambine puede hacerlo con comillas francesas o template literasl
let lorem2 = `otra frease grande y larga que necesitamos
ahora es otra frase grande y larga, que por estar entre las comillas francesas
puedo tener multilinea sin necesidad del barra n`;

console.log(lorem);
console.log(lorem2);

//destructuración de objetos
let person = {
    'name':'Javier',
    'age':30,
    'country':'spain'
}

console.log(person.name, person.age, person.country);

//destructuración - extraemos los elementos que necesitamos
let {name, age, country} = person;
console.log(name, age, country);

//también podemos traer sólo un elementos
let person_2 = {
    'name_2':'Ignacio',
    'age':30,
    'country':'spain'
}

let {name_2} = person_2;
console.log(name_2);

//operador de propagación - expandir varios elementos
let team1 = ['Oscar', 'Julián', 'Ricardo'];
let team2 = ['Ana', 'Juana', 'Verónica'];

let education = ['Davi', ...team1, ...team2];

console.log(education);

//con let, el scope es de la función o bloque, vemos algunos ejemplos

{
    var global = 'Global var';
}

{
    let globalLet = 'GlobalLet';
}

console.log(global);
console.log(globalLet); //va a dar un error por no estar definido. globallet esta en otro scope

//caracteristica de ecmascript6 es const
const variableA = 'b'; //contsnate que no cambia su valor
console.log(variableA);
variableA = 'a'; //va a dar error porque es una constante, no me permite modificar el valor
console.log(variableA);

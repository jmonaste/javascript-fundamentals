
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

//otra caracteristica de ecmascript6 es const
const variableA = 'b'; //contsnate que no cambia su valor
console.log(variableA);
variableA = 'a'; //va a dar error porque es una constante, no me permite modificar el valor
console.log(variableA);


//arrows funcitons, promesas y parámetros en objetos

let name = 'Javier';
let age = 30;
obj = {name: name, age: age};
obj2 = {name, age}; //asigna llave y valor, caracteristica de ecmascript6
console.log(obj);
console.log(obj2);


//arrow funcitons
const names = [
    {name: 'Javier', age: 30},
    {name: 'Ignacio', age: 27}
];

//lo que hacíamos era pasar una funcion anónima
let listOfNames = names.map(
    function(item) {
        console.log(item.name);
    }
);

//las arrow functions son funciones anónimas
let listOfNames2 = names.map(item => console.log(item.name)); //pasamos funcion anónima para imprimir los nombres

let listOfNames3 = (name, age, country) => {
    //código para list of names 3
}

//si solo pasamos un elemento
const listOfName4 = name => {
    //código a ejecutar
}

const square = num => num + num; //asignamos directamente, simplifica código

//Promesas
//simplifican los antiguos callbacks, para manejar los sincornismos
//las promesas entienden que algo va a pasar

const helloPromise = () =>{
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('Hey!');
        }
        else{
            reject('Ups!!');
        }
    });
}

//result o reject, o resuelve o rechaza

helloPromise()
.then(response => console.log(response))
.then(() => console.log('Hola'))
.catch(error => console.log('Error'));



const helloPromise2 = () =>{
    return new Promise((resolve, reject) => {
        if(false) {
            resolve('Hey!');
        }
        else{
            reject('Ups!!');
        }
    });
}

//result o reject, o resuelve o rechaza

helloPromise2()
.then(response => console.log(response))
.catch(error => console.log('Error'));

//util para hacer llamadas a un API --> se profundizará en el curso de sincronismo
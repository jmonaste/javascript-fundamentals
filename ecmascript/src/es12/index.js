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





// Metodos privados
class Message {
    #show(val){ // Con el # convertimos al método en privado
        console.log(val);
    };
};

const message = new Message();
message.show('Hola!');


//Promise Any

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));


// WeakRef(element);
//evitamos que el objeto sea tratado por el garbage collector
//garantizamos que esto sea así
class AnyClass {
    constructor(element){
        this.ref = new WeakRef(element)
    }
}
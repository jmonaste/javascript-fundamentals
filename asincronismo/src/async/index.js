/**
 * antes vimos los callbacks y las promesas y resolvimos el reto
 * ahora tendmeos que ver async y await
 * este nuevo enfoque que nace dentro de ecmascript, garantiza que nosotros
 * vamos a implementar nuestro codigo. es preferible a las promesas porque
 * hace que nuestro código se ejecute de forma síncrona
 */

const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Do Something Async'), 3000)
        : reject(new Error('Test Error'))
    })
}

const doSomething = async () => {
    const something = await doSomethingAsync()
    console.log(something);
}

console.log('Before');
doSomething();
console.log('After');



//más

const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
    } catch (error) {
        console.error(error)
    }
}

console.log('Before1');
anotherFunction();
console.log('After1');

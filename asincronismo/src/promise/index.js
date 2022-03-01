/**
 * vamos a trabajar con promesas, para implementar lo mismo
 * que en el challenge anterior
 */

const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey!');
        } else {
            reject('Ups!');
        }
    });
};

//la ejecutamos
somethingWillHappen()
.then(response => console.log(response))
.catch(err => console.error(err));


//nuevo ejemplo

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            //otro ejemplo
            setTimeout(() => {
                resolve('True');
            }, 3000)
        } else {
            const error = new Error('Ups!');
            reject(error);

        }
    });
}

somethingWillHappen2()
.then(response => console.log(response))
.then(() => console.log('Ejemplo de encadenamiento'))
.catch(err => console.error(err));

//otro ejemplo, para demostrar que podemos encadenar más casos


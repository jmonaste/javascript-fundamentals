/**
 * vamos a trabajar con promesas, para implementar lo mismo
 * que en el challenge anterior
 */

const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
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
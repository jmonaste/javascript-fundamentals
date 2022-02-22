const salariosColombia = colombia.map(
    function(persona) {
        return persona.salary;
    }
);

const salariosColombiaSorted = salariosColombia.sort(
    function(salaryA, salaryB) {
        return salaryA - salaryB;
    }
);


/**
 * Calcula si el valor pasado como parámetro es par.
 * @param {*} num Número del cual vamos a evaluar la paridad
 * @returns 
 * true si el número de par
 * false si el número es impar
 */
function esPar(num) {
    return (num % 2) === 0;
}


/**
 * Calcula la media aritmética de una lista
 * @param {*} lista 
 * @returns 
 */
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;

        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}


//Calcula la mediana de una lista
function calcularMediana(lista) {
    const esNumPar = esPar(lista.length);
    let mediana = 0;

    if(esNumPar){
        //la longitud de la lista es par, por lo que deberíamos devovler la media de los dos elementos centales
        mediana = calcularMediaAritmetica([lista[(lista.length / 2) - 1], lista[(lista.length / 2)]]);
    }
    else{
        //la longitud de la lista es impar, por lo que podemos devolver el elemento central de la lista
        let index = ((lista.length - 1) / 2) + 1;
        mediana = lista[index];
    }

    return mediana;
}

console.log('La lista ordenada: ' + calcularMediana(salariosColombiaSorted));
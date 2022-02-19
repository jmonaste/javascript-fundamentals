/**
 * Promedio
 */

const lista1 = [100, 200, 300, 400, 500, 400000000];




//Calcula la media arimética de una lista
function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;

    // //Sumamos todos los elementos del array
    // for (let index = 0; index < lista.length; index++) {
    //     sumaLista = sumaLista + lista[index];
    // }
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;

        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//Calcula si el valor pasado como parámetro es par
//Devuelve true si es par
//Devuelve false si es impar, cero o un número negativo
function esPar(num) {
    return (num % 2) == 0;
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

//Calcular la moda. el valor que más se repite
function calcularModa(lista) {
    //lo primero que vamos a hacer será ordenar la lista
    lista = lista.sort();
    console.log(lista)
}
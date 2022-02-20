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
    console.log('Entrando en la función para calcular la moda');

    //lo primero que vamos a hacer será ordenar la lista
    console.log('Ordenando la lista...')
    lista = lista.sort();
    console.log(lista)

    //la lista ya está ordenada, por lo que ahora tenemos que tener dos contadores,
    //el primer contador contará las veces que se repite el primer elemento de la lsita
    //el segundo contador entrará en jeugo cuando, recorriendo la lista, nos encontremos con un unevo elemento

    //los contadores tienen que guardar información el número de ocurrencias y además del elemento que están contando
    //por lo que tienen que ser un array de dos elementos, la cuenta y el número

    console.log('Inicializando los contadores y variables...');
    let firstOccurenceCounter = [0,null];
    let secondOccurenceCounter = [0,null];

    let hasSwitched = false;

    console.log('Preparando para recorrer la lista...');
    //recorremos la lista
    for (let index = 0; index < lista.length; index++) {
        //tenemos que detectar el cambio de valor entre las ocurrencias

        //cuando haya un cambio de ocurrencia, inicializaremos a cero el contador más pequeño y será ese el que utilizaremos
        //ya que el otro estaría guardando la moda

        if(index == 0) {
            console.log('Entramos en este bucle único para aumentar la primera variable');
            //estamos en el primer ciclo del bucle, sumamos un 1 al primer contador para inicializar
            firstOccurenceCounter[firstOccurenceCounter[0]+1, lista[index]];
        }
        else{
            console.log('Entrando al bucle normal, index = ' + index);
            //el resto de ciclos del bucle se ejecutarán aquí

            //comparamos el elemento actual con al enterior, para saber si tenemos que sumar una ocurrencia 
            //o inicializar uno de los dos contadores
            console.log('evaluando si hay un nuevo elemento...');
            if(lista[index] == lista[index - 1]) {
                console.log('Misma ocurrencia, sumamos uno al contador');
                //misma ocurrencia, hay que sumar al contador
                firstOccurenceCounter = [firstOccurenceCounter[0]+1, lista[index]];
            }
            else {
                //tenemos que hacer switch de los contadores y seguir contando
                //para hacer switch, 
                console.log('Nueva ocurrencia. switch a true y sumamos 1 al otro contador');
                
                hasSwitched = true;

                secondOccurenceCounter = [secondOccurenceCounter[0]+1, lista[index]];

                console.log('hasSwitched: ' + hasSwitched);
                console.log('el estado del contador es: ' + secondOccurenceCounter[0] + ' para el valor ' + secondOccurenceCounter[1]);
            }
        }

        if(hasSwitched) {
            //este trozo de código sólo se ejecutará si ha habido un switch en la lectura de la lista
            //esto es, se ha leído un elemento nuevo

            //tenemos que ver cuál de los dos contadores es el mayor. Si el mayor es el primero. dejamos 
            //como estaba. si no, intercambiamos (si el segundo es mayor o igual)
            if(secondOccurenceCounter[0] >= firstOccurenceCounter[0]) {
                firstOccurenceCounter[0] = secondOccurenceCounter[0];
                secondOccurenceCounter[0] = 0;
            }

            //reiniciamos el flag
            hasSwitched = false;
        }
    }

    //ya hemos recorrido la lista
    //ahora tenemos que ver cual de los dos contadores es el mayor, y devolver su valor
    if(firstOccurenceCounter[0] >= secondOccurenceCounter[0]) {
        console.log('La moda de la lista es: ' + firstOccurenceCounter[1]);
        //return firstOccurenceCounter[1];
    }
    else {
        console.log('La moda de la lista es: ' + secondOccurenceCounter[1]);
        //return secondOccurenceCounter[1];
    }

    console.log('La moda de la lista es: ' + firstOccurenceCounter[1]);
    console.log('La moda de la lista es: ' + secondOccurenceCounter[1]);
}
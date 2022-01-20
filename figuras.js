
// Código del cuadrado
console.group("Cuadrado");

function  perimetroCuadrado(lado) {
    return lado * 4;
} 

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();


// Código del triángulo
console.group("Triángulo");

function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo) {
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
}

function areaTriangulo(baseTriangulo, alturaTriangulo) {
    return (baseTriangulo * alturaTriangulo) / 2;
}

console.groupEnd();


// Código del círculo
console.group("Círculo");

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}

function areaCirculo(radioCirculo) {
    return (radioCirculo * radioCirculo) * Math.PI;
}

console.groupEnd();

//Código del triángulo isósceles

//En geometría, un triángulo isósceles es un tipo de triángulo que tiene, al menos, dos lados de igual longitud. 
//Al ángulo formado por los lados de igual longitud se le denomina ángulo en el vértice y al lado opuesto a él, 
//ángulo base.1

//por lo que deberíamos pedir sólo dos datos. Un lado y la base

console.group("Triángulo isósceles");

function alturaIsosceles(ladoIsosceles, baseIsosceles) {
    /*la altura es la raiz cuadrada de 4 veces el lado al cuadrado - base al cuadrado
    todo ello dividido entre 2*/
    return ((Math.sqrt((4*ladoIsosceles*ladoIsosceles)-(baseIsosceles*baseIsosceles))) / (2))
}

console.groupEnd();






// utils


//Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}



//Triangulo
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputTriangulo1");
    const input2 = document.getElementById("inputTriangulo2");
    const input3 = document.getElementById("inputBaseTriangulo");

    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);

}

function calcularAreaTriangulo() {
    const inputAlturaTriangulo = document.getElementById("inputAlturaTriangulo");
    const inputBaseTriangulo = document.getElementById("inputBaseTriangulo");

    const alturaTriangulo = inputAlturaTriangulo.value;
    const baseTriangulo = inputBaseTriangulo.value;


    const area = areaTriangulo(baseTriangulo, alturaTriangulo);
    alert(area);
}

//Circulo

function calcularDiametroCirculo() {
    const inputRadioCirculo = document.getElementById("inputCirculo");
    const radioValue = inputRadioCirculo.value;
    const diametro = radioValue * 2;
    alert(diametro);
}

function calcularPerimetroCirculo(radio) {
    const inputRadioCirculo = document.getElementById("inputCirculo");
    const radioValue = inputRadioCirculo.value;
    const perimetro = perimetroCirculo(radioValue);
    alert(perimetro);
}

function calcularAreaCirculo(radio) {
    const inputRadioCirculo = document.getElementById("inputCirculo");
    const radioValue = inputRadioCirculo.value;
    const area = areaCirculo(radioValue);
    alert(area);
}

console.group("Círculo");


//Isósceles

console.group("Isósceles");

function calcularAlturaIsosceles() {
    const inputLadoIsosceles = document.getElementById("inputLadoIsosceles");
    const inputBaseIsosceles = document.getElementById("inputBaseIsosceles");

    const ladoIsosceles = inputLadoIsosceles.value;
    const baseIsosceles = inputBaseIsosceles.value;

    const altura = alturaIsosceles(ladoIsosceles, baseIsosceles);
    alert(altura);
} 

console.groupEnd();
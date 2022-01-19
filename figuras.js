
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
    diametroCirculo = diametroCirculo(radio);
    return diametroCirculo * Math.PI;
}

function areaCirculo(radioCirculo) {
    return (radioCirculo * radioCirculo) * Math.PI;
}

console.groupEnd();


// utils

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




function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputTriangulo1");
    const input2 = document.getElementById("inputTriangulo2");
    const input3 = document.getElementById("inputTriangulo3");

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


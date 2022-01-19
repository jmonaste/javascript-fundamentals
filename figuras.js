
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
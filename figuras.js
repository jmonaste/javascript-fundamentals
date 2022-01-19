
// Código del cuadrado

console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();


// Código del triángulo
console.group("Triángulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log("Los lados del triángulo miden: " 
            + ladoTriangulo1 + "cm, "
            + ladoTriangulo2 + "cm, "
            + baseTriangulo + "cm.");

console.log("La altura del triángulo mide: " + alturaTriangulo + "cm")

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo es: " + areaTriangulo + "cm^2");
console.groupEnd();



// Código del círculo
console.group("Círculo");

const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const pi = Math.PI;

const perimetroCirculo = diametroCirculo * pi;
const areaCirculo = (radioCirculo * radioCirculo) * pi;


console.log("El radio del círculo es: " + radioCirculo + "cm");
console.log("El diametro del círculo es: " + diametroCirculo + "cm");
console.log("El valor de PI es: " + pi);
console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");
console.log("El área del círculo es: " + areaCirculo + "cm^2");


console.groupEnd();
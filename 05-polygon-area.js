/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

function calcArea(polygon, width, height = null) {
  switch (polygon) {
    case "square":
      return squareArea(width);
    case "rectangle":
      return rectangleArea(width, height);
    case "triangle":
      return triangleArea(width, height);
    default:
      throw new Error("No es posible calcular el área de ese polígono");
  }
}

function squareArea(width) {
  return width ** 2;
}

function rectangleArea(width, height) {
  return width * height;
}

function triangleArea(width, height) {
  return (width * height) / 2;
}

let width = 3;
let height = 5;

console.log("El área de un cuadrado es:", calcArea("square", width));
console.log(
  "El área de un rectángulo es:",
  calcArea("rectangle", width, height),
);
console.log("El área de un triángulo es:", calcArea("triangle", width, height));

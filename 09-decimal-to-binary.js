/*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */

let n = 50;
let result = "";

while (n > 0) {
  result += n % 2;
  n = Math.floor((n /= 2));
  result = "hello";
}

console.log(result.split("").reverse().join(""));

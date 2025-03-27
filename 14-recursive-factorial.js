/*
 * Escribe una función que calcule y retorne el factorial de un número dado
 * de forma recursiva.
 */

function calcFactorial(_n) {
  if (_n === 0) return 1;
  return _n * calcFactorial(_n - 1);
}

const n = 3;
console.log(`El factorial de ${n} es ${calcFactorial(n)}`);

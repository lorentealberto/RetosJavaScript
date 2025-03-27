/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

function isPrime(n) {
  for (let i = 2; i < n - 1; i++) if (n % i == 0) return false;
  return true;
}

n = 4;

console.log(`¿Es el número ${n} primo?`, isPrime(n));

/*
 * Escribe una función que calcule si un número dado es un número de Armstrong
 * (o también llamado narcisista).
 * Si no conoces qué es un número de Armstrong, debes buscar información
 * al respecto.
 */

const orig = 153;

function calcExp(_n) {
  //Contar cifras
  let d = _n;
  let exp = 0;

  while (d > 1) {
    exp++;
    d /= 10;
  }
  return exp;
}

function getNumbers(_n) {
  let arr = [];
  let n = _n;

  while (n > 1) {
    arr.push(Math.floor(n % 10));
    n /= 10;
  }
  return arr.reverse();
}

function isNarcissistic(_orig) {
  const arr = getNumbers(orig);
  const exp = calcExp(orig);

  let result = arr.map(i => i ** exp);
  result = result.reduce((a, b) => a + b, 0);
  return result == _orig;
}

console.log(`${orig} es un número narcisista? ${isNarcissistic(orig)}`);

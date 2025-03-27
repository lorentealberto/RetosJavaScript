/*
 * Crea un programa que comprueba si los paréntesis, llaves y corchetes
 * de una expresión están equilibrados.
 * - Equilibrado significa que estos delimitadores se abren y cieran
 *   en orden y de forma correcta.
 * - Paréntesis, llaves y corchetes son igual de prioritarios.
 *   No hay uno más importante que otro.
 * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
 * - Expresión no balanceada: { a * ( c + d ) ] - 5 }
 */

const expression = "{ a * ( c + d ) ] - 5 }";

console.log(
  `¿Está la expresión ${expression} balanceada? ${isBalanced(expression)}`,
);

function isBalanced(_expression) {
  let result = true;
  let symbols = new Map([
    ["{", "}"],
    ["[", "]"],
    ["(", ")"],
  ]);

  let openingSymbols = [];
  let closingSymbols = [];

  _expression.split("").forEach((c) => {
    symbols.keys().forEach((s) => {
      if (c == s) openingSymbols.push(c);
    });
    symbols.values().forEach((s) => {
      if (c == s) closingSymbols.push(c);
    });
  });

  for (let i = 0; i < openingSymbols.length; i++) {
    for (let j = closingSymbols.length--; j > 0; j--) {
      if (symbols.get(i) == symbols.get(j)) {
        result = false;
      }
    }
  }
  return result;
}


console.log('test')

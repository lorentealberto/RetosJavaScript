/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

let orig = 'hola mundo'
let result = ''

for (let i = orig.length - 1; i >= 0; i--)
    result += orig[i]

console.log(`La palabra original es ${orig} y su versión invertida es ${result}`)
/*
 * Escribe una función que reciba un texto y retorne verdadero o
 * falso (Boolean) según sean o no palíndromos.
 * Un Palíndromo es una palabra o expresión que es igual si se lee
  * de izquierda a derecha que de derecha a izquierda.
 * NO se tienen en cuenta los espacios, signos de puntuación y tildes.
 * Ejemplo: Ana lleva al oso la avellana.
 */

function reverseString(_str) {
    let result = ''
    for (let i = _str.length - 1; i >= 0; i--)
        result += _str[i]
    return result
}

function isPalindrome(_str) {
    let result = true
    
    
    let tmpStr = _str.toLowerCase().split(' ').join('')
    let reversedStr = reverseString(tmpStr)

    console.log(tmpStr)
    console.log(reversedStr)

    if (tmpStr.length != reversedStr.length) {
        result = false
        return
    }

    for (let i = 0; i < tmpStr.length && result; i++) {
        let c = tmpStr[i], c2 = reversedStr[i]
        if (c != c2) result = false
    }
   
    return result
}


const phrase = 'A la gorda drogala'

console.log(`¿Es la frase '${phrase}'un palíndromo? ${isPalindrome(phrase)}`)
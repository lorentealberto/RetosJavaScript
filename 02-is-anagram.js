/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function isAnagram(word_1, word_2) {
    if (word_1 == word_2)
        throw new Error("No pueden ser las mismas palabras")

    //Si las palabras tienen distinta longitud, obviamente, no son anagramas
    if (word_1.length != word_2.length)
        return false

    //Se comprueba que todos los caracteres de la palabra 1 estén incluidos en la palabra 2
    for (let i = 0; i < word_1.length; i++) {
        if (!word_2.includes(word_1[i]))
            return false
    }

    return true
}

let word_1 = "escabullimiento"
let word_2 = "bulliciosamente"

try {
    if (isAnagram(word_1, word_2))
        console.log("Ambas palabras son anagramas")
    else
        console.log("Las palabras introducidas no son anagramas")
} catch (e) {
    console.error(e.message)
}
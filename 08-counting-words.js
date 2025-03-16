/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */


let wordsDic = new Map()
let phrase = "Me gusta comer carne porque si no como carne no me gusta comer pescado"

let wordsArray = phrase.split(' ')

wordsArray.forEach(word => {
    let w = word.toLowerCase()

    if (!wordsDic.has(w)) {
        wordsDic.set(w, 1)
    } else {
        wordsDic.set(w, wordsDic.get(w) + 1)
    }
})

console.log(wordsDic)
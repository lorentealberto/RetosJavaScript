/*
 * Crea un programa que sea capaz de transformar texto natural a código
 * morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar
 *   la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras
 *   o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en
 *   https://es.wikipedia.org/wiki/Código_morse.
 */


const morseCode = new Map([
    ['A', '.-'],
    ['B', '-...'],
    ['C', '-.-.'],
    ['D', '-..'],
    ['E', '.'],
    ['F', '..-.'],
    ['G', '--.'],
    ['H', '....'],
    ['I', '..'],
    ['J', '.---'],
    ['K', '-.-'],
    ['L', '.-..'],
    ['M', '--'],
    ['N', '-.'],
    ['O', '---'],
    ['P', '.--.'],
    ['Q', '--.-'],
    ['R', '.-.'],
    ['S', '...'],
    ['T', '-'],
    ['U', '..-'],
    ['V', '...-'],
    ['W', '.--'],
    ['X', '-..-'],
    ['Y', '-.--'],
    ['Z', '--..'],
    ['1', '.----'],
    ['2', '..---'],
    ['3', '...--'],
    ['4', '....-'],
    ['5', '.....'],
    ['6', '-....'],
    ['7', '--...'],
    ['8', '---..'],
    ['9', '----.'],
    ['0', '-----'],
    ['.', '.-.-.-'],
    [',', '--..--'],
    ['?', '..--..'],
    ["'", '.----.'],
    ['!', '-.-.--'],
    ['/', '-..-.'],
    ['(', '-.--.'],
    [')', '-.--.-'],
    ['&', '.-...'],
    [':', '---...'],
    [';', '-.-.-.'],
    ['=', '-...-'],
    ['+', '.-.-.'],
    ['-', '-....-'],
    ['_', '..--.-'],
    ['"', '.-..-.'],
    ['$', '...-..-'],
    ['@', '.--.-.'],
    [' ', '/'] //Space character
  ])

function reverseMap(orig) {
    let reversedMap = new Map()

    for (let [key, value] of orig) {
        reversedMap.set(value, key)
    }

    return reversedMap
}

let reverseMorse = reverseMap(morseCode)




let phrase = `The old pirate's map, stained with salt and time, whispered of buried treasure. A lone seagull cried overhead, its sharp call echoing the secrets held within the weathered parchment. A gentle breeze rustled the palm trees, their fronds swaying like dancers to an unseen rhythm. The sand, warm and golden, stretched endlessly towards the horizon, where the turquoise sea met the vast, cloud-strewn sky. A small, forgotten village, nestled amongst the hills, slept peacefully, oblivious to the ancient mystery that lay just beyond its borders.`
//let phrase = '-- . / --. ..- ... - .- -. / .-.. --- ... / -.-. --- -.-. .... . ... / -.-- / .-.. .- ... / -- --- - --- ...'
let encodedPhrase = ''

 

if (isMorse(phrase)) {
    encodedPhrase = decode(phrase)
} else {
    encodedPhrase = encode(phrase)
}

console.log(encodedPhrase)






//Functions
function isMorse(phrase) {
    let arr = ['.', '-', '/', ' ']
    let isMorse = true

    for (let i = 0; i < phrase.length && isMorse; i++) {
        let c = phrase[i]
        if (!arr.includes(c)) {
            isMorse = false
            break
        }
    }

    return isMorse
}


function encode (_phrase) {
    let result = ''
    

    /* for (let c of _phrase)
        result += morseCode.get(c.toUpperCase()) + ' ' */
    _phrase.split('').forEach(c => {
        result += morseCode.get(c.toUpperCase()) + ' '
    })

    return result
}

function decode(phrase){
    let lettersArr = phrase.split(' ')
    let result = ''
    
    lettersArr.forEach(c => {
        result += reverseMorse.get(c)
    })

    return result
}
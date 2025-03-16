/*
 * Crea una función que reciba dos cadenas como parámetro (str1, str2)
 * e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO
 *   estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO
 *   estén presentes en str1.
 */

function removingCharacters(_str1, _str2) {
    let out1 = '', out2 = ''

    let equalFound = false


    _str1.split('').forEach(c => {
        equalFound = false
        _str2.split('').forEach(c2 => {
            if (c === c2) equalFound = true
        })

        if (!equalFound) out1 += c
    })

    _str2.split('').forEach(c => {
        equalFound = false
        _str1.split('').forEach(c2 => {
            if (c === c2) equalFound = true
        })

        if (!equalFound) out2 += c
    })
    
    return [out1, out2]
}

const [out1, out2] = removingCharacters('holas', 'lazo')

console.log(out1)
console.log(out2)
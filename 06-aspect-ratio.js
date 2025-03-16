/*
 * Crea un programa que se encargue de calcular el aspect ratio de una
 * imagen a partir de una url.
 * - Url de ejemplo:
 *   https://raw.githubusercontent.com/mouredevmouredev/master/mouredev_github_profile.png
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una
 *   imagen de 1920*1080px.
 */

let imageWidth = 1920
let imageHeight = 1080


function getGCD(a, b) {
    if (a == 0)
        return b
    return getGCD(b % a, a)
}


let gcd = getGCD(imageWidth, imageHeight)
let w = imageWidth / gcd
let h = imageHeight / gcd

console.log(`El aspect ratio de una imagen de ${imageWidth}x${imageHeight} es ${w}:${h}`)
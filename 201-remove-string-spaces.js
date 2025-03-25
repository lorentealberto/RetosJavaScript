//Write a function that removes the spaces from the string, then return the resultant string.

let test = '8 j 8   mBliB8g  imjB8B8  jl  B' 

function noSpace(x) {
  console.log(x.split(' ').join('')); 
}
noSpace(test)

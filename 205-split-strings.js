//Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').


function solution(str) {
  let arr = [];
  
  while (str.length > 2) {
    arr.push(str.split(2));
  }
  if (str.length >= 1)
    arr.push(str+'_');
  return arr;
}

let test = 'abcdef';

console.log(solution(test));

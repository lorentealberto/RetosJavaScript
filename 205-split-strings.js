//Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function solution(str) {
  let resArr = [];

  let arr = str.split('');
  let pair = '';

  while (arr.length > 0) {
    pair += arr.shift();
    if (pair.length === 2) {
      resArr.push(pair);
      pair = '';
    }
  }
  if (pair.length == 1)
    resArr.push(pair + '_');

  return resArr;
}

let test = "";

console.log(solution(test));

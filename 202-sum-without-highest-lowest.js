/* Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.*/

let test = [6, 2, 1, 8, 10];

function sumArray(array) {
  if (array === null || array.length <= 0) return 0;

  //Order the array
  let result = array.sort((a, b) => a > b ? 1 : -1);
  result.shift();
  result.pop();
  result = result.reduce((a, b) => a + b, 0);
  return result;
}

console.log(sumArray(test));

/*
Define a function called `secondHalf` that takes in a string
parameter. The function should return a new string containing only the second
half of characters in the string parameter.
*/

function secondHalf(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++){
    if (str.length % 2 === 0){
      newStr = str.slice(str.length / 2, str.length)
    } else {
      newStr = str.slice(str.length / 2 + 1, str.length)
    }
  }
  return newStr;
}

// console.log(secondHalf('academy')); // 'emy'
// console.log(secondHalf('planet'));  // 'net'
// console.log(secondHalf('sport'));   // 'rt'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = secondHalf;

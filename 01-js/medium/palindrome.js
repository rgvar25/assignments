/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let str1 = str.toLowerCase().replace(/\s/g, '' ).replace(/[^\w\s]/g, "");
  let str2 = str.toLowerCase().replace(/\s/g, '' ).replace(/[^\w\s]/g, "").split('').reverse().join('')
  
  return str1 === str2;
}

module.exports = isPalindrome;

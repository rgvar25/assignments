/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let count = 0;  
  let arr = ['a', 'e', 'i','o', 'u']
    str1  = str.toLowerCase().split('');
    for(ch of str1){
      console.log(ch);
      if(arr.includes(ch)){
        count++;
      }
    }

    return count;;
    // Your code here
}


console.log(countVowels('OpenAi'))


module.exports = countVowels;
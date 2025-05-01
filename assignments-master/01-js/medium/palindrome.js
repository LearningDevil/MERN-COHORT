/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase().split('').filter(char => (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')).join('');
  let palstr = '';
  for(let i=str.length-1; i>=0; i--){
    palstr+=str[i];
  }
  
  return str===palstr;
}

module.exports = isPalindrome;

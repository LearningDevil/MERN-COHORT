/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

// function isPalindrome(str) {
//   str = str.toLowerCase().split('').filter(char => (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')).join('');
//   let palstr = '';
//   for(let i=str.length-1; i>=0; i--){
//     palstr+=str[i];
//   }
  
//   return str===palstr;
// }

function isPalindrome(str) {
    st1 = str.toLowerCase().replaceAll(/[^a-z0-9]/g, "").trim()
    st2 = str.toLowerCase().replaceAll(/[^a-z0-9]/g, "").trim().split("").reverse().join("")
    return st1 === st2
}


module.exports = isPalindrome;

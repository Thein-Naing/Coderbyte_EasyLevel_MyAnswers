/*Palindrome
Have the function Palindrome(str) take the str parameter being passed and 
 return the string true if the parameter is a palindrome, 
 (the string is the same forward as it is backward) otherwise return the string false. 
 For example: "racecar" is also "racecar" backwards.
 Punctuation and numbers will not be part of the string.
 Difficulty Level : Easy */

function Palindrome(str) { 
  // code goes here  
  //1. split the str into letters of word , join back, convert to lower case and assign to str1..
  str1 = str.split("").join("").toLowerCase();
  //2. split the converted lower case str1, use arr.reverse , join back and assign to str2.
  str2 = str1.split("").reverse().join("");
  //3. if str1 === str2 ? true , otherwise false. so just simply return str1 === str2.
 
  return str1 === str2;
}
   // keep this function call here 
console.log(Palindrome(readline()));





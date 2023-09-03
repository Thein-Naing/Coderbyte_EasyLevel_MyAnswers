/*Vowel Count

Have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the string contains 
(ie. "All cows eat grass and moo" would return 8). Do not count y as a vowel for this challenge. */

function VowelCount(str) { 

  // code goes here  
  //1. use regex str.match method to match vowels.
  //2. then find the length of vowel str and return.
  
   return str = str.match(/[a,e,i,o,u]/g).length 
  
}
   
// keep this function call here 
console.log(VowelCount(readline()));
